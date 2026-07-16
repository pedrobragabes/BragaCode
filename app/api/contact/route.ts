import { NextResponse } from "next/server";
import { contactSchema, type ContactPayload } from "@/lib/validation";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function clientIp(request: Request) {
  return request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_ATTEMPTS;
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] || char);
}

function emailHtml(data: ContactPayload) {
  return `
    <h1>Novo contato pelo site da BragaCode</h1>
    <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(data.company || "Não informada")}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(data.phone || "Não informado")}</p>
    <p><strong>Tipo:</strong> ${escapeHtml(data.projectType)}</p>
    <p><strong>Contexto:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;
}

async function deliver(data: ContactPayload) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "bragacode-site", ...data, website: undefined, startedAt: undefined, turnstileToken: undefined }),
    });
    if (!response.ok) throw new Error("webhook_failed");
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) throw new Error("provider_not_configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[BragaCode] ${data.projectType} — ${data.name}`,
      html: emailHtml(data),
    }),
  });
  if (!response.ok) throw new Error("resend_failed");
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return NextResponse.json({ message: "Mensagem muito grande." }, { status: 413 });

  const ip = clientIp(request);
  if (isRateLimited(ip)) return NextResponse.json({ message: "Muitas tentativas. Aguarde alguns minutos ou use o WhatsApp." }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Dados inválidos." }, { status: 400 }); }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Revise os campos obrigatórios e tente novamente." }, { status: 422 });

  const data = parsed.data;
  if (data.website) return NextResponse.json({ message: "Mensagem recebida." });
  if (Date.now() - data.startedAt < 2_500) return NextResponse.json({ message: "Não foi possível validar o envio." }, { status: 400 });
  if (!(await verifyTurnstile(data.turnstileToken, ip))) return NextResponse.json({ message: "Confirme a verificação de segurança." }, { status: 400 });

  try {
    await deliver(data);
    return NextResponse.json({ message: "Mensagem enviada. Pedro responderá assim que possível." });
  } catch (error) {
    const notConfigured = error instanceof Error && error.message === "provider_not_configured";
    return NextResponse.json(
      { message: notConfigured ? "O envio por formulário ainda não está configurado nesta prévia. Use o WhatsApp para falar com Pedro." : "O envio falhou agora. Tente novamente ou use o WhatsApp." },
      { status: notConfigured ? 503 : 502 },
    );
  }
}

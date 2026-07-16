"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { trackContactSubmission } from "@/components/analytics/AnalyticsEvents";
import { whatsappUrl } from "@/lib/site";

type FormState = { type: "idle" | "sending" | "success" | "error"; message: string };

const projectTypes = [
  "Site ou landing page",
  "E-commerce",
  "Sistema web",
  "API ou integração",
  "Automação",
  "Infraestrutura ou manutenção",
  "Ainda não sei",
] as const;

export function ContactForm({ source = "a página de contato" }: { source?: string }) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [state, setState] = useState<FormState>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState({ type: "sending", message: "Enviando sua mensagem…" });
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: data.consent === "on",
          startedAt: startedAt.current,
          turnstileToken: data["cf-turnstile-response"],
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Não foi possível enviar agora.");
      trackContactSubmission(source, String(data.projectType || "não informado"));
      setState({ type: "success", message: result.message || "Mensagem enviada. Pedro responderá em breve." });
      formRef.current?.reset();
      startedAt.current = 0;
    } catch (error) {
      setState({
        type: "error",
        message: error instanceof Error ? error.message : "Não foi possível enviar agora. Tente pelo WhatsApp.",
      });
    }
  }

  return (
    <form
      className="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={() => { if (!startedAt.current) startedAt.current = Date.now(); }}
      onPointerDown={() => { if (!startedAt.current) startedAt.current = Date.now(); }}
      noValidate
      data-analytics-scope="contact"
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Seu nome *</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="company">Empresa</label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="projectType">O que você precisa? *</label>
        <select id="projectType" name="projectType" required defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Conte o que acontece hoje *</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={6}
          placeholder="Ex.: atualizamos preço em duas planilhas e depois cadastramos tudo de novo na loja…"
        />
        <p className="field-hint">Não precisa escrever um escopo técnico. Descreva o processo, o volume e onde está o retrabalho.</p>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="checkbox-field">
        <input type="checkbox" name="consent" required />
        <span>Concordo que a BragaCode use estes dados para responder ao meu contato. *</span>
      </label>
      {turnstileSiteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="auto" />
        </>
      )}
      <div className="form-actions">
        <button className="button" type="submit" disabled={state.type === "sending"}>
          {state.type === "sending" ? "Enviando…" : "Enviar contexto"} <span aria-hidden="true">↗</span>
        </button>
        <span>ou</span>
        <a className="text-link" href={whatsappUrl(source)} target="_blank" rel="noreferrer">chame no WhatsApp ↗</a>
      </div>
      <p className={`form-status ${state.type}`} role="status" aria-live="polite">{state.message}</p>
    </form>
  );
}

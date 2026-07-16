import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";

async function render(path = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { ...init, headers: { accept: "text/html", ...(init.headers || {}) } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza a Home comercial da BragaCode", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /BragaCode/);
  assert.match(html, /Menos trabalho manual/);
  assert.match(html, /4\.000\+/);
  assert.match(html, /AquaFlora AgroShop/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|react-loading-skeleton/);
});

test("publica sitemap e robots com os projetos", async () => {
  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /projetos\/aquaflora-agroshop/);
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /sitemap\.xml/);
});

test("publica manifest e ícones da marca", async () => {
  const manifest = await render("/manifest.webmanifest");
  assert.equal(manifest.status, 200);
  const data = await manifest.json();
  assert.equal(data.short_name, "BragaCode");
  assert.match(data.description, /processos manuais/);
  assert.ok(data.icons.some((icon) => icon.src === "/icon"));

  const icon = await render("/icon");
  assert.equal(icon.status, 200);
  assert.match(icon.headers.get("content-type") ?? "", /^image\/png\b/i);

  const appleIcon = await render("/apple-icon");
  assert.equal(appleIcon.status, 200);
  assert.match(appleIcon.headers.get("content-type") ?? "", /^image\/png\b/i);
});

test("rejeita contato inválido no servidor", async () => {
  const response = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "", email: "invalido" }),
  });
  assert.equal(response.status, 422);
});

test("assina o webhook e repete o mesmo lead sem alterar a chave idempotente", async () => {
  const originalFetch = globalThis.fetch;
  const originalUrl = process.env.CONTACT_WEBHOOK_URL;
  const originalSecret = process.env.CONTACT_WEBHOOK_SECRET;
  const calls = [];
  process.env.CONTACT_WEBHOOK_URL = "https://crm.example.test/leads";
  process.env.CONTACT_WEBHOOK_SECRET = "test-secret";
  globalThis.fetch = async (input, init = {}) => {
    calls.push({ input: String(input), init });
    return new Response(null, { status: calls.length === 1 ? 503 : 200 });
  };

  try {
    const response = await render("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "cf-connecting-ip": "203.0.113.15" },
      body: JSON.stringify({
        submissionId: "6cbaae3a-a953-4ad0-97f5-4f275c51ce04",
        name: "Contato de teste",
        company: "Empresa Exemplo",
        email: "contato@example.com",
        phone: "+55 11 99999-0000",
        projectType: "API ou integração",
        message: "Precisamos eliminar a digitação duplicada entre o ERP e a loja.",
        consent: true,
        website: "",
        startedAt: Date.now() - 3_000,
      }),
    });

    assert.equal(response.status, 200);
    assert.equal(calls.length, 2);
    assert.equal(calls[0].input, "https://crm.example.test/leads");
    assert.equal(calls[0].init.body, calls[1].init.body);

    const headers = new Headers(calls[0].init.headers);
    const secondHeaders = new Headers(calls[1].init.headers);
    assert.equal(headers.get("Idempotency-Key"), "contact/6cbaae3a-a953-4ad0-97f5-4f275c51ce04");
    assert.equal(headers.get("Idempotency-Key"), secondHeaders.get("Idempotency-Key"));
    assert.equal(headers.get("X-BragaCode-Signature"), secondHeaders.get("X-BragaCode-Signature"));

    const body = JSON.parse(String(calls[0].init.body));
    assert.equal(body.id, "6cbaae3a-a953-4ad0-97f5-4f275c51ce04");
    assert.equal(body.website, undefined);
    assert.equal(body.startedAt, undefined);
    assert.equal(body.turnstileToken, undefined);

    const timestamp = headers.get("X-BragaCode-Timestamp");
    const expected = createHmac("sha256", "test-secret").update(`${timestamp}.${calls[0].init.body}`).digest("hex");
    assert.equal(headers.get("X-BragaCode-Signature"), `sha256=${expected}`);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalUrl === undefined) delete process.env.CONTACT_WEBHOOK_URL;
    else process.env.CONTACT_WEBHOOK_URL = originalUrl;
    if (originalSecret === undefined) delete process.env.CONTACT_WEBHOOK_SECRET;
    else process.env.CONTACT_WEBHOOK_SECRET = originalSecret;
  }
});

test("renderiza as rotas principais e o 404", async () => {
  for (const path of ["/servicos", "/projetos", "/sobre", "/contato", "/projetos/aquaflora-agroshop"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), /BragaCode/, path);
  }
  const notFound = await render("/rota-inexistente");
  assert.equal(notFound.status, 404);
  assert.match(await notFound.text(), /Essa página não entrou/);
});

test("expõe a origem do case e preserva o status de protótipo", async () => {
  const professionalCase = await render("/projetos/aquaflora-agroshop");
  const professionalHtml = await professionalCase.text();
  assert.match(professionalHtml, /Transparência do case/);
  assert.match(professionalHtml, /Trabalho profissional/);
  assert.match(professionalHtml, /Experiência profissional e currículo de Pedro Braga/);
  assert.match(professionalHtml, /Representação reconstruída/);
  assert.doesNotMatch(professionalHtml, /Screenshot autorizado/);

  const prototype = await render("/projetos/rastreia-gastos");
  const prototypeHtml = await prototype.text();
  assert.match(prototypeHtml, /Protótipo/);
  assert.match(prototypeHtml, /Não é apresentado como produto finalizado/);
});

test("publica páginas individuais de serviço com SEO e cases relacionados", async () => {
  const response = await render("/servicos/ecommerce");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /E-commerce que acompanha a operação/);
  assert.match(html, /AquaFlora AgroShop/);
  assert.match(html, /FAQPage/);
  assert.match(html, /Desenvolvimento e integração de e-commerce/);

  const sitemap = await render("/sitemap.xml");
  assert.match(await sitemap.text(), /servicos\/apis-e-integracoes/);
});

test("mantém o formulário identificável sem carregar analytics por padrão", async () => {
  const response = await render("/contato");
  const html = await response.text();
  assert.match(html, /data-analytics-scope="contact"/);
  assert.doesNotMatch(html, /plausible\.io|googletagmanager\.com/);
});

test("publica artigos MDX com código acessível, metadata e sitemap", async () => {
  const index = await render("/artigos");
  assert.equal(index.status, 200);
  assert.match(await index.text(), /Como sincronizar estoque e preços/);

  const article = await render("/artigos/sincronizacao-estoque-precos");
  assert.equal(article.status, 200);
  const html = await article.text();
  assert.match(html, /Article/);
  assert.match(html, /Idempotência evita duplicação/);
  assert.match(html, /data-rehype-pretty-code-figure/);
  assert.match(html, /APIs e integrações/);

  const sitemap = await render("/sitemap.xml");
  assert.match(await sitemap.text(), /artigos\/automacao-llm-escalonamento-humano/);
});

test("publica rotas em inglês com hreflang, formulário localizado e case prioritário", async () => {
  for (const path of ["/en", "/en/services", "/en/projects", "/en/about", "/en/contact", "/en/projects/aquaflora-agroshop"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /lang="en"/, path);
    assert.match(html, /hrefLang="pt-BR"/, path);
    assert.match(html, /hrefLang="en"/, path);
  }

  const contact = await render("/en/contact");
  assert.match(await contact.text(), /Which process needs to work better/);
  const casePage = await render("/en/projects/aquaflora-agroshop");
  assert.match(await casePage.text(), /What needed to change/);

  const sitemap = await render("/sitemap.xml");
  const xml = await sitemap.text();
  assert.match(xml, /en\/projects\/aquaflora-agroshop/);
  assert.match(xml, /hreflang="en"/i);
});

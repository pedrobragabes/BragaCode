"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { trackContactSubmission } from "@/components/analytics/AnalyticsEvents";
import { whatsappUrl, whatsappUrlEnglish } from "@/lib/site";

type FormState = { type: "idle" | "sending" | "success" | "error"; message: string };

const projectTypes = [
  { value: "Site ou landing page", pt: "Site ou landing page", en: "Website or landing page" },
  { value: "E-commerce", pt: "E-commerce", en: "E-commerce" },
  { value: "Sistema web", pt: "Sistema web", en: "Web application" },
  { value: "API ou integração", pt: "API ou integração", en: "API or integration" },
  { value: "Automação", pt: "Automação", en: "Automation" },
  { value: "Infraestrutura ou manutenção", pt: "Infraestrutura ou manutenção", en: "Infrastructure or maintenance" },
  { value: "Ainda não sei", pt: "Ainda não sei", en: "I am not sure yet" },
] as const;

const formCopy = {
  pt: {
    sending: "Enviando sua mensagem…", success: "Mensagem enviada. Pedro responderá em breve.", error: "Não foi possível enviar agora. Tente pelo WhatsApp.",
    name: "Seu nome *", company: "Empresa", email: "E-mail *", phone: "Telefone", need: "O que você precisa? *", select: "Selecione uma opção",
    message: "Conte o que acontece hoje *", placeholder: "Ex.: atualizamos preço em duas planilhas e depois cadastramos tudo de novo na loja…",
    hint: "Não precisa escrever um escopo técnico. Descreva o processo, o volume e onde está o retrabalho.", honeypot: "Não preencha este campo",
    consent: "Concordo que a BragaCode use estes dados para responder ao meu contato. *", submit: "Enviar contexto", or: "ou", whatsapp: "chame no WhatsApp ↗",
  },
  en: {
    sending: "Sending your message…", success: "Message sent. Pedro will reply shortly.", error: "The form could not be sent right now. Please use WhatsApp.",
    name: "Your name *", company: "Company", email: "Email *", phone: "Phone", need: "What do you need? *", select: "Select an option",
    message: "Describe what happens today *", placeholder: "Example: we update prices in two spreadsheets and then enter the same data again in the store…",
    hint: "You do not need a technical scope. Describe the process, volume and where rework happens.", honeypot: "Do not fill in this field",
    consent: "I agree that BragaCode may use this information to reply to my inquiry. *", submit: "Send context", or: "or", whatsapp: "contact me on WhatsApp ↗",
  },
} as const;

export function ContactForm({ source = "a página de contato", locale = "pt" }: { source?: string; locale?: "pt" | "en" }) {
  const copy = formCopy[locale];
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const submissionId = useRef("");
  const [state, setState] = useState<FormState>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState({ type: "sending", message: copy.sending });
    const data = Object.fromEntries(new FormData(form).entries());
    if (!submissionId.current) submissionId.current = crypto.randomUUID();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submissionId: submissionId.current,
          consent: data.consent === "on",
          startedAt: startedAt.current,
          turnstileToken: data["cf-turnstile-response"],
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Não foi possível enviar agora.");
      trackContactSubmission(source, String(data.projectType || "não informado"));
      setState({ type: "success", message: locale === "en" ? copy.success : result.message || copy.success });
      formRef.current?.reset();
      startedAt.current = 0;
      submissionId.current = "";
    } catch (error) {
      setState({
        type: "error",
        message: locale === "en" ? copy.error : error instanceof Error ? error.message : copy.error,
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
          <label htmlFor="name">{copy.name}</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="company">{copy.company}</label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">{copy.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="phone">{copy.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="projectType">{copy.need}</label>
        <select id="projectType" name="projectType" required defaultValue="">
          <option value="" disabled>{copy.select}</option>
          {projectTypes.map((type) => <option key={type.value} value={type.value}>{type[locale]}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">{copy.message}</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={6}
          placeholder={copy.placeholder}
        />
        <p className="field-hint">{copy.hint}</p>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">{copy.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="checkbox-field">
        <input type="checkbox" name="consent" required />
        <span>{copy.consent}</span>
      </label>
      {turnstileSiteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="auto" />
        </>
      )}
      <div className="form-actions">
        <button className="button" type="submit" disabled={state.type === "sending"}>
          {state.type === "sending" ? copy.sending : copy.submit} <span aria-hidden="true">↗</span>
        </button>
        <span>{copy.or}</span>
        <a className="text-link" href={locale === "en" ? whatsappUrlEnglish(source) : whatsappUrl(source)} target="_blank" rel="noreferrer">{copy.whatsapp}</a>
      </div>
      <p className={`form-status ${state.type}`} role="status" aria-live="polite">{state.message}</p>
    </form>
  );
}

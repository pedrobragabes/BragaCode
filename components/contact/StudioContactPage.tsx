import { ContactForm } from "./ContactForm";
import { company } from "@/content/company";
import { whatsappUrl, whatsappUrlEnglish } from "@/lib/site";

export function StudioContactPage({ english = false }: { english?: boolean }) {
  return (
    <section className="section contact-page-section" lang={english ? "en" : "pt-BR"}>
      <div className="container contact-page-grid">
        <aside className="contact-sidebar studio-contact-methods">
          <h1>{english ? "Contact" : "Contato"}</h1>
          <p>{english ? "Tell Pedro what you need to build or improve." : "Conte ao Pedro o que você precisa desenvolver ou melhorar."}</p>
          <div><p className="micro-label">{english ? "Email" : "E-mail"}</p><a href={`mailto:${company.email}`}>{company.email}</a></div>
          <div><p className="micro-label">WhatsApp</p><a href={english ? whatsappUrlEnglish("the Contact page") : whatsappUrl("a página de Contato")} target="_blank" rel="noreferrer">{company.phoneDisplay} ↗</a></div>
          <div><p className="micro-label">{english ? "Location" : "Localização"}</p><p>{english ? "São Paulo, Brazil" : company.location}<br />{english ? "Remote collaboration" : company.serviceArea}</p></div>
        </aside>
        <div>
          <div className="form-heading"><h2>{english ? "Send a message" : "Enviar mensagem"}</h2></div>
          <ContactForm source={english ? "the English Contact page" : "a página de Contato"} locale={english ? "en" : "pt"} />
        </div>
      </div>
    </section>
  );
}

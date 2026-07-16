import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Conte o processo, o volume e onde está o retrabalho. Fale com Pedro Braga sobre sites, e-commerce, sistemas, integrações ou automações.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Não precisa chegar com <em>o escopo pronto.</em></>}
        description="Conte o que acontece hoje, quem usa o processo e onde o trabalho se repete. A primeira conversa serve para encontrar o recorte técnico."
        aside={<p className="page-index">RESPOSTA DIRETA / PEDRO BRAGA</p>}
      />
      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <aside className="contact-sidebar">
            <div><p className="micro-label">E-mail</p><a href={`mailto:${company.email}`}>{company.email}</a></div>
            <div><p className="micro-label">WhatsApp</p><a href={whatsappUrl("a página de Contato")} target="_blank" rel="noreferrer">{company.phoneDisplay} ↗</a></div>
            <div><p className="micro-label">Localização</p><p>{company.location}<br />{company.serviceArea}</p></div>
            <div className="response-note"><span>Prazo de retorno</span><strong>Normalmente em até 1 dia útil.</strong><p>Demandas urgentes devem ser sinalizadas no início da mensagem.</p></div>
          </aside>
          <div>
            <div className="form-heading"><span>01</span><h2>Qual processo precisa funcionar melhor?</h2></div>
            <ContactForm source="a página de Contato" />
          </div>
        </div>
      </section>
    </>
  );
}

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
      <PageHero title="Contato" description="Escreva para Pedro Braga e conte o que você precisa desenvolver ou melhorar." />
      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <aside className="contact-sidebar">
            <div><p className="micro-label">E-mail</p><a href={`mailto:${company.email}`}>{company.email}</a></div>
            <div><p className="micro-label">WhatsApp</p><a href={whatsappUrl("a página de Contato")} target="_blank" rel="noreferrer">{company.phoneDisplay} ↗</a></div>
            <div><p className="micro-label">Localização</p><p>{company.location}<br />{company.serviceArea}</p></div>
          </aside>
          <div>
            <div className="form-heading"><h2>Enviar mensagem</h2></div>
            <ContactForm source="a página de Contato" />
          </div>
        </div>
      </section>
    </>
  );
}

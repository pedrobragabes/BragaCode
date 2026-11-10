import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { StudioContact } from "@/components/ui/StudioContact";
import { StudioServices } from "@/components/ui/StudioServices";
import { coreServices } from "@/content/services";
import { serviceTiles } from "@/content/studio";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Serviços",
  description: "Sites, e-commerce, sistemas web, APIs, automações, infraestrutura e manutenção ligados ao processo real da empresa.",
  path: "/servicos",
});

export default function ServicesPage() {
  const jsonLd = coreServices.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/servicos/${service.slug}`),
    provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl() },
    areaServed: { "@type": "Country", name: "Brasil" },
  }));

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero title="Serviços" description="Desenvolvimento e integração de software para a operação da sua empresa." />
      <section className="studio-section studio-service-index">
        <div className="container">
          <h2 className="sr-only">Serviços disponíveis</h2>
          <StudioServices items={serviceTiles(false)} label="Detalhes do serviço" />
        </div>
      </section>
      <section className="studio-section studio-soft">
        <div className="container">
          <header className="studio-section-heading"><h2>Formas de contratação</h2></header>
          <div className="studio-options">
            <article><h3>Diagnóstico técnico</h3><p>Levantamento de sistemas, dados e riscos antes de definir a implementação.</p></article>
            <article><h3>Projeto fechado</h3><p>Escopo com entregáveis, premissas e critérios de conclusão.</p></article>
            <article><h3>Evolução contínua</h3><p>Manutenção e melhorias em sistemas que já estão em operação.</p></article>
          </div>
        </div>
      </section>
      <StudioContact />
    </>
  );
}

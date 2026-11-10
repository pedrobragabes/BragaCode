import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { listedProjects as projects } from "@/content/projects";
import { coreServices as services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Serviços",
  description: "Sites, e-commerce, sistemas web, APIs, automações, infraestrutura e manutenção ligados ao processo real da empresa.",
  path: "/servicos",
});

export default function ServicesPage() {
  const jsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${absoluteUrl("/servicos")}#${service.slug}`,
    provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl() },
    areaServed: { "@type": "Country", name: "Brasil" },
  }));

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero title="Serviços" description="Sistemas web, lojas WooCommerce, integrações com ERP e automação de tarefas." />

      <section className="section service-detail-section">
        <div className="container service-detail-list">
          {services.map((service) => {
            const related = projects.filter((project) => service.projectSlugs.includes(project.slug));
            return (
              <article className="service-detail" id={service.slug} key={service.slug}>
                <div className="service-detail-number">{service.number}</div>
                <div className="service-detail-main">

                  <h2><Link href={`/servicos/${service.slug}`}>{service.title}</Link></h2>
                  <p className="service-summary">{service.summary}</p>
                  <div className="service-problem">
                    <span>Quando faz sentido</span>
                    <p>{service.problem}</p>
                  </div>
                  <Link className="text-link service-learn-more" href={`/servicos/${service.slug}`}>Conhecer este serviço ↗</Link>
                </div>
                <div className="service-detail-aside">
                  <div>
                    <p className="micro-label">Entregáveis comuns</p>
                    <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <p className="micro-label">Tecnologias</p>
                    <div className="tag-list">{service.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  {related.length > 0 && (
                    <div>
                      <p className="micro-label">Projetos relacionados</p>
                      {related.map((project) => <Link className="text-link" key={project.slug} href={`/projetos/${project.slug}`}>{project.name} ↗</Link>)}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <SectionHeading
            eyebrow="Contratação"
            title="Formas de contratação"
            description="A primeira entrega pode ser uma automação isolada, uma integração, um MVP ou a evolução de um sistema que já existe."
          />
          <div className="scope-grid">
            <article><span>01</span><h3>Diagnóstico técnico</h3><p>Levantamento curto para entender sistemas, dados, riscos e caminhos antes de fechar uma implementação maior.</p></article>
            <article><span>02</span><h3>Projeto fechado</h3><p>Escopo com entregáveis, premissas e marco de conclusão para uma necessidade bem delimitada.</p></article>
            <article><span>03</span><h3>Evolução contínua</h3><p>Ciclos recorrentes para manutenção, integrações e melhoria de uma operação que já está em produção.</p></article>
          </div>
        </div>
      </section>

      <section className="inline-cta-section">
        <div className="container inline-cta">
          <h2>Solicitar orçamento</h2>
          <a className="button" href={whatsappUrl("o final da página de Serviços")} target="_blank" rel="noreferrer">Falar com Pedro <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

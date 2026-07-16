import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
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
      <PageHero
        eyebrow="Serviços"
        title={<>Software para o que acontece <em>entre a venda e a operação.</em></>}
        description="A BragaCode projeta a interface que o cliente vê, a lógica que a equipe usa e as integrações que mantêm os dados em movimento."
        aside={<a className="button" href={whatsappUrl("a página de Serviços")} target="_blank" rel="noreferrer">Discutir um gargalo <span aria-hidden="true">↗</span></a>}
      />

      <section className="section service-detail-section">
        <div className="container service-detail-list">
          {services.map((service) => {
            const related = projects.filter((project) => service.projectSlugs.includes(project.slug));
            return (
              <article className="service-detail" id={service.slug} key={service.slug}>
                <div className="service-detail-number">{service.number}</div>
                <div className="service-detail-main">
                  <p className="eyebrow"><span aria-hidden="true" />{service.shortTitle}</p>
                  <h2>{service.title}</h2>
                  <p className="service-summary">{service.summary}</p>
                  <div className="service-problem">
                    <span>Quando faz sentido</span>
                    <p>{service.problem}</p>
                  </div>
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
            eyebrow="Forma de contratação"
            title={<>Nem todo problema precisa virar <em>um projeto gigante.</em></>}
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
          <div><p>Tem um processo específico?</p><h2>Descreva o gargalo, não a solução pronta.</h2></div>
          <a className="button" href={whatsappUrl("o final da página de Serviços")} target="_blank" rel="noreferrer">Falar com Pedro <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { projects } from "@/content/projects";
import { getService, services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((project) => service.projectSlugs.includes(project.slug));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      serviceType: service.shortTitle,
      url: absoluteUrl(`/servicos/${service.slug}`),
      provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl() },
      areaServed: { "@type": "Country", name: "Brasil" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Entregáveis de ${service.shortTitle}`,
        itemListElement: service.deliverables.map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Serviços", item: absoluteUrl("/servicos") },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: absoluteUrl(`/servicos/${service.slug}`) },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={`Serviço ${service.number}`}
        title={service.title}
        description={service.summary}
        aside={(
          <div>
            <p>{service.problem}</p>
            <a className="button" href={whatsappUrl(`a página de ${service.shortTitle}`)} target="_blank" rel="noreferrer">
              Discutir este cenário <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      />

      <section className="section service-scope-section">
        <div className="container narrative-grid">
          <div className="narrative-index"><span>01</span><p>Escopo</p></div>
          <div className="narrative-content">
            <h2>O serviço começa pela rotina, <em>não pela tecnologia.</em></h2>
            <div className="service-scope-list">
              {service.scope.map((item, index) => (
                <article key={item}><span>0{index + 1}</span><p>{item}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section service-deliverables-section">
        <div className="container stack-grid">
          <div><span>02</span><h2>O que pode entrar na entrega</h2></div>
          <div>
            <div className="feature-grid">
              {service.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
            </div>
            <div className="large-tag-list">{service.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section service-process-section">
        <div className="container">
          <div className="small-section-heading"><p>03 / Processo</p><h2>Decisões verificáveis em três momentos</h2></div>
          <div className="scope-grid">
            {service.process.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section related-projects-section">
          <div className="container">
            <div className="small-section-heading"><p>04 / Evidência</p><h2>Projetos relacionados a esta entrega</h2></div>
            <div className="projects-grid">
              {relatedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section service-faq-section">
        <div className="container faq-grid">
          <div><p className="eyebrow"><span aria-hidden="true" />Perguntas frequentes</p><h2>Antes de definir <em>o formato do projeto.</em></h2></div>
          <div className="faq-list">
            {service.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="inline-cta-section">
        <div className="container inline-cta">
          <div><p>Próximo passo</p><h2>Conte o processo que hoje exige mais conferência.</h2></div>
          <a className="button" href={whatsappUrl(`o serviço de ${service.shortTitle}`)} target="_blank" rel="noreferrer">
            Conversar com Pedro <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <nav className="service-page-nav" aria-label="Outros serviços">
        <div className="container">
          {services.filter((item) => item.slug !== service.slug).map((item) => (
            <Link href={`/servicos/${item.slug}`} key={item.slug}>{item.shortTitle} <span aria-hidden="true">↗</span></Link>
          ))}
        </div>
      </nav>
    </>
  );
}

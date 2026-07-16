import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectGalleryMedia } from "@/components/project/ProjectGalleryMedia";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProject, projects } from "@/content/projects";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({ title: project.seo.title, description: project.seo.description, path: `/projetos/${project.slug}` });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const relatedServices = services.filter((service) => project.services.includes(service.slug));
  const relatedProjects = projects.filter((item) => item.slug !== project.slug && item.categories.some((category) => project.categories.includes(category))).slice(0, 2);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      description: project.summary,
      url: absoluteUrl(`/projetos/${project.slug}`),
      author: { "@type": "Person", name: "Pedro Braga" },
      about: project.categories,
      keywords: project.technologies.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Projetos", item: absoluteUrl("/projetos") },
        { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl(`/projetos/${project.slug}`) },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="case-hero">
          <div className="container">
            <Link className="back-link" href="/projetos">← Todos os projetos</Link>
            <div className="case-hero-grid">
              <div>
                <p className="eyebrow"><span aria-hidden="true" />{project.eyebrow}</p>
                <h1>{project.name}</h1>
                <p className="case-summary">{project.summary}</p>
                <div className="case-meta">
                  <div><span>Status</span><strong>{project.status}</strong></div>
                  <div><span>Período</span><strong>{project.period}</strong></div>
                  <div><span>Frentes</span><strong>{project.categories.join(" · ")}</strong></div>
                </div>
              </div>
              <ProjectGalleryMedia item={project.gallery[0]} priority sizes="(max-width: 820px) 100vw, 42vw" />
            </div>
          </div>
        </header>

        <section className="case-metrics">
          <div className="container case-metrics-grid">
            {project.metrics.map((metric) => (
              <div key={metric.value + metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></div>
            ))}
          </div>
        </section>

        <section className="section case-narrative">
          <div className="container narrative-grid">
            <div className="narrative-index"><span>01</span><p>Problema e contexto</p></div>
            <div className="narrative-content">
              <h2>O que precisava <em>mudar na rotina.</em></h2>
              {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="context-box"><span>Contexto</span>{project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
          </div>
        </section>

        <section className="section case-narrative alt-section">
          <div className="container narrative-grid">
            <div className="narrative-index"><span>02</span><p>Solução</p></div>
            <div className="narrative-content">
              <h2>Uma entrega dividida por <em>responsabilidade operacional.</em></h2>
              {project.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="feature-grid">
                {project.features.map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section case-gallery-section">
          <div className="container">
            <div className="gallery-heading"><span>03</span><h2>Galeria do projeto</h2><p>Cada imagem informa se é um screenshot autorizado ou uma representação reconstruída para preservar dados internos.</p></div>
            <div className="case-gallery">
              {project.gallery.map((item) => (
                <figure key={item.title}>
                  <ProjectGalleryMedia item={item} />
                  <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section case-results-section">
          <div className="container results-grid">
            <div><p className="eyebrow"><span aria-hidden="true" />Resultados</p><h2>O que mudou — e o que ainda <em>está evoluindo.</em></h2></div>
            <div>
              <ol className="results-list">
                {project.results.map((result, index) => <li key={result}><span>0{index + 1}</span><p>{result}</p></li>)}
              </ol>
              {project.confidentialityNote && <p className="confidentiality-note"><strong>Nota de confidencialidade.</strong> {project.confidentialityNote}</p>}
              <aside className="case-evidence" aria-labelledby="case-evidence-title">
                <div>
                  <span id="case-evidence-title">Transparência do case</span>
                  <strong>{project.evidence.nature}</strong>
                </div>
                <dl>
                  <div><dt>Base da descrição</dt><dd>{project.evidence.basis}</dd></div>
                  <div><dt>Política de divulgação</dt><dd>{project.evidence.disclosure}</dd></div>
                  <div><dt>Última revisão</dt><dd>{project.evidence.lastReviewed}</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="section case-stack-section">
          <div className="container stack-grid">
            <div><span>04</span><h2>Tecnologias e serviços</h2></div>
            <div>
              <div className="large-tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="related-services">
                {relatedServices.map((service) => <Link key={service.slug} href={`/servicos/${service.slug}`}>{service.shortTitle} <span aria-hidden="true">↗</span></Link>)}
              </div>
            </div>
          </div>
        </section>

        <section className="case-cta">
          <div className="container">
            <p>Projeto semelhante</p>
            <h2>Tem um processo que hoje depende de <em>conferência manual?</em></h2>
            <a className="button" href={whatsappUrl(`o case ${project.name}`)} target="_blank" rel="noreferrer">Conversar sobre o seu contexto <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </article>

      {relatedProjects.length > 0 && (
        <section className="section related-projects-section">
          <div className="container">
            <div className="small-section-heading"><p>Continue explorando</p><h2>Projetos relacionados</h2></div>
            <div className="projects-grid">{relatedProjects.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { articles, formatArticleDate, getArticle } from "@/content/articles";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    ...createMetadata({ title: article.title, description: article.description, path: `/artigos/${article.slug}` }),
    authors: [{ name: "Pedro Braga", url: absoluteUrl("/sobre") }],
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedServices = services.filter((service) => article.serviceSlugs.includes(service.slug));
  const relatedProjects = projects.filter((project) => article.projectSlugs.includes(project.slug));
  const ArticleContent = article.Component;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      mainEntityOfPage: absoluteUrl(`/artigos/${article.slug}`),
      author: { "@type": "Person", name: "Pedro Braga", url: absoluteUrl("/sobre") },
      publisher: { "@type": "Organization", name: "BragaCode", url: absoluteUrl() },
      image: absoluteUrl("/og.png"),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Artigos", item: absoluteUrl("/artigos") },
        { "@type": "ListItem", position: 3, name: article.title, item: absoluteUrl(`/artigos/${article.slug}`) },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="article-hero">
          <div className="container article-hero-inner">
            <Link className="back-link" href="/artigos">← Todos os artigos</Link>
            <div className="article-hero-meta">
              <span>{article.category}</span>
              <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
              <span>{article.readingTime} de leitura</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </header>

        <div className="container article-layout">
          <aside className="article-context">
            <p>Relacionado a</p>
            {relatedServices.map((service) => <Link href={`/servicos/${service.slug}`} key={service.slug}>{service.shortTitle} ↗</Link>)}
            {relatedProjects.map((project) => <Link href={`/projetos/${project.slug}`} key={project.slug}>{project.name} ↗</Link>)}
          </aside>
          <div className="article-body"><ArticleContent /></div>
        </div>
      </article>

      <section className="inline-cta-section">
        <div className="container inline-cta">
          <div><p>Aplicar no seu contexto</p><h2>Tem uma rotina parecida na sua operação?</h2></div>
          <a className="button" href={whatsappUrl(`o artigo “${article.title}”`)} target="_blank" rel="noreferrer">Conversar com Pedro <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

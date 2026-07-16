import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { articles, formatArticleDate } from "@/content/articles";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Artigos técnicos",
  description: "Decisões práticas sobre e-commerce, integrações, automações e operação de software explicadas a partir de problemas reais.",
  path: "/artigos",
});

export default function ArticlesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artigos técnicos da BragaCode",
    description: "Decisões práticas sobre e-commerce, integrações, automações e operação de software.",
    url: absoluteUrl("/artigos"),
    hasPart: articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: absoluteUrl(`/artigos/${article.slug}`),
      datePublished: article.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Artigos técnicos"
        title={<>Decisões de software explicadas <em>pela rotina que afetam.</em></>}
        description="Conteúdo direto sobre integrações, automações e e-commerce: onde o fluxo falha, quais limites precisam existir e como deixar a operação recuperável."
        aside={<p className="page-index">{String(articles.length).padStart(2, "0")} ARTIGOS PUBLICADOS</p>}
      />

      <section className="section articles-index-section">
        <div className="container articles-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.slug}>
              <div className="article-card-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{article.category}</span>
                <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
              </div>
              <h2><Link href={`/artigos/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.description}</p>
              <div className="article-card-footer">
                <span>{article.readingTime} de leitura</span>
                <Link className="text-link" href={`/artigos/${article.slug}`}>Ler artigo ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import type { ComponentType } from "react";
import { z } from "zod";
import LlmEscalationArticle, { frontmatter as llmEscalationFrontmatter } from "./articles/automacao-llm-escalonamento-humano.mdx";
import StockSyncArticle, { frontmatter as stockSyncFrontmatter } from "./articles/sincronizacao-estoque-precos.mdx";

const articleFrontmatterSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(20),
  description: z.string().min(80).max(180),
  publishedAt: z.string().date(),
  updatedAt: z.string().date().optional(),
  status: z.enum(["rascunho", "revisao", "publicado"]),
  readingTime: z.string(),
  category: z.string(),
  serviceSlugs: z.array(z.string()),
  projectSlugs: z.array(z.string()),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

export type Article = ArticleFrontmatter & {
  Component: ComponentType;
};

function createArticle(frontmatter: unknown, Component: ComponentType): Article {
  return { ...articleFrontmatterSchema.parse(frontmatter), Component };
}

const allArticles = [
  createArticle(stockSyncFrontmatter, StockSyncArticle),
  createArticle(llmEscalationFrontmatter, LlmEscalationArticle),
];

export const articles = allArticles
  .filter((article) => article.status === "publicado")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

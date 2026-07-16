import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicos", "/projetos", "/artigos", "/sobre", "/contato", "/politica-de-privacidade", "/termos-de-uso"];
  const languagePairs: Record<string, string> = { "/": "/en", "/servicos": "/en/services", "/projetos": "/en/projects", "/sobre": "/en/about", "/contato": "/en/contact" };
  const alternates = (portuguesePath: string, englishPath: string) => ({ languages: { "pt-BR": absoluteUrl(portuguesePath), en: absoluteUrl(englishPath), "x-default": absoluteUrl(portuguesePath) } });
  const staticRoutes = routes.map((route) => {
    const path = route || "/";
    return { url: absoluteUrl(path), lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route.includes("legal") ? 0.3 : 0.8, alternates: languagePairs[path] ? alternates(path, languagePairs[path]) : undefined };
  });
  const englishRoutes = Object.entries(languagePairs).map(([portuguesePath, englishPath]) => ({ url: absoluteUrl(englishPath), lastModified: new Date(), changeFrequency: englishPath === "/en" ? "weekly" as const : "monthly" as const, priority: englishPath === "/en" ? 0.9 : 0.75, alternates: alternates(portuguesePath, englishPath) }));
  const projectRoutes = projects.map((project) => ({ url: absoluteUrl(`/projetos/${project.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: project.featured ? 0.9 : 0.7, alternates: project.slug === "aquaflora-agroshop" ? alternates("/projetos/aquaflora-agroshop", "/en/projects/aquaflora-agroshop") : undefined }));
  const englishProjectRoutes = [{ url: absoluteUrl("/en/projects/aquaflora-agroshop"), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: alternates("/projetos/aquaflora-agroshop", "/en/projects/aquaflora-agroshop") }];
  const serviceRoutes = services.map((service) => ({ url: absoluteUrl(`/servicos/${service.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 }));
  const articleRoutes = articles.map((article) => ({ url: absoluteUrl(`/artigos/${article.slug}`), lastModified: new Date(article.updatedAt || article.publishedAt), changeFrequency: "monthly" as const, priority: 0.75 }));
  return [...staticRoutes, ...englishRoutes, ...serviceRoutes, ...projectRoutes, ...englishProjectRoutes, ...articleRoutes];
}

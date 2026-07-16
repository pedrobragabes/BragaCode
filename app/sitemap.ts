import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicos", "/projetos", "/sobre", "/contato", "/politica-de-privacidade", "/termos-de-uso"];
  const staticRoutes = routes.map((route) => ({ url: absoluteUrl(route || "/"), lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route.includes("legal") ? 0.3 : 0.8 }));
  const projectRoutes = projects.map((project) => ({ url: absoluteUrl(`/projetos/${project.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: project.featured ? 0.9 : 0.7 }));
  const serviceRoutes = services.map((service) => ({ url: absoluteUrl(`/servicos/${service.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 }));
  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}

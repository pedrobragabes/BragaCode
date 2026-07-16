import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

const bilingualRoutes: Record<string, string> = {
  "/": "/en",
  "/servicos": "/en/services",
  "/projetos": "/en/projects",
  "/sobre": "/en/about",
  "/contato": "/en/contact",
  "/projetos/aquaflora-agroshop": "/en/projects/aquaflora-agroshop",
};

export function localizedPath(path: string, targetLocale: "pt-BR" | "en") {
  const portuguesePath = bilingualRoutes[path]
    ? path
    : Object.entries(bilingualRoutes).find(([, englishPath]) => englishPath === path)?.[0];
  if (!portuguesePath) return targetLocale === "en" ? "/en" : "/";
  return targetLocale === "en" ? bilingualRoutes[portuguesePath] : portuguesePath;
}

export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const portuguesePath = Object.entries(bilingualRoutes).find(([, englishPath]) => englishPath === path)?.[0] || (bilingualRoutes[path] ? path : undefined);
  const isEnglish = path === "/en" || path.startsWith("/en/");
  const languageAlternates = portuguesePath
    ? {
        "pt-BR": absoluteUrl(portuguesePath),
        en: absoluteUrl(bilingualRoutes[portuguesePath]),
        "x-default": absoluteUrl(portuguesePath),
      }
    : undefined;

  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates },
    openGraph: {
      type: "website",
      locale: isEnglish ? "en_US" : siteConfig.locale,
      alternateLocale: isEnglish ? [siteConfig.locale] : languageAlternates ? ["en_US"] : undefined,
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      images: [{ url: absoluteUrl("/og.png"), width: 1731, height: 909, alt: `${title} — BragaCode` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og.png")],
    },
  };
}

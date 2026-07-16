import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
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

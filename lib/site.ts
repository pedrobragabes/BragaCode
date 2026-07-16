import { company } from "@/content/company";

const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: company.name,
  description: company.positioning,
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, ""),
  locale: "pt_BR",
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function whatsappUrl(context?: string) {
  const message = context
    ? `Olá, Pedro. Vi ${context} no site da BragaCode e quero conversar sobre um projeto.`
    : "Olá, Pedro. Conheci a BragaCode pelo site e quero conversar sobre um projeto.";

  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlEnglish(context?: string) {
  const message = context
    ? `Hello, Pedro. I found ${context} on the BragaCode website and would like to discuss a project.`
    : "Hello, Pedro. I found BragaCode through the website and would like to discuss a project.";

  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

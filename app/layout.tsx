import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BragaCode — software, e-commerce e automações",
    template: "%s | BragaCode",
  },
  description: siteConfig.description,
  applicationName: "BragaCode",
  authors: [{ name: "Pedro Braga", url: "https://pedrobragabes.com" }],
  creator: "Pedro Braga",
  publisher: "BragaCode",
  category: "technology",
  alternates: { canonical: siteConfig.url },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1424" },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem('bragacode-theme');
    const theme = saved === 'light' || saved === 'dark'
      ? saved
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

const languageScript = `
  document.documentElement.lang = location.pathname === '/en' || location.pathname.startsWith('/en/') ? 'en' : 'pt-BR';
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

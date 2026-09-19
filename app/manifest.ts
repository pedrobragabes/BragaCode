import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BragaCode — Software, E-commerce e Automações",
    short_name: "BragaCode",
    description:
      "Sistemas web, e-commerce e integrações para simplificar processos manuais.",
    start_url: "/",
    display: "standalone",
    background_color: "#11213b",
    theme_color: "#11213b",
    lang: "pt-BR",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}

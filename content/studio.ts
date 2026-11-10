import { englishServices } from "./english";
import { services } from "./services";
import type { StudioIconName } from "@/components/ui/StudioIcon";

export const serviceIndex = [
  { pt: "sites-e-landing-pages", en: "websites-and-landing-pages", icon: "site", name: "Websites" },
  { pt: "ecommerce", en: "ecommerce", icon: "commerce", name: "E-commerce" },
  { pt: "sistemas-web", en: "web-applications", icon: "web", name: "Web applications" },
  { pt: "apis-e-integracoes", en: "apis-and-integrations", icon: "integration", name: "APIs and integrations" },
  { pt: "automacoes", en: "automation", icon: "automation", name: "Automation" },
  { pt: "infraestrutura-e-suporte", en: "infrastructure-and-support", icon: "infra", name: "Infrastructure" },
] as const satisfies readonly { pt: (typeof services)[number]["slug"]; en: (typeof englishServices)[number]["slug"]; icon: StudioIconName; name: string }[];

export function serviceTiles(english: boolean) {
  return serviceIndex.map(({ pt, en, icon, name }) => {
    if (english) {
      const service = englishServices.find(({ slug }) => slug === en)!;
      return { key: pt, slug: en, href: `/en/services/${en}`, icon, name, description: service.summary, problem: service.problem };
    }
    const service = services.find(({ slug }) => slug === pt)!;
    return { key: pt, slug: pt, href: `/servicos/${pt}`, icon, name: service.shortTitle, description: service.summary, problem: service.problem };
  });
}

export const workflow = {
  pt: [
    { title: "Descoberta", description: "Mapeamos a rotina, os sistemas existentes e o que precisa mudar." },
    { title: "Planejamento", description: "Definimos escopo, arquitetura e critérios para validar a entrega." },
    { title: "Desenvolvimento", description: "Implementamos em etapas, com testes e revisão ao longo do trabalho." },
    { title: "Entrega e evolução", description: "Publicamos, documentamos e combinamos os próximos passos." },
  ],
  en: [
    { title: "Discovery", description: "We map the workflow, existing systems and what needs to change." },
    { title: "Planning", description: "We define the scope, architecture and criteria for accepting the work." },
    { title: "Development", description: "We build in stages, with testing and review throughout." },
    { title: "Delivery and support", description: "We deploy, document the work and agree on next steps." },
  ],
} as const;

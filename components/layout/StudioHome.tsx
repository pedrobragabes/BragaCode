import Link from "next/link";
import { ProjectShowcase } from "@/components/project/ProjectShowcase";
import { projectPath } from "@/lib/seo";

const projects = [
  { slug: "joysticknights", name: "JoysticKnights", src: "/images/projects/joysticknights-live.webp", width: 1265, height: 712 },
  { slug: "aquaflora-agroshop", name: "AquaFlora AgroShop", src: "/images/projects/aquaflora-live.webp", width: 1265, height: 712 },
  { slug: "promogames", name: "PromoGames", src: "/images/projects/promogames-home.jpg", width: 1440, height: 1000 },
] as const;

const copy = {
  "pt-BR": {
    title: "Projetos",
    intro: "Sistemas web, e-commerce e automação",
    showcase: "Projetos em destaque",
    viewProject: "Ver projeto",
    projectsPath: "/projetos",
    allProjects: "Todos os projetos",
    services: "Serviços",
    servicesPath: "/servicos",
    allServices: "Ver todos os serviços",
    serviceDetails: "Detalhes do serviço",
    captions: {
      joysticknights: ["Portal de jogos e cultura", "Página inicial do portal JoysticKnights"],
      "aquaflora-agroshop": ["WooCommerce e integração com ERP", "Página inicial da loja AquaFlora AgroShop"],
      promogames: ["Migração editorial · Prévia local", "Prévia da página inicial do PromoGames"],
    },
    servicesList: [
      ["E-commerce", "Lojas WooCommerce e integração de catálogo, estoque e preços.", "ecommerce"],
      ["Sistemas web", "Ferramentas internas para consultar produtos e registrar dados.", "sistemas-web"],
      ["APIs e integrações", "Troca de dados entre ERPs, lojas e aplicativos.", "apis-e-integracoes"],
      ["Automação", "Processamento de arquivos e atualizações agendadas.", "automacoes"],
    ],
  },
  en: {
    title: "Projects",
    intro: "Web applications, e-commerce and automation",
    showcase: "Featured projects",
    viewProject: "View project",
    projectsPath: "/en/projects",
    allProjects: "All projects",
    services: "Services",
    servicesPath: "/en/services",
    allServices: "View all services",
    serviceDetails: "Service details",
    captions: {
      joysticknights: ["Games and culture publication", "JoysticKnights publication homepage"],
      "aquaflora-agroshop": ["WooCommerce and ERP integration", "AquaFlora AgroShop storefront"],
      promogames: ["Editorial migration · Local preview", "Preview of the PromoGames homepage"],
    },
    servicesList: [
      ["E-commerce", "WooCommerce stores and catalog, inventory and pricing integrations.", "ecommerce"],
      ["Web applications", "Internal tools for product lookup and data entry.", "web-applications"],
      ["APIs and integrations", "Data exchange between ERP systems, stores and apps.", "apis-and-integrations"],
      ["Automation", "File processing and scheduled updates.", "automation"],
    ],
  },
} as const;

export function StudioHome({ locale }: { locale: keyof typeof copy }) {
  const t = copy[locale];
  const showcaseProjects = projects.map(({ slug, name, ...image }) => {
    const [category, alt] = t.captions[slug];
    return { slug, name, category, href: projectPath(slug, locale), image: { ...image, alt } };
  });

  return (
    <div className="studio-home" lang={locale}>
      <section className="showcase">
        <div className="showcase-inner">
          <header className="showcase-heading">
            <div>
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
            </div>
            <Link className="showcase-all" href={t.projectsPath}>{t.allProjects} <span aria-hidden="true">↗</span></Link>
          </header>
          <ProjectShowcase projects={showcaseProjects} label={t.showcase} viewProject={t.viewProject} />
        </div>
      </section>

      <section className="studio-section" id="servicos">
        <div className="container">
          <div className="studio-section-heading">
            <h2>{t.services}</h2>
            <Link className="studio-link" href={t.servicesPath}>{t.allServices} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="studio-services">
            {t.servicesList.map(([title, description, slug]) => (
              <details key={slug} name="studio-services">
                <summary>
                  <h3>{title}</h3>
                  <span className="studio-plus" aria-hidden="true" />
                </summary>
                <div className="studio-service-description">
                  <p>{description}</p>
                  <Link className="studio-link" href={locale === "en" ? `${t.servicesPath}#${slug}` : `${t.servicesPath}/${slug}`}>
                    {t.serviceDetails} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

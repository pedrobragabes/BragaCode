import Link from "next/link";
import { StaticImage } from "@/components/ui/StaticImage";
import { projectPath } from "@/lib/seo";
import styles from "./StudioHome.module.css";

const projects = [
  { slug: "aquaflora-agroshop", name: "AquaFlora AgroShop", src: "/images/projects/aquaflora-catalogo.webp", width: 1440, height: 900 },
  { slug: "joysticknights", name: "JoysticKnights", src: "/images/projects/joysticknights-live.webp", width: 1265, height: 712 },
  { slug: "promogames", name: "PromoGames", src: "/images/projects/promogames-home.jpg", width: 1440, height: 1000 },
] as const;

const copy = {
  "pt-BR": {
    title: ["Sistemas web", "e lojas integradas."],
    intro: "Integração com ERP e automação de catálogo, estoque e preços.",
    contact: "Conversar sobre um projeto",
    contactPath: "/contato",
    explore: "Explorar projetos",
    selected: "Projeto em destaque",
    viewProject: "Ver projeto",
    projectsPath: "/projetos",
    allProjects: "Todos os projetos",
    moreProjects: "Outros projetos",
    services: "Serviços",
    servicesPath: "/servicos",
    allServices: "Ver todos os serviços",
    serviceDetails: "Detalhes do serviço",
    captions: {
      "aquaflora-agroshop": ["WooCommerce · ERP", "Loja com sincronização de estoque e preços.", "Catálogo público da AquaFlora AgroShop"],
      joysticknights: ["Produto próprio", "Portal de jogos e cultura com Next.js e WordPress.", "Página inicial do portal JoysticKnights"],
      promogames: ["Migração editorial · Prévia local", "Novo front-end em Next.js, com a redação no WordPress.", "Prévia da página inicial do PromoGames"],
    },
    servicesList: [
      ["E-commerce", "Lojas WooCommerce e integração de catálogo, estoque e preços.", "ecommerce"],
      ["Sistemas web", "Ferramentas internas para consultar produtos e registrar dados.", "sistemas-web"],
      ["APIs e integrações", "Troca de dados entre ERPs, lojas e aplicativos.", "apis-e-integracoes"],
      ["Automação", "Processamento de arquivos e atualizações agendadas.", "automacoes"],
    ],
  },
  en: {
    title: ["Web applications", "and integrated stores."],
    intro: "ERP integrations and automation for catalogs, inventory and pricing.",
    contact: "Discuss a project",
    contactPath: "/en/contact",
    explore: "Explore projects",
    selected: "Featured project",
    viewProject: "View project",
    projectsPath: "/en/projects",
    allProjects: "All projects",
    moreProjects: "More projects",
    services: "Services",
    servicesPath: "/en/services",
    allServices: "View all services",
    serviceDetails: "Service details",
    captions: {
      "aquaflora-agroshop": ["WooCommerce · ERP", "Online store with inventory and price synchronization.", "AquaFlora AgroShop public catalog"],
      joysticknights: ["Independent product", "Games and culture publication built with Next.js and WordPress.", "JoysticKnights publication homepage"],
      promogames: ["Editorial migration · Local preview", "A Next.js frontend with the editorial workflow in WordPress.", "Preview of the PromoGames homepage"],
    },
    servicesList: [
      ["E-commerce", "WooCommerce stores and catalog, inventory and pricing integrations.", "ecommerce"],
      ["Web applications", "Internal tools for product lookup and data entry.", "web-applications"],
      ["APIs and integrations", "Data exchange between ERP systems, stores and apps.", "apis-and-integrations"],
      ["Automation", "File processing and scheduled updates.", "automation"],
    ],
  },
} as const;

type Locale = keyof typeof copy;
type EditorialCase = (typeof projects)[number];

function ProjectEntry({ project, locale, featured = false }: { project: EditorialCase; locale: Locale; featured?: boolean }) {
  const t = copy[locale];
  const [category, summary, alt] = t.captions[project.slug];
  const Title = featured ? "h2" : "h3";

  return (
    <article className={featured ? styles.featured : styles.companion} data-case={project.slug}>
      {featured && <p className={styles.featuredLabel}><span aria-hidden="true">01</span>{t.selected}</p>}
      <Link className={styles.projectLink} href={projectPath(project.slug, locale)} aria-label={`${t.viewProject}: ${project.name}`}>
        <div className={styles.media}>
          <div className={styles.screenshot}>
            <StaticImage src={project.src} alt={alt} width={project.width} height={project.height} priority={featured} />
          </div>
          {project.slug === "promogames" && (
            <StaticImage className={styles.mobilePreview} src="/images/projects/promogames-mobile.jpg" alt="" width={430} height={932} />
          )}
        </div>
        <div className={styles.caption}>
          <div>
            <p className={styles.category}>{category}</p>
            <Title>{project.name}</Title>
            <p className={styles.summary}>{summary}</p>
          </div>
          <span className={styles.projectArrow} aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}

export function StudioHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [featured, ...otherProjects] = projects;

  return (
    <div className="studio-home" lang={locale}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <h1 className={styles.headline}>{t.title[0]} <em>{t.title[1]}</em></h1>
          <div className={styles.heroCopy}>
            <p>{t.intro}</p>
            <div className={styles.actions}>
              <Link className={styles.contact} href={t.contactPath}>{t.contact} <span aria-hidden="true">↗</span></Link>
              <a className={styles.explore} href="#projetos-home">{t.explore} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div id="projetos-home" className={styles.featuredAnchor}>
            <ProjectEntry project={featured} locale={locale} featured />
          </div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className="container">
          <header className={styles.portfolioHeading}>
            <h2>{t.moreProjects}</h2>
            <Link className="studio-link" href={t.projectsPath}>{t.allProjects} <span aria-hidden="true">↗</span></Link>
          </header>
          <div className={styles.companions}>
            {otherProjects.map((project) => <ProjectEntry key={project.slug} project={project} locale={locale} />)}
          </div>
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

import Link from "next/link";
import { StaticImage } from "@/components/ui/StaticImage";
import { company } from "@/content/company";
import { englishProjects } from "@/content/english";
import { projectPath } from "@/lib/seo";

const copy = {
  "pt-BR": {
    title: "Desenvolvimento de software",
    intro: "Criamos sistemas web, integramos lojas a ERPs e automatizamos tarefas como a atualização de estoque e preços.",
    location: "Boa Esperança do Sul, SP · Atendimento remoto",
    contact: "Contato",
    contactPath: "/contato",
    services: "Serviços",
    servicesPath: "/servicos",
    allServices: "Ver todos os serviços",
    selected: "Projeto em destaque",
    aquaNote: "Loja WooCommerce e sincronização com o ERP",
    aquaAlt: "Página inicial da loja AquaFlora AgroShop",
    projects: "Outros projetos",
    projectsPath: "/projetos",
    allProjects: "Ver todos os projetos",
    aboutPath: "/sobre",
    about: "Sobre a BragaCode",
    founder: "Fundador e responsável técnico",
    message: "Envie uma mensagem",
    projectNotes: [
      ["Migração editorial para Next.js", "Em desenvolvimento"],
      ["Plataforma própria de e-commerce", "Beta protegido"],
      ["Portal de jogos e cultura", "Publicado"],
    ],
    servicesList: [
      ["E-commerce", "Desenvolvimento e manutenção de lojas WooCommerce, com integração de catálogo, preços e estoque.", "ecommerce"],
      ["Sistemas web", "Ferramentas internas para consultar produtos, registrar dados e controlar o acesso da equipe.", "sistemas-web"],
      ["APIs e integrações", "Troca de dados entre ERPs, lojas e aplicativos por API, webhook ou importação de arquivos.", "apis-e-integracoes"],
      ["Automação", "Rotinas em Python ou Node.js para processar arquivos e agendar atualizações de estoque e preços.", "automacoes"],
    ],
  },
  en: {
    title: "Software development",
    intro: "We build web applications, connect online stores to ERP systems and automate tasks such as inventory and price updates.",
    location: "São Paulo, Brazil · Remote work",
    contact: "Contact",
    contactPath: "/en/contact",
    services: "Services",
    servicesPath: "/en/services",
    allServices: "View all services",
    selected: "Featured project",
    aquaNote: "WooCommerce store and ERP synchronization",
    aquaAlt: "AquaFlora AgroShop storefront",
    projects: "Other projects",
    projectsPath: "/en/projects",
    allProjects: "View all projects",
    aboutPath: "/en/about",
    about: "About BragaCode",
    founder: "Founder and technical lead",
    message: "Send a message",
    projectNotes: [
      ["Editorial migration to Next.js", "In development"],
      ["Independent e-commerce platform", "Protected beta"],
      ["Games and culture publication", "Live"],
    ],
    servicesList: [
      ["E-commerce", "WooCommerce development and maintenance, including catalog, pricing and inventory integration.", "ecommerce"],
      ["Web applications", "Internal tools for product lookup, data entry and team access control.", "web-applications"],
      ["APIs and integrations", "Data exchange between ERP systems, stores and apps through APIs, webhooks or file imports.", "apis-and-integrations"],
      ["Automation", "Python or Node.js jobs for processing files and scheduling inventory and price updates.", "automation"],
    ],
  },
} as const;

function Arrow({ children = "↗" }: { children?: string }) {
  return <span className="studio-arrow" aria-hidden="true">{children}</span>;
}

export function StudioHome({ locale }: { locale: keyof typeof copy }) {
  const t = copy[locale];
  const [aquaFlora, ...otherProjects] = englishProjects;

  return (
    <div className="studio-home" lang={locale}>
      <section className="studio-intro">
        <div className="container studio-intro-grid">
          <div className="studio-intro-copy">
            <p className="studio-location">{t.location}</p>
            <h1>{t.title}</h1>
            <p className="studio-lead">{t.intro}</p>
            <div className="studio-actions">
              <Link className="button" href={t.contactPath}>{t.contact} <Arrow>→</Arrow></Link>
              <a className="studio-link" href="#servicos">{t.services} <Arrow>↓</Arrow></a>
            </div>
          </div>
          <Link className="studio-feature" href={projectPath(aquaFlora.slug, locale)}>
            <div className="studio-feature-top"><span>{t.selected}</span><Arrow /></div>
            <div className="studio-feature-art">
              <div className="studio-browser">
                <div className="studio-browser-bar" aria-hidden="true"><i /><i /><i /></div>
                <StaticImage src={aquaFlora.image} width={1265} height={712} priority alt={t.aquaAlt} />
              </div>
            </div>
            <div className="studio-feature-caption">
              <strong>{aquaFlora.name}</strong>
              <span>{t.aquaNote}</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="studio-section" id="servicos">
        <div className="container studio-section-grid">
          <div className="studio-section-heading">
            <h2>{t.services}</h2>
            <Link className="studio-link" href={t.servicesPath}>{t.allServices} <Arrow>→</Arrow></Link>
          </div>
          <div className="studio-services">
            {t.servicesList.map(([title, description, slug], index) => (
              <details key={slug} name="studio-services">
                <summary>
                  <span className="studio-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{title}</h3>
                  <span className="studio-plus" aria-hidden="true" />
                </summary>
                <div className="studio-service-description">
                  <p>{description}</p>
                  <Link className="studio-link" href={locale === "en" ? `${t.servicesPath}#${slug}` : `${t.servicesPath}/${slug}`}>
                    {locale === "en" ? "Service details" : "Detalhes do serviço"} <Arrow>→</Arrow>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section studio-projects">
        <div className="container studio-section-grid">
          <div className="studio-section-heading">
            <h2>{t.projects}</h2>
            <Link className="studio-link" href={t.projectsPath}>{t.allProjects} <Arrow>→</Arrow></Link>
          </div>
          <ul className="studio-project-list">
            {otherProjects.map((project, index) => {
              const [description, status] = t.projectNotes[index];
              return (
                <li key={project.slug}>
                  <Link href={projectPath(project.slug, locale)}>
                    <span className="studio-project-thumb" aria-hidden="true">
                      {project.image
                        ? <StaticImage src={project.image} width={104} height={68} alt="" />
                        : <span>BC</span>}
                    </span>
                    <span className="studio-project-label"><strong>{project.name}</strong><span>{description}</span></span>
                    <span className="studio-project-status">{status}</span>
                    <Arrow />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="studio-section studio-contact">
        <div className="container studio-contact-inner">
          <div className="studio-person">
            <StaticImage src="/images/pedro-braga.webp" alt="" width={64} height={64} />
            <div><h2>Pedro Braga</h2><p>{t.founder}</p></div>
          </div>
          <div className="studio-contact-links">
            <Link className="studio-link" href={t.aboutPath}>{t.about} <Arrow>→</Arrow></Link>
            <a className="studio-link" href={`mailto:${company.email}`}>{company.email} <Arrow /></a>
            <Link className="button" href={t.contactPath}>{t.message} <Arrow>→</Arrow></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

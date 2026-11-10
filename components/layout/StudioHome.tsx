import Link from "next/link";
import { StudioProject } from "@/components/project/StudioProject";
import { StudioContact } from "@/components/ui/StudioContact";
import { StudioDiagram } from "@/components/ui/StudioDiagram";
import { StudioServices } from "@/components/ui/StudioServices";
import { StaticImage } from "@/components/ui/StaticImage";
import { company } from "@/content/company";
import type { ServiceSlug } from "@/content/services";
import { serviceTiles, workflow } from "@/content/studio";
import { projectPath } from "@/lib/seo";

const highlights = [
  {
    slug: "aquaflora-agroshop", name: "AquaFlora AgroShop", tone: "sand",
    image: { src: "/images/projects/aquaflora-live.webp", width: 1265, height: 712 },
    pt: ["E-commerce", "Loja WooCommerce com sincronização de preços e estoque do ERP."],
    en: ["E-commerce", "WooCommerce store with ERP inventory and price synchronization."],
  },
  {
    slug: "joysticknights", name: "JoysticKnights", tone: "lavender",
    image: { src: "/images/projects/joysticknights-live.webp", width: 1265, height: 712 },
    pt: ["Produto próprio", "Portal de jogos e cultura com Next.js e WordPress."],
    en: ["Independent product", "Games and culture publication built with Next.js and WordPress."],
  },
  {
    slug: "promogames", name: "PromoGames", tone: "slate",
    image: { src: "/images/projects/promogames-home.jpg", width: 1440, height: 1000 },
    pt: ["Migração editorial · Prévia local", "Novo front-end em Next.js com a redação mantida no WordPress."],
    en: ["Editorial migration · Local preview", "A Next.js frontend that keeps the editorial workflow in WordPress."],
  },
] as const;

const homeDescriptions: Partial<Record<ServiceSlug, { pt: string; en: string }>> = {
  ecommerce: { pt: "Conecte a loja ao catálogo, estoque e preços do ERP.", en: "Connect your store to ERP catalog, inventory and pricing." },
  "sistemas-web": { pt: "Troque planilhas dispersas por ferramentas internas.", en: "Replace scattered spreadsheets with internal tools." },
  "apis-e-integracoes": { pt: "Faça sistemas compartilharem dados com validação e histórico.", en: "Share data across systems with validation and an audit trail." },
  automacoes: { pt: "Reduza tarefas manuais de importação, conferência e atualização.", en: "Cut manual work in imports, checks and updates." },
};

export function StudioHome({ locale }: { locale: "pt-BR" | "en" }) {
  const english = locale === "en";
  const lang = english ? "en" : "pt";
  const services = serviceTiles(english).flatMap((item) => {
    const description = homeDescriptions[item.key]?.[lang];
    return description ? [{ ...item, problem: undefined, description }] : [];
  });

  return (
    <div className="studio-home" lang={locale}>
      <section className="studio-hero">
        <div className="container studio-hero-grid">
          <div className="studio-hero-copy">
            <h1>{english ? <>Software for<br /> <em>business</em></> : <>Software para<br /> <em>empresas</em></>}</h1>
            <p>{english ? "Web applications, e-commerce, integrations and automation to reduce manual work." : "Sistemas web, e-commerce, integrações e automações para reduzir o trabalho manual."}</p>
            <div className="studio-hero-actions">
              <Link className="button" href={english ? "/en/contact" : "/contato"}>{english ? "Request a quote" : "Solicitar orçamento"} <span aria-hidden="true">↗</span></Link>
              <a className="studio-hero-secondary" href="#studio-projects">{english ? "Explore projects" : "Explorar projetos"} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="studio-hero-art"><StudioDiagram /></div>
        </div>
      </section>

      <section className="studio-section" id="studio-projects">
        <div className="container">
          <header className="studio-section-heading">
            <h2>{english ? "Selected projects" : "Projetos selecionados"}</h2>
            <Link className="studio-link" href={english ? "/en/projects" : "/projetos"}>{english ? "All projects" : "Todos os projetos"} <span aria-hidden="true">↗</span></Link>
          </header>
          <div className="studio-project-grid">
            {highlights.map((project) => {
              const [category, summary] = project[lang];
              return <StudioProject key={project.slug} name={project.name} href={projectPath(project.slug, locale)}
                category={category} summary={summary} tone={project.tone} label={english ? "View project" : "Ver projeto"}
                image={{ ...project.image, alt: english ? `${project.name} website` : `Site de ${project.name}` }} />;
            })}
          </div>
        </div>
      </section>

      <section className="studio-section studio-soft" id="servicos">
        <div className="container">
          <header className="studio-section-heading">
            <h2>{english ? "Services" : "Serviços"}</h2>
            <Link className="studio-link" href={english ? "/en/services" : "/servicos"}>{english ? "All services" : "Todos os serviços"} <span aria-hidden="true">↗</span></Link>
          </header>
          <StudioServices items={services} label={english ? "Service details" : "Detalhes do serviço"} />
        </div>
      </section>

      <section className="studio-section">
        <div className="container">
          <header className="studio-section-heading"><h2>{english ? "How we work" : "Como trabalhamos"}</h2></header>
          <ol className="studio-workflow">
            {workflow[lang].map((step, index) => <li key={step.title}><span aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="studio-founder studio-soft">
        <div className="container studio-founder-inner">
          <StaticImage src="/images/pedro-braga.webp" alt="" width={600} height={750} />
          <div>
            <h2>{company.founder}</h2>
            <p>{english ? "BragaCode founder. I work directly with the teams that will use and maintain the software." : "Fundador da BragaCode. Trabalho diretamente com as equipes que vão usar e manter o software."}</p>
          </div>
          <Link className="studio-link" href={english ? "/en/about" : "/sobre"}>{english ? "About BragaCode" : "Sobre a BragaCode"} <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <StudioContact english={english} />
    </div>
  );
}

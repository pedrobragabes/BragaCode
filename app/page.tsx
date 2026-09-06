import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectCard } from "@/components/project/ProjectCard";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, processSteps } from "@/content/company";
import { featuredProjects } from "@/content/projects";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Software, e-commerce e automações",
  description: company.positioning,
  path: "/",
});


export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: absoluteUrl(),
      founder: { "@type": "Person", name: company.founder },
      sameAs: [company.linkedin, company.github, company.personalSite],
      email: company.email,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: company.name,
      url: absoluteUrl(),
      description: company.positioning,
      areaServed: { "@type": "Country", name: "Brasil" },
      founder: { "@type": "Person", name: company.founder },
      serviceType: services.map((service) => service.shortTitle),
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: company.founder,
      url: company.personalSite,
      jobTitle: "Software Engineer e fundador da BragaCode",
      sameAs: [company.linkedin, company.github],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" />Desenvolvimento de software · BragaCode</p>
            <h1>Tecnologia que conecta <em>o seu negócio.</em></h1>
            <p className="hero-lead">
              Lojas virtuais, sistemas sob medida e integrações que fazem seus dados circularem. Do primeiro desenho à implantação, com Pedro Braga à frente do desenvolvimento.
            </p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl("a Home")} target="_blank" rel="noreferrer">
                Conversar sobre o projeto <span aria-hidden="true">↗</span>
              </a>
              <Link className="button button-secondary" href="/projetos">
                Ver projetos <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <p className="hero-note"><span aria-hidden="true">●</span> Atendimento remoto em todo o Brasil · liderança técnica de Pedro Braga</p>
          </div>
          <Link href="/projetos/aquaflora-agroshop" className="company-hero-work">
            <div className="work-caption"><span>Experiência aplicada</span><span>01 / AquaFlora ↗</span></div>
            <Image unoptimized src="/images/projects/aquaflora-live.webp" width={1265} height={712} alt="Loja virtual AquaFlora AgroShop em funcionamento" priority sizes="(max-width: 820px) 100vw, 55vw" />
            <div className="work-caption"><strong>E-commerce conectado à operação</strong><span>Conheça o trabalho de Pedro Braga</span></div>
          </Link>
        </div>
      </section>

<section className="section services-section" id="servicos">
        <div className="container">
          <SectionHeading
            eyebrow="Serviços"
            title={<>O que podemos <em>desenvolver juntos.</em></>}
            description="Uma presença digital bem construída. Uma loja conectada ao estoque. Um sistema que acompanha o jeito da sua empresa trabalhar."
            action={<Link className="text-link" href="/servicos">Ver todos os serviços <span aria-hidden="true">↗</span></Link>}
          />
          <div className="services-grid">
            {services.filter(service => ["ecommerce", "sistemas-web", "apis-e-integracoes"].includes(service.slug)).map((service) => (
              <article className="service-card" key={service.slug}>
                <div><span>{service.number}</span><i aria-hidden="true">↗</i></div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>{service.deliverables.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
                <Link href={`/servicos#${service.slug}`} aria-label={`Saiba mais sobre ${service.title}`}>Explorar serviço</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <SectionHeading
            eyebrow="Projetos em destaque"
            title={<>Da operação de uma loja <em>à publicação de conteúdo.</em></>}
            description="Experiência profissional e produtos próprios desenvolvidos por Pedro Braga, fundador da BragaCode."
            action={<Link className="text-link" href="/projetos">Conhecer os projetos <span aria-hidden="true">↗</span></Link>}
          />
          <div className="projects-grid featured-projects">
            {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="Processo"
            title={<>Clareza antes de <em>complexidade.</em></>}
            description="Cada etapa produz uma saída concreta. Assim, escopo, decisão e responsabilidade não ficam presos em reunião."
          />
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
                <small>{step.output}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

<section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-portrait"><Image unoptimized src="/images/pedro-braga.webp" alt="Pedro Braga, fundador da BragaCode" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
          <div className="founder-copy">
            <p className="eyebrow"><span aria-hidden="true" />Quem está por trás</p>
            <h2>Pedro Braga.<br /><em>Fundador e responsável técnico.</em></h2>
            <p>
              Pedro atua no desenvolvimento e na operação de aplicações web desde 2020. Na AquaFlora AgroShop, trabalha com WooCommerce, integrações com ERP, aplicações internas e automações em Python e Node.js.
            </p>
            <p>
              É estudante de Engenharia de Computação na UNIVESP e mantém prática contínua de infraestrutura com Docker, Linux, Nginx e Proxmox.
            </p>
            <div className="inline-links">
              <Link className="text-link" href="/sobre">Conhecer a trajetória ↗</Link>
              <a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

<section className="section home-contact" id="contato">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow"><span aria-hidden="true" />Próximo passo</p>
            <h2>Vamos conversar <em>sobre o seu projeto.</em></h2>
            <p>Conte o que sua empresa precisa construir ou melhorar. A primeira conversa serve para entender o contexto, as prioridades e o próximo passo.</p>
            <div className="contact-direct">
              <span>Contato direto</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={whatsappUrl("a seção de contato da Home")} target="_blank" rel="noreferrer">{company.phoneDisplay}</a>
            </div>
          </div>
          <ContactForm source="a seção de contato da Home" />
        </div>
      </section>

</>
  );
}

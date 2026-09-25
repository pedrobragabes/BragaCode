import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { BrandSymbol } from "@/components/layout/Logo";
import { ProjectCard } from "@/components/project/ProjectCard";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, processSteps, techGroups } from "@/content/company";
import { featuredProjects } from "@/content/projects";
import { coreServices } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Software para operações reais", description: company.positioning, path: "/" });

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfessionalService", name: company.name, url: absoluteUrl(), logo: absoluteUrl("/images/brand/logo-color.png"), description: company.positioning, founder: { "@type": "Person", name: company.founder }, sameAs: [company.linkedin, company.github, company.personalSite], email: company.email, areaServed: { "@type": "Country", name: "Brasil" }, serviceType: coreServices.map(service => service.shortTitle) }} />
    <section className="hero brand-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true" />Engenharia de software · BragaCode</p>
          <h1>Software para <em>operações reais.</em></h1>
          <p className="hero-lead">Desenvolvemos sistemas web, integrações, automações e soluções para e-commerce que conectam processos, dados e negócios.</p>
          <div className="hero-actions">
            <Link className="button" href="/projetos">Conheça nossos projetos <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href="/contato">Fale sobre seu projeto <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-note">Boa Esperança do Sul, SP <span aria-hidden="true">/</span> Atendimento remoto</p>
        </div>
        <div className="brand-blueprint">
          <div className="blueprint-heading"><span>DO PROCESSO AO SOFTWARE</span><span aria-hidden="true">↗</span></div>
          <div className="blueprint-mark"><BrandSymbol /></div>
          <div className="blueprint-caption"><strong>Sistemas que conversam.<br />Operações que avançam.</strong><span>ENTENDER. CONECTAR. CONSTRUIR.</span></div>
          <div className="blueprint-flow" aria-label="Processos conectados por software à operação"><span>Processos</span><i aria-hidden="true">→</i><span>Software</span><i aria-hidden="true">→</i><span>Operação</span></div>
        </div>
      </div>
      <div className="container capabilities-strip" aria-label="Áreas de atuação">{coreServices.map(service => <Link key={service.slug} href={`/servicos/${service.slug}`}><span aria-hidden="true">↗</span>{service.shortTitle}</Link>)}</div>
    </section>
    <section className="section services-section" id="servicos"><div className="container">
      <SectionHeading eyebrow="01 / O que fazemos" title={<>O processo é o ponto de partida.<br /><em>O software, a solução.</em></>} description="Da tarefa que se repete ao sistema que precisa evoluir: começamos pelo problema da sua operação." action={<Link className="text-link" href="/servicos">Conheça os serviços ↗</Link>} />
      <div className="services-grid core-services-grid">{coreServices.map((service, index) => <article className="service-card" key={service.slug}>
        <div><span>0{index + 1}</span><i aria-hidden="true">↗</i></div><h3>{service.title}</h3><p>{service.summary}</p>
        <ul>{service.deliverables.slice(0, 3).map(item => <li key={item}>{item}</li>)}</ul>
        <Link href={`/servicos/${service.slug}`} aria-label={`Saiba mais sobre ${service.title}`}>Explorar serviço <span aria-hidden="true">→</span></Link>
      </article>)}</div>
    </div></section>
    <section className="section featured-section" id="cases"><div className="container">
      <SectionHeading eyebrow="02 / Cases selecionados" title={<>Problemas concretos.<br /><em>Engenharia aplicada.</em></>} description="Operação de varejo, modernização editorial e produtos próprios. Conheça o contexto, as decisões e o estágio de cada trabalho." action={<Link className="text-link" href="/projetos">Ver todos os cases ↗</Link>} />
      <div className="projects-grid selected-cases">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
    </div></section>
    <section className="section process-section"><div className="container">
      <SectionHeading eyebrow="03 / Como trabalhamos" title={<>Clareza em cada etapa.<br /><em>Do contexto à evolução.</em></>} description="Conversa direta com quem projeta e desenvolve. Escopo definido, entregas incrementais e documentação para dar continuidade ao trabalho." />
      <ol className="process-list">{processSteps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><small>{step.output}</small></li>)}</ol>
    </div></section>
    <section className="section founder-section"><div className="container founder-grid">
      <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, fundador da BragaCode" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
      <div className="founder-copy"><p className="eyebrow"><span aria-hidden="true" />04 / Sobre a BragaCode</p><h2>Engenharia de software <em>próxima do problema.</em></h2>
        <p>A BragaCode é uma iniciativa de desenvolvimento de software fundada por Pedro Braga, voltada à criação de sistemas web, integrações, automações e soluções de e-commerce.</p>
        <p>O trabalho parte do processo existente para construir soluções que possam ser utilizadas e mantidas na operação.</p>
        <p className="founder-signature"><strong>Pedro Braga</strong><span>Fundador e Software Engineer</span></p>
        <div className="inline-links"><Link className="text-link" href="/sobre">Conheça a BragaCode ↗</Link><a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Portfólio pessoal ↗</a><a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
    </div></section>
    <section className="section technology-section"><div className="container">
      <SectionHeading eyebrow="Base técnica" title={<>Tecnologias que usamos <em>quando fazem sentido.</em></>} description="A escolha acompanha o problema, o ambiente existente e a manutenção depois da entrega." />
      <div className="technology-columns">{techGroups.map(group => <div key={group.label}><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div>)}</div>
    </div></section>
    <section className="section home-contact" id="contato"><div className="container contact-grid">
      <div className="contact-copy"><p className="eyebrow"><span aria-hidden="true" />Vamos conversar</p><h2>O que precisa <em>funcionar melhor?</em></h2>
        <p>Tem um processo que ainda depende de planilhas, tarefas manuais ou sistemas que não se comunicam? Podemos analisar o problema e avaliar uma solução.</p>
        <div className="contact-direct"><span>Falar sobre um projeto</span><a href={`mailto:${company.email}`}>{company.email}</a><a href={whatsappUrl("a Home")} target="_blank" rel="noreferrer">WhatsApp · {company.phoneDisplay} ↗</a></div>
      </div><ContactForm source="a seção de contato da Home" />
    </div></section>
  </>;
}

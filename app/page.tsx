import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectCard } from "@/components/project/ProjectCard";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, processSteps } from "@/content/company";
import { faq } from "@/content/faq";
import { featuredProjects } from "@/content/projects";
import { serviceOffers } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Software que conecta sua operação", description: company.positioning, path: "/" });

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfessionalService", name: company.name, url: absoluteUrl(), description: company.positioning, founder: { "@type": "Person", name: company.founder }, email: company.email, sameAs: [company.github, company.personalSite] }} />
    <section className="commercial-hero">
      <div className="container commercial-hero-grid">
        <div className="commercial-hero-copy">
          <p className="eyebrow"><span aria-hidden="true" />Software aplicado ao seu negócio</p>
          <h1>Seus sistemas <br />conectados.<br /><em>Sua operação <br />mais simples.</em></h1>
          <p className="hero-lead">Sistemas web, e-commerce e integrações para organizar dados e automatizar as rotinas da sua empresa.</p>
          <div className="hero-actions">
            <Link className="button" href="/contato">Conversar sobre um projeto <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href="/projetos">Conhecer projetos</Link>
          </div>
          <p className="hero-note">Do primeiro contato à entrega, diretamente com Pedro Braga.</p>
        </div>
        <div className="brand-panel">
          <div className="brand-panel-top"><span>BRAGA CODE</span><span>Desenvolvimento de software</span></div>
          <Image className="brand-panel-symbol" src="/brand/symbol.svg" alt="Monograma BC da Braga Code, com chevrons de código" width={820} height={470} priority />
          <div className="brand-panel-bottom"><span>Conectar. Simplificar. Construir.</span><span aria-hidden="true">↗</span></div>
          <div className="hero-flow" aria-label="Exemplo de integração: ERP, validação dos dados e loja virtual">
            <span>ERP / arquivos</span><i aria-hidden="true">→</i><span>Validação</span><i aria-hidden="true">→</i><span>Loja virtual</span>
          </div>
        </div>
      </div>
      <nav className="container expertise-strip" aria-label="Áreas de atuação">{serviceOffers.map(offer => <Link key={offer.slug} href={`/servicos/${offer.slug}`}>{offer.shortTitle}<span aria-hidden="true">↗</span></Link>)}</nav>
    </section>

    <section className="section services-section">
      <div className="container">
        <SectionHeading eyebrow="01 / O que podemos resolver" title={<>Menos tarefas repetidas.<br /><em>Mais fluidez no trabalho.</em></>} description="O ponto de partida é a sua rotina: o que precisa conversar, o que se repete e o que está dificultando o trabalho." />
        <div className="offer-grid">{serviceOffers.map((offer, index) => <article className="offer-card" key={offer.slug}>
          <div className="offer-number"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div>
          <h3><Link href={`/servicos/${offer.slug}`}>{offer.title}</Link></h3>
          <p>{offer.problem}</p>
          <div className="offer-delivery"><span>O que entregamos</span><p>{offer.delivery}</p></div>
          <Link className="text-link" href={`/servicos/${offer.slug}`}>Conhecer o serviço <span aria-hidden="true">↗</span></Link>
        </article>)}</div>
      </div>
    </section>

    <section className="section featured-section">
      <div className="container">
        <SectionHeading eyebrow="02 / Trabalho em contexto" title={<>Software que encontra<br /><em>a vida real.</em></>} description="Experiência profissional e projetos próprios de Pedro Braga. Cada estudo explica o problema, a entrega e seu estágio atual." action={<Link className="text-link" href="/projetos">Explorar os projetos ↗</Link>} />
        <div className="projects-grid selected-projects">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </div>
    </section>

    <section className="section delivery-section">
      <div className="container">
        <SectionHeading eyebrow="03 / Como trabalhamos" title={<>Um problema claro.<br /><em>Uma entrega bem definida.</em></>} description="Você acompanha as decisões e valida o que está sendo construído. Escopo, responsabilidades e próximos passos ficam registrados." />
        <ol className="delivery-steps">{processSteps.map(step => <li key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><div><span>Você recebe</span><p>{step.output}</p></div></li>)}</ol>
      </div>
    </section>

    <section className="section founder-section">
      <div className="container founder-grid">
        <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, fundador e desenvolvedor responsável pela BragaCode" width={600} height={750} sizes="(max-width: 820px) 85vw, 30vw" /></div>
        <div className="founder-copy"><p className="eyebrow"><span aria-hidden="true" />Uma conversa direta, do início ao fim</p><h2>Quem entende o problema<br /><em>também escreve o código.</em></h2><p>Sou Pedro Braga, fundador e desenvolvedor responsável pela BragaCode. Trabalho com aplicações web, integrações com sistemas legados e ferramentas para operações comerciais.</p><p>A BragaCode reúne essa experiência para construir soluções com escopo claro, validação com quem usa e documentação para continuar evoluindo.</p><div className="inline-links"><Link className="text-link" href="/sobre">Conheça a BragaCode ↗</Link><a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Trajetória profissional ↗</a></div></div>
      </div>
    </section>

    <section className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow"><span aria-hidden="true" />Antes de começar</p><h2>Boas perguntas.<br /><em>Respostas diretas.</em></h2></div><div className="faq-list">{faq.map((item, index) => <details key={item.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true">+</i></summary><p>{item.answer}</p></details>)}</div></div></section>

    <section className="section home-contact" id="contato"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow"><span aria-hidden="true" />Vamos entender o seu cenário</p><h2>Qual parte da rotina<br /><em>pode funcionar melhor?</em></h2><p>Conte o que acontece hoje, quais ferramentas você usa e onde está a dificuldade. Não precisa escrever um escopo técnico.</p><div className="contact-direct"><span>Fale diretamente com Pedro</span><a href={`mailto:${company.email}`}>{company.email}</a><a href={whatsappUrl("a Home")} target="_blank" rel="noreferrer">WhatsApp · {company.phoneDisplay}</a></div></div><ContactForm source="a Home" /></div></section>
  </>;
}

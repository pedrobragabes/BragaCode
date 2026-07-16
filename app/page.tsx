import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectVisual } from "@/components/project/ProjectVisual";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, metrics, processSteps, techGroups, workPrinciples } from "@/content/company";
import { faq } from "@/content/faq";
import { featuredProjects } from "@/content/projects";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Software, e-commerce e automações",
  description: company.positioning,
  path: "/",
});

const problems = [
  {
    number: "01",
    title: "A mesma informação é digitada em mais de um lugar.",
    text: "ERP, loja, planilha e atendimento viram fontes diferentes para preço, estoque e cadastro.",
  },
  {
    number: "02",
    title: "A operação cresceu, mas o processo continua manual.",
    text: "O volume aumenta e a equipe passa a trabalhar para manter o sistema atualizado, não para atender o cliente.",
  },
  {
    number: "03",
    title: "A ferramenta pronta não acompanha o fluxo real.",
    text: "O time cria atalhos, planilhas e mensagens porque o software exige mais etapas do que o trabalho deveria ter.",
  },
];

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
            <p className="eyebrow"><span aria-hidden="true" />Software que entra na operação</p>
            <h1>Menos trabalho manual. <em>Mais operação rodando.</em></h1>
            <p className="hero-lead">
              A BragaCode cria e-commerces, sistemas e integrações para tirar planilhas, retrabalho e atualizações repetitivas do caminho do crescimento.
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
          <div className="hero-visual">
            <div className="hero-visual-label"><span>OP-04</span><span>Sincronização de catálogo</span></div>
            <ProjectVisual kind="sync" label="Representação de uma sincronização entre ERP, middleware Python e e-commerce" />
            <div className="hero-pipeline" aria-hidden="true">
              <span>ERP legado</span><i>→</i><span>Python / Docker</span><i>→</i><span>WooCommerce</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-section" aria-label="Experiência comprovada">
        <div className="container metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.value + metric.label}>
              <p><strong>{metric.value}</strong><span>{metric.label}</span></p>
              <small>{metric.detail}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section problems-section">
        <div className="container">
          <SectionHeading
            eyebrow="O ponto de partida"
            title={<>O software certo começa no <em>gargalo certo.</em></>}
            description="Antes de sugerir uma stack, a BragaCode entende onde o processo quebra, qual dado precisa circular e quem usa a solução todos os dias."
          />
          <div className="problem-list">
            {problems.map((problem) => (
              <article key={problem.number}>
                <span>{problem.number}</span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="container">
          <SectionHeading
            eyebrow="Serviços"
            title={<>Da vitrine ao <em>bastidor.</em></>}
            description="Interface, regra de negócio, integração e ambiente de execução tratados como partes da mesma operação."
            action={<Link className="text-link" href="/servicos">Ver todos os serviços <span aria-hidden="true">↗</span></Link>}
          />
          <div className="services-grid">
            {services.map((service) => (
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
            title={<>Código ligado a <em>trabalho real.</em></>}
            description="Cases apresentados com contexto, restrições e resultado — sem esconder o que ainda é protótipo e sem inventar métricas."
            action={<Link className="text-link" href="/projetos">Abrir portfólio completo <span aria-hidden="true">↗</span></Link>}
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

      <section className="section tech-section">
        <div className="container tech-grid">
          <div className="tech-intro">
            <p className="eyebrow"><span aria-hidden="true" />Tecnologias</p>
            <h2>Ferramenta escolhida pelo <em>trabalho que precisa fazer.</em></h2>
            <p>Next.js para interfaces indexáveis, Python para tratamento de dados, Node.js para integrações e Docker para tornar a execução previsível.</p>
          </div>
          <div className="tech-groups">
            {techGroups.map((group) => (
              <div key={group.label}>
                <p>{group.label}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-portrait" aria-label="Monograma de Pedro Braga">
            <span>PB</span><i>Software Engineer<br />Boa Esperança do Sul, SP</i>
          </div>
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

      <section className="section principles-section">
        <div className="container">
          <SectionHeading
            eyebrow="Como a parceria funciona"
            title={<>Confiança vem de um projeto <em>que dá para acompanhar.</em></>}
            description="Depoimentos só serão publicados com autorização dos clientes. Nesta versão, a prova está nos processos, nas entregas e nos dados verificáveis."
          />
          <div className="principles-grid">
            {workPrinciples.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow"><span aria-hidden="true" />Perguntas frequentes</p>
            <h2>Antes de mandar <em>“oi”.</em></h2>
            <p>Respostas diretas para entender se o formato de trabalho combina com o seu projeto.</p>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question} name="faq">
                <summary><span>0{index + 1}</span>{item.question}<i aria-hidden="true">+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-contact" id="contato">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow"><span aria-hidden="true" />Próximo passo</p>
            <h2>Explique o processo.<br /><em>A gente encontra o recorte.</em></h2>
            <p>Conte o que hoje depende de planilha, cópia manual, mensagem repetitiva ou sistema que não conversa com os outros.</p>
            <div className="contact-direct">
              <span>Contato direto</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={whatsappUrl("a seção de contato da Home")} target="_blank" rel="noreferrer">{company.phoneDisplay}</a>
            </div>
          </div>
          <ContactForm source="a seção de contato da Home" />
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <p>BragaCode / software aplicado à operação</p>
          <h2>Se a equipe repete todo dia,<br /><em>vale investigar o que pode ser software.</em></h2>
          <a className="button" href={whatsappUrl("o CTA final da Home")} target="_blank" rel="noreferrer">Começar a conversa <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

import { StaticImage as Image } from "@/components/ui/StaticImage";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, techGroups, workPrinciples } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Sobre Pedro Braga e a BragaCode",
  description: "Conheça a trajetória de Pedro Braga, fundador da BragaCode, e a experiência que conecta software, operação e infraestrutura.",
  path: "/sobre",
});

const timeline = [
  { year: "2020", title: "Projeto próprio em produção", text: "Criação e manutenção do Joysticknights, assumindo publicação, WordPress, customizações, SEO, performance e continuidade técnica." },
  { year: "2025", title: "Operação de e-commerce", text: "Entrada na AquaFlora AgroShop para manter e evoluir WordPress/WooCommerce e automatizar importação de catálogo, estoque e preços." },
  { year: "2025—atual", title: "Engenharia aplicada à operação", text: "Desenvolvimento de middleware Python/Docker, app interno mobile-first e automação de atendimento em Node.js com LLM." },
  { year: "2025—2030", title: "Engenharia de Computação", text: "Bacharelado em andamento na UNIVESP, aprofundando estruturas de dados, POO, bancos de dados e engenharia de software." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: company.founder,
        url: absoluteUrl("/sobre"),
        jobTitle: "Software Engineer e fundador da BragaCode",
        email: company.email,
        homeLocation: { "@type": "Place", name: company.location },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Virtual do Estado de São Paulo (UNIVESP)" },
        sameAs: [company.linkedin, company.github, company.personalSite],
      }} />
      <PageHero
        eyebrow="Sobre"
        title={<>Engenharia próxima de quem <em>usa a operação.</em></>}
        description="A BragaCode foi fundada por Pedro Braga para desenvolver software com contexto: entender o processo, integrar o que já existe e deixar a rotina mais previsível."
        aside={<div className="page-index">PEDRO BRAGA / SOFTWARE ENGINEER</div>}
      />

      <section className="section about-intro-section">
        <div className="container about-intro-grid">
          <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
          <div className="about-copy">
            <p className="lead-paragraph">Pedro trabalha na interseção entre aplicação web, integração de dados e infraestrutura.</p>
            <p>Na prática, isso significa poder olhar para o catálogo no WooCommerce, o script que lê o ERP, a API consumida no estoque e o container que mantém a rotina executando — sem tratar cada camada como um problema isolado.</p>
            <p>A experiência profissional na AquaFlora AgroShop trouxe contato diário com desafios que aparecem quando o software encontra a operação: milhares de itens, dados legados, conexão instável, consulta pelo celular e atendimento recorrente.</p>
            <div className="inline-links">
              <a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="text-link" href={company.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Site pessoal ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <SectionHeading eyebrow="Trajetória" title={<>Prática contínua, do conteúdo à <em>integração crítica.</em></>} />
          <ol className="timeline-list">
            {timeline.map((item) => (
              <li key={item.year}><span>{item.year}</span><h3>{item.title}</h3><p>{item.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <SectionHeading eyebrow="Princípios" title={<>Como decisões técnicas <em>são tomadas.</em></>} />
          <div className="principles-grid">{workPrinciples.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-stack-section">
        <div className="container stack-overview-grid">
          <div><p className="eyebrow"><span aria-hidden="true" />Competências</p><h2>Full-stack sem perder de vista <em>a execução.</em></h2><p>Conhecimento organizado por função, com escolha baseada no problema e no ambiente do projeto.</p></div>
          <div className="tech-groups">{techGroups.map((group) => <div key={group.label}><p>{group.label}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
        </div>
      </section>

      <section className="inline-cta-section">
        <div className="container inline-cta">
          <div><p>Quer trabalhar com a BragaCode?</p><h2>Traga o processo que está dando trabalho.</h2></div>
          <a className="button" href={whatsappUrl("a página Sobre")} target="_blank" rel="noreferrer">Falar com Pedro <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

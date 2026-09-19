import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, workPrinciples } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Sobre a BragaCode", description: "Desenvolvimento de software conduzido por Pedro Braga: sistemas web, e-commerce, integrações e evolução de aplicações.", path: "/sobre" });

export default function AboutPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: company.name, url: absoluteUrl("/sobre"), founder: { "@type": "Person", name: company.founder, url: company.personalSite }, email: company.email }} />
    <PageHero eyebrow="Sobre a BragaCode" title={<>Próxima do negócio.<br /><em>Presente na construção.</em></>} description="A BragaCode desenvolve software para conectar sistemas, organizar dados e melhorar a rotina de empresas. O trabalho é conduzido diretamente por Pedro Braga, fundador e desenvolvedor responsável." />
    <section className="section about-intro-section"><div className="container about-intro-grid">
      <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, fundador da BragaCode" width={600} height={750} sizes="(max-width: 820px) 85vw, 30vw" /></div>
      <div className="about-copy"><p className="eyebrow"><span aria-hidden="true" />Pedro Braga</p><h2>Experiência com o software<br />e com a rotina de quem usa.</h2><p className="lead-paragraph">Aplicações web, integração de dados e operação fazem parte da mesma conversa.</p><p>Na AquaFlora AgroShop, Pedro atua com WooCommerce, integração de preço e estoque com ERP e aplicações internas. No JoysticKnights, seu portal próprio, desenvolve a experiência de leitura integrada ao WordPress.</p><p>Essa experiência orienta a BragaCode: começar pelo processo, definir uma entrega verificável e construir com quem vai usar. A formação em Engenharia de Computação na UNIVESP está em andamento.</p><div className="inline-links"><a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Trajetória profissional ↗</a><a className="text-link" href={company.github} target="_blank" rel="noreferrer">GitHub ↗</a><a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
    </div></section>
    <section className="section principles-section"><div className="container"><SectionHeading eyebrow="Como o trabalho acontece" title={<>Decisões claras.<br /><em>Responsabilidades definidas.</em></>} /><div className="principles-grid">{workPrinciples.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section"><div className="container narrative-grid"><div className="narrative-index"><span>Na prática</span><p>Do problema à continuidade</p></div><div className="narrative-content"><h2>O que você pode esperar</h2><p>Contato direto com quem desenvolve, escopo acordado, entregas para validar e documentação do que foi construído. A solução pode ser uma integração pequena, a evolução de uma loja ou uma ferramenta interna.</p><p>Implantação, hospedagem, serviços de terceiros e manutenção têm responsabilidades e custos definidos na proposta. A continuidade é combinada conforme a necessidade da operação.</p><Link className="text-link" href="/projetos">Ver projetos e estágios de entrega ↗</Link></div></div></section>
    <section className="inline-cta-section"><div className="container inline-cta"><div><p>Converse com quem vai desenvolver</p><h2>Conte o que precisa funcionar melhor.</h2></div><a className="button" href={whatsappUrl("a página Sobre")} target="_blank" rel="noreferrer">Falar com Pedro ↗</a></div></section>
  </>;
}

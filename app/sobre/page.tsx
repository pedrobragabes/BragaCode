import type { Metadata } from "next";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, techGroups, workPrinciples } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
 title: "Sobre a BragaCode", description: "Engenharia de software próxima do problema. Sistemas, integrações, automações e e-commerce com Pedro Braga à frente do desenvolvimento.", path: "/sobre",
});

export default function AboutPage() {
 return <>
  <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: company.name, url: absoluteUrl("/sobre"), founder: { "@type": "Person", name: company.founder, jobTitle: "Software Engineer" }, sameAs: [company.linkedin, company.github, company.personalSite] }} />
  <PageHero eyebrow="Sobre a BragaCode" title={<>Engenharia de software <em>próxima do problema.</em></>} description="A BragaCode é uma iniciativa de desenvolvimento de software fundada por Pedro Braga, voltada à criação de sistemas web, integrações, automações e soluções de e-commerce." aside={<p className="page-index">CONTEXTO · ENGENHARIA · CONTINUIDADE</p>} />
  <section className="section about-intro-section"><div className="container about-intro-grid">
   <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, fundador da BragaCode" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
   <div className="about-copy"><p className="eyebrow"><span aria-hidden="true" />Fundador e Software Engineer</p><h2>Pedro Braga</h2>
    <p className="lead-paragraph">Conversa direta com quem entende o processo e constrói a solução.</p>
    <p>Pedro trabalha com aplicações web, integração de dados e infraestrutura. A experiência na AquaFlora AgroShop conecta desenvolvimento à rotina de catálogo, estoque e e-commerce. No JoysticKnights, mantém um produto editorial próprio.</p>
    <p>O trabalho da BragaCode parte dos sistemas e processos existentes. O objetivo é entregar software que possa ser utilizado, mantido e evoluído por quem depende dele na operação.</p>
    <div className="inline-links"><a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Portfólio pessoal e trajetória ↗</a></div>
   </div>
  </div></section>
  <section className="section principles-section"><div className="container"><SectionHeading eyebrow="Como pensamos" title={<>Problema, contexto <em>e continuidade.</em></>} /><div className="principles-grid">{workPrinciples.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
  <section className="section technology-section"><div className="container"><SectionHeading eyebrow="Base técnica" title={<>Tecnologias que usamos <em>quando fazem sentido.</em></>} description="A stack acompanha o problema, as integrações existentes e a manutenção da solução." /><div className="technology-columns">{techGroups.map(group=><div key={group.label}><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div>)}</div></div></section>
  <section className="inline-cta-section"><div className="container inline-cta"><div><p>Vamos entender sua operação</p><h2>Tem um processo que precisa funcionar melhor?</h2></div><a className="button" href={whatsappUrl("a página Sobre")} target="_blank" rel="noreferrer">Falar sobre um projeto ↗</a></div></section>
 </>;
}

import type { Metadata } from "next";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StudioContact } from "@/components/ui/StudioContact";
import { company, techGroups, workPrinciples } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
 title: "Sobre a BragaCode", description: "Empresa de desenvolvimento de sistemas web, e-commerce e integrações, fundada por Pedro Braga.", path: "/sobre",
});

export default function AboutPage() {
 return <>
  <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: company.name, url: absoluteUrl("/sobre"), founder: { "@type": "Person", name: company.founder, jobTitle: "Software Engineer" }, sameAs: [company.linkedin, company.github, company.personalSite] }} />
  <PageHero title="Sobre a BragaCode" description="A BragaCode foi fundada por Pedro Braga e desenvolve sistemas web, lojas virtuais e integrações." />
  <section className="section about-intro-section studio-about-intro"><div className="container about-intro-grid">
   <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, fundador da BragaCode" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
   <div className="about-copy"><p className="eyebrow"><span aria-hidden="true" />Fundador e Software Engineer</p><h2>Pedro Braga</h2>
    <p>Pedro trabalha com aplicações web, integração de dados e infraestrutura. A experiência na AquaFlora AgroShop conecta desenvolvimento à rotina de catálogo, estoque e e-commerce. No JoysticKnights, mantém um produto editorial próprio.</p>
    <p>O trabalho da BragaCode parte dos sistemas e processos existentes. O objetivo é entregar software que possa ser utilizado, mantido e evoluído por quem depende dele na operação.</p>
    <div className="inline-links"><a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href={company.personalSite} target="_blank" rel="noreferrer">Portfólio pessoal e trajetória ↗</a></div>
   </div>
  </div></section>
  <section className="section principles-section"><div className="container"><SectionHeading eyebrow="Processo" title="Como trabalhamos" /><div className="principles-grid">{workPrinciples.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
  <section className="section technology-section"><div className="container"><SectionHeading eyebrow="Base técnica" title="Tecnologias" description="A stack acompanha o problema, as integrações existentes e a manutenção da solução." /><div className="technology-columns">{techGroups.map(group=><div key={group.label}><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div>)}</div></div></section>
  <StudioContact />
 </>;
}

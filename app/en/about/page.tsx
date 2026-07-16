import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "About Pedro Braga and BragaCode", description: "Pedro Braga's background connecting web software, operational integration and infrastructure at BragaCode.", path: "/en/about" });

const timeline = [
  ["2020", "Owned project in production", "Created and has continuously maintained Joysticknights, covering WordPress, publishing, SEO, performance and technical operation."],
  ["2025", "E-commerce operations", "Joined AquaFlora AgroShop to maintain WooCommerce and automate catalog, inventory and pricing workflows."],
  ["2025—present", "Engineering applied to operations", "Built Python/Docker middleware, a mobile-first internal app and a Node.js/LLM customer-service workflow."],
  ["2025—2030", "Computer Engineering", "Bachelor's degree in progress at UNIVESP, Brazil."],
] as const;

export default function EnglishAboutPage() {
  return <div lang="en"><JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Pedro Braga", url: absoluteUrl("/en/about"), jobTitle: "Software Engineer and BragaCode founder", sameAs: [company.linkedin, company.github, company.personalSite] }} /><PageHero eyebrow="About" title={<>Engineering close to the people <em>running the operation.</em></>} description="BragaCode was founded by Pedro Braga to build software with context: understand the workflow, integrate what already exists and make daily work more predictable." aside={<p className="page-index">PEDRO BRAGA / SOFTWARE ENGINEER</p>} /><section className="section about-intro-section"><div className="container about-intro-grid"><div className="about-monogram"><span>PB</span><p>São Paulo, Brazil<br />Remote collaboration</p></div><div className="about-copy"><p className="lead-paragraph">Pedro works at the intersection of web applications, data integration and infrastructure.</p><p>This means being able to investigate the WooCommerce catalog, the ERP ingestion routine, the internal API and the container running the workflow without treating each layer as an isolated problem.</p><p>Professional work at AquaFlora AgroShop provides daily contact with legacy data, thousands of catalog items, mobile inventory queries and recurring service automation.</p><div className="inline-links"><a className="text-link" href={company.linkedin}>LinkedIn ↗</a><a className="text-link" href={company.github}>GitHub ↗</a></div></div></div></section><section className="section timeline-section"><div className="container"><ol className="timeline-list">{timeline.map(([year,title,text]) => <li key={year}><span>{year}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section><section className="inline-cta-section"><div className="container inline-cta"><div><p>Work with BragaCode</p><h2>Bring the process that is taking too much work.</h2></div><a className="button" href={whatsappUrlEnglish("the About page")}>Talk to Pedro ↗</a></div></section></div>;
}

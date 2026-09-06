import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { aquafloraEnglishCase } from "@/content/english";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "AquaFlora AgroShop: WooCommerce, ERP and automation",
  description: "WooCommerce store, Python inventory synchronization and a locally validated internal application base.",
  path: "/en/projects/aquaflora-agroshop",
});

export default function EnglishAquafloraCasePage() {
  const project = aquafloraEnglishCase;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.summary, url: absoluteUrl("/en/projects/aquaflora-agroshop"), author: { "@type": "Person", name: "Pedro Braga" }, keywords: project.technologies.join(", ") },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/en") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/en/projects") },
      { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl("/en/projects/aquaflora-agroshop") },
    ] },
  ];

  return (
    <div lang="en">
      <JsonLd data={jsonLd} />
      <article>
        <header className="case-hero"><div className="container"><Link className="back-link" href="/en/projects">← All projects</Link><div className="case-hero-grid"><div><p className="eyebrow"><span aria-hidden="true" />{project.eyebrow}</p><h1>{project.name}</h1><p className="case-summary">{project.summary}</p><div className="case-meta"><div><span>Status</span><strong>{project.status}</strong></div><div><span>Period</span><strong>{project.period}</strong></div><div><span>Nature</span><strong>Professional work</strong></div></div></div><Image src="/images/projects/aquaflora-live.webp" width={1265} height={712} alt="AquaFlora public online store, captured September 2026" priority /></div></div></header>


        <section className="section case-narrative"><div className="container narrative-grid"><div className="narrative-index"><span>01</span><p>Problem and context</p></div><div className="narrative-content"><h2>What needed to change <em>in daily operations.</em></h2>{project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="context-box"><span>Context</span><p>{project.context}</p></div></div></div></section>

        <section className="section case-narrative alt-section"><div className="container narrative-grid"><div className="narrative-index"><span>02</span><p>Solution</p></div><div className="narrative-content"><h2>Responsibilities separated into <em>operable components.</em></h2>{project.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="large-tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></div></section>

        <section className="section case-results-section"><div className="container results-grid"><div><p className="eyebrow"><span aria-hidden="true" />Results</p><h2>What changed — and what <em>continues to evolve.</em></h2></div><div><ol className="results-list">{project.results.map((result, index) => <li key={result}><span>0{index + 1}</span><p>{result}</p></li>)}</ol><p className="confidentiality-note"><strong>Disclosure note.</strong> ERP details, credentials, commercial rules and screens containing real operational data are omitted.</p><aside className="case-evidence"><div><span>Case transparency</span><strong>Professional work</strong></div><dl><div><dt>Description basis</dt><dd>Public store and documentation of the aquaflora and aquaflora-stock-sync repositories.</dd></div><div><dt>Last review</dt><dd>September 6, 2026</dd></div></dl></aside></div></div></section>

        <section className="case-cta"><div className="container"><p>Similar project</p><h2>Does a process still depend on <em>manual checking?</em></h2><a className="button" href={whatsappUrlEnglish("the AquaFlora case study")} target="_blank" rel="noreferrer">Discuss your context <span aria-hidden="true">↗</span></a></div></section>
      </article>
    </div>
  );
}

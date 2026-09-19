import type { Metadata } from "next";
import Link from "next/link";
import { EnglishProjectCard } from "@/components/project/EnglishProjectCard";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";
import { englishProjects, englishServices } from "@/content/english";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Software, e-commerce and automation",
  description: "Web applications, e-commerce and integrations to connect data, automate workflows and simplify business operations.",
  path: "/en",
});

export default function EnglishHomePage() {
  return (
    <div lang="en">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "BragaCode",
        url: absoluteUrl("/en"),
        description: "Web applications, e-commerce and integrations to connect data, automate workflows and simplify business operations.",
        areaServed: { "@type": "Country", name: "Brazil" },
        founder: { "@type": "Person", name: "Pedro Braga" },
      }} />
      <section className="commercial-hero"><div className="container commercial-hero-grid">
        <div className="commercial-hero-copy"><p className="eyebrow"><span aria-hidden="true" />Software for your business</p><h1>Connected systems.<br /><em>Simpler operations.</em></h1><p className="hero-lead">Web applications, e-commerce and integrations that organize data and automate your company&apos;s daily work.</p><div className="hero-actions"><Link className="button" href="/en/contact">Discuss a project ↗</Link><Link className="button button-secondary" href="/en/projects">Explore projects</Link></div><p className="hero-note">From the first conversation to delivery, directly with Pedro Braga.</p></div>
        <div className="brand-panel"><div className="brand-panel-top"><span>BRAGA CODE</span><span>Software development</span></div><Image className="brand-panel-symbol" src="/brand/symbol.svg" alt="Angular BC monogram with code chevrons" width={820} height={470} priority /><div className="brand-panel-bottom"><span>Connect. Simplify. Build.</span><span aria-hidden="true">↗</span></div><div className="hero-flow" aria-label="Integration example: ERP, validation and online store"><span>ERP / files</span><i aria-hidden="true">→</i><span>Validation</span><i aria-hidden="true">→</i><span>Online store</span></div></div>
      </div></section>

<section className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="Services" title={<>From the storefront to <em>the operational layer.</em></>} description="Interface, business rules, integrations and deployment treated as parts of the same workflow." action={<Link className="text-link" href="/en/services">View all services ↗</Link>} />
          <div className="services-grid english-service-offers">
            {englishServices.filter(service => ["ecommerce", "web-applications", "apis-and-integrations", "infrastructure-and-support"].includes(service.slug)).map((service) => (
              <article className="service-card" key={service.slug}>
                <div><span>{service.number}</span><i aria-hidden="true">↗</i></div><h3>{service.title}</h3><p>{service.summary}</p>
                <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                <Link href={`/en/services#${service.slug}`}>Explore service</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <SectionHeading eyebrow="Featured projects" title={<>Code connected to <em>real work.</em></>} description="Professional experience and independent products by Pedro Braga, founder of BragaCode." action={<Link className="text-link" href="/en/projects">Open portfolio ↗</Link>} />
          <div className="projects-grid selected-projects">{englishProjects.map((project, index) => <EnglishProjectCard project={project} index={index} key={project.slug} />)}</div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-portrait"><Image src="/images/pedro-braga.webp" alt="Pedro Braga, founder of BragaCode" width={600} height={750} sizes="(max-width: 820px) 100vw, 30vw" /></div>
          <div className="founder-copy"><p className="eyebrow"><span aria-hidden="true" />Founder</p><h2>Pedro Braga.<br /><em>Founder and technical lead.</em></h2><p>Pedro works across web applications, data integration and infrastructure. His current work includes WooCommerce operations, legacy ERP integration, internal mobile tools and Python/Node.js automation.</p><div className="inline-links"><Link className="text-link" href="/en/about">Read the background ↗</Link><a className="text-link" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        </div>
      </section>

      <section className="final-cta"><div className="container"><p>BragaCode / software applied to operations</p><h2>If the team repeats it every day,<br /><em>it is worth checking what software can remove.</em></h2><a className="button" href={whatsappUrlEnglish("the final English CTA")} target="_blank" rel="noreferrer">Start the conversation <span aria-hidden="true">↗</span></a></div></section>
    </div>
  );
}

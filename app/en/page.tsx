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
  description: "Software, e-commerce and automation for companies that want to grow without relying on manual processes.",
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
        description: "Software, e-commerce and automation for companies that want to grow without relying on manual processes.",
        areaServed: { "@type": "Country", name: "Brazil" },
        founder: { "@type": "Person", name: "Pedro Braga" },
      }} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" />Software connected to operations</p>
            <h1>Technology that connects <em>your business.</em></h1>
            <p className="hero-lead">Online stores, custom systems and integrations that keep your data moving. From design to deployment, with Pedro Braga leading development.</p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrlEnglish("the English home page")} target="_blank" rel="noreferrer">Discuss a project <span aria-hidden="true">↗</span></a>
              <Link className="button button-secondary" href="/en/projects">View projects <span aria-hidden="true">↓</span></Link>
            </div>
            <p className="hero-note"><span aria-hidden="true">●</span> Remote work across Brazil · English C1 · technical leadership by Pedro Braga</p>
          </div>
          <Link href="/en/projects/aquaflora-agroshop" className="company-hero-work"><div className="work-caption"><span>Applied experience</span><span>01 / AquaFlora ↗</span></div><Image src="/images/projects/aquaflora-live.webp" width={1265} height={712} alt="AquaFlora AgroShop public online store" priority sizes="(max-width: 820px) 100vw, 55vw" /><div className="work-caption"><strong>E-commerce connected to operations</strong><span>Explore Pedro Braga&apos;s work</span></div></Link>
        </div>
      </section>

<section className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="Services" title={<>From the storefront to <em>the operational layer.</em></>} description="Interface, business rules, integrations and deployment treated as parts of the same workflow." action={<Link className="text-link" href="/en/services">View all services ↗</Link>} />
          <div className="services-grid">
            {englishServices.filter(service => ["ecommerce", "web-applications", "apis-and-integrations"].includes(service.slug)).map((service) => (
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
          <div className="projects-grid featured-projects">{englishProjects.map((project, index) => <EnglishProjectCard project={project} index={index} key={project.slug} />)}</div>
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

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { englishServices } from "@/content/english";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Services", description: "Websites, e-commerce, custom systems, integrations, automation and infrastructure connected to operational workflows.", path: "/en/services" });

export default function EnglishServicesPage() {
  const jsonLd = englishServices.map((service) => ({ "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.summary, url: `${absoluteUrl("/en/services")}#${service.slug}`, provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl("/en") }, areaServed: { "@type": "Country", name: "Brazil" } }));
  return <div lang="en"><JsonLd data={jsonLd} /><PageHero eyebrow="Services" title={<>Software for the work that happens <em>between sales and operations.</em></>} description="BragaCode builds the customer-facing interface, the tools used by the team and the integrations that keep information moving." aside={<a className="button" href={whatsappUrlEnglish("the Services page")} target="_blank" rel="noreferrer">Discuss a bottleneck ↗</a>} /><section className="section service-detail-section"><div className="container service-detail-list">{englishServices.map((service) => <article className="service-detail" id={service.slug} key={service.slug}><div className="service-detail-number">{service.number}</div><div className="service-detail-main"><p className="eyebrow"><span aria-hidden="true" />{service.title}</p><h2>{service.title}</h2><p className="service-summary">{service.summary}</p><div className="service-problem"><span>When it makes sense</span><p>{service.problem}</p></div></div><div className="service-detail-aside"><div><p className="micro-label">Common deliverables</p><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><Link className="text-link" href="/en/contact">Discuss this service ↗</Link></div></article>)}</div></section><section className="inline-cta-section"><div className="container inline-cta"><div><p>Have a specific process?</p><h2>Describe the bottleneck, not a preselected solution.</h2></div><a className="button" href={whatsappUrlEnglish("the Services page")} target="_blank" rel="noreferrer">Talk to Pedro ↗</a></div></section></div>;
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { StudioContact } from "@/components/ui/StudioContact";
import { StudioServices } from "@/components/ui/StudioServices";
import { englishServices } from "@/content/english";
import { serviceTiles } from "@/content/studio";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Services", description: "Websites, e-commerce, custom systems, integrations, automation and infrastructure connected to operational workflows.", path: "/en/services" });

export default function EnglishServicesPage() {
  const jsonLd = englishServices.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/en/services/${service.slug}`),
    provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl("/en") },
    areaServed: { "@type": "Country", name: "Brazil" },
  }));

  return (
    <div lang="en">
      <JsonLd data={jsonLd} />
      <PageHero title="Services" description="Software development and integration for your day-to-day operations." />
      <section className="studio-section studio-service-index">
        <div className="container">
          <h2 className="sr-only">Available services</h2>
          <StudioServices items={serviceTiles(true)} label="Service details" />
        </div>
      </section>
      <StudioContact english />
    </div>
  );
}

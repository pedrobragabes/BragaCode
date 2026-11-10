import type { Metadata } from "next";
import { StudioHome } from "@/components/layout/StudioHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const description = "Web applications, e-commerce, ERP integrations, and inventory and pricing automation.";

export const metadata: Metadata = createMetadata({ title: "Software development", description, path: "/en" });

export default function EnglishHomePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ProfessionalService",
        name: company.name, url: absoluteUrl("/en"), description,
        areaServed: { "@type": "Country", name: "Brazil" },
        founder: { "@type": "Person", name: company.founder },
      }} />
      <StudioHome locale="en" />
    </>
  );
}

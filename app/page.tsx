import type { Metadata } from "next";
import { StudioHome } from "@/components/layout/StudioHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/content/company";
import { coreServices } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const description = "Desenvolvimento de sistemas web, e-commerce, integrações com ERP e automação de estoque e preços.";

export const metadata: Metadata = createMetadata({ title: "Desenvolvimento de software", description, path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ProfessionalService",
        name: company.name, url: absoluteUrl(), logo: absoluteUrl("/images/brand/logo-color.png"),
        description, founder: { "@type": "Person", name: company.founder },
        sameAs: [company.linkedin, company.github, company.personalSite], email: company.email,
        areaServed: { "@type": "Country", name: "Brasil" },
        serviceType: coreServices.map(service => service.shortTitle),
      }} />
      <StudioHome locale="pt-BR" />
    </>
  );
}

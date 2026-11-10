import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { StaticImage } from "@/components/ui/StaticImage";
import { StudioContact } from "@/components/ui/StudioContact";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "About BragaCode", description: "Pedro Braga's background connecting web software, operational integration and infrastructure at BragaCode.", path: "/en/about" });

export default function EnglishAboutPage() {
  return (
    <div lang="en">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: company.founder, url: absoluteUrl("/en/about"), jobTitle: "Software Engineer and BragaCode founder", sameAs: [company.linkedin, company.github, company.personalSite] }} />
      <PageHero title="About BragaCode" description="Software engineering for web applications, e-commerce and integrations." />
      <section className="section about-intro-section studio-about-intro">
        <div className="container about-intro-grid">
          <div className="founder-portrait"><StaticImage src="/images/pedro-braga.webp" alt={company.founder} width={600} height={750} /></div>
          <div className="about-copy">
            <p className="eyebrow">Founder and software engineer</p>
            <h2>{company.founder}</h2>
            <p>Pedro works on web applications, data integration and infrastructure. His work at AquaFlora AgroShop involves catalog, inventory and e-commerce operations. He also maintains JoysticKnights, his own editorial product.</p>
            <p>BragaCode starts with the systems your team already uses, then builds and documents the software the team will operate.</p>
            <div className="inline-links"><a className="text-link" href={company.linkedin}>LinkedIn ↗</a><a className="text-link" href={company.personalSite}>Personal portfolio ↗</a></div>
          </div>
        </div>
      </section>
      <StudioContact english />
    </div>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Contact", description: "Describe the process, volume and rework. Talk to Pedro Braga about websites, e-commerce, systems, integrations or automation.", path: "/en/contact" });

export default function EnglishContactPage() {
  return <div lang="en"><PageHero title="Contact" description="Write to Pedro Braga about what you need to build or improve." /><section className="section contact-page-section"><div className="container contact-page-grid"><aside className="contact-sidebar"><div><p className="micro-label">Email</p><a href={`mailto:${company.email}`}>{company.email}</a></div><div><p className="micro-label">WhatsApp</p><a href={whatsappUrlEnglish("the Contact page")} target="_blank" rel="noreferrer">{company.phoneDisplay} ↗</a></div><div><p className="micro-label">Location</p><p>São Paulo, Brazil<br />Remote collaboration</p></div></aside><div><div className="form-heading"><h2>Send a message</h2></div><ContactForm source="the English Contact page" locale="en" /></div></div></section></div>;
}

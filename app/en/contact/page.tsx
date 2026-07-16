import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";
import { whatsappUrlEnglish } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Contact", description: "Describe the process, volume and rework. Talk to Pedro Braga about websites, e-commerce, systems, integrations or automation.", path: "/en/contact" });

export default function EnglishContactPage() {
  return <div lang="en"><PageHero eyebrow="Contact" title={<>You do not need to arrive with <em>a finished scope.</em></>} description="Describe what happens today, who uses the process and where work is repeated. The first conversation is used to find a useful technical scope." aside={<p className="page-index">DIRECT REPLY / PEDRO BRAGA</p>} /><section className="section contact-page-section"><div className="container contact-page-grid"><aside className="contact-sidebar"><div><p className="micro-label">Email</p><a href={`mailto:${company.email}`}>{company.email}</a></div><div><p className="micro-label">WhatsApp</p><a href={whatsappUrlEnglish("the Contact page")} target="_blank" rel="noreferrer">{company.phoneDisplay} ↗</a></div><div><p className="micro-label">Location</p><p>São Paulo, Brazil<br />Remote collaboration</p></div><div className="response-note"><span>Response time</span><strong>Usually within one business day.</strong><p>Urgent requests should be identified at the beginning of the message.</p></div></aside><div><div className="form-heading"><span>01</span><h2>Which process needs to work better?</h2></div><ContactForm source="the English Contact page" locale="en" /></div></div></section></div>;
}

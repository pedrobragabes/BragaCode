import type { Metadata } from "next";
import { EnglishProjectCard } from "@/components/project/EnglishProjectCard";
import { PageHero } from "@/components/ui/PageHero";
import { englishProjects } from "@/content/english";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Projects", description: "E-commerce, integration, automation and web application cases built by Pedro Braga and BragaCode.", path: "/en/projects" });

export default function EnglishProjectsPage() {
  return <div lang="en"><PageHero eyebrow="Projects" title={<>Problem, implementation and result. <em>In that order.</em></>} description="Selected professional work and owned products presented with their current status and disclosure limits." aside={<p className="page-index">PORTFOLIO / 2020—2026</p>} /><section className="section projects-page-section"><div className="container projects-grid">{englishProjects.map((project, index) => <EnglishProjectCard project={project} index={index} key={project.slug} />)}</div></section></div>;
}

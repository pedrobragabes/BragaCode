import type { Metadata } from "next";
import { EnglishProjectCard } from "@/components/project/EnglishProjectCard";
import { PageHero } from "@/components/ui/PageHero";
import { englishProjects } from "@/content/english";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Projects", description: "E-commerce, integration, automation and web application cases built by Pedro Braga and BragaCode.", path: "/en/projects" });

export default function EnglishProjectsPage() {
  return <div lang="en"><PageHero title="Projects" description="Professional work and independent products, with the current status of each project." /><section className="section projects-page-section"><div className="container projects-grid">{englishProjects.map((project, index) => <EnglishProjectCard project={project} index={index} key={project.slug} />)}</div></section></div>;
}

import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/project/ProjectsFilter";
import { PageHero } from "@/components/ui/PageHero";
import { projects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projetos",
  description: "Cases de e-commerce, integrações, automações, sistemas web, PWA e infraestrutura desenvolvidos por Pedro Braga.",
  path: "/projetos",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title={<>Problema, implementação e resultado. <em>Nessa ordem.</em></>}
        description={`${projects.length} projetos entre trabalhos em operação, produtos próprios, protótipos identificados e laboratório técnico.`}
        aside={<p className="page-index">PORTFÓLIO / 2020—2026</p>}
      />
      <section className="section projects-page-section">
        <div className="container"><ProjectsFilter /></div>
      </section>
    </>
  );
}

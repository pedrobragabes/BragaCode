import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/project/ProjectsFilter";
import { PageHero } from "@/components/ui/PageHero";

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
        title={<>Projetos que mostram <em>como trabalhamos.</em></>}
        description="Conheça a experiência de Pedro Braga em e-commerce, plataformas editoriais e sistemas. Cada case apresenta o contexto, a contribuição e o estágio atual."
        aside={<p className="page-index">ENGENHARIA · PRODUTO · OPERAÇÃO</p>}
      />
      <section className="section projects-page-section">
        <div className="container"><ProjectsFilter /></div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/project/ProjectsFilter";
import { PageHero } from "@/components/ui/PageHero";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cases",
  description: "Cases de e-commerce, integrações, automações, sistemas web, PWA e infraestrutura desenvolvidos por Pedro Braga.",
  path: "/projetos",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title={<>Problemas que ajudam a entender <em>como trabalhamos.</em></>}
        description="Uma seleção de trabalhos em operação, modernização editorial e produtos próprios. Contexto, solução e maturidade apresentados em cada case."
        aside={<p className="page-index">ENGENHARIA · PRODUTO · OPERAÇÃO</p>}
      />
      <section className="section projects-page-section">
        <div className="container"><ProjectsFilter /></div>
      </section>
    </>
  );
}

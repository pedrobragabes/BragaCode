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
      <PageHero title="Projetos" description="Trabalhos profissionais e produtos próprios, com o estágio de cada projeto." />
      <section className="section projects-page-section">
        <div className="container"><ProjectsFilter /></div>
      </section>
    </>
  );
}

import type { Project } from "@/content/projects";
import { StudioProject } from "./StudioProject";

export function ProjectCard({ project }: { project: Project }) {
  return <StudioProject
    name={project.name}
    href={`/projetos/${project.slug}`}
    category={project.categories.join(" · ")}
    summary={project.summary}
    status={project.status}
    image={project.gallery[0].asset}
    label="Ver projeto"
    tone={project.slug === "aquaflora-agroshop" ? "sand" : "slate"}
  />;
}

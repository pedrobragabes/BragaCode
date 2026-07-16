import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <Link href={`/projetos/${project.slug}`} className="project-card-visual" aria-label={`Ver case ${project.name}`}>
        <ProjectVisual kind={project.gallery[0].kind} label={`Representação visual do projeto ${project.name}`} compact />
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.status}</span>
          <span>{project.period}</span>
        </div>
        <h3><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list">
          {project.categories.map((category) => <span key={category}>{category}</span>)}
        </div>
        <Link className="text-link" href={`/projetos/${project.slug}`}>
          Abrir estudo de caso <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

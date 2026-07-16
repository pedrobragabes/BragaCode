import Link from "next/link";
import type { ProjectVisualKind } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";

type EnglishProject = {
  slug: string;
  name: string;
  status: string;
  period: string;
  eyebrow: string;
  summary: string;
  technologies: readonly string[];
  visual: string;
};

export function EnglishProjectCard({ project, index }: { project: EnglishProject; index: number }) {
  const href = project.slug === "aquaflora-agroshop" ? `/en/projects/${project.slug}` : "/en/contact";

  return (
    <article className="project-card">
      <Link href={href} className="project-card-visual" aria-label={`View ${project.name} case study`}>
        <ProjectVisual kind={project.visual as ProjectVisualKind} label={`Reconstructed visual for ${project.name}`} compact locale="en" />
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.status}</span><span>{project.period}</span></div>
        <h3><Link href={href}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="text-link" href={href}>{project.slug === "aquaflora-agroshop" ? "Open case study" : "Discuss a similar project"} <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

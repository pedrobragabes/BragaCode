import Link from "next/link";
import type { Project } from "@/content/projects";
import { StaticImage as Image } from "@/components/ui/StaticImage";
import { ProjectGalleryMedia } from "./ProjectGalleryMedia";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <Link href={`/projetos/${project.slug}`} className="project-card-visual" aria-label={`Ver case ${project.name}`}>
        {project.gallery[0].asset ? <Image src={project.gallery[0].asset.src} alt={project.gallery[0].asset.alt} width={1265} height={712} sizes="(max-width: 820px) 100vw, 50vw" /> : <ProjectGalleryMedia item={project.gallery[0]} />}
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.status}</span>
          <span>{project.evidence.nature}</span>
        </div>
        <h3><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        {project.parentSlug && <p className="project-card-contribution">Parte do mesmo contexto de integração de varejo.</p>}
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

import Link from "next/link";
import Image from "next/image";

type EnglishProject = {
  slug: string;
  name: string;
  status: string;
  period: string;
  eyebrow: string;
  summary: string;
  technologies: readonly string[];
  visual: string;
  image: string;
};

export function EnglishProjectCard({ project, index }: { project: EnglishProject; index: number }) {
  const href = project.slug === "aquaflora-agroshop" ? `/en/projects/${project.slug}` : `/projetos/${project.slug}`;

  return (
    <article className="project-card">
      <Link href={href} className="project-card-visual" aria-label={`View ${project.name} case study`}>
        <Image unoptimized src={`/images/projects/${project.image}-live.webp`} width={1265} height={712} alt={`${project.name} public website`} sizes="(max-width: 820px) 100vw, 50vw" />
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.status}</span><span>{project.period}</span></div>
        <h3><Link href={href}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="text-link" href={href}>{project.slug === "aquaflora-agroshop" ? "Open case study" : "Read case in Portuguese"} <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

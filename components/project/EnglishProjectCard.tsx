import { projectPath } from "@/lib/seo";
import { StudioProject } from "./StudioProject";

type EnglishProject = { slug: string; name: string; status: string; eyebrow: string; summary: string; image: string | null };

export function EnglishProjectCard({ project }: { project: EnglishProject }) {
  const image = project.image ? {
    src: project.image,
    width: project.slug === "promogames" ? 1440 : 1265,
    height: project.slug === "promogames" ? 1000 : 712,
    alt: `${project.name} website`,
  } : undefined;

  return <StudioProject
    name={project.name}
    href={projectPath(project.slug, "en")}
    category={project.eyebrow}
    status={project.status}
    summary={project.summary}
    image={image}
    label="View project"
    tone={project.slug === "aquaflora-agroshop" ? "sand" : "slate"}
  />;
}

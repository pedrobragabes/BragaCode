import Link from "next/link";
import { StaticImage } from "@/components/ui/StaticImage";

type ProjectPreview = { src: string; width: number; height: number; alt: string };

export function StudioProject({ name, href, category, summary, status, image, label, tone = "slate" }: {
  name: string;
  href: string;
  category: string;
  summary: string;
  status?: string;
  image?: ProjectPreview;
  label: string;
  tone?: "slate" | "sand" | "lavender";
}) {
  return (
    <article className="project-card studio-project">
      <Link href={href} className="studio-project-link" aria-label={`${label}: ${name}`}>
        <div className="studio-project-art" data-tone={tone}>
          {image ? (
            <div className="studio-project-frame">
              <StaticImage {...image} />
            </div>
          ) : (
            <div className="studio-project-placeholder" aria-hidden="true"><span>{category}</span><strong>{name}</strong></div>
          )}
        </div>
        <div className="studio-project-body">
          <div className="studio-project-meta"><span>{category}</span>{status && <span>{status}</span>}</div>
          <div className="studio-project-title">
            <h3>{name}</h3>
            <span aria-hidden="true">↗</span>
          </div>
          <p>{summary}</p>
        </div>
      </Link>
    </article>
  );
}

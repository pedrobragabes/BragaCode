"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { StaticImage } from "@/components/ui/StaticImage";

export type ShowcaseProject = {
  slug: string;
  name: string;
  category: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
};

export function ProjectShowcase({ projects, label, viewProject }: {
  projects: readonly ShowcaseProject[];
  label: string;
  viewProject: string;
}) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function changeTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = projects.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowLeft": next = index === 0 ? last : index - 1; break;
      case "ArrowRight": next = index === last ? 0 : index + 1; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <>
      <div className="showcase-tabs" role="tablist" aria-label={label}>
        {projects.map((project, index) => (
          <button
            key={project.slug}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            id={`showcase-tab-${project.slug}`}
            role="tab"
            aria-controls={`showcase-panel-${project.slug}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => changeTab(event, index)}
          >
            <span aria-hidden="true">0{index + 1}</span>
            {project.name}
          </button>
        ))}
      </div>

      {projects.map((project, index) => (
        <div
          key={project.slug}
          className="showcase-panel"
          id={`showcase-panel-${project.slug}`}
          role="tabpanel"
          aria-labelledby={`showcase-tab-${project.slug}`}
          hidden={active !== index}
        >
          {active === index && (
            <Link className="showcase-project" href={project.href} aria-label={`${viewProject}: ${project.name}`}>
              <span className="showcase-media">
                <StaticImage {...project.image} loading="eager" priority={index === 0} />
              </span>
              <div className="showcase-caption">
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.category}</p>
                </div>
                <span className="showcase-case-link">{viewProject}<span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
}

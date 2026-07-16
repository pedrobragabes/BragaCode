"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const categories: ("Todos" | ProjectCategory)[] = [
  "Todos", "E-commerce", "Automação", "Sistema web", "Plataforma", "Infraestrutura", "Conteúdo", "Protótipo",
];

export function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todos");
  const visibleProjects = useMemo(
    () => activeCategory === "Todos" ? projects : projects.filter((project) => project.categories.includes(activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filtrar projetos por categoria">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? "is-active" : ""}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="filter-count" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "projeto" : "projetos"}</p>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} index={projects.indexOf(project)} />
        ))}
      </div>
    </>
  );
}

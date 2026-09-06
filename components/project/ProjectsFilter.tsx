"use client";

import { useMemo, useState } from "react";
import { listedProjects as projects, type ProjectCategory } from "@/content/projects";
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
      {[{title: "Experiência profissional", nature: "Trabalho profissional"}, {title: "Produtos próprios", nature: "Projeto próprio"}, {title: "Estudos e laboratório", nature: "other"}].map(group => {
        const items = visibleProjects.filter(project => group.nature === "other" ? !["Trabalho profissional", "Projeto próprio"].includes(project.evidence.nature) : project.evidence.nature === group.nature);
        return items.length ? <section className="project-group" key={group.nature}><h2>{group.title}</h2><div className="projects-grid">{items.map(project => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />)}</div></section> : null;
      })}
    </>
  );
}

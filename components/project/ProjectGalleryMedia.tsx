import { StaticImage as Image } from "@/components/ui/StaticImage";
import type { ProjectGalleryItem } from "@/content/projects";

export function ProjectGalleryMedia({ item, priority = false, sizes = "(max-width: 820px) 100vw, 50vw" }: { item: ProjectGalleryItem; priority?: boolean; sizes?: string }) {
  return <div className={`project-gallery-media ${item.asset ? "has-asset" : "is-diagram"}`}>
    {item.asset ? <Image className="project-gallery-image" src={item.asset.src} alt={item.asset.alt} width={item.asset.width} height={item.asset.height} sizes={sizes} priority={priority} />
      : item.flow ? <div className="flow-diagram"><p>Fluxo da solução</p><ol>{item.flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < item.flow!.length - 1 && <i aria-hidden="true">↓</i>}</li>)}</ol><small>Diagrama técnico simplificado</small></div>
      : <div className="project-type-cover"><span>Projeto em detalhe</span><strong>{item.title}</strong><p>{item.caption}</p></div>}
    {item.asset && <span className="project-media-origin">Captura do site público</span>}
  </div>;
}

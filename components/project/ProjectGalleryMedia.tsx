import Image from "next/image";
import type { ProjectGalleryItem } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectGalleryMediaProps = {
  item: ProjectGalleryItem;
  priority?: boolean;
  sizes?: string;
};

export function ProjectGalleryMedia({
  item,
  priority = false,
  sizes = "(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw",
}: ProjectGalleryMediaProps) {
  return (
    <div className={`project-gallery-media ${item.asset ? "has-asset" : "is-reconstructed"}`}>
      {item.asset ? (
        <Image
          className="project-gallery-image"
          src={item.asset.src}
          alt={item.asset.alt}
          width={item.asset.width}
          height={item.asset.height}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <ProjectVisual kind={item.kind} label={`${item.title}: ${item.caption}`} />
      )}
      <span className="project-media-origin">
        {item.asset ? "Screenshot autorizado" : "Representação reconstruída"}
      </span>
    </div>
  );
}

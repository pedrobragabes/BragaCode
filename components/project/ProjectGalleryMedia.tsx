import Image from "next/image";
import type { ProjectGalleryItem } from "@/content/projects";


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
        <Image unoptimized
          className="project-gallery-image"
          src={item.asset.src}
          alt={item.asset.alt}
          width={item.asset.width}
          height={item.asset.height}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className="project-type-cover"><span>Projeto em detalhe</span><strong>{item.title}</strong><p>{item.caption}</p></div>
      )}
      <span className="project-media-origin">
        {item.asset ? "Captura do site público" : ""}
      </span>
    </div>
  );
}

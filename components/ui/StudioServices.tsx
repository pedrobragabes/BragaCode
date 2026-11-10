import Link from "next/link";
import { StudioIcon, type StudioIconName } from "./StudioIcon";

type ServiceTile = { slug: string; href: string; name: string; description: string; icon: StudioIconName; problem?: string };

export function StudioServices({ items, label }: { items: readonly ServiceTile[]; label: string }) {
  return (
    <div className="studio-service-grid">
      {items.map((item) => (
        <article className="studio-service-tile" key={item.slug} id={item.slug}>
          <Link href={item.href} aria-label={`${label}: ${item.name}`}>
            <span className="studio-service-icon"><StudioIcon name={item.icon} /></span>
            <span className="studio-service-arrow" aria-hidden="true">↗</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.problem && <p className="studio-service-problem">{item.problem}</p>}
          </Link>
        </article>
      ))}
    </div>
  );
}

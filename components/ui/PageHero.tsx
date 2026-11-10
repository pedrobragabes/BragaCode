import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-copy">
          {eyebrow && <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>}
          <h1>{title}</h1>
          <p>{description}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { StaticImage } from "@/components/ui/StaticImage";
import { englishProjects } from "@/content/english";
import { createMetadata } from "@/lib/seo";

const caseDetails = {
  promogames: {
    heading: "Keeping the WordPress publishing workflow",
    description: "The editorial team can keep publishing in WordPress while a separate Next.js frontend handles the public site. The integration includes editorial previews, content updates via signed webhooks and support for existing URLs.",
    status: "The screenshot shows a local preview. The production migration is still in preparation.",
  },
  "braga-commerce": {
    heading: "Inventory and payments at checkout",
    description: "The server validates prices and availability, reserves stock in PostgreSQL and processes Mercado Pago confirmations. Repeated payment notifications are handled without processing the same confirmation twice.",
    status: "The storefront and admin panel are implemented in a password-protected beta. The commercial launch is pending.",
  },
  joysticknights: {
    heading: "How the site is built",
    description: "WordPress handles articles, reviews and categories. A separate Next.js frontend displays the content and lets readers browse by topic.",
    status: "JoysticKnights is an independent publication maintained by Pedro Braga since 2020.",
  },
} as const;

const translatedCases = englishProjects.slice(1);

export function generateStaticParams() {
  return translatedCases.map(({ slug }) => ({ slug }));
}

function findCase(slug: string) {
  const project = translatedCases.find((entry) => entry.slug === slug);
  if (!project || !Object.hasOwn(caseDetails, slug)) notFound();
  return { project, detail: caseDetails[slug as keyof typeof caseDetails] };
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = findCase((await params).slug);
  return createMetadata({ title: project.name, description: project.summary, path: `/en/projects/${project.slug}` });
}

export default async function EnglishCasePage({ params }: Props) {
  const { project, detail } = findCase((await params).slug);
  return (
    <article lang="en">
      <PageHero title={project.name} description={project.summary} />
      <section className="section case-narrative">
        <div className="container narrative-grid">
          <div className="narrative-index">
            <Link className="back-link" href="/en/projects">← All projects</Link>
            <p>{project.status}</p>
          </div>
          <div className="narrative-content">
            <h2>{detail.heading}</h2>
            <p>{detail.description}</p>
            <p>{detail.status}</p>
            <div className="large-tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            {project.image && (
              <figure className="studio-case-image">
                <StaticImage src={project.image} alt={`${project.name} interface`} width={1265} height={712} />
              </figure>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

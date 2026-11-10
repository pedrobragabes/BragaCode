import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnglishProjectCard } from "@/components/project/EnglishProjectCard";
import { StudioServiceDetail } from "@/components/ui/StudioServiceDetail";
import { englishProjects, englishServices } from "@/content/english";
import { getService } from "@/content/services";
import { serviceIndex, serviceTiles, workflow } from "@/content/studio";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return englishServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = englishServices.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({ title: service.title, description: service.summary, path: `/en/services/${service.slug}` });
}

export default async function EnglishServicePage({ params }: Props) {
  const { slug } = await params;
  const service = englishServices.find((item) => item.slug === slug);
  const entry = serviceIndex.find((item) => item.en === slug);
  if (!service || !entry) notFound();
  const original = getService(entry.pt);
  const related = englishProjects.filter((project) => original?.projectSlugs.includes(project.slug));
  const ecommerce = service.slug === "ecommerce";

  return <StudioServiceDetail
    english
    icon={entry.icon}
    title={ecommerce ? "E-commerce and ERP integration" : service.title}
    summary={service.summary}
    problem={service.problem}
    scope={ecommerce ? ["Map product, pricing, inventory and order sources.", "Build the catalog, checkout and admin workflows around your team.", "Validate synchronization with logs and recovery for failed updates."] : undefined}
    deliverables={ecommerce ? [...service.deliverables, "checkout and inventory synchronization"] : service.deliverables}
    technologies={original?.technologies}
    process={ecommerce ? [
      { title: "Map the store operations", description: "Document data sources, pricing, inventory and order handling." },
      { title: "Build and test", description: "Implement the catalog and connectors in stages, with a test environment." },
      { title: "Deploy and hand over", description: "Monitor synchronization and document the workflow for the catalog team." },
    ] : workflow.en}
    faq={ecommerce ? [
      { question: "Can you work with an existing WooCommerce store?", answer: "Yes. We can maintain or integrate an existing store when it still fits the operation." },
      { question: "Can you synchronize data from a legacy ERP?", answer: "It depends on the available access. An API, authorized database access or exports can feed a sync workflow with validation, logs and retries." },
      { question: "Does every catalog need an online checkout?", answer: "No. A catalog can send a product selection to WhatsApp or to a sales team for a quote." },
    ] : undefined}
    related={related.length ? related.map((project) => <EnglishProjectCard key={project.slug} project={project} />) : undefined}
    otherServices={serviceTiles(true).filter((item) => item.slug !== slug)}
  />;
}

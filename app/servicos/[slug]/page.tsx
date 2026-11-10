import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { StudioServiceDetail } from "@/components/ui/StudioServiceDetail";
import { projects } from "@/content/projects";
import { getService, services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { serviceIndex, serviceTiles } from "@/content/studio";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((project) => service.projectSlugs.includes(project.slug));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      serviceType: service.shortTitle,
      url: absoluteUrl(`/servicos/${service.slug}`),
      provider: { "@type": "ProfessionalService", name: "BragaCode", url: absoluteUrl() },
      areaServed: { "@type": "Country", name: "Brasil" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Entregáveis de ${service.shortTitle}`,
        itemListElement: service.deliverables.map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Serviços", item: absoluteUrl("/servicos") },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: absoluteUrl(`/servicos/${service.slug}`) },
      ],
    },
  ];

  const icon = serviceIndex.find((item) => item.pt === slug)?.icon ?? "web";

  return (
    <>
      <JsonLd data={jsonLd} />
      <StudioServiceDetail
        icon={icon}
        title={service.slug === "ecommerce" ? "E-commerce e integração com ERP" : service.title}
        summary={service.summary}
        problem={service.problem}
        scope={service.scope}
        deliverables={service.slug === "ecommerce" ? [...service.deliverables, "checkout e sincronização de estoque"] : service.deliverables}
        process={service.process}
        technologies={service.technologies}
        faq={service.faq}
        related={relatedProjects.length ? relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />) : undefined}
        otherServices={serviceTiles(false).filter((item) => item.slug !== slug)}
      />
    </>
  );
}

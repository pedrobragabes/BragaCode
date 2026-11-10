import Link from "next/link";
import type { ReactNode } from "react";
import { StudioContact } from "./StudioContact";
import { StudioIcon, type StudioIconName } from "./StudioIcon";

type ServiceDetailProps = {
  english?: boolean;
  icon: StudioIconName;
  title: string;
  summary: string;
  problem: string;
  scope?: readonly string[];
  deliverables: readonly string[];
  process: readonly { title: string; description: string }[];
  technologies?: readonly string[];
  faq?: readonly { question: string; answer: string }[];
  related?: ReactNode;
  otherServices: readonly { href: string; name: string; slug: string }[];
};

export function StudioServiceDetail({
  english = false, icon, title, summary, problem, scope, deliverables, process, technologies, faq, related, otherServices,
}: ServiceDetailProps) {
  return (
    <div className="studio-service-detail" lang={english ? "en" : "pt-BR"}>
      <section className="studio-detail-hero">
        <div className="container studio-detail-grid">
          <div>
            <Link className="studio-detail-back" href={english ? "/en/services" : "/servicos"}>← {english ? "Services" : "Serviços"}</Link>
            <h1>{title}</h1>
            <p>{summary}</p>
            <Link className="button" href={english ? "/en/contact" : "/contato"}>{english ? "Request a quote" : "Solicitar orçamento"} <span aria-hidden="true">↗</span></Link>
          </div>
          {icon === "commerce" ? (
            <div className="studio-commerce-flow">
              <div><span>{english ? "Source" : "Origem"}</span><strong>ERP</strong></div>
              <span aria-hidden="true">↓</span>
              <div><span>{english ? "Synchronization" : "Sincronização"}</span><strong>{english ? "Inventory and pricing" : "Estoque e preços"}</strong></div>
              <span aria-hidden="true">↓</span>
              <div><span>{english ? "Store" : "Loja"}</span><strong>{english ? "Catalog and checkout" : "Catálogo e checkout"}</strong></div>
            </div>
          ) : (
            <div className="studio-detail-art" aria-hidden="true">
              <span><StudioIcon name={icon} /></span>
            </div>
          )}
        </div>
      </section>
      <section className="studio-section">
        <div className="container studio-detail-overview">
          <div className="studio-problem">
            <h2>{english ? "When it helps" : "Quando contratar"}</h2>
            <p>{problem}</p>
            {scope && <ul>{scope.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
          <div className="studio-delivery">
            <h2>{english ? "What we can deliver" : "O que pode entrar na entrega"}</h2>
            <ul>{deliverables.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
            {technologies && <div className="tag-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
          </div>
        </div>
      </section>
      <section className="studio-section studio-soft">
        <div className="container">
          <header className="studio-section-heading"><h2>{english ? "Project stages" : "Etapas do projeto"}</h2></header>
          <ol className="studio-workflow" data-steps={process.length}>
            {process.map((item, index) => <li key={item.title}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}
          </ol>
        </div>
      </section>
      {related && <section className="studio-section"><div className="container">
        <header className="studio-section-heading"><h2>{english ? "Related projects" : "Projetos relacionados"}</h2></header>
        <div className="projects-grid">{related}</div>
      </div></section>}
      {faq?.length ? (
        <section className="studio-section studio-soft">
          <div className="container faq-grid">
            <h2>{english ? "Frequently asked questions" : "Perguntas frequentes"}</h2>
            <div className="faq-list">{faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}</div>
          </div>
        </section>
      ) : null}
      <StudioContact english={english} />
      <nav className="service-page-nav" aria-label={english ? "Other services" : "Outros serviços"}>
        <div className="container">{otherServices.map((item) => (
          <Link href={item.href} key={item.slug}>{item.name} <span aria-hidden="true">↗</span></Link>
        ))}</div>
      </nav>
    </div>
  );
}

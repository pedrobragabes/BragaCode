import type { ProjectVisualKind } from "@/content/projects";

type ProjectVisualProps = {
  kind: ProjectVisualKind;
  label: string;
  compact?: boolean;
  locale?: "pt" | "en";
};

const visualCopy: Record<ProjectVisualKind, { title: string; tags: string[]; rows: [string, string][] }> = {
  sync: {
    title: "Sincronização em execução",
    tags: ["ERP", "Python", "API"],
    rows: [["Estoque", "sincronizado"], ["Preços", "1.284 atualizados"], ["Falhas", "3 em retentativa"]],
  },
  store: {
    title: "Catálogo operacional",
    tags: ["B2B", "B2C", "Mobile"],
    rows: [["Produtos", "publicados"], ["Categorias", "organizadas"], ["WhatsApp", "contextual"]],
  },
  directory: {
    title: "Descoberta local",
    tags: ["PWA", "Tags", "Deep link"],
    rows: [["Categoria", "Casa e jardim"], ["Distância", "perto de você"], ["Contato", "1 toque"]],
  },
  editorial: {
    title: "Publicação contínua",
    tags: ["WordPress", "SEO", "PHP"],
    rows: [["Pauta", "em revisão"], ["Conteúdo", "publicado"], ["Performance", "monitorada"]],
  },
  finance: {
    title: "Leitura assistida",
    tags: ["OCR", "FastAPI", "IA"],
    rows: [["Documento", "processado"], ["Valor", "para validar"], ["Categoria", "sugerida"]],
  },
  catalog: {
    title: "Consulta de produto",
    tags: ["Código", "Preço", "Estoque"],
    rows: [["Código", "789…432"], ["Preço", "disponível"], ["Estoque", "consultado agora"]],
  },
  infra: {
    title: "Serviços online",
    tags: ["Docker", "Nginx", "Linux"],
    rows: [["Proxy", "saudável"], ["Containers", "em execução"], ["SSL", "ativo"]],
  },
};

const visualCopyEnglish: Record<ProjectVisualKind, { title: string; tags: string[]; rows: [string, string][] }> = {
  sync: { title: "Synchronization running", tags: ["ERP", "Python", "API"], rows: [["Inventory", "synchronized"], ["Prices", "1,284 updated"], ["Failures", "3 retrying"]] },
  store: { title: "Operational catalog", tags: ["B2B", "B2C", "Mobile"], rows: [["Products", "published"], ["Categories", "organized"], ["WhatsApp", "contextual"]] },
  directory: { title: "Local discovery", tags: ["PWA", "Tags", "Deep link"], rows: [["Category", "Home and garden"], ["Distance", "near you"], ["Contact", "one tap"]] },
  editorial: { title: "Continuous publishing", tags: ["WordPress", "SEO", "PHP"], rows: [["Draft", "in review"], ["Content", "published"], ["Performance", "monitored"]] },
  finance: { title: "Assisted extraction", tags: ["OCR", "FastAPI", "AI"], rows: [["Document", "processed"], ["Amount", "to validate"], ["Category", "suggested"]] },
  catalog: { title: "Product query", tags: ["Code", "Price", "Inventory"], rows: [["Code", "789…432"], ["Price", "available"], ["Inventory", "checked now"]] },
  infra: { title: "Services online", tags: ["Docker", "Nginx", "Linux"], rows: [["Proxy", "healthy"], ["Containers", "running"], ["TLS", "active"]] },
};

export function ProjectVisual({ kind, label, compact = false, locale = "pt" }: ProjectVisualProps) {
  const content = locale === "en" ? visualCopyEnglish[kind] : visualCopy[kind];

  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} role="img" aria-label={label}>
      <div className="visual-chrome" aria-hidden="true">
        <span /><span /><span />
        <i>BRAGA / OPS</i>
      </div>
      <div className="visual-body" aria-hidden="true">
        <div className="visual-topline">
          <p>{content.title}</p>
          <span>LIVE</span>
        </div>
        <div className="visual-tags">
          {content.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="visual-chart">
          <span style={{ height: "38%" }} /><span style={{ height: "64%" }} />
          <span style={{ height: "48%" }} /><span style={{ height: "82%" }} />
          <span style={{ height: "70%" }} /><span style={{ height: "94%" }} />
          <span style={{ height: "76%" }} /><span style={{ height: "100%" }} />
        </div>
        <div className="visual-rows">
          {content.rows.map(([name, value]) => (
            <div key={name}><span>{name}</span><strong>{value}</strong></div>
          ))}
        </div>
      </div>
    </div>
  );
}

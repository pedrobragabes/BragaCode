export const company = {
  name: "BragaCode",
  legalName: "BragaCode",
  founder: "Pedro Braga",
  email: "pedrobraga855@gmail.com",
  phoneDisplay: "(16) 99623-4322",
  whatsapp: "5516996234322",
  location: "Boa Esperança do Sul, SP",
  serviceArea: "Atendimento remoto em todo o Brasil",
  positioning:
    "Software, e-commerce e automações para empresas que querem crescer sem depender de processos manuais.",
  linkedin: "https://www.linkedin.com/in/pedrobragabes",
  github: "https://github.com/pedrobragabes",
  personalSite: "https://pedrobragabes.com",
} as const;

export const metrics = [
  {
    value: "4.000+",
    label: "SKUs",
    detail: "processados por rotina de sincronização entre ERP e WooCommerce",
  },
  {
    value: "6.300+",
    label: "ativos",
    detail: "tratados no fluxo de catálogo e imagens do e-commerce",
  },
  {
    value: "2020",
    label: "em produção",
    detail: "início da operação contínua de projetos web próprios",
  },
  {
    value: "C1",
    label: "inglês",
    detail: "certificação EF SET para documentação e colaboração técnica",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Mapear o gargalo",
    description:
      "A conversa começa pelo fluxo atual: onde a equipe copia dados, perde tempo, corrige erro ou depende de uma única pessoa.",
    output: "Mapa do processo, restrições e critério de sucesso.",
  },
  {
    number: "02",
    title: "Recortar a entrega",
    description:
      "O projeto é dividido em uma primeira versão que resolve o núcleo do problema sem esconder riscos de integração ou operação.",
    output: "Escopo, arquitetura, cronograma e prioridades.",
  },
  {
    number: "03",
    title: "Construir com visibilidade",
    description:
      "Entregas curtas, ambiente de homologação e decisões registradas mantêm o projeto verificável antes de chegar à produção.",
    output: "Incrementos testáveis e documentação de uso.",
  },
  {
    number: "04",
    title: "Operar e evoluir",
    description:
      "Depois do lançamento, logs, suporte e dados de uso indicam o que corrigir, automatizar ou ampliar na próxima etapa.",
    output: "Deploy, acompanhamento e plano de evolução.",
  },
] as const;

export const techGroups = [
  {
    label: "Interfaces",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
  },
  {
    label: "Backend e dados",
    items: ["Node.js", "Python", "FastAPI", "MySQL", "PostgreSQL", "Prisma"],
  },
  {
    label: "Comércio",
    items: ["WooCommerce", "WordPress", "REST APIs", "Cloudinary", "WhatsApp"],
  },
  {
    label: "Infraestrutura",
    items: ["Docker", "Linux", "Nginx", "Proxmox", "LXC", "Tailscale"],
  },
] as const;

export const workPrinciples = [
  {
    title: "Problema antes da stack",
    description:
      "A tecnologia entra depois que está claro qual etapa precisa ficar mais rápida, confiável ou simples de operar.",
  },
  {
    title: "Integração observável",
    description:
      "Retentativas, logs e tratamento de falhas fazem parte do escopo quando dados passam entre sistemas.",
  },
  {
    title: "Autonomia após a entrega",
    description:
      "Painéis, documentação e rotinas previsíveis reduzem a dependência do desenvolvedor para tarefas do dia a dia.",
  },
] as const;

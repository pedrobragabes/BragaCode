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
    "Sistemas web, integrações, automações e e-commerce para conectar processos, dados e negócios.",
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
    "number": "01",
    "title": "Entender",
    "description": "Entendemos o processo atual, os sistemas envolvidos e o problema que precisa ser resolvido.",
    "output": "Contexto, restrições e prioridades."
  },
  {
    "number": "02",
    "title": "Projetar",
    "description": "Definimos escopo, arquitetura, integrações e critérios de entrega.",
    "output": "Escopo claro e critérios de validação."
  },
  {
    "number": "03",
    "title": "Construir",
    "description": "Implementação incremental com validação técnica e funcional ao longo do desenvolvimento.",
    "output": "Entregas testáveis e decisões documentadas."
  },
  {
    "number": "04",
    "title": "Entregar",
    "description": "Implantação, documentação e transferência do sistema para quem vai utilizá-lo.",
    "output": "Sistema implantado e orientação de uso."
  },
  {
    "number": "05",
    "title": "Evoluir",
    "description": "Manutenção e novas funcionalidades conforme as necessidades da operação.",
    "output": "Continuidade e próximos incrementos."
  }
] as const;

export const techGroups = [
  {
    "label": "Frontend",
    "items": [
      "TypeScript",
      "React",
      "Next.js"
    ]
  },
  {
    "label": "Backend",
    "items": [
      "Node.js",
      "Python",
      "REST APIs"
    ]
  },
  {
    "label": "Dados",
    "items": [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Prisma"
    ]
  },
  {
    "label": "E-commerce",
    "items": [
      "WooCommerce",
      "WordPress",
      "Mercado Pago"
    ]
  },
  {
    "label": "Infraestrutura",
    "items": [
      "Docker",
      "Linux",
      "Nginx",
      "Cloudflare"
    ]
  }
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

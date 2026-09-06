export const englishServices = [
  {
    slug: "websites-and-landing-pages",
    number: "01",
    title: "Corporate websites and landing pages",
    summary: "Fast, accessible pages that explain the offer, show evidence and turn visits into qualified conversations.",
    problem: "The company relies on referrals or sends outdated presentations because its website does not answer basic commercial questions.",
    deliverables: ["information architecture and copy", "responsive accessible interface", "technical SEO and conversion tracking"],
  },
  {
    slug: "ecommerce",
    number: "02",
    title: "E-commerce connected to operations",
    summary: "Catalog, administration and purchasing journeys connected to the way prices, inventory and service actually work.",
    problem: "The ERP changes, the store remains outdated and the team spends its day correcting product information.",
    deliverables: ["B2B/B2C catalog", "administrative workflows", "WooCommerce evolution and integrations"],
  },
  {
    slug: "web-applications",
    number: "03",
    title: "Custom web applications",
    summary: "Purpose-built tools for queries, records and operational routines that no longer fit spreadsheets or generic software.",
    problem: "The team retypes data, switches between multiple screens or returns to a desktop for a simple inventory query.",
    deliverables: ["workflow discovery", "CRUD and access control", "mobile-first interface and deployment"],
  },
  {
    slug: "apis-and-integrations",
    number: "04",
    title: "APIs and system integrations",
    summary: "Integration layers that exchange data with validation, traceability and explicit failure recovery.",
    problem: "ERP, store, customer service and internal applications maintain conflicting versions of the same information.",
    deliverables: ["data contracts", "REST APIs and webhooks", "authentication, retries and monitoring"],
  },
  {
    slug: "automation",
    number: "05",
    title: "Automation, inventory and pricing",
    summary: "Python and Node.js routines that remove repetitive work from catalogs, data processing and customer service.",
    problem: "A simple update requires exporting a file, fixing columns, importing it again and checking each item manually.",
    deliverables: ["scheduled ETL and synchronization", "data validation", "alerts and execution trail"],
  },
  {
    slug: "infrastructure-and-support",
    number: "06",
    title: "Infrastructure, support and maintenance",
    summary: "Reproducible environments, safe deployment and maintenance so the software remains usable after launch.",
    problem: "The application only works on its creator's machine, updates are risky and failures are difficult to investigate.",
    deliverables: ["Docker and Linux", "Nginx, TLS and deployment", "backup and maintenance routines"],
  },
] as const;

export const englishProjects = [
 {slug: "aquaflora-agroshop", name: "AquaFlora AgroShop", status: "Ongoing", period: "2025 — present", eyebrow: "Professional work · e-commerce", summary: "WooCommerce store and ERP inventory and price synchronization. Pedro Braga's work in AquaFlora's digital operation.", technologies: ["WooCommerce", "Python", "Next.js", "Fastify"], visual: "store", image: "aquaflora"},
 {slug: "joysticknights", name: "JoysticKnights", status: "Live", period: "2020 — present", eyebrow: "Independent product · editorial platform", summary: "Gaming and culture portal with a Next.js frontend and WordPress as its CMS. A maintained publication with real editorial content.", technologies: ["Next.js", "React", "TypeScript", "WordPress"], visual: "editorial", image: "joysticknights"},
] as const;
export const aquafloraEnglishCase = {
 ...englishProjects[0],
 problem: ["Inventory and prices need to follow the ERP without overwriting product descriptions, categories or images.", "Internal product queries need their own interface and access controls."],
 context: "Pedro Braga's professional experience at AquaFlora. The public store, stock synchronization and internal platform have independent deployment lifecycles.",
 solution: ["Live store: maintenance and evolution of WordPress/WooCommerce.", "Stock Sync LITE: Python reads Athos ERP CSV exports and updates inventory and prices for existing WooCommerce SKUs, preserving editorial content.", "AquaApps and API: locally implemented and validated Next.js and Fastify base, with role-based access and product lookup. Server deployment remains a separate step.", "Customer-service automation is in development and is separate from Stock Sync."],
 results: ["Inventory and pricing updates are separated from catalog editing.", "The internal platform has a locally validated base; this is not evidence of a production deployment.", "The public store can be visited. Commercial metrics and internal data are not disclosed."],
 metrics: [],
} as const;

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
  {
    slug: "aquaflora-agroshop",
    name: "AquaFlora AgroShop",
    status: "Ongoing",
    period: "2025 — present",
    eyebrow: "E-commerce and operational integration",
    summary: "WooCommerce evolution with Python/Docker inventory and pricing middleware, an internal barcode application and customer-service automation.",
    technologies: ["Python", "Docker", "WooCommerce", "Node.js", "JWT", "LLMs"],
    visual: "sync",
  },
  {
    slug: "flower-shop-ecommerce",
    name: "Flower shop e-commerce",
    status: "Completed",
    period: "2025",
    eyebrow: "B2B/B2C catalog and admin panel",
    summary: "A mobile-first catalog with Node.js, MySQL, Prisma, Cloudinary and a contextual WhatsApp purchasing journey.",
    technologies: ["Next.js", "Node.js", "MySQL", "Prisma", "Cloudinary"],
    visual: "store",
  },
  {
    slug: "comercio-bes",
    name: "Comércio BES",
    status: "Evolving",
    period: "2024 — 2025",
    eyebrow: "Hyperlocal marketplace and business directory",
    summary: "An installable PWA for finding local businesses by category and moving directly from discovery to WhatsApp contact.",
    technologies: ["JavaScript", "PWA", "Deep links", "WhatsApp"],
    visual: "directory",
  },
] as const;

export const aquafloraEnglishCase = {
  ...englishProjects[0],
  problem: [
    "Catalog growth made manual price and inventory updates between a legacy ERP and WooCommerce increasingly fragile.",
    "Store and inventory teams needed to query an item from a phone using the barcode already available on the package.",
    "Recurring WhatsApp questions reached the team without a consistent first triage step.",
  ],
  context: "The solution had to coexist with current systems and thousands of products. A full platform replacement would interrupt a working operation and introduce unnecessary risk.",
  solution: [
    "Maintenance and evolution of the WordPress/WooCommerce store and catalog workflows.",
    "A Python middleware running in Docker to read, validate and synchronize inventory and prices through the WooCommerce REST API.",
    "A mobile-first internal web app with JWT authentication, barcode scanning and inventory queries.",
    "A Node.js and LLM workflow for initial triage, recurring answers and escalation to a person.",
  ],
  results: [
    "Catalog updates no longer rely exclusively on editing products one by one.",
    "The team gained a mobile, barcode-oriented path for checking price and availability at the point of work.",
    "Recurring customer-service requests now receive a consistent first triage before escalation.",
  ],
  metrics: [
    { value: "4,000+", label: "SKUs", note: "in the synchronization workflow" },
    { value: "6,300+", label: "assets", note: "processed in the catalog" },
    { value: "3", label: "workstreams", note: "store, internal operations and service" },
  ],
} as const;

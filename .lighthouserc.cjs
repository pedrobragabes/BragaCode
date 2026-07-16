module.exports = {
  ci: {
    collect: {
      startServerCommand: "node scripts/lhci-server.mjs",
      startServerReadyPattern: "LHCI_SERVER_READY",
      startServerReadyTimeout: 60_000,
      url: [
        "http://127.0.0.1:4173/",
        "http://127.0.0.1:4173/servicos",
        "http://127.0.0.1:4173/projetos",
        "http://127.0.0.1:4173/contato",
      ],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
        chromeFlags: "--headless --no-sandbox --disable-gpu",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.85 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 1800 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "total-blocking-time": ["warn", { maxNumericValue: 200 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-byte-weight": ["warn", { maxNumericValue: 921600 }],
        "resource-summary:script:size": ["error", { maxNumericValue: 204800 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};

import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function gotoHydrated(page: Page, path: string) {
  await page.goto(path);
  await expect(page.locator("html")).toHaveAttribute("data-hydrated", "true");
}

test("não apresenta violações WCAG A/AA nas jornadas principais", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Auditoria axe centralizada no Chromium");

  for (const path of ["/", "/servicos", "/projetos", "/contato", "/projetos/aquaflora-agroshop"]) {
    await gotoHydrated(page, path);

    for (const theme of ["light", "dark"] as const) {
      await page.evaluate((selectedTheme) => {
        document.documentElement.dataset.theme = selectedTheme;
        document.documentElement.style.colorScheme = selectedTheme;
      }, theme);
      await page.waitForTimeout(220);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(results.violations, `${path} no tema ${theme}`).toEqual([]);
    }
  }
});

test("mantém foco visível e sequência de teclado utilizável", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Auditoria de teclado centralizada no Chromium");
  await gotoHydrated(page, "/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Pular para o conteúdo" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  const focusSequence = [];
  for (let index = 0; index < 14; index += 1) {
    focusSequence.push(await page.evaluate(() => {
      const element = document.activeElement as HTMLElement | null;
      return { tag: element?.tagName, label: element?.getAttribute("aria-label") || element?.textContent?.trim().slice(0, 60) };
    }));
    await page.keyboard.press("Tab");
  }

  expect(focusSequence.every((item) => item.tag && item.tag !== "BODY")).toBe(true);
  expect(focusSequence.some((item) => item.label?.includes("Alternar entre tema"))).toBe(true);
  expect(focusSequence.some((item) => item.label?.includes("Solicitar orçamento"))).toBe(true);
});

test("respeita preferência por movimento reduzido", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Auditoria de mídia centralizada no Chromium");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await gotoHydrated(page, "/");

  const motion = await page.evaluate(() => {
    const sample = document.querySelector(".project-card-visual img");
    const style = sample ? getComputedStyle(sample) : null;
    return {
      preference: matchMedia("(prefers-reduced-motion: reduce)").matches,
      transitionDuration: style?.transitionDuration,
      animationDuration: style?.animationDuration,
    };
  });

  expect(motion.preference).toBe(true);
  expect(Number.parseFloat(motion.transitionDuration || "1")).toBeLessThanOrEqual(0.00001);
  expect(Number.parseFloat(motion.animationDuration || "1")).toBeLessThanOrEqual(0.00001);
});

for (const width of [320, 360, 640, 768, 1440]) {
  test(`não cria overflow horizontal em ${width}px`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "Matriz de reflow centralizada no Chromium");
    await page.setViewportSize({ width, height: 900 });

    for (const path of ["/", "/projetos", "/projetos/aquaflora-agroshop", "/contato"]) {
      await gotoHydrated(page, path);
      const dimensions = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      expect(dimensions.scrollWidth, `${path} em ${width}px`).toBeLessThanOrEqual(dimensions.clientWidth + 1);
    }
  });
}

import { expect, test, type Page } from "@playwright/test";

async function gotoHydrated(page: Page, path: string) {
  const response = await page.goto(path);
  await expect(page.locator("html")).toHaveAttribute("data-hydrated", "true");
  return response;
}

test("mantém o tema escolhido após recarregar", async ({ page }) => {
  await gotoHydrated(page, "/");
  const html = page.locator("html");
  const initialTheme = await html.getAttribute("data-theme");

  await page.getByRole("button", { name: "Alternar entre tema claro e escuro" }).click();
  const selectedTheme = initialTheme === "light" ? "dark" : "light";
  await expect(html).toHaveAttribute("data-theme", selectedTheme);

  await page.reload();
  await expect(html).toHaveAttribute("data-theme", selectedTheme);
});

test("filtra projetos e mantém somente cases da categoria", async ({ page }) => {
  await gotoHydrated(page, "/projetos");
  const cards = page.locator(".projects-grid .project-card");
  const total = await cards.count();

  await page.getByRole("button", { name: "E-commerce", exact: true }).click();
  await expect(page.getByRole("button", { name: "E-commerce", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".filter-count")).toContainText("projeto");
  expect(await cards.count()).toBeGreaterThan(0);
  expect(await cards.count()).toBeLessThan(total);

  for (const card of await cards.all()) await expect(card).toContainText("E-commerce");
});

test("envia o formulário e apresenta confirmação acessível", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    const payload = route.request().postDataJSON();
    expect(payload.submissionId).toMatch(/^[0-9a-f-]{36}$/i);
    expect(payload.consent).toBe(true);
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ message: "Mensagem enviada. Pedro responderá assim que possível." }) });
  });

  await gotoHydrated(page, "/contato");
  await page.getByLabel("Seu nome *").fill("Contato E2E");
  await page.getByLabel("Empresa").fill("Empresa de teste");
  await page.getByLabel("E-mail *").fill("e2e@example.com");
  await page.getByLabel("O que você precisa? *").selectOption("Sistema web");
  await page.getByLabel("Conte o que acontece hoje *").fill("A equipe redigita os mesmos pedidos em dois sistemas todos os dias.");
  await page.getByLabel(/Concordo que a BragaCode/).check();
  await page.getByRole("button", { name: /Enviar contexto/ }).click();

  await expect(page.getByRole("status")).toContainText("Mensagem enviada");
});

test("publica rotas de contingência e contato", async ({ page, request }) => {
  const notFound = await gotoHydrated(page, "/rota-inexistente");
  expect(notFound?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Essa página não entrou");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/projetos/aquaflora-agroshop");

  await gotoHydrated(page, "/");
  await expect(page.locator('a[href^="https://wa.me/"]').first()).toHaveAttribute("target", "_blank");
});

test("abre e fecha o menu mobile somente com teclado", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Fluxo específico da navegação mobile");
  await gotoHydrated(page, "/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.focus();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Navegação mobile" }).getByRole("link", { name: /Serviços/ })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

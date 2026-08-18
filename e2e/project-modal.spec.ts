import { expect, type Locator, type Page, test } from "@playwright/test";

function featuredCard(page: Page, title: string): Locator {
  return page.locator("section#projetos div.group", { has: page.getByRole("heading", { name: title }) });
}

test.describe("Project modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("button", { name: "Projetos" }).click();
  });

  test("opens with the right project's story and closes on Escape", async ({ page }) => {
    await featuredCard(page, "Sistema Financeiro").getByRole("button", { name: "Ver detalhes" }).click();

    await expect(page.getByText("01 — O Problema")).toBeVisible();
    await expect(page.getByRole("link", { name: /repositório/i })).toHaveAttribute(
      "href",
      "https://github.com/luizhenriquefernandes20-svg/sistema-financeiro"
    );

    await page.keyboard.press("Escape");
    await expect(page.getByText("01 — O Problema")).not.toBeVisible();
  });

  test("closes when clicking the backdrop, but not when clicking the card", async ({ page }) => {
    await featuredCard(page, "Hazuki Sushi").getByRole("button", { name: "Ver detalhes" }).click();
    await expect(page.getByText("01 — O Problema")).toBeVisible();

    // Clicking inside the card must not close the modal.
    await page.getByText("01 — O Problema").click();
    await expect(page.getByText("01 — O Problema")).toBeVisible();

    // Clicking the backdrop (far corner, outside the centered card) closes it.
    await page.mouse.click(10, 10);
    await expect(page.getByText("01 — O Problema")).not.toBeVisible();
  });

  test("closes via the explicit close button", async ({ page }) => {
    await featuredCard(page, "Capannone Pizzaria Artesanal").getByRole("button", { name: "Ver detalhes" }).click();
    await expect(page.getByText("01 — O Problema")).toBeVisible();

    await page.getByRole("button", { name: "Fechar" }).click();
    await expect(page.getByText("01 — O Problema")).not.toBeVisible();
  });
});

test.describe("Reduced motion", () => {
  test("respects prefers-reduced-motion for CSS animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const durationSeconds = await page.evaluate(() => {
      const probe = document.createElement("div");
      probe.className = "skeleton-shimmer";
      document.body.appendChild(probe);
      const value = Number.parseFloat(getComputedStyle(probe).animationDuration);
      probe.remove();
      return value;
    });

    expect(durationSeconds).toBeLessThan(0.001);
  });

  test("does not loop the background blobs when reduced motion is on", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const infiniteAnimations = await page.evaluate(
      () => document.getAnimations().filter((a) => a.effect?.getTiming().iterations === Infinity).length
    );

    expect(infiniteAnimations).toBe(0);
  });
});

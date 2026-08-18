import { expect, test } from "@playwright/test";

test.describe("Portfolio — page shell", () => {
  test("loads without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Luiz Henrique" })).toBeVisible();

    expect(errors).toEqual([]);
  });

  test("skip link is hidden until focused, then jumps to main content", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.getByRole("link", { name: "Pular para o conteúdo" });

    const hiddenBox = await skipLink.boundingBox();
    expect(hiddenBox?.width).toBeLessThan(2);

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    const visibleBox = await skipLink.boundingBox();
    expect(visibleBox?.width).toBeGreaterThan(50);
  });

  test("header nav scrolls to each section", async ({ page }) => {
    await page.goto("/");

    for (const { label, id } of [
      { label: "Skills", id: "skills" },
      { label: "Projetos", id: "projetos" },
      { label: "Formação", id: "formacao" },
      { label: "Contato", id: "contato" },
    ]) {
      await page.getByRole("navigation").getByRole("button", { name: label }).click();
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test("featured projects section shows the real portfolio content", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("button", { name: "Projetos" }).click();

    const featuredHeading = page.getByRole("heading", { name: "Trabalhos em Destaque" });
    await expect(featuredHeading).toBeVisible();

    const featuredCards = page.locator("section#projetos").getByRole("heading", { level: 3 });
    await expect(featuredCards).toHaveCount(4);
    await expect(page.getByRole("heading", { name: "Capannone Pizzaria Artesanal" })).toBeVisible();
  });

  test("project screenshots have real src and descriptive alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("main img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute("src", /\/projects\/.+\.png/);
      const alt = await img.getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });
});

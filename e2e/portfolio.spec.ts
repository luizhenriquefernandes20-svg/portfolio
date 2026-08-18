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
      { label: "Idiomas", id: "idiomas" },
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

  test("languages section lists proficiency for each language", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("button", { name: "Idiomas" }).click();

    await expect(page.getByRole("heading", { name: "Idiomas" })).toBeVisible();
    for (const { name, level } of [
      { name: "Português", level: "Nativo/Fluente" },
      { name: "Inglês", level: "Avançado" },
      { name: "Espanhol", level: "Intermediário" },
      { name: "Italiano", level: "Básico" },
    ]) {
      const row = page.locator("section#idiomas").getByText(name, { exact: true }).locator("..");
      await expect(row.getByText(level)).toBeVisible();
    }
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

test.describe("Responsive viewport", () => {
  for (const { name, width, height } of [
    { name: "mobile", width: 375, height: 812 },
    { name: "tablet", width: 768, height: 1024 },
  ]) {
    test(`no horizontal overflow on ${name} (${width}px)`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto("/");

      // The draggable background sphere is intentionally wider than the
      // viewport (width: 130%) so it can pan without showing its edges.
      // It's clipped by a fixed + overflow-hidden wrapper, but historically
      // still leaked into document-level scrollWidth on narrow viewports.
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow).toBe(0);
    });
  }

  test("mobile: availability badge and location don't overlap when they wrap", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const availability = page.getByText("Disponível para projetos");
    const location = page.getByText("Jundiaí, SP");
    const availabilityBox = await availability.boundingBox();
    const locationBox = await location.boundingBox();

    expect(availabilityBox).not.toBeNull();
    expect(locationBox).not.toBeNull();
    // Location must sit below the availability line, not floating beside/over it.
    expect(locationBox!.y).toBeGreaterThanOrEqual(availabilityBox!.y + availabilityBox!.height - 2);
  });

  test("mobile: header nav collapses into a hamburger menu that opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    await expect(page.getByRole("navigation")).toBeHidden();
    const toggle = page.getByRole("button", { name: "Abrir menu" });
    await expect(toggle).toBeVisible();

    await toggle.click();
    await expect(page.getByRole("button", { name: "Fechar menu" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Idiomas" })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBe(0);
  });
});

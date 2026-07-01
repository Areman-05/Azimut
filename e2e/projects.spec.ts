import { test, expect } from "@playwright/test";

test.describe("Proyectos", () => {
  test("filtra proyectos por categoría", async ({ page }) => {
    await page.goto("/proyectos");
    await page.getByRole("tab", { name: "Modular" }).click();
    await expect(page.getByText("Villa Modular Mediterránea")).toBeVisible();
  });

  test("abre el detalle de un proyecto", async ({ page }) => {
    await page.goto("/proyectos");
    await page.getByRole("link", { name: /villa modular mediterránea/i }).first().click();
    await expect(page).toHaveURL(/\/proyectos\/villa-modular-mediterranea/);
    await expect(page.getByRole("heading", { name: /villa modular mediterránea/i })).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Navegación principal", () => {
  test("la home carga y muestra el hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /construimos/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /ver proyectos/i })).toBeVisible();
  });

  test("navega a proyectos desde el header", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Principal" }).getByRole("link", { name: "Proyectos" }).click();
    await expect(page).toHaveURL("/proyectos");
    await expect(page.getByRole("heading", { name: /nuestros proyectos/i })).toBeVisible();
  });

  test("navega a contacto", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page.getByRole("heading", { name: /hablemos de tu proyecto/i })).toBeVisible();
    await expect(page.getByLabel(/nombre/i)).toBeVisible();
  });
});

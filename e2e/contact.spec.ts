import { test, expect } from "@playwright/test";

test.describe("Formulario de contacto", () => {
  test("muestra errores de validación", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByRole("button", { name: /enviar mensaje/i }).click();
    await expect(page.getByText("El nombre es obligatorio")).toBeVisible();
  });

  test("envía el formulario correctamente", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByLabel(/nombre/i).fill("Ana Test");
    await page.getByLabel(/email/i).fill("ana@test.com");
    await page.getByLabel(/mensaje/i).fill("Quiero información sobre un proyecto modular.");
    await page.getByRole("button", { name: /enviar mensaje/i }).click();
    await expect(page.getByRole("status")).toContainText("Mensaje enviado");
  });
});

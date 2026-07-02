import { describe, expect, it } from "vitest";
import { images } from "@/config/images";

describe("images config", () => {
  it("define ruta del hero y og", () => {
    expect(images.hero.main).toBe("/images/hero/main.jpg");
    expect(images.og).toBe("/images/og.jpg");
  });

  it("define imágenes para todos los proyectos", () => {
    const slugs = Object.keys(images.projects);
    expect(slugs.length).toBeGreaterThanOrEqual(6);
    for (const slug of slugs) {
      expect(images.projects[slug as keyof typeof images.projects].main).toMatch(
        /^\/images\//,
      );
    }
  });

  it("define imágenes de servicios y equipo", () => {
    expect(images.services.modular).toMatch(/^\/images\//);
    expect(images.team["sofia-martin"]).toMatch(/^\/images\//);
  });
});

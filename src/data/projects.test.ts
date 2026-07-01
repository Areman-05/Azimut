import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("projects data", () => {
  it("contiene al menos cinco proyectos", () => {
    expect(projects.length).toBeGreaterThanOrEqual(5);
  });

  it("cada proyecto tiene slug único y campos obligatorios", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.image).toMatch(/^\/images\//);
      expect(["residencial", "comercial", "modular"]).toContain(
        project.category,
      );
    }
  });

  it("tiene proyectos destacados", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(2);
  });
});

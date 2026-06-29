import { describe, expect, it } from "vitest";
import {
  getAllProjectSlugs,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectsByCategory,
} from "@/lib/projects";

describe("projects utilities", () => {
  it("getAllProjects devuelve todos los proyectos", () => {
    expect(getAllProjects().length).toBeGreaterThan(0);
  });

  it("getProjectBySlug encuentra un proyecto existente", () => {
    const slug = getAllProjectSlugs()[0];
    const project = getProjectBySlug(slug);
    expect(project?.slug).toBe(slug);
  });

  it("getProjectBySlug devuelve undefined para slug inexistente", () => {
    expect(getProjectBySlug("no-existe")).toBeUndefined();
  });

  it("getFeaturedProjects solo devuelve destacados", () => {
    const featured = getFeaturedProjects();
    expect(featured.every((p) => p.featured)).toBe(true);
  });

  it("getProjectsByCategory filtra correctamente", () => {
    const modular = getProjectsByCategory("modular");
    expect(modular.every((p) => p.category === "modular")).toBe(true);
  });
});

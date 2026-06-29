import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategory,
): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

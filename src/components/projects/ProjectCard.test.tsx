import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

const mockProject: Project = {
  slug: "test-proyecto",
  title: "Proyecto de Prueba",
  category: "modular",
  location: "Madrid, España",
  year: 2025,
  area: "100 m²",
  duration: "6 meses",
  description: "Descripción de prueba para el proyecto.",
  challenge: "Reto de prueba.",
  solution: "Solución de prueba.",
  image: "https://images.unsplash.com/photo-1?w=800",
};

describe("ProjectCard", () => {
  it("renderiza título y ubicación", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Proyecto de Prueba")).toBeInTheDocument();
    expect(screen.getByText("Madrid, España")).toBeInTheDocument();
  });

  it("enlaza al detalle del proyecto", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/proyectos/test-proyecto");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "@/components/layout/Container";

describe("Container", () => {
  it("renderiza hijos correctamente", () => {
    render(<Container>Contenido de prueba</Container>);
    expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
  });

  it("aplica clases de ancho máximo", () => {
    render(<Container data-testid="container">Test</Container>);
    const element = screen.getByText("Test");
    expect(element.className).toContain("max-w-7xl");
  });
});

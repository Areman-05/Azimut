import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renderiza como botón por defecto", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button", { name: "Click" })).toBeInTheDocument();
  });

  it("renderiza como enlace cuando tiene href", () => {
    render(<Button href="/contacto">Contacto</Button>);
    const link = screen.getByRole("link", { name: "Contacto" });
    expect(link).toHaveAttribute("href", "/contacto");
  });

  it("aplica variante secondary", () => {
    render(<Button variant="secondary">Secundario</Button>);
    const button = screen.getByRole("button", { name: "Secundario" });
    expect(button.className).toContain("border-charcoal");
  });
});

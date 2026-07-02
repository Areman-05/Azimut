import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renderiza título y etiqueta", () => {
    render(
      <SectionHeading label="Servicios" title="Nuestro trabajo" />,
    );
    expect(screen.getByText("Servicios")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Nuestro trabajo" })).toBeInTheDocument();
  });
});

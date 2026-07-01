import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renderiza enlaces y página actual", () => {
    render(
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos" },
        ]}
      />,
    );
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
  });
});

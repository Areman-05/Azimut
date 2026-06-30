import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { FormField } from "@/components/ui/FormField";

describe("Input", () => {
  it("renderiza con atributos básicos", () => {
    render(<Input id="test" placeholder="Escribe aquí" />);
    expect(screen.getByPlaceholderText("Escribe aquí")).toBeInTheDocument();
  });

  it("marca error de accesibilidad", () => {
    render(<Input id="email" error="Email inválido" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});

describe("Textarea", () => {
  it("renderiza correctamente", () => {
    render(<Textarea id="msg" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("Select", () => {
  it("renderiza opciones", () => {
    render(
      <Select
        id="type"
        options={[
          { value: "a", label: "Opción A" },
          { value: "b", label: "Opción B" },
        ]}
      />,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Opción A")).toBeInTheDocument();
  });
});

describe("FormField", () => {
  it("muestra label y error", () => {
    render(
      <FormField label="Nombre" htmlFor="name" error="Campo requerido">
        <Input id="name" />
      </FormField>,
    );
    expect(screen.getByText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Campo requerido")).toBeInTheDocument();
  });
});

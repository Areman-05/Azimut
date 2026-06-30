import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "@/components/ui/Accordion";

const items = [
  { id: "a", title: "Pregunta A", content: "Respuesta A detallada." },
  { id: "b", title: "Pregunta B", content: "Respuesta B detallada." },
];

describe("Accordion", () => {
  it("muestra el primer ítem abierto por defecto", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Respuesta A detallada.")).toBeVisible();
  });

  it("alterna ítems al hacer clic", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(screen.getByRole("button", { name: "Pregunta B" }));
    expect(screen.getByText("Respuesta B detallada.")).toBeVisible();
  });
});

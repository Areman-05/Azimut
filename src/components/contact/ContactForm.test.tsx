import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm", () => {
  it("muestra errores de validación con campos vacíos", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(screen.getByText("El nombre es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("El email es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("El mensaje es obligatorio")).toBeInTheDocument();
  });

  it("muestra confirmación tras envío válido", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/nombre/i), "Ana García");
    await user.type(screen.getByLabelText(/email/i), "ana@ejemplo.com");
    await user.type(screen.getByLabelText(/mensaje/i), "Quiero información sobre un proyecto modular.");
    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(screen.getByRole("status")).toHaveTextContent("Mensaje enviado");
  });
});

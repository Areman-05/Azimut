"use client";

import { useState, type FormEvent } from "react";
import { Button, FormField, Input, Select, Textarea } from "@/components/ui";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const projectTypeOptions = [
  { value: "Arquitectura modular", label: "Arquitectura modular" },
  { value: "Construcción sostenible", label: "Construcción sostenible" },
  { value: "Reforma premium", label: "Reforma premium" },
  { value: "Otro", label: "Otro" },
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "El nombre es obligatorio";
    if (!form.email.trim()) {
      next.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Introduce un email válido";
    }
    if (!form.message.trim()) next.message = "El mensaje es obligatorio";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div
        className="border border-terracotta bg-sand p-8 text-center"
        role="status"
      >
        <p className="font-display text-xl uppercase tracking-wide">
          Mensaje enviado
        </p>
        <p className="mt-4 text-sm text-muted">
          Gracias por contactar con nosotros. Te responderemos en un plazo de
          24-48 horas laborables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Nombre" htmlFor="name" error={errors.name} required>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email} required>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Teléfono" htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </FormField>
        <FormField label="Tipo de proyecto" htmlFor="projectType">
          <Select
            id="projectType"
            value={form.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            options={projectTypeOptions}
          />
        </FormField>
      </div>

      <FormField label="Mensaje" htmlFor="message" error={errors.message} required>
        <Textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={errors.message}
        />
      </FormField>

      <Button type="submit" size="lg">
        Enviar mensaje
      </Button>
    </form>
  );
}

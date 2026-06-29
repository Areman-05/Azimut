"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

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

const projectTypes = [
  "Arquitectura modular",
  "Construcción sostenible",
  "Reforma premium",
  "Otro",
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

  function handleChange(
    field: keyof FormData,
    value: string,
  ) {
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

  const inputClass =
    "w-full border border-border-light bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest">
            Nombre *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={cn(inputClass, errors.name && "border-red-500")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={cn(inputClass, errors.email && "border-red-500")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-widest">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-2 block text-xs uppercase tracking-widest">
            Tipo de proyecto
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            className={inputClass}
          >
            <option value="">Seleccionar...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={cn(inputClass, "resize-none", errors.message && "border-red-500")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg">
        Enviar mensaje
      </Button>
    </form>
  );
}

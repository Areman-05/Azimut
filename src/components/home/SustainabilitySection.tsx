"use client";

import { Leaf, Recycle, Sun } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui";

const pillars = [
  {
    icon: Leaf,
    title: "Materiales nobles",
    description:
      "Madera certificada, hormigón de bajo carbono y aislamientos naturales en cada proyecto.",
  },
  {
    icon: Sun,
    title: "Eficiencia energética",
    description:
      "Diseño bioclimático y sistemas renovables integrados desde la fase de proyecto.",
  },
  {
    icon: Recycle,
    title: "Economía circular",
    description:
      "Módulos reutilizables y gestión de residuos que minimiza el impacto en obra.",
  },
];

export function SustainabilitySection() {
  return (
    <Section id="sostenibilidad">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
              Sostenibilidad
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
              Construir hoy pensando en mañana
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              La sostenibilidad no es un añadido: está integrada en cada decisión
              de diseño, material y proceso constructivo que tomamos.
            </p>
            <div className="mt-8">
              <Button href="/nosotros#sostenibilidad" variant="secondary">
                Nuestro compromiso
              </Button>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.1}>
                  <article className="flex gap-5 border border-border-light p-6">
                    <Icon
                      size={28}
                      className="shrink-0 text-terracotta"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

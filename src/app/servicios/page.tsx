import Image from "next/image";
import type { Metadata } from "next";
import { Box, Hammer, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Arquitectura modular, construcción sostenible y reformas premium. Conoce los servicios de Azimut Estructuras.",
};

const iconMap: Record<string, LucideIcon> = {
  modular: Box,
  sostenible: Leaf,
  reformas: Hammer,
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        label="Servicios"
        title="Soluciones a medida"
        description="Combinamos diseño, ingeniería y ejecución para entregar proyectos de alto standing con eficiencia y sostenibilidad."
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Servicios" },
            ]}
          />
          <div className="mt-12 space-y-24">
            {services.map((service) => {
              const Icon = iconMap[service.id] ?? Box;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid gap-12 border-b border-border-light pb-24 last:border-0 lg:grid-cols-2"
                >
                  <div>
                    <Icon
                      size={40}
                      className="text-terracotta"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h2 className="mt-6 font-display text-3xl uppercase tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Button href="/contacto">Solicitar información</Button>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden border border-border-light">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

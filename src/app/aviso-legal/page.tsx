import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHeader title="Aviso legal" variant="light" />
      <Section>
        <Container>
          <div className="prose-sm max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
            <p>
              En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la
              Información, se informa que {siteConfig.name} es un proyecto
              ficticio con fines de demostración.
            </p>
            <p>
              Los contenidos de este sitio web tienen carácter informativo. Los
              datos de contacto y proyectos mostrados son simulados.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader title="Política de privacidad" variant="light" />
      <Section>
        <Container>
          <div className="prose-sm max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
            <p>
              {siteConfig.name} respeta tu privacidad. Este sitio es un proyecto
              de demostración y no recopila datos personales de forma real.
            </p>
            <p>
              El formulario de contacto simula el envío de mensajes sin
              transmitir información a servidores externos.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

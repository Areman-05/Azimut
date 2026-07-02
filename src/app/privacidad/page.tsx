import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad y tratamiento de datos de Azimut Estructuras.",
  path: "/privacidad",
});

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

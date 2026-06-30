import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config";

export function CTASection() {
  return (
    <Section variant="sand">
      <Container className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
          ¿Listo para empezar?
        </p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
          Construyamos tu próximo espacio juntos
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted">
          Cuéntanos tu proyecto y te prepararemos una propuesta personalizada
          sin compromiso.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contacto" size="lg">
            Solicitar presupuesto
          </Button>
          <Button href="/proyectos" variant="secondary" size="lg">
            Ver proyectos
          </Button>
        </div>
        <p className="mt-8 text-xs text-muted">
          {siteConfig.contact.email} · {siteConfig.contact.phone}
        </p>
      </Container>
    </Section>
  );
}

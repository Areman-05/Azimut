import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-32">
      <Container className="text-center">
        <p className="font-display text-8xl text-terracotta">404</p>
        <h1 className="mt-6 font-display text-3xl uppercase tracking-tight">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Volver al inicio</Button>
          <Button href="/contacto" variant="secondary">
            Contactar
          </Button>
        </div>
        <p className="mt-8">
          <Link
            href="/proyectos"
            className="text-xs uppercase tracking-widest text-muted hover:text-charcoal"
          >
            Ver proyectos
          </Link>
        </p>
      </Container>
    </div>
  );
}

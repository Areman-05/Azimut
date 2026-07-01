"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center py-32">
      <Container className="text-center">
        <p className="font-display text-6xl text-terracotta">Error</p>
        <h1 className="mt-6 font-display text-2xl uppercase tracking-tight">
          Algo salió mal
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          Ha ocurrido un error inesperado. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button type="button" onClick={reset}>
            Reintentar
          </Button>
          <Button href="/" variant="secondary">
            Volver al inicio
          </Button>
        </div>
      </Container>
    </div>
  );
}

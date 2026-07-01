import { Container } from "@/components/layout/Container";

export default function GlobalLoading() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <Container className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin border-2 border-border-light border-t-terracotta" />
        <p className="mt-6 text-xs uppercase tracking-widest text-muted">
          Cargando...
        </p>
      </Container>
    </div>
  );
}

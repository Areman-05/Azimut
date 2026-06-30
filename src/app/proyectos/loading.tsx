import { Container } from "@/components/layout/Container";

export default function ProyectosLoading() {
  return (
    <div className="py-32">
      <Container>
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-48 bg-border-light" />
          <div className="h-12 w-96 max-w-full bg-border-light" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/3] bg-border-light" />
                <div className="h-4 w-3/4 bg-border-light" />
                <div className="h-4 w-1/2 bg-border-light" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

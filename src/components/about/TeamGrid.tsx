import { Container, Section } from "@/components/layout";
import { team } from "@/data/team";

export function TeamGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            Equipo
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight lg:text-4xl">
            Profesionales detrás de cada proyecto
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.id}
              className="border border-border-light bg-sand p-6"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-charcoal font-display text-xl text-cream">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-display text-lg uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-terracotta">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container, Section } from "@/components/layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";

type RelatedProjectsProps = {
  projects: Project[];
  currentTitle: string;
};

export function RelatedProjects({ projects, currentTitle }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <Section variant="sand">
      <Container>
        <h2 className="mb-12 font-display text-2xl uppercase tracking-tight lg:text-3xl">
          Proyectos relacionados
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

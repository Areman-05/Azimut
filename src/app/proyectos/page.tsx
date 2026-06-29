import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsGrid } from "@/components/projects";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portfolio de proyectos de arquitectura modular y construcción sostenible de Azimut Estructuras.",
};

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Nuestros proyectos"
        description="Cada obra refleja nuestro compromiso con la precisión constructiva, los materiales nobles y la sostenibilidad."
      />
      <Section>
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </Section>
    </>
  );
}

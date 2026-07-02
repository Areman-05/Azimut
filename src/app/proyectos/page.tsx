import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsGrid } from "@/components/projects";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Proyectos",
  description:
    "Portfolio de proyectos de arquitectura modular y construcción sostenible de Azimut Estructuras.",
  path: "/proyectos",
});

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
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Proyectos" },
            ]}
          />
          <div className="mt-12">
            <ProjectsGrid projects={projects} />
          </div>
        </Container>
      </Section>
    </>
  );
}

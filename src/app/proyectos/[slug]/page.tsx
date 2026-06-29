import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Maximize, Clock } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

const categoryLabels = {
  residencial: "Residencial",
  comercial: "Comercial",
  modular: "Modular",
} as const;

export default async function ProyectoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
        <Container className="absolute bottom-0 left-0 right-0 pb-12">
          <Link
            href="/proyectos"
            className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream/80 transition-colors hover:text-cream"
          >
            <ArrowLeft size={14} aria-hidden />
            Volver a proyectos
          </Link>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-terracotta">
            {categoryLabels[project.category]}
          </p>
          <h1 className="font-display text-4xl uppercase tracking-tight text-cream lg:text-6xl">
            {project.title}
          </h1>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed">{project.description}</p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-terracotta">
                    El reto
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-terracotta">
                    La solución
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <aside className="border border-border-light bg-sand p-8">
              <h2 className="mb-6 font-display text-sm uppercase tracking-widest">
                Ficha técnica
              </h2>
              <dl className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <dt className="text-muted">Año</dt>
                    <dd className="font-medium">{project.year}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Maximize size={16} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <dt className="text-muted">Superficie</dt>
                    <dd className="font-medium">{project.area}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <dt className="text-muted">Duración</dt>
                    <dd className="font-medium">{project.duration}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-8">
                <Button href="/contacto" className="w-full">
                  Proyecto similar
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

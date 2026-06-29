"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { ProjectCard } from "@/components/projects";
import { Button } from "@/components/ui";
import type { Project } from "@/types";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section variant="light" id="proyectos-destacados">
      <Container>
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
              Proyectos destacados
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
              Obras que definen nuestro estándar
            </h2>
          </div>
          <Button href="/proyectos" variant="secondary">
            Ver todos
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center lg:hidden">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal"
          >
            Ver todos los proyectos
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

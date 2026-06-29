"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/cn";

type FilterOption = "todos" | ProjectCategory;

const filters: { value: FilterOption; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: "Residencial" },
  { value: "comercial", label: "Comercial" },
  { value: "modular", label: "Modular" },
];

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("todos");

  const filtered =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div
        className="mb-12 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Filtrar proyectos"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "px-4 py-2 text-xs uppercase tracking-widest transition-colors",
              activeFilter === filter.value
                ? "bg-charcoal text-cream"
                : "border border-border-light text-muted hover:border-charcoal hover:text-charcoal",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

const categoryLabels: Record<Project["category"], string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  modular: "Modular",
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={cn(
        "group block overflow-hidden border border-border-light bg-cream transition-colors hover:border-terracotta",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-4 top-4 bg-charcoal/80 px-3 py-1 text-xs uppercase tracking-widest text-cream backdrop-blur-sm">
          {categoryLabels[project.category]}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl uppercase tracking-wide">
          {project.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} aria-hidden />
          {project.location}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

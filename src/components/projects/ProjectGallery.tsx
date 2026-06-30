"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.gallery ?? [project.image];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`${project.title} — imagen ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 80vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-[4/3] overflow-hidden border-2 transition-colors",
                activeIndex === index
                  ? "border-terracotta"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

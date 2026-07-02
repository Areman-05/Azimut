import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {label && (
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl",
          dark && "text-cream",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-sm leading-relaxed",
            dark ? "text-sand/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

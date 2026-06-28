import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "dark" | "sand";
};

const variantStyles = {
  light: "bg-cream text-charcoal",
  dark: "bg-charcoal text-cream",
  sand: "bg-sand text-charcoal",
};

export function Section({
  children,
  className,
  id,
  variant = "light",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-28", variantStyles[variant], className)}
    >
      {children}
    </section>
  );
}

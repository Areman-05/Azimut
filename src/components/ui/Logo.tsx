import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 font-display uppercase tracking-[0.25em]",
        variant === "light" ? "text-cream" : "text-charcoal",
        className,
      )}
      aria-label="Azimut Estructuras — Inicio"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center border-2 text-sm font-bold",
          variant === "light"
            ? "border-terracotta text-terracotta"
            : "border-terracotta text-terracotta",
        )}
        aria-hidden
      >
        A
      </span>
      <span className="hidden text-sm sm:inline">Azimut</span>
    </Link>
  );
}

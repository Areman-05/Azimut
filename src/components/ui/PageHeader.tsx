import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  className?: string;
};

const variantStyles = {
  light: "bg-cream text-charcoal",
  dark: "bg-charcoal text-cream",
};

export function PageHeader({
  label,
  title,
  description,
  variant = "light",
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border-light py-20 lg:py-28", variantStyles[variant], className)}>
      <Container>
        {label && (
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            {label}
          </p>
        )}
        <h1 className="max-w-4xl font-display text-4xl uppercase leading-tight tracking-tight lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed",
              variant === "dark" ? "text-sand/80" : "text-muted",
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}

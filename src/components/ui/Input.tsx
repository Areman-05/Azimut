import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function Input({ className, error, id, ...props }: InputProps) {
  return (
    <input
      id={id}
      className={cn(
        "w-full border border-border-light bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta",
        error && "border-red-500",
        className,
      )}
      aria-invalid={!!error}
      aria-describedby={error && id ? `${id}-error` : undefined}
      {...props}
    />
  );
}

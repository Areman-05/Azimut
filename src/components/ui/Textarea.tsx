import { cn } from "@/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function Textarea({ className, error, id, ...props }: TextareaProps) {
  return (
    <textarea
      id={id}
      className={cn(
        "w-full resize-none border border-border-light bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta",
        error && "border-red-500",
        className,
      )}
      aria-invalid={!!error}
      aria-describedby={error && id ? `${id}-error` : undefined}
      {...props}
    />
  );
}

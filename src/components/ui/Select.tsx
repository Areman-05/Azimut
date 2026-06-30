import { cn } from "@/lib/cn";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  options: SelectOption[];
  placeholder?: string;
};

export function Select({
  className,
  error,
  id,
  options,
  placeholder = "Seleccionar...",
  ...props
}: SelectProps) {
  return (
    <select
      id={id}
      className={cn(
        "w-full border border-border-light bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta",
        error && "border-red-500",
        className,
      )}
      aria-invalid={!!error}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

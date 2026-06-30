import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs uppercase tracking-widest"
      >
        {label}
        {required && " *"}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

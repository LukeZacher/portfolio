import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const controlStyles =
  "w-full rounded-sm border border-line bg-surface px-4 py-3 text-base text-fg transition-colors placeholder:text-fg-subtle hover:border-fg-subtle aria-invalid:border-accent";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "font-mono text-xs tracking-widest text-fg-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlStyles, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(controlStyles, "min-h-40 resize-y", className)}
      {...props}
    />
  );
}

type FieldErrorProps = {
  id: string;
  errors?: readonly string[];
};

export function FieldError({ id, errors }: FieldErrorProps) {
  const message = errors?.[0];

  if (!message) {
    return null;
  }

  return (
    <p id={id} className="text-sm text-accent">
      {message}
    </p>
  );
}

import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "text";

const variantStyles = {
  primary:
    "rounded-sm bg-accent px-6 font-semibold text-canvas hover:shadow-glow-accent",
  text: "border-b border-line font-medium text-fg hover:text-accent",
} satisfies Record<ButtonVariant, string>;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 py-3 text-base transition",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

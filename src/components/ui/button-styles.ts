import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "text";

const variantStyles = {
  primary:
    "rounded-sm bg-accent px-6 font-semibold text-canvas hover:shadow-glow-accent",
  text: "border-b border-line font-medium text-fg hover:text-accent",
} satisfies Record<ButtonVariant, string>;

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex items-center gap-2 py-3 text-base transition disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    className,
  );
}

import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function OpenToWork({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs tracking-wide",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]"
      />
      Open to work
    </p>
  );
}

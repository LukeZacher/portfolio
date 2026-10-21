import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type TagListProps = ComponentProps<"ul"> & {
  items: readonly string[];
};

export function TagList({ items, className, ...props }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} {...props}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm bg-surface px-2.5 py-1 font-mono text-xs text-fg-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

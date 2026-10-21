import type { ComponentProps } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type SectionProps = ComponentProps<"section"> & {
  id: string;
  index: string;
  title: string;
  titleZh?: string;
};

export function Section({
  id,
  index,
  title,
  titleZh,
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-8 py-24 md:py-32", className)}
      {...props}
    >
      <Container>
        <h2 id={headingId} className="flex items-baseline gap-4">
          <span aria-hidden="true" className="font-mono text-sm text-accent">
            {index}
          </span>
          <span className="font-display text-4xl font-extrabold uppercase font-stretch-condensed md:text-5xl">
            {title}
          </span>
          <span
            aria-hidden="true"
            lang="zh-Hant"
            className="font-cjk text-xl font-bold text-fg-subtle"
          >
            {titleZh}
          </span>
        </h2>

        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

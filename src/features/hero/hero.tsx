import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  const nameParts = siteConfig.name.split(" ");

  return (
    <section className="pt-16 pb-24 md:pt-36">
      <Container>
        <p className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
          <span
            lang="zh-Hant"
            className="font-cjk text-sm font-bold tracking-widest text-accent"
          >
            全端工程師
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-line" />
          <span className="font-mono text-xs tracking-widest text-fg-muted uppercase">
            {siteConfig.role} — {siteConfig.location}
          </span>
        </p>

        <h1 className="mt-8 font-display text-hero font-extrabold uppercase font-stretch-condensed">
          {nameParts.map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h1>

        <p className="mt-9 max-w-md text-lg leading-relaxed text-fg-soft">
          I build and untangle production software across the stack, with a
          focus on clean, maintainable code and interfaces people enjoy using.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href="/#experience">View experience</ButtonLink>
          <ButtonLink href="/#contact" variant="text">
            Get in touch <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

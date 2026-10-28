import { MoveRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { NeonSign } from "@/features/hero/neon-sign";
import { NightSky } from "@/features/hero/night-sky";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-24 md:pt-36">
      <NightSky />

      <Container className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div>
          <p className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
            {/* <span
            lang="zh-Hant"
            className="font-cjk text-sm font-bold tracking-widest text-accent"
          >
            全端工程師
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-line" /> */}
            <span className="font-mono text-xs tracking-widest text-fg-muted uppercase">
              {siteConfig.role} — {siteConfig.location}
            </span>
          </p>

          <h1 className="mt-8 w-min font-display text-hero font-extrabold uppercase font-stretch-condensed">
            {siteConfig.name}
          </h1>

          <p className="mt-9 max-w-md text-lg leading-relaxed text-fg-soft">
            I build and untangle production software across the stack, with a
            focus on clean, maintainable code and interfaces people enjoy using.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/#experience">View experience</ButtonLink>
            <ButtonLink href="/#contact" variant="text">
              Get in touch
              <MoveRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </div>

        {siteConfig.availableForWork && (
          <NeonSign className="hidden lg:mt-2 lg:flex" />
        )}
      </Container>
    </section>
  );
}

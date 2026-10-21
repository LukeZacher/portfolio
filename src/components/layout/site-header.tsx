import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="relative pt-10">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-semibold"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-sm bg-accent font-cjk text-lg leading-none font-black text-canvas"
          >
            L
          </span>
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {siteConfig.availableForWork && (
          <p className="hidden items-center gap-2.5 font-mono text-xs tracking-wide md:flex">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]"
            />
            Open to work
          </p>
        )}

        <MobileNav />
      </Container>
    </header>
  );
}

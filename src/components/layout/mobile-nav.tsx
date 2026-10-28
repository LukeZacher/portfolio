"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { OpenToWork } from "@/components/layout/open-to-work";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const Icon = isOpen ? X : Menu;

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((open) => !open)}
        className="-mr-2.5 grid size-11 place-items-center text-fg"
      >
        <Icon aria-hidden="true" strokeWidth={1.5} className="size-5.5" />
      </button>

      {isOpen ? (
        <div
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30"
        />
      ) : null}

      <nav
        id="mobile-nav"
        aria-label="Primary"
        inert={!isOpen}
        className={cn(
          "absolute inset-x-0 top-full z-40 mt-4 border-y border-line bg-canvas transition-[opacity,translate,visibility] duration-200 ease-out motion-reduce:transition-none",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <Container>
          <ul className="flex flex-col py-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {siteConfig.availableForWork && (
            <OpenToWork className="border-t border-line py-4" />
          )}
        </Container>
      </nav>
    </div>
  );
}

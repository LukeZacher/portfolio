import { MoveUpRight } from "lucide-react";

import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/features/contact/contact-form";

export function Contact() {
  return (
    <Section id="contact" index="04" title="Contact" titleZh="聯絡">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-fg-soft">
            I&apos;m looking for my next full-stack or front-end role. If you
            think I&apos;d be a good fit for your team, or just have a question,
            send a message and I&apos;ll get back to you.
          </p>
          <ul
            aria-label="Elsewhere online"
            className="mt-8 flex flex-col gap-3"
          >
            {siteConfig.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {social.label}
                  <MoveUpRight
                    aria-hidden="true"
                    className="size-4 text-fg-subtle transition group-hover:text-fg motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" index="01" title="About" titleZh="關於">
      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-fg-soft">
        <p>
          I&apos;m a full-stack developer in Omaha with professional web
          development experience using tools like Angular, .NET, React, and SQL
          Server.
        </p>
        <p>
          In my free time, I enjoy working on new ideas and projects and
          expanding my capabilities as a developer. I&apos;m finishing up the
          first version of a web-based football GM simulation game and am
          excited to showcase it here soon!
        </p>
        <p>
          Outside of development, I love music and being active. I play the
          piano, drums (very rusty), and really want to become decent at guitar.
          If needed, I can be a playmaking backup point guard for your rec
          league. I&apos;m also a proud former flag football league commissioner
          and two-stripe BJJ white belt for the last three years.
        </p>

        <div className="mt-12 max-w-2xl border-t border-line pt-8">
          <h3 className="font-mono text-xs tracking-widest text-fg-muted uppercase">
            Education
          </h3>
          <p className="mt-3 text-lg font-semibold">
            B.S. Computer Science · B.A. Graphic Design
          </p>
          <p className="mt-1 text-fg-muted">
            Creighton University · <time dateTime="2025">2025</time>
          </p>
        </div>
      </div>
    </Section>
  );
}

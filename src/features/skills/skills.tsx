import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { skillGroups } from "@/features/skills/data";

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills" titleZh="技能">
      <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="flex items-baseline gap-3 text-xl font-semibold">
              {group.title}
              <span
                aria-hidden="true"
                lang="zh-Hant"
                className="font-cjk text-base font-bold text-fg-subtle"
              >
                {group.titleZh}
              </span>
            </h3>
            <p className="mt-2 max-w-md leading-relaxed text-fg-soft">
              {group.summary}
            </p>
            <TagList
              items={group.skills}
              aria-label={`${group.title} skills`}
              className="mt-5"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/section";
import { jobs } from "@/features/experience/data";
import { ExperienceItem } from "@/features/experience/experience-item";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience" titleZh="經歷">
      <ol className="space-y-16">
        {jobs.map((job) => (
          <ExperienceItem key={`${job.company}-${job.start}`} job={job} />
        ))}
      </ol>
    </Section>
  );
}

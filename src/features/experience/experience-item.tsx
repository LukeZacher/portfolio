import { TagList } from "@/components/ui/tag-list";
import type { Job } from "@/features/experience/data";
import { formatYearMonth } from "@/lib/dates";

type ExperienceItemProps = {
  job: Job;
};

export function ExperienceItem({ job }: ExperienceItemProps) {
  const details = [job.company, job.location, job.arrangement].filter(
    (detail) => detail !== undefined,
  );

  return (
    <li className="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-12">
      <p className="font-mono text-xs tracking-widest text-fg-subtle uppercase md:pt-1.5">
        <time dateTime={job.start}>{formatYearMonth(job.start)}</time>
        {" – "}
        {job.end ? (
          <time dateTime={job.end}>{formatYearMonth(job.end)}</time>
        ) : (
          "Present"
        )}
      </p>

      <div>
        <h3 className="text-xl font-semibold">{job.role}</h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 text-fg-muted">
          {details.map((detail, index) => (
            <span key={detail} className="flex items-center gap-x-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-fg-subtle">
                  ·
                </span>
              ) : null}
              {detail}
            </span>
          ))}
        </p>

        <ul className="mt-5 list-disc space-y-2.5 pl-5 leading-relaxed text-fg-soft marker:text-fg-subtle">
          {job.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <TagList
          items={job.tech}
          aria-label="Technologies used"
          className="mt-5"
        />
      </div>
    </li>
  );
}

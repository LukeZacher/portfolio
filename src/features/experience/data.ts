import type { YearMonth } from "@/lib/dates";

export type Job = {
  role: string;
  company: string;
  location: string;
  arrangement?: string;
  start: YearMonth;
  end: YearMonth | null;
  highlights: readonly string[];
  tech: readonly string[];
};

export const jobs = [
  {
    role: "Software Engineer",
    company: "Milliman",
    location: "Omaha, NE",
    arrangement: "Hybrid",
    start: "2025-06",
    end: "2026-10",
    highlights: [
      "Built full-stack features and fixed production issues across an Angular, C#/.NET, and SQL Server codebase for an ICHRA/CHOICE health plan administration platform.",
      "Integrated a third-party insurance carrier's quoting and enrollment API into the platform's marketplace, letting employees in the platform's largest state (MA) get quotes and enroll in plans.",
      "Automated delivery of dynamically generated Excel files to a vendor partner over SFTP.",
      "Fixed security vulnerabilities found in penetration tests across multiple legacy applications.",
    ],
    tech: ["TypeScript", "C#", ".NET", "Angular", "SQL Server", "Azure DevOps"],
  },
  {
    role: "Digital Marketing & IT Intern",
    company: "Fidelity Financial",
    location: "Omaha, NE",
    arrangement: "Hybrid",
    start: "2024-08",
    end: "2025-06",
    highlights: [
      "Built, deployed, and maintained the website for a new nonprofit branch using Angular and .NET.",
      "Designed the new branch's logo, brand identity, and marketing documents.",
      "Performed hardware and software IT support for staff.",
    ],
    tech: ["Angular", ".NET", "Illustrator", "Microsoft Office"],
  },
  {
    role: "Front-End Developer & UI Designer",
    company: "Creighton University",
    location: "Omaha, NE",
    arrangement: "Remote",
    start: "2023-09",
    end: "2025-05",
    highlights: [
      "Built an informational website for a Department of Defense-funded, multi-university research project on online mob formation and behavior, using HTML, CSS, and JavaScript. Later redesigned it with React and Tailwind CSS.",
      "Specialized in front-end design on a full-stack web tool that integrated a mob simulation program written in Python.",
      "Collaborated with a small team of developers using GitHub and participated in weekly progress update meetings led by my professor.",
    ],
    tech: ["React", "Tailwind CSS", "Python", "HTML", "GitHub"],
  },
] as const satisfies readonly Job[];

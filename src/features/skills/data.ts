type SkillGroup = {
  title: string;
  titleZh: string;
  summary: string;
  skills: readonly string[];
};

export const skillGroups = [
  {
    title: "Frontend",
    titleZh: "前端",
    summary:
      "Angular is my most-used (and current favorite) framework. React powers a handful of my side projects, including this site (with Next.js).",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "HTML",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & Data",
    titleZh: "後端",
    summary:
      "APIs and business logic in C# and .NET with SQL Server, plus Node, Fastify, and PostgreSQL on side projects.",
    skills: [".NET", "C#", "SQL Server", "PostgreSQL", "Fastify", "REST APIs"],
  },
  {
    title: "Design",
    titleZh: "設計",
    summary:
      "My graphic design degree gets real use: logos, brand identities, and UI mockups.",
    skills: ["Figma", "Illustrator", "Photoshop", "Affinity Designer", "Canva"],
  },
  {
    title: "Tools & Workflow",
    titleZh: "工具",
    summary:
      "Git-based workflows, pull request reviews, pipelines, and deployments in Azure DevOps and GitHub.",
    skills: [
      "Git",
      "GitHub",
      "Azure",
      "Azure DevOps",
      "Visual Studio",
      "VS Code",
      "Postman",
    ],
  },
] as const satisfies readonly SkillGroup[];

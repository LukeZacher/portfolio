type NavItem = { label: string; href: string };

type SiteConfig = {
  name: string;
  role: string;
  location: string;
  description: string;
  availableForWork: boolean;
  nav: readonly NavItem[];
};

export const siteConfig = {
  name: "Luke Zacher",
  role: "Full-Stack Developer",
  location: "Omaha, NE",
  description:
    "Full-stack developer in Omaha with degrees in computer science and graphic design, building production web apps with Angular, .NET, and SQL Server.",
  availableForWork: true,
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const satisfies SiteConfig;

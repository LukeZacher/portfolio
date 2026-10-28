type NavItem = { label: string; href: string };

type SocialLink = { label: string; href: string };

type SiteConfig = {
  name: string;
  role: string;
  location: string;
  url: string;
  description: string;
  availableForWork: boolean;
  nav: readonly NavItem[];
  socials: readonly SocialLink[];
};

export const siteConfig = {
  name: "Luke Zacher",
  role: "Full-Stack Developer",
  location: "Omaha, NE",
  url: "https://lukezacher.com",
  description:
    "Full-stack developer in Omaha with degrees in computer science and graphic design, building production web apps with Angular, .NET, and SQL Server.",
  availableForWork: true,
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/LukeZacher",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lukezacher",
    },
  ],
} as const satisfies SiteConfig;

export const siteTitle = `${siteConfig.name} — ${siteConfig.role}`;

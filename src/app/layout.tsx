import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luke Zacher -- Full-Stack Developer",
    template: "%s · Luke Zacher",
  },
  description:
    "Full-stack developer in Omaha with degrees in copmuter science and graphic design, buildingp roduction web apps with Angular, .NET, and SQL Server.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-fg">
        {children}
      </body>
    </html>
  );
}

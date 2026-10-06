import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-fg">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

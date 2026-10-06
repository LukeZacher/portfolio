import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="pt-10">
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-base font-semibold">
          {siteConfig.name}
        </Link>
      </Container>
    </header>
  );
}

import { About } from "@/features/about/about";
import { Contact } from "@/features/contact/contact";
import { Experience } from "@/features/experience/experience";
import { Hero } from "@/features/hero/hero";
import { Skills } from "@/features/skills/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

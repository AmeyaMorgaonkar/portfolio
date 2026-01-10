import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { AboutSection } from "@/components/sections/about";
import { BlogSection } from "@/components/sections/blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <AboutSection />
      <BlogSection />
    </>
  );
}

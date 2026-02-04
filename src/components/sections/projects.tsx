"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "../project-card";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Signature animation: underline draws in when heading enters viewport
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="pt-16 pb-20 scroll-mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 ref={headingRef} className="text-2xl sm:text-3xl font-bold section-heading">Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full transition-all duration-200 hover:gap-3 group"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

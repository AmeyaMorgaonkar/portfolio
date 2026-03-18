"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

export function SkillsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  if (skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="pt-16 pb-20 scroll-mt-16 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl font-bold mb-12 text-center section-heading mx-auto"
        >
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 text-sm rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
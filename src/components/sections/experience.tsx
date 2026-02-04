"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
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

  if (experiences.length === 0) {
    return null;
  }

  // Show only the 2 most recent experiences on homepage
  const latestExperiences = experiences.slice(0, 2);

  return (
    <section id="experience" className="pt-4 pb-20 scroll-mt-16 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl font-bold mb-12 text-center section-heading mx-auto"
        >
          Experience
        </h2>

        <div className="space-y-6">
          {latestExperiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-[var(--border)]"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />

              <div className="bg-[var(--card)] rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-[var(--muted)]">{exp.company}</p>
                  </div>
                  <p className="text-sm text-[var(--muted)] mt-2 sm:mt-0">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-[var(--muted)] flex">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-[var(--background)] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {exp.longDescription && (
                    <Link
                      href={`/experience/${exp.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:gap-3 transition-all duration-200"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          sessionStorage.setItem('returnSection', 'experience');
                        }
                      }}
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full transition-all duration-200 hover:gap-3"
          >
            View full experience & education
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  if (experiences.length === 0) {
    return null;
  }

  // Show only the 2 most recent experiences on homepage
  const latestExperiences = experiences.slice(0, 2);

  return (
    <section id="experience" className="pt-4 pb-20 scroll-mt-16 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {latestExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          sessionStorage.setItem('returnSection', 'experience');
                        }
                      }}
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 rounded-full transition-opacity group"
          >
            View full experience & education
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

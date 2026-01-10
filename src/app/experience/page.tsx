"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { experiences, education } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h1>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Work Experience Section */}
        {experiences.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-[var(--card)] rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold">Work Experience</h2>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[var(--border)]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />

                  <div className="bg-[var(--card)] rounded-lg p-6 hover:bg-[var(--card)]/80 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-[var(--foreground)] font-medium">{exp.company}</p>
                        {exp.location && (
                          <p className="text-sm text-[var(--muted)] flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--muted)] mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-sm text-[var(--muted)] flex">
                          <span className="mr-2 text-[var(--foreground)]">•</span>
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
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-[var(--card)] rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[var(--border)]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />

                  <div className="bg-[var(--card)] rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-[var(--foreground)] font-medium">{edu.field}</p>
                        <p className="text-[var(--muted)]">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-[var(--muted)] mt-2 sm:mt-0 sm:text-right">
                        <div className="flex items-center gap-2 sm:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.startDate} - {edu.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 sm:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {edu.gpa && (
                      <p className="text-sm text-[var(--muted)] mb-3">
                        <span className="font-medium text-[var(--foreground)]">GPA:</span> {edu.gpa}
                      </p>
                    )}

                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-[var(--muted)] flex">
                            <span className="mr-2 text-[var(--foreground)]">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

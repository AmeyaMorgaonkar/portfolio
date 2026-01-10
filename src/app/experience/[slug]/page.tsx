"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react";
import { experiences } from "@/lib/data";
import ReactMarkdown from "react-markdown";

export default function ExperienceDetailPage() {
  const params = useParams();
  const experience = experiences.find((e) => e.slug === params.slug);

  if (!experience) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
          <Link
            href="/experience"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← Back to experience
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to experience
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{experience.role}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[var(--muted)] mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="font-medium text-[var(--foreground)]">{experience.company}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.startDate} - {experience.endDate}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 bg-[var(--card)] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Summary Points */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 bg-[var(--card)] rounded-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Highlights</h2>
          <ul className="space-y-2">
            {experience.description.map((point, i) => (
              <li key={i} className="flex text-[var(--muted)]">
                <span className="mr-3 text-[var(--foreground)]">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Long Description */}
        {experience.longDescription && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-neutral dark:prose-invert max-w-none"
          >
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-[var(--muted)] mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-4 ml-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-[var(--muted)] flex">
                    <span className="mr-2 text-[var(--foreground)]">•</span>
                    <span>{children}</span>
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="text-[var(--foreground)] font-semibold">{children}</strong>
                ),
              }}
            >
              {experience.longDescription}
            </ReactMarkdown>
          </motion.section>
        )}
      </article>
    </main>
  );
}

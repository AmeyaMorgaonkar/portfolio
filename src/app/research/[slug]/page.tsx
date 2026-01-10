"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  Award,
  ExternalLink,
  Download,
  Copy,
  Check,
} from "lucide-react";
import { getResearchBySlug, projects } from "@/lib/data";
import { format } from "date-fns";
import { useState } from "react";

interface ResearchPageProps {
  params: Promise<{ slug: string }>;
}

export default function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = use(params);
  const research = getResearchBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!research) {
    notFound();
  }

  const relatedProject = research.relatedProject
    ? projects.find((p) => p.id === research.relatedProject)
    : null;

  const isPaper = research.type === "paper";

  // Generate citation
  const citation = `${research.authors.join(", ")}. "${research.title}." ${research.venue}, ${format(new Date(research.date), "yyyy")}.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/research"
          className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        {/* Type Badge */}
        <div className="flex items-center gap-2 mb-4">
          {isPaper ? (
            <span className="flex items-center gap-2 px-3 py-1 bg-[var(--card)] rounded-full text-sm">
              <FileText className="w-4 h-4" />
              Research Paper
            </span>
          ) : (
            <span className="flex items-center gap-2 px-3 py-1 bg-[var(--card)] rounded-full text-sm">
              <Award className="w-4 h-4" />
              Patent
            </span>
          )}
          <span className="text-sm text-[var(--muted)]">{research.status}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{research.title}</h1>

        {/* Authors */}
        <p className="text-[var(--muted)] mb-2">
          {research.authors.join(", ")}
        </p>

        {/* Venue and Date */}
        <p className="text-sm text-[var(--muted)] mb-6">
          {research.venue} • {format(new Date(research.date), "MMMM yyyy")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {research.pdfUrl && (
            <a
              href={research.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          )}
          {research.externalLinks.doi && (
            <a
              href={research.externalLinks.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              DOI
            </a>
          )}
          {research.externalLinks.arxiv && (
            <a
              href={research.externalLinks.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              arXiv
            </a>
          )}
          {research.externalLinks.ieee && (
            <a
              href={research.externalLinks.ieee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              IEEE
            </a>
          )}
          {research.externalLinks.googleScholar && (
            <a
              href={research.externalLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Google Scholar
            </a>
          )}
          {research.externalLinks.patentOffice && (
            <a
              href={research.externalLinks.patentOffice}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Patent Office
            </a>
          )}
        </div>
      </motion.div>

      {/* Thumbnail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative aspect-video rounded-lg overflow-hidden bg-[var(--card)] mb-8"
      >
        <Image
          src={research.thumbnail}
          alt={research.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Abstract */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Abstract</h2>
        <p className="text-[var(--muted)] leading-relaxed">{research.abstract}</p>
      </motion.div>

      {/* Citation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Citation</h2>
        <div className="relative p-4 bg-[var(--card)] rounded-lg">
          <p className="text-sm text-[var(--muted)] pr-10 font-mono">
            {citation}
          </p>
          <button
            onClick={copyCitation}
            className="absolute top-4 right-4 p-2 hover:bg-[var(--border)] rounded transition-colors"
            title="Copy citation"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Related Project */}
      {relatedProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t pt-8"
        >
          <h2 className="text-xl font-semibold mb-4">Related Project</h2>
          <Link
            href={`/projects/${relatedProject.slug}`}
            className="flex items-center gap-4 p-4 bg-[var(--card)] rounded-lg hover:bg-[var(--border)] transition-colors group"
          >
            <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
              <Image
                src={relatedProject.images[0]}
                alt={relatedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:underline">
                {relatedProject.title}
              </h3>
              <p className="text-sm text-[var(--muted)] line-clamp-2">
                {relatedProject.shortDescription}
              </p>
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

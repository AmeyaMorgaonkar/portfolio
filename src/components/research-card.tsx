"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText, Award, ExternalLink } from "lucide-react";
import { Research } from "@/lib/data";
import { format } from "date-fns";

interface ResearchCardProps {
  research: Research;
}

export function ResearchCard({ research }: ResearchCardProps) {
  const isPaper = research.type === "paper";

  return (
    <Link href={`/research/${research.slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        className="bg-[var(--background)] rounded-lg overflow-hidden cursor-pointer group h-full flex flex-col"
      >
        {/* Thumbnail */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={research.thumbnail}
            alt={research.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="flex items-center gap-1 text-xs px-2 py-1 bg-[var(--background)]/90 rounded-full">
              {isPaper ? (
                <>
                  <FileText className="w-3 h-3" />
                  Paper
                </>
              ) : (
                <>
                  <Award className="w-3 h-3" />
                  Patent
                </>
              )}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:underline">
            {research.title}
          </h3>

          <p className="text-xs text-[var(--muted)] mb-2">
            {research.venue}
          </p>

          <p className="text-xs text-[var(--muted)] mb-3">
            {format(new Date(research.date), "MMM yyyy")} • {research.status}
          </p>

          {/* Quick links */}
          <div className="mt-auto flex items-center gap-2">
            {research.pdfUrl && (
              <span className="text-xs text-[var(--muted)]">PDF</span>
            )}
            {research.externalLinks.doi && (
              <span className="text-xs text-[var(--muted)]">DOI</span>
            )}
            {research.externalLinks.arxiv && (
              <span className="text-xs text-[var(--muted)]">arXiv</span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

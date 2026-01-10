"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedResearch, research } from "@/lib/data";
import { ResearchCard } from "../research-card";

export function ResearchSection() {
  const featuredResearch = getFeaturedResearch();

  if (research.length === 0) {
    return null;
  }

  return (
    <section id="research" className="py-20 bg-[var(--card)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Research & Publications</h2>
          <Link
            href="/research"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 rounded-full transition-opacity group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredResearch.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ResearchCard research={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import { research } from "@/lib/data";
import Link from "next/link";
import { ResearchCard } from "@/components/research-card";

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "paper" | "patent">("all");

  const filteredResearch = useMemo(() => {
    return research.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.abstract.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        typeFilter === "all" || item.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, typeFilter]);

  const paperCount = research.filter((r) => r.type === "paper").length;
  const patentCount = research.filter((r) => r.type === "patent").length;

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollToSectionOnHome', 'research');
      window.location.href = '/';
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <a href="/" onClick={handleBack} className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </a>
      </div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Research & Publications</h1>
        <p className="text-[var(--muted)]">
          Academic papers, patents, and other research work.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[var(--card)] rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
          />
        </div>

        {/* Type Filter */}
        <div className="flex gap-2">
          <button
            onClick={() => setTypeFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              typeFilter === "all"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--card)] hover:bg-[var(--border)]"
            }`}
          >
            All ({research.length})
          </button>
          <button
            onClick={() => setTypeFilter("paper")}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              typeFilter === "paper"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--card)] hover:bg-[var(--border)]"
            }`}
          >
            📄 Papers ({paperCount})
          </button>
          <button
            onClick={() => setTypeFilter("patent")}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              typeFilter === "patent"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--card)] hover:bg-[var(--border)]"
            }`}
          >
            📜 Patents ({patentCount})
          </button>
        </div>
      </motion.div>

      {/* Results count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-[var(--muted)] mb-6"
      >
        Showing {filteredResearch.length} of {research.length} publications
      </motion.p>

      {/* Research Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredResearch.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <ResearchCard research={item} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredResearch.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-[var(--muted)]">No publications match your search.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setTypeFilter("all");
            }}
            className="mt-4 text-sm underline hover:no-underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

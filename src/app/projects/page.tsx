"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { projects, getAllTechnologies, getAllTags } from "@/lib/data";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  const technologies = getAllTechnologies();
  const tags = getAllTags();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      // Technology filter
      const matchesTech =
        !selectedTech || project.technologies.includes(selectedTech);

      // Tag filter
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);

      // Special filters
      const matchesType =
        !filterType ||
        (filterType === "paper" && project.hasResearchPaper) ||
        (filterType === "patent" && project.hasPatent);

      return matchesSearch && matchesTech && matchesTag && matchesType;
    });
  }, [searchQuery, selectedTech, selectedTag, filterType]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTech(null);
    setSelectedTag(null);
    setFilterType(null);
  };

  const hasActiveFilters =
    searchQuery || selectedTech || selectedTag || filterType;

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollToSectionOnHome', 'projects');
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-[var(--muted)]">
          A collection of projects I've worked on, from hackathons to research implementations.
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
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[var(--card)] rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {/* Technology Filter */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors">
              <Filter className="w-4 h-4" />
              {selectedTech || "Technology"}
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 max-h-60 overflow-y-auto">
              <button
                onClick={() => setSelectedTech(null)}
                className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--border)] transition-colors"
              >
                All Technologies
              </button>
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-[var(--border)] transition-colors ${
                    selectedTech === tech ? "bg-[var(--border)]" : ""
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors">
              {selectedTag || "Tag"}
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 max-h-60 overflow-y-auto">
              <button
                onClick={() => setSelectedTag(null)}
                className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--border)] transition-colors"
              >
                All Tags
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-[var(--border)] transition-colors ${
                    selectedTag === tag ? "bg-[var(--border)]" : ""
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Special Filters */}
          <button
            onClick={() => setFilterType(filterType === "paper" ? null : "paper")}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              filterType === "paper"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--card)] hover:bg-[var(--border)]"
            }`}
          >
            📄 Has Paper
          </button>
          <button
            onClick={() => setFilterType(filterType === "patent" ? null : "patent")}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              filterType === "patent"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--card)] hover:bg-[var(--border)]"
            }`}
          >
            📜 Has Patent
          </button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      </motion.div>

      {/* Results count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-[var(--muted)] mb-6"
      >
        Showing {filteredProjects.length} of {projects.length} projects
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-[var(--muted)]">No projects match your filters.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-sm underline hover:no-underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

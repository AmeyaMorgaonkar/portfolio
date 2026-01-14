"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";

export default function BlogPage() {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollToSectionOnHome', 'blog');
      window.location.href = '/';
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
        <p className="text-[var(--muted)]">
          Thoughts on technology, research, and everything in between.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-lg hover:bg-[var(--card)] transition-colors">
                {/* Cover Image */}
                <div className="relative w-full sm:w-48 h-40 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-2">
                    <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold mb-2 group-hover:underline">
                    {post.title}
                  </h2>

                  <p className="text-[var(--muted)] line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-[var(--background)] group-hover:bg-[var(--border)] rounded transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Empty State */}
      {blogPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-[var(--muted)]">No blog posts yet. Check back soon!</p>
        </motion.div>
      )}
    </div>
  );
}

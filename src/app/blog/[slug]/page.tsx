"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/data";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-4">
          <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-lg text-[var(--muted)]">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 bg-[var(--card)] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative aspect-[2/1] rounded-lg overflow-hidden mb-12"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold mt-8 mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-medium mt-6 mb-3">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-[var(--muted)] mb-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 text-[var(--muted)] mb-4">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2 text-[var(--muted)] mb-4">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            strong: ({ children }) => (
              <strong className="font-semibold text-[var(--foreground)]">
                {children}
              </strong>
            ),
            code: ({ children }) => (
              <code className="px-1.5 py-0.5 bg-[var(--card)] rounded text-sm font-mono">
                {children}
              </code>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[var(--border)] pl-4 italic text-[var(--muted)]">
                {children}
              </blockquote>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-[var(--foreground)] underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </motion.article>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-t mt-12 pt-8"
      >
        <p className="text-center text-[var(--muted)]">
          Thanks for reading! Feel free to reach out if you have any questions.
        </p>
      </motion.footer>
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getLatestPosts, blogPosts } from "@/lib/data";
import { format } from "date-fns";

export function BlogSection() {
  const latestPosts = getLatestPosts();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add("in-view");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 bg-[var(--card)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 ref={headingRef} className="section-heading text-2xl sm:text-3xl font-bold">
            Blog
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 rounded-full transition-opacity group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <article className="bg-[var(--background)] rounded-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
                  {/* Cover Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
                      <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="font-semibold mb-2 group-hover:underline line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[var(--muted)] line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-[var(--card)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

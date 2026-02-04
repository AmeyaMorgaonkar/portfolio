"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedResearch, research } from "@/lib/data";
import { ResearchCard } from "../research-card";

export function ResearchSection() {
  const featuredResearch = getFeaturedResearch();
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

  if (research.length === 0) {
    return null;
  }

  return (
    <section id="research" className="py-20 bg-[var(--card)] scroll-mt-20 w-full min-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 ref={headingRef} className="section-heading text-2xl sm:text-3xl font-bold">
            Research & Publications
          </h2>
          <Link
            href="/research"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 rounded-full transition-opacity group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredResearch.map((item) => (
            <div key={item.id}>
              <ResearchCard research={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

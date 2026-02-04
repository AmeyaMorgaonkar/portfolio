"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Instagram, Music, Trophy, BookOpen } from "lucide-react";
import { profile } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Music,
  Trophy,
  BookOpen,
};

export function AboutSection() {
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

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="section-heading text-2xl sm:text-3xl font-bold mb-12 text-center"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl bg-[var(--card)] overflow-hidden relative">
              {/* Placeholder for photo */}
              <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)] text-sm">
                Photo
              </div>
              {/* Uncomment when you have a photo */}
              {/* <Image
                src={profile.aboutPhoto}
                alt={profile.name}
                fill
                className="object-cover"
              /> */}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="prose prose-neutral dark:prose-invert">
              {profile.aboutText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-[var(--muted)] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Links */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-4">Find me elsewhere:</p>
              <div className="flex flex-wrap gap-3">
                {profile.personalLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors active:scale-95"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

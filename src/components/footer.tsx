"use client";

import { profile } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--muted)]">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-[var(--muted)] mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {profile.professionalLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

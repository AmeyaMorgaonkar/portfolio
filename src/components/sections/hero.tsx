"use client";

import { motion } from "framer-motion";
import { MapPin, FileDown, Github, Linkedin, Mail, ChevronDown, Code } from "lucide-react";
import { profile } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  Code,
};

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("experience") || document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="hero-name" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            Ameya Morgaonkar
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--muted)] mb-4">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center text-[var(--muted)] mb-6"
        >
          <MapPin className="w-4 h-4 mr-2" />
          <span>{profile.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[var(--muted)] mb-8 max-w-xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start justify-center gap-6 sm:gap-8"
        >
          {/* Resume Button - First */}
          <motion.a
            href={profile.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-4 bg-[var(--foreground)] text-[var(--background)] rounded-full group-hover:opacity-90 transition-opacity">
              <FileDown className="w-6 h-6" />
            </div>
            <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">Resume</span>
          </motion.a>

          {/* Social Links */}
          {profile.professionalLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-4 bg-[var(--card)] rounded-full group-hover:bg-[var(--border)] transition-colors">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}

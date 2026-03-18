"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Github, Linkedin, Mail, ChevronDown, Code as LucideCode } from "lucide-react";
import { profile } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  LucideCode,
};

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("experience") || document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative isolate">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(237,237,237,0.14),transparent_62%)]" />
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,rgba(163,163,163,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,163,163,0.14)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)]" />
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(45deg,rgba(163,163,163,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_85%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="hero-name" className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 break-words">
            Ameya Morgaonkar
          </h1>
          {/* <p className="text-lg xs:text-xl sm:text-2xl text-[var(--muted)] mb-4">
            Full Stack Developer
          </p> */}
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
          {/* Education Button - First */}
          <motion.a
            href="https://ameya-morgaonkar.vercel.app/experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-4 bg-[var(--foreground)] text-[var(--background)] rounded-full group-hover:opacity-90 transition-opacity">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">View Education</span>
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
        className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
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

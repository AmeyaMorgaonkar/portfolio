"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { MapPin, GraduationCap, Github, Linkedin, Mail, ChevronDown, Code as LucideCode } from "lucide-react";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  LucideCode,
};

export function HeroSection() {
  const [istTime, setIstTime] = useState("");

  const scrollToContent = () => {
    const nextSection = document.getElementById("experience") || document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const updateIstTime = () => {
      setIstTime(formatter.format(new Date()));
    };

    updateIstTime();
    const timer = setInterval(updateIstTime, 30000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center px-4"
      >
        <h1
          id="hero-name"
          className={`${inter.className} w-[80vw] max-w-[80vw] min-w-0 text-center whitespace-nowrap text-[clamp(2rem,8.3vw,8.5rem)] leading-[0.95] tracking-[-0.035em] font-extrabold mb-6`}
        >
          Ameya Morgaonkar
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <p className="text-lg xs:text-xl sm:text-2xl text-[var(--muted)] mb-4">
          Full Stack Developer
        </p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 text-base sm:text-lg md:text-xl lg:text-lg font-medium tracking-wide text-[var(--muted)] mb-7"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </span>
          <span className="text-[var(--muted)]">|</span>
          <span aria-label="Local time in IST">{istTime || "--:--"}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-center text-base sm:text-lg md:text-xl lg:text-lg font-medium leading-relaxed text-[var(--muted)] mb-8 max-w-2xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto w-full max-w-2xl flex flex-wrap items-start justify-center gap-x-4 gap-y-5 sm:gap-8"
        >
          {/* Education Button - First */}
          <motion.a
            href="https://ameya-morgaonkar.vercel.app/experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[4.5rem] sm:w-auto flex flex-col items-center gap-2 group"
          >
            <div className="p-3 sm:p-4 bg-[var(--foreground)] text-[var(--background)] rounded-full group-hover:opacity-90 transition-opacity">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs sm:text-sm text-center leading-tight text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">View Education</span>
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
                className="w-[4.5rem] sm:w-auto flex flex-col items-center gap-2 group"
              >
                <div className="p-3 sm:p-4 bg-[var(--card)] rounded-full group-hover:bg-[var(--border)] transition-colors">
                  {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <span className="text-xs sm:text-sm text-center leading-tight text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">{link.name}</span>
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

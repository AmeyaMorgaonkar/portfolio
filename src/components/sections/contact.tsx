"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Code as LucideCode, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  LucideCode,
};

export function ContactSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactEmail =
    profile.professionalLinks
      .find((link) => link.url.startsWith("mailto:"))
      ?.url.replace("mailto:", "") ?? "ameyamorgaonkar@gmail.com";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="section-heading text-2xl sm:text-3xl font-bold mb-6 text-center"
        >
          Contact
        </h2>

        <p className="text-center text-[var(--muted)] max-w-2xl mx-auto mb-10">
          Interested in collaborating, internships, or discussing projects and research? Let&apos;s connect.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm mb-2 text-[var(--muted)]">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--foreground)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm mb-2 text-[var(--muted)]">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--foreground)]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm mb-2 text-[var(--muted)]">
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-3 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--foreground)] resize-y"
              placeholder="Tell me a little about your project or opportunity"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              Send message
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-3">
          {profile.professionalLinks.map((link) => {
            const Icon = iconMap[link.icon];

            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
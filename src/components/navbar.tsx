"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { experiences, research, blogPosts } from "@/lib/data";

const baseNavItems = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const heroName = document.getElementById("hero-name");
      if (heroName) {
        const rect = heroName.getBoundingClientRect();
        // Show name in navbar when hero name is scrolled out of view
        setShowName(rect.bottom < 64);
      } else {
        // If not on homepage, always show name
        setShowName(true);
      }

      // Track active section on homepage
      if (pathname === "/") {
        // If at the very top of the page, always show Home as active
        if (window.scrollY < 100) {
          setActiveSection("hero");
          return;
        }

        const sections = ["hero", "experience", "projects", "research", "about", "blog"];
        const navbarHeight = 80;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= navbarHeight) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Build nav items based on content availability
  const navItems = [...baseNavItems];
  
  if (experiences.length > 0) {
    navItems.splice(1, 0, { name: "Experience", href: "/#experience", sectionId: "experience" });
  }
  
  if (research.length > 0) {
    navItems.push({ name: "Research", href: "/#research", sectionId: "research" });
  }
  
  navItems.push({ name: "About", href: "/#about", sectionId: "about" });
  
  if (blogPosts.length > 0) {
    navItems.push({ name: "Blog", href: "/#blog", sectionId: "blog" });
  }

  // Determine if a nav item is active
  const isActive = (item: { href: string; sectionId: string }) => {
    // For homepage sections - use scroll-based active detection
    if (pathname === "/") {
      return activeSection === item.sectionId;
    }
    // For main pages, highlight based on pathname
    if (
      (pathname.startsWith("/experience") && item.sectionId === "experience") ||
      (pathname.startsWith("/projects") && item.sectionId === "projects") ||
      (pathname.startsWith("/research") && item.sectionId === "research") ||
      (pathname.startsWith("/about") && item.sectionId === "about") ||
      (pathname.startsWith("/blog") && item.sectionId === "blog")
    ) {
      return true;
    }
    return false;
  };

  // Scroll to a section by ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle all navigation clicks
  const handleNavClick = (e: React.MouseEvent, item: { href: string; sectionId: string }) => {
    // Home button - scroll to top if on home, otherwise navigate
    if (item.href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Hash links (like /#experience, /#about)
    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.href.substring(2); // Remove "/#"

      if (pathname === "/") {
        // Already on home, just scroll
        scrollToSection(sectionId);
      } else {
        // Set section in sessionStorage for ScrollRestoration to handle after navigation
        if (typeof window !== "undefined" && window.sessionStorage) {
          window.sessionStorage.setItem("scrollToSectionOnHome", sectionId);
        }
        router.push("/");
        // Do not scroll here; ScrollRestoration will handle it after navigation
      }
      return;
    }
    // Regular links - let Link handle normally
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, { href: "/", sectionId: "hero" })}
            className={`font-bold text-lg h-6 flex items-center min-w-[80px] ${showName ? "cursor-pointer" : "cursor-default"}`}
          >
            <AnimatePresence mode="wait">
              {showName && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Ameya M.
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-base transition-colors hover:text-[var(--foreground)] ${
                  isActive(item)
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <ThemeToggle /> removed for permanent dark mode */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* <ThemeToggle /> removed for permanent dark mode */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, item);
                }}
                className={`block py-2 text-base transition-colors hover:text-[var(--foreground)] ${
                  isActive(item)
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

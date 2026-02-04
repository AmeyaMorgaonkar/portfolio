"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// ========================================
// CONFIGURABLE: Time to wait before restoring scroll position after refresh
// Adjust this value based on your hero animation duration
const REFRESH_SCROLL_DELAY_MS = 800;
// ========================================

export function ScrollRestoration() {
  const pathname = usePathname();
  const isPopState = useRef(false);
  const hasHandledRefresh = useRef(false);

  // Handle page refresh scroll restoration
  useEffect(() => {
    // Only run once on initial mount
    if (hasHandledRefresh.current) return;
    hasHandledRefresh.current = true;

    // Check if this is a page refresh (not navigation)
    // performance.navigation is deprecated but still works, use PerformanceNavigationTiming as fallback
    const isRefresh = (() => {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (navEntries.length > 0) {
        return navEntries[0].type === "reload";
      }
      return false;
    })();

    if (!isRefresh) return;

    // Get the scroll position before refresh (browser stores this)
    const savedScrollY = window.scrollY;

    // If user was scrolled down, do the scroll-to-top-then-back dance
    if (savedScrollY > 100) {
      // Immediately scroll to top
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

      // Wait for hero animation, then scroll back
      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: "smooth" });
      }, REFRESH_SCROLL_DELAY_MS);
    }
    // If user was near top, just stay at top (no dance needed)
  }, []);

  // Track back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // This runs every time pathname changes (including navigation to home)
  useEffect(() => {
    // If this is a back/forward navigation, let browser handle scroll
    if (isPopState.current) {
      isPopState.current = false;
      return;
    }

    // Only handle scroll-to-section on homepage
    if (pathname !== "/") return;

    const section = sessionStorage.getItem('scrollToSectionOnHome');
    if (section) {
      sessionStorage.removeItem('scrollToSectionOnHome');
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  }, [pathname]);

  return null;
}

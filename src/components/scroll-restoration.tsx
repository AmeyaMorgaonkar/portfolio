"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();
  const isPopState = useRef(false);

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

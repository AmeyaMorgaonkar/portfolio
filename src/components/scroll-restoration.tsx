"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Restore scroll position after hero animation finishes (~1.3s)
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      // Wait for hero animation to complete, then smooth scroll
      setTimeout(() => {
        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
      }, 400);
    }

    // Save scroll position on scroll (debounced)
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Save position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

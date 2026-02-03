"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // This runs every time pathname changes (including navigation to home)
  useEffect(() => {
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
    } else {
      // Restore scroll position on refresh
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        const position = parseInt(savedPosition, 10);
        setTimeout(() => {
          window.scrollTo({
            top: position,
            behavior: "smooth"
          });
        }, 400);
      }
    }
  }, [pathname]);

  useEffect(() => {
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

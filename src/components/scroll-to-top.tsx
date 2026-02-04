"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Always scroll to top on page load/refresh
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

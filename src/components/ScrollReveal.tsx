"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Watches the URL pathname and re-attaches the IntersectionObserver
 * every time the user navigates to a new page.
 * This is required because the layout never unmounts in Next.js App Router.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small timeout lets the new page's DOM fully render before we observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );

      const targets = document.querySelectorAll(".clip-wrap, .fade-up");
      targets.forEach((el) => {
        // Reset visibility so elements can animate in fresh on each page
        el.classList.remove("visible");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-runs every time the route changes

  return null;
}

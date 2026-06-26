"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function HomeScrollAnimations() {
  useLayoutEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section:not(:first-of-type)");

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.from(section, {
          y: 72,
          opacity: 0,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

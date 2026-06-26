"use client";

import { gsap } from "@/lib/gsap";
import { useLayoutEffect, useRef } from "react";

export function LettersIntro({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const hey = root.querySelector("[data-intro-hey]");
    const line = root.querySelector("[data-intro-line]");
    const beam = root.querySelector("[data-intro-beam]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(root, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => onCompleteRef.current(),
          });
        },
      });

      gsap.set([hey, line, beam], { clearProps: "opacity" });

      tl.fromTo(hey, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out" })
        .to(hey, { opacity: 1, duration: 1.2 })
        .to(hey, { opacity: 0, y: -20, duration: 1, ease: "power2.in" })
        .fromTo(
          line,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" },
          "-=0.2",
        )
        .to(line, { opacity: 1, duration: 1.4 })
        .to(line, { opacity: 0, duration: 0.8, ease: "power2.in" })
        .fromTo(
          beam,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "power4.out" },
          "-=0.1",
        )
        .to(beam, { opacity: 0, duration: 1.2, ease: "power2.inOut", delay: 0.15 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      aria-live="polite"
    >
      <p
        data-intro-hey
        className="bilbo-regular absolute text-[clamp(4rem,14vw,9rem)] text-white opacity-0"
      >
        Hey
      </p>

      <p
        data-intro-line
        className="story-display absolute max-w-2xl px-8 text-center text-[clamp(1.5rem,4vw,2.75rem)] leading-snug text-white/92 opacity-0"
      >
        I have written these all with my whole heart for you.
      </p>

      <div
        data-intro-beam
        className="pointer-events-none absolute h-[200vmax] w-[200vmax] rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 18%, rgba(244,194,194,0.15) 35%, transparent 55%)",
        }}
      />
    </div>
  );
}

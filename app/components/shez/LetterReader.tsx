"use client";

import type { MoodLetter } from "@/content/letters";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export function LetterReader({
  letter,
  onClose,
}: {
  letter: MoodLetter;
  onClose: () => void;
}) {
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const total = letter.pages.length;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const turn = (direction: "next" | "prev") => {
    if (flipping) return;
    const nextPage = direction === "next" ? page + 1 : page - 1;
    if (nextPage < 0 || nextPage >= total) return;

    setFlipping(true);
    gsap.to("[data-letter-page]", {
      rotateY: direction === "next" ? -8 : 8,
      opacity: 0.4,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setPage(nextPage);
        gsap.fromTo(
          "[data-letter-page]",
          { rotateY: direction === "next" ? 8 : -8, opacity: 0.4 },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => setFlipping(false),
          },
        );
      },
    });
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-10 rounded-full border border-white/15 bg-white/5 p-2 text-white/70 transition-colors hover:text-white"
        aria-label="Close letter"
      >
        <X size={20} />
      </button>

      <div className="letter-paper relative w-full max-w-lg" style={{ perspective: "1200px" }}>
        <div
          data-letter-page
          className="relative min-h-[420px] rounded-sm border border-[#e8dcc8]/30 bg-[#faf6ee] px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] md:min-h-[480px] md:px-12 md:py-12"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 12%), repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(0,0,0,0.04) 28px)",
          }}
        >
          <div className="mb-6 flex items-center justify-between border-b border-[#d4c4a8]/50 pb-4">
            <span className="text-2xl">{letter.emoji}</span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#8a7a68] uppercase">
              Page {page + 1} of {total}
            </span>
          </div>

          <p className="letter-serif text-lg leading-[1.85] text-[#3d3429] md:text-xl">
            {letter.pages[page]}
          </p>

          {page === total - 1 && (
            <p className="bilbo-regular mt-10 text-right text-2xl text-[#6b5344]">{letter.signOff}</p>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            disabled={page === 0 || flipping}
            onClick={() => turn("prev")}
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-sans text-xs tracking-wide text-white/70 transition-colors hover:border-shez-rose/40 hover:text-white disabled:opacity-30"
          >
            <ChevronLeft size={16} />
            Turn back
          </button>
          <button
            type="button"
            disabled={page === total - 1 || flipping}
            onClick={() => turn("next")}
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-sans text-xs tracking-wide text-white/70 transition-colors hover:border-shez-rose/40 hover:text-white disabled:opacity-30"
          >
            Turn page
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

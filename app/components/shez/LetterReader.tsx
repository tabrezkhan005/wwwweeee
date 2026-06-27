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
  const paragraphs = letter.pages[page];
  const showGreeting = page === 0 && letter.greeting;

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
    <div className="fixed inset-0 z-90 flex items-center justify-center bg-black/85 px-3 py-6 backdrop-blur-md sm:px-6">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition-colors hover:text-white sm:top-6 sm:right-6"
        aria-label="Close letter"
      >
        <X size={22} />
      </button>

      <div
        className="letter-paper relative flex w-full max-w-3xl flex-col"
        style={{ perspective: "1200px" }}
      >
        <div
          data-letter-page
          className="relative flex max-h-[min(78vh,820px)] min-h-[min(72vh,680px)] flex-col rounded-sm border border-[#e8dcc8]/40 bg-[#faf6ee] shadow-[0_32px_100px_rgba(0,0,0,0.55)]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.025) 0%, transparent 10%), repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,0.035) 32px)",
          }}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-[#d4c4a8]/50 px-8 py-5 sm:px-12 sm:py-6">
            <span className="text-3xl">{letter.emoji}</span>
            <span className="font-sans text-[11px] tracking-[0.28em] text-[#8a7a68] uppercase">
              Page {page + 1} of {total}
            </span>
          </div>

          <div className="scrollbar-hide flex-1 overflow-y-auto px-8 py-7 sm:px-12 sm:py-9">
            {showGreeting && (
              <p className="bilbo-regular mb-6 text-3xl text-[#5c4a3a] sm:text-4xl">{letter.greeting}</p>
            )}

            <div className="space-y-5 sm:space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="letter-body text-[1.125rem] text-[#3d3429] sm:text-[1.25rem]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
          <button
            type="button"
            disabled={page === 0 || flipping}
            onClick={() => turn("prev")}
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-sans text-sm tracking-wide text-white/75 transition-colors hover:border-shez-rose/40 hover:text-white disabled:opacity-30"
          >
            <ChevronLeft size={18} />
            Turn back
          </button>
          <button
            type="button"
            disabled={page === total - 1 || flipping}
            onClick={() => turn("next")}
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-sans text-sm tracking-wide text-white/75 transition-colors hover:border-shez-rose/40 hover:text-white disabled:opacity-30"
          >
            Turn page
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

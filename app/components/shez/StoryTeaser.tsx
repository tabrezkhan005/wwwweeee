"use client";

import type { storyChapters } from "@/content/story";
import Link from "next/link";

type TeaserChapter = Extract<(typeof storyChapters)[number], { type: "teaser" }>;

export function StoryTeaser({ chapter }: { chapter: TeaserChapter }) {
  const isRight = chapter.align === "right";

  return (
    <section
      data-story-chapter
      data-story-teaser
      id={chapter.id}
      className="story-teaser relative min-h-[70vh] overflow-hidden bg-black py-24 md:min-h-[75vh] md:py-32"
    >
      <div
        data-teaser-glow
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background: isRight
            ? "radial-gradient(ellipse 55% 45% at 85% 50%, rgba(244, 194, 194, 0.09) 0%, transparent 70%)"
            : "radial-gradient(ellipse 55% 45% at 15% 50%, rgba(244, 194, 194, 0.09) 0%, transparent 70%)",
        }}
      />

      <div
        data-teaser-rule
        className="absolute top-0 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-transparent via-shez-rose/40 to-transparent"
      />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 md:px-12 lg:px-16 ${isRight ? "justify-end" : ""}`}
      >
        <div className={`max-w-xl ${isRight ? "text-right" : "text-left"}`}>
          <p data-teaser-line className="bilbo-regular text-2xl text-shez-rose md:text-3xl">
            {chapter.label}
          </p>
          <h2
            data-teaser-line
            className="story-display mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-white"
          >
            {chapter.title}
          </h2>
          <p data-teaser-line className="story-body mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
            {chapter.body}
          </p>
          <div data-teaser-line className={isRight ? "flex justify-end" : ""}>
            <Link
              href={chapter.href}
              data-teaser-cta
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-shez-rose/40 bg-shez-rose/10 px-8 py-3.5 transition-all duration-300 hover:border-shez-rose/70 hover:bg-shez-rose/18 hover:shadow-[0_0_40px_rgba(244,194,194,0.15)]"
            >
              <span className="font-sans text-sm font-medium tracking-[0.12em] text-white">
                {chapter.cta}
              </span>
              <span className="text-shez-rose transition-transform group-hover:translate-x-0.5">♥</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

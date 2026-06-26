"use client";

import type { ReactNode } from "react";
import { storyChapters } from "@/content/story";
import { StoryTeaser } from "./StoryTeaser";

function StorySection({
  chapter,
  children,
  className = "",
  afterSky = false,
}: {
  chapter: (typeof storyChapters)[number];
  children: ReactNode;
  className?: string;
  afterSky?: boolean;
}) {
  return (
    <section
      data-story-chapter
      data-story-after-sky={afterSky ? "" : undefined}
      id={chapter.id}
      className={`story-chapter relative bg-black ${afterSky ? "border-t-0" : "border-t border-white/6"} ${className}`}
    >
      {!afterSky && (
        <div
          data-story-rule
          className="absolute top-0 left-0 h-px w-full origin-left bg-linear-to-r from-shez-rose/70 via-shez-blush/30 to-transparent"
        />
      )}
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40">
        {children}
      </div>
    </section>
  );
}

function ChapterMeta({
  number,
  label,
  align = "left",
}: {
  number: string;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <div
      data-reveal
      className={`mb-10 flex items-center gap-4 md:mb-14 ${align === "right" ? "justify-end" : ""}`}
    >
      <span className="font-sans text-[11px] font-medium tracking-[0.28em] text-shez-rose uppercase">
        {number}
      </span>
      <span className="h-px w-10 bg-white/15" />
      <span className="font-sans text-[11px] font-medium tracking-[0.22em] text-white/45 uppercase">
        {label}
      </span>
    </div>
  );
}

function DisplayTitle({
  children,
  className = "",
  split = false,
}: {
  children: string;
  className?: string;
  split?: boolean;
}) {
  if (split && children.includes("\n")) {
    const [first, second] = children.split("\n");
    return (
      <h2
        data-story-headline
        data-reveal
        className={`story-display max-w-5xl text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white ${className}`}
      >
        {first}
        <br />
        <span className="text-white/55">{second}</span>
      </h2>
    );
  }

  return (
    <h2
      data-story-headline
      data-reveal
      className={`story-display max-w-5xl text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white ${className}`}
    >
      {children}
    </h2>
  );
}

function ProseChapter({ chapter }: { chapter: Extract<(typeof storyChapters)[number], { type: "prose" }> }) {
  return (
    <section
      data-story-chapter
      data-story-prose
      id={chapter.id}
      className="story-prose relative h-[190vh] bg-black"
    >
      <div className="sticky top-0 flex h-svh w-full items-center overflow-hidden">
        <div
          data-prose-glow
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 18% 50%, rgba(244, 194, 194, 0.07) 0%, transparent 68%)",
          }}
        />

        <div
          data-prose-exit-fade
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[40vh] opacity-0"
          style={{
            background: "linear-gradient(0deg, #000 0%, rgba(0,0,0,0.72) 52%, transparent 100%)",
          }}
        />

        <div
          data-prose-content
          className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16"
        >
          <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <ChapterMeta number={chapter.number} label={chapter.label} />
              <h2
                data-story-headline
                className="story-display max-w-3xl text-[clamp(2.85rem,7.5vw,5.75rem)] leading-[0.94] tracking-[-0.03em] text-white"
              >
                {chapter.title}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="story-body text-[clamp(1.2rem,2.1vw,1.625rem)] leading-[1.72] text-white/84">
                {chapter.body}
              </p>
              <p className="story-body mt-10 text-base leading-relaxed text-white/50 md:text-lg">
              There is more waiting for you below.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkyChapter({ chapter }: { chapter: Extract<(typeof storyChapters)[number], { type: "sky" }> }) {
  const titleLines = chapter.title.split("\n");

  return (
    <section
      data-story-chapter
      data-story-sky
      id={chapter.id}
      className="story-sky relative h-[200vh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <video
          data-sky-video
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          src={chapter.videoUrl}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />

        <div
          data-sky-fade-top
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[38vh]"
          style={{
            background:
              "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.55) 45%, transparent 100%)",
          }}
        />

        <div
          data-sky-fade-bottom
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[42vh] opacity-0"
          style={{
            background:
              "linear-gradient(0deg, #000 0%, rgba(0,0,0,0.6) 48%, transparent 100%)",
          }}
        />

        <div className="relative z-30 flex h-full flex-col justify-end px-6 pb-14 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(70%,520px)]"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl">
            <ChapterMeta number={chapter.number} label={chapter.label} />
            <h2
              data-story-headline
              data-reveal
              className="story-display max-w-4xl text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.55)]"
            >
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className={index > 0 ? "text-white/88" : undefined}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
            <p
              data-reveal
              className="story-body mt-8 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.7] text-white/92 drop-shadow-[0_1px_20px_rgba(0,0,0,0.55)] md:mt-10"
            >
              {chapter.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MomentsChapter({
  chapter,
}: {
  chapter: Extract<(typeof storyChapters)[number], { type: "moments" }>;
}) {
  return (
    <StorySection chapter={chapter} afterSky>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <ChapterMeta number={chapter.number} label={chapter.label} />
          <DisplayTitle>{chapter.title}</DisplayTitle>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="divide-y divide-white/10">
            {chapter.moments.map((moment, index) => (
              <li key={moment.title} data-reveal className="py-10 first:pt-0 last:pb-0 md:py-12">
                <div className="flex items-baseline gap-6">
                  <span className="font-sans text-sm font-medium tracking-widest text-shez-rose/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="story-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                      {moment.title}
                    </h3>
                    <p className="story-body mt-5 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
                      {moment.note}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </StorySection>
  );
}

function PromiseChapter({
  chapter,
}: {
  chapter: Extract<(typeof storyChapters)[number], { type: "promise" }>;
}) {
  return (
    <StorySection chapter={chapter}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ChapterMeta number={chapter.number} label={chapter.label} />
          <DisplayTitle className="max-w-4xl">{chapter.title}</DisplayTitle>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:flex lg:items-end">
          <p
            data-reveal
            className="story-body text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.7] text-white/78"
          >
            {chapter.body}
          </p>
        </div>
      </div>
    </StorySection>
  );
}

function FinaleChapter({
  chapter,
}: {
  chapter: Extract<(typeof storyChapters)[number], { type: "finale" }>;
}) {
  return (
    <section
      data-story-chapter
      data-story-finale
      id={chapter.id}
      className="relative h-[175vh] bg-black"
    >
      <div className="sticky top-0 flex h-svh w-full items-center overflow-hidden">
        <div
          data-finale-exit-fade
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[44vh] opacity-0"
          style={{
            background:
              "linear-gradient(0deg, #000 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.4) 72%, transparent 100%)",
          }}
        />

        <div
          data-finale-content
          className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16"
        >
          <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
            <div className="lg:max-w-3xl">
              <ChapterMeta number={chapter.number} label={chapter.label} />
              <p
                data-story-headline
                className="story-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-white"
              >
                {chapter.line}
              </p>
            </div>

            <div className="lg:text-right">
              <p className="font-sans text-[11px] font-medium tracking-[0.45em] text-white/40 uppercase">
                For
              </p>
              <p className="mt-3 font-sans text-2xl font-semibold tracking-[0.35em] text-white md:text-3xl">
                {chapter.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShezStory() {
  return (
    <div id="shez-story" className="relative bg-black">
      {storyChapters.map((chapter) => {
        switch (chapter.type) {
          case "prose":
            return <ProseChapter key={chapter.id} chapter={chapter} />;
          case "sky":
            return <SkyChapter key={chapter.id} chapter={chapter} />;
          case "moments":
            return <MomentsChapter key={chapter.id} chapter={chapter} />;
          case "teaser":
            return <StoryTeaser key={chapter.id} chapter={chapter} />;
          case "promise":
            return <PromiseChapter key={chapter.id} chapter={chapter} />;
          case "finale":
            return <FinaleChapter key={chapter.id} chapter={chapter} />;
        }
      })}
    </div>
  );
}

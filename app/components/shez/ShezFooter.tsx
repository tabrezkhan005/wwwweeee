"use client";

import { FINALE_VIDEO_URL, homeContent } from "@/content/home";
import Link from "next/link";

export function ShezFooter() {
  const { footer } = homeContent;

  return (
    <section data-shez-footer className="relative h-[190vh] bg-black">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <video
          data-footer-video
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          src={FINALE_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div
          data-footer-fade-top
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[50vh]"
          style={{
            background:
              "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.82) 38%, rgba(0,0,0,0.35) 68%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center_bottom,rgba(0,0,0,0.15)_0%,transparent_55%)]" />

        <div
          data-footer-content
          className="relative z-30 flex h-full flex-col justify-end px-6 pb-10 pt-24 md:px-12 md:pb-14 lg:px-16 lg:pb-16"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 md:gap-20">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-medium tracking-[0.32em] text-shez-rose/90 uppercase">
                {footer.eyebrow}
              </p>
              <p className="story-display mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
                {footer.line}
              </p>
              <p className="story-body mt-6 text-lg leading-relaxed text-white/72 md:text-xl">
                {footer.signoff}
              </p>
            </div>

            <div className="flex flex-col gap-8 border-t border-white/12 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <nav className="flex flex-wrap gap-x-10 gap-y-4">
                {footer.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-xs font-medium tracking-[0.22em] text-white/55 uppercase transition-colors hover:text-shez-rose"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <span className="bilbo-regular text-3xl text-white md:text-4xl">Shez</span>
                <span className="text-shez-rose" aria-hidden>
                  ♥
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

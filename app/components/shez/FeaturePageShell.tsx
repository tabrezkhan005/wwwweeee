"use client";

import { ComingSoonGate } from "@/app/components/ComingSoonGate";
import { ShezNav } from "@/app/components/shez/ShezNav";
import Link from "next/link";
import type { ReactNode } from "react";

export function FeaturePageShell({
  children,
  eyebrow,
  title,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
}) {
  return (
    <ComingSoonGate>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,194,194,0.06)_0%,transparent_55%)]" />
        <ShezNav />
        <Link
          href="/"
          className="fixed top-6 left-6 z-50 font-sans text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase transition-colors hover:text-shez-rose"
        >
          ← Home
        </Link>
        <main className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-28 md:px-10 md:pt-32">
          {(eyebrow || title) && (
            <header className="mb-12 md:mb-16">
              {eyebrow && (
                <p className="font-sans text-[11px] font-medium tracking-[0.3em] text-shez-rose uppercase">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1 className="story-display mt-4 text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
            </header>
          )}
          {children}
        </main>
      </div>
    </ComingSoonGate>
  );
}

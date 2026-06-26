"use client";

import SocialCards from "@/components/ui/card-fan-carousel";
import {
  LETTERS_HERO_VIDEO_URL,
  moodLetters,
  type MoodLetter,
} from "@/content/letters";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ChevronDown } from "lucide-react";
import { LetterReader } from "./LetterReader";
import { LettersIntro } from "./LettersIntro";

const fanCards = moodLetters.map((letter) => ({
  id: letter.id,
  imgUrl: letter.cardImage,
  alt: letter.cardLabel,
}));

export function LettersExperience() {
  const [introDone, setIntroDone] = useState(false);
  const [selected, setSelected] = useState<MoodLetter | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!introDone || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 2.2, ease: "power3.out" },
      );

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 48,
          opacity: 0,
          stagger: 0.12,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, [introDone]);

  const openLetter = (index: number) => {
    const letter = moodLetters[index];
    if (letter) setSelected(letter);
  };

  return (
    <>
      {!introDone && <LettersIntro onComplete={() => setIntroDone(true)} />}

      <div className={`transition-opacity duration-700 ${introDone ? "opacity-100" : "opacity-0"}`}>
        <Link
          href="/"
          className="fixed top-6 left-6 z-50 font-sans text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase transition-colors hover:text-shez-rose"
        >
          ← Home
        </Link>

        <section ref={heroRef} className="relative h-svh min-h-[600px] w-full overflow-hidden opacity-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={LETTERS_HERO_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="bilbo-regular text-4xl text-shez-rose sm:text-5xl md:text-6xl">For Shez</p>
            <h1 className="story-display mt-4 max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Letters from my heart
            </h1>
            <p className="story-body mt-6 max-w-lg text-lg text-white/80 md:text-xl">
              Five moods. Five letters. Each one written because you deserve to feel loved.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="font-sans text-[10px] tracking-[0.35em] text-white/50 uppercase">
              Scroll for your letters
            </span>
            <ChevronDown className="h-5 w-5 animate-bounce text-white/40" />
          </div>
        </section>

        <section ref={contentRef} className="relative bg-black pb-24 pt-16 md:pb-32 md:pt-20">
          <div className="mx-auto mb-10 max-w-2xl px-6 text-center">
            <p className="bilbo-regular text-3xl text-shez-rose md:text-4xl">Pick a card</p>
            <p className="story-body mt-4 text-lg text-white/70">
              Open the one that matches how you feel right now.
            </p>
          </div>

          <SocialCards
            cards={fanCards}
            onCardSelect={(index) => openLetter(index)}
          />
        </section>
      </div>

      {selected && <LetterReader letter={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

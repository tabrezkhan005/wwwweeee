"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasFadedOutRef = useRef(false);
  const loopTimeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const nav = navRef.current;
    const content = contentRef.current;
    const scrollHint = scrollHintRef.current;
    const chevron = chevronRef.current;
    const video = heroVideoRef.current;
    if (!section || !nav || !content || !scrollHint || !chevron || !video) return;

    const ctx = gsap.context(() => {
      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });

      entrance
        .from(nav, { y: -28, opacity: 0, duration: 1.3, delay: 0.15 })
        .from(
          content.children,
          { y: 48, opacity: 0, duration: 1.5, stagger: 0.18 },
          "-=0.9",
        )
        .from(scrollHint, { y: 12, opacity: 0, duration: 1.1 }, "-=0.7");

      gsap.to(chevron, {
        y: 8,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const scrollScrub = {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.8,
      };

      gsap.to(video, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: scrollScrub,
      });

      gsap.to(content, {
        y: -96,
        opacity: 0,
        ease: "none",
        scrollTrigger: scrollScrub,
      });

      gsap.to(nav, {
        y: -40,
        opacity: 0,
        ease: "none",
        scrollTrigger: scrollScrub,
      });

      gsap.to(scrollHint, {
        y: 28,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: 1.2,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const cancelRaf = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fadeTo = (targetOpacity: number, duration = 500) => {
      cancelRaf();
      const currentOpacity = Number.parseFloat(video.style.opacity || "0");
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextOpacity = currentOpacity + (targetOpacity - currentOpacity) * eased;
        video.style.opacity = String(nextOpacity);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const onCanPlay = () => {
      video
        .play()
        .then(() => {
          hasFadedOutRef.current = false;
          fadeTo(1, 500);
        })
        .catch(() => undefined);
    };

    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (!Number.isFinite(remaining)) return;

      if (remaining <= 0.55 && !hasFadedOutRef.current) {
        hasFadedOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const onEnded = () => {
      cancelRaf();
      video.style.opacity = "0";

      if (loopTimeoutRef.current !== null) {
        window.clearTimeout(loopTimeoutRef.current);
      }

      loopTimeoutRef.current = window.setTimeout(() => {
        video.currentTime = 0;
        video
          .play()
          .then(() => {
            hasFadedOutRef.current = false;
            fadeTo(1, 500);
          })
          .catch(() => undefined);
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      cancelRaf();
      if (loopTimeoutRef.current !== null) {
        window.clearTimeout(loopTimeoutRef.current);
      }
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 h-full w-full origin-bottom scale-100 object-cover object-bottom will-change-transform"
          src={HERO_VIDEO_URL}
          muted
          autoPlay
          playsInline
          preload="auto"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-48 bg-linear-to-t from-black via-black/70 to-transparent" />

      <nav ref={navRef} className="relative z-20 px-6 py-6 will-change-transform">
        <div className="liquid-glass-border relative mx-auto flex w-full max-w-5xl items-center justify-center rounded-full px-6 py-3.5">
          <div className="bilbo-regular flex items-center gap-2 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            <span className="flex items-baseline text-3xl leading-none sm:text-4xl">
              <span className="relative -mr-0.5 inline-block -translate-y-0.5 rotate-[-8deg] text-4xl text-shez-rose sm:text-5xl">
                S
              </span>
              <span>hez</span>
            </span>
            <span className="text-xl text-shez-rose sm:text-2xl" aria-hidden>
              ♥
            </span>
          </div>
        </div>
      </nav>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-1 translate-y-[-20%] flex-col items-center justify-center px-6 py-12 text-center will-change-transform"
      >
        <h1
          className="max-w-3xl text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          In you, I found <em className="italic text-white/75">my forever</em>
        </h1>

        <p className="letter-serif mt-8 max-w-lg px-4 text-lg leading-relaxed text-white/80 sm:text-xl">
          I made this for you — every page, every word — because loving you is the truest thing I
          know how to do.
        </p>
      </div>

      <div
        ref={scrollHintRef}
        className="relative z-10 mt-auto flex flex-col items-center gap-2 pb-10 will-change-transform"
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.35em] text-white/60 uppercase sm:text-xs">
          Scroll for more
        </span>
        <ChevronDown
          ref={chevronRef}
          className="h-5 w-5 text-white/50"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}

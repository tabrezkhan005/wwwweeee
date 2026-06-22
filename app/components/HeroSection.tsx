"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Globe } from "lucide-react";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasFadedOutRef = useRef(false);
  const loopTimeoutRef = useRef<number | null>(null);

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
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black">
      <video
        ref={heroVideoRef}
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        src={HERO_VIDEO_URL}
        muted
        autoPlay
        playsInline
        preload="auto"
      />

      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass-border mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-white" />
              <span className="text-lg font-semibold text-white">Asme</span>
            </div>
            <div className="ml-8 hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm font-medium text-white/80 hover:text-white">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white">
                Pricing
              </a>
              <a href="#about" className="text-sm font-medium text-white/80 hover:text-white">
                About
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="text-sm font-medium text-white">
              Sign Up
            </button>
            <button
              type="button"
              className="liquid-glass-border rounded-full px-6 py-2 text-sm font-medium text-white"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 translate-y-[-20%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="max-w-full text-5xl tracking-tight text-white sm:text-6xl md:text-7xl md:whitespace-nowrap lg:text-8xl xl:text-9xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Know it then <em className="italic">all</em>.
        </h1>

        <form className="mt-10 w-full max-w-xl" onSubmit={(event) => event.preventDefault()}>
          <div className="liquid-glass-border flex items-center gap-3 rounded-full py-2 pr-2 pl-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white p-3 text-black"
              aria-label="Submit email"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="mt-7 max-w-xl px-4 text-sm leading-relaxed text-white">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and
          never miss out on exciting updates.
        </p>

        <button
          type="button"
          className="liquid-glass-border mt-8 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          Manifesto
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button
          type="button"
          className="liquid-glass-border rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </button>
        <button
          type="button"
          className="liquid-glass-border rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          aria-label="Twitter"
        >
          <TwitterIcon size={20} />
        </button>
        <button
          type="button"
          className="liquid-glass-border rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          aria-label="Globe"
        >
          <Globe size={20} />
        </button>
      </div>
    </section>
  );
}

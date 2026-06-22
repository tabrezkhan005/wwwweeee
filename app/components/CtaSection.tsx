"use client";

import { type CSSProperties, type ComponentPropsWithoutRef, type ElementType, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function FadeUp({ children, className, delay = 0, y }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: y ?? 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type MIconProps = {
  name: string;
  size?: number;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  className?: string;
};

function MIcon({
  name,
  size = 16,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className,
}: MIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined leading-none", className)}
      aria-hidden
      style={
        {
          fontSize: size,
          fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        } as CSSProperties
      }
    >
      {name}
    </span>
  );
}

function AnimatedText({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex h-[1em] overflow-hidden">
      <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  );
}

type PrimaryButtonSize = "sm" | "md" | "lg";

type PrimaryButtonProps<C extends ElementType> = {
  as?: C;
  size?: PrimaryButtonSize;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "size" | "children" | "className">;

function PrimaryButton<C extends ElementType = "a">({
  as,
  size = "lg",
  children,
  className,
  ...props
}: PrimaryButtonProps<C>) {
  const Comp = (as ?? "a") as ElementType;

  const sizeClasses = {
    sm: "h-9 px-5 text-xs font-medium",
    md: "h-10 px-7 text-sm font-medium",
    lg: "h-12 px-9 text-sm font-medium",
  };

  return (
    <Comp
      className={cn(
        "group inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black leading-none transition-colors",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <AnimatedText>{children}</AnimatedText>
    </Comp>
  );
}

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const seedMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Welcome to the Vibe Design course! I'll guide you through building stunning websites with AI. What would you like to learn first?",
  },
  {
    id: 2,
    role: "user",
    text: "I want to learn how to build a hero section with a cinematic video background using AI.",
  },
  {
    id: 3,
    role: "assistant",
    text: "Great choice! In this course, you'll learn how to create full-screen looping videos, liquid glass nav bars, email signups, and manifesto buttons — all with AI assistance. Let's dive in!",
  },
];

function ChatPanel({
  initialScroll = "top",
  animateMessagesIn = false,
}: {
  initialScroll?: "top" | "bottom";
  animateMessagesIn?: boolean;
}) {
  const [messages, setMessages] = useState<Message[]>(seedMessages);
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (initialScroll === "bottom") {
      el.scrollTop = el.scrollHeight;
    } else {
      el.scrollTop = 0;
    }
  }, [initialScroll]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
  }, [input]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: trimmed },
      {
        id: Date.now() + 1,
        role: "assistant",
        text: "Excellent prompt. Next, we can refine spacing, motion timing, and CTA hierarchy to match premium landing page standards.",
      },
    ]);
    setInput("");
    requestAnimationFrame(() => {
      const el = scrollerRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  return (
    <div
      className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10"
      style={{
        background: "rgba(8,8,10,0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/80">
          <MIcon name="auto_awesome" size={14} />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Vibe Design course</p>
          <p className="text-[11px] text-white/40">Learn how to build website with AI</p>
        </div>
      </div>

      <div ref={scrollerRef} className="min-h-0 flex-1 space-y-4 overflow-hidden px-4 py-5">
        {messages.map((msg, i) => {
          const bubble = (
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                msg.role === "user"
                  ? "ml-auto bg-white/15 text-white/90"
                  : "mr-auto border border-white/5 bg-white/5 text-white/70",
              )}
            >
              {msg.text}
            </div>
          );

          if (!animateMessagesIn) return <div key={msg.id}>{bubble}</div>;
          return (
            <FadeUp key={msg.id} delay={i * 0.12} y={16}>
              {bubble}
            </FadeUp>
          );
        })}
      </div>

      <div className="p-4">
        <div className="liquid-glass flex items-end gap-2 rounded-2xl p-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask about the course..."
            rows={1}
            className="max-h-[120px] min-h-[36px] flex-1 resize-none bg-transparent px-2 py-1 text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={send}
            className="rounded-xl bg-white p-2 text-black transition-colors hover:bg-white/90"
            aria-label="Send message"
          >
            <MIcon name="arrow_upward" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

function VelorahHeroPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl" style={{ backgroundColor: "hsl(201 100% 13%)" }}>
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="relative z-10 flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
        <div className="text-sm tracking-tight text-white sm:text-base md:text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Velorah<sup className="text-[0.5em]">®</sup>
        </div>

        <div className="hidden items-center gap-4 text-[9px] text-white/60 lg:text-[10px] md:flex">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="hover:text-white">Studio</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Journal</a>
          <a href="#" className="hover:text-white">Reach Us</a>
        </div>

        <button type="button" className="liquid-glass rounded-full px-2.5 py-1 text-[9px] text-white sm:px-3 sm:text-[10px]">
          Begin Journey
        </button>
      </div>

      <div className="flex flex-col items-center px-3 pt-3 pb-6 text-center sm:px-4 sm:pt-5 md:pt-7">
        <h1
          className="animate-fade-rise max-w-[90%] text-lg font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-white/55">dreams</em> rise{" "}
          <em className="not-italic text-white/55">through the silence.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-2 max-w-[80%] text-[9px] leading-relaxed text-white/60 sm:mt-3 sm:max-w-sm sm:text-[11px] md:mt-4 md:max-w-md md:text-xs">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the
          chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <button
          type="button"
          className="animate-fade-rise-delay-2 liquid-glass mt-3 rounded-full px-4 py-1.5 text-[9px] text-white sm:mt-4 sm:px-5 sm:py-2 sm:text-[10px] md:mt-5 md:px-6 md:py-2.5"
        >
          Begin Journey
        </button>
      </div>
    </div>
  );
}

function CtaDashboardMock() {
  return (
    <div className="liquid-glass mx-auto w-full max-w-[1100px] aspect-3/4 overflow-hidden rounded-2xl p-2 sm:aspect-16/10 sm:p-3 lg:aspect-video">
      <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-[minmax(220px,320px)_1fr] sm:gap-3">
        <div className="min-h-0 hidden sm:block">
          <ChatPanel initialScroll="top" animateMessagesIn />
        </div>
        <div className="min-h-0">
          <VelorahHeroPreview />
        </div>
      </div>
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const dashboardY = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  const grassRange = useMemo(() => (isMobile ? ["40px", "-20px"] : ["120px", "-120px"]), [isMobile]);
  const grassY = useTransform(scrollYProgress, [0, 1], grassRange);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full overflow-x-clip pb-0"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, #14191E 28%, #14191E 72%, #050607 92%, #000000 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1280px] px-4 pt-24 sm:px-6 sm:pt-32 md:pt-40">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-10 xl:gap-16">
          <div className="relative z-20 max-w-[400px]">
            <FadeUp delay={1}>
              <h2 className="text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">
                Learn how can one go from 0 to $11.5k with AI in 60 days.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-[380px] text-base leading-normal text-landing-text sm:text-lg">
                Learn to turn your ideas into stunning websites with AI — the same skills agencies
                charge $5,000 for. Join the UI Rocket training and start building like a pro
                today.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <PrimaryButton as="button" type="button">
                Start for free
              </PrimaryButton>
            </FadeUp>
          </div>

          <motion.div
            style={{ y: dashboardY }}
            className="relative z-10 w-full lg:max-w-none lg:justify-self-end xl:w-[108%] xl:max-w-[1100px]"
          >
            <CtaDashboardMock />
          </motion.div>
        </div>
      </div>

      <motion.img
        src="https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1780586778/cta-bg_mlwy5s.png"
        alt=""
        aria-hidden
        style={{ y: grassY }}
        className="pointer-events-none relative z-30 -mt-8 mb-0 block w-full select-none object-cover object-bottom sm:-mt-16 lg:-mt-24"
      />
      <div
        aria-hidden
        className="pointer-events-none relative z-40 -mt-16 h-28 bg-linear-to-t from-black via-black/90 to-transparent sm:-mt-24 sm:h-36 lg:-mt-32 lg:h-44"
      />
    </section>
  );
}

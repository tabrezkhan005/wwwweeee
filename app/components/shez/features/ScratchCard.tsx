"use client";

import { SCRATCH_REVEAL } from "@/content/features";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const scratching = useRef(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#8b6b6b");
    gradient.addColorStop(0.35, "#c9a0a0");
    gradient.addColorStop(0.65, "#e8b4b8");
    gradient.addColorStop(1, "#f4c2c2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,0.12)";
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * rect.width, Math.random() * rect.height, Math.random() * 2 + 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "600 13px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "0.2em";
    ctx.fillText("SCRATCH HERE", rect.width / 2, rect.height / 2 - 8);
    ctx.font = "400 12px Inter, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillText("♥", rect.width / 2, rect.height / 2 + 16);
  }, [revealed]);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x - rect.left, y - rect.top, 32, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    const pct = cleared / (imageData.data.length / 4);
    setProgress(Math.min(100, Math.round(pct * 100)));

    if (pct > 0.38) {
      setRevealed(true);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    scratching.current = true;
    canvasRef.current?.setPointerCapture(e.pointerId);
    scratch(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!scratching.current) return;
    scratch(e.clientX, e.clientY);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    scratching.current = false;
    canvasRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      <p className="story-body mb-10 text-center text-lg leading-relaxed text-white/75 md:text-xl">
        Scratch away the silver — what&apos;s underneath is the question I&apos;ve been holding in my heart.
      </p>

      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(244,194,194,0.15)_0%,transparent_70%)] blur-xl" />

        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:aspect-[4/5]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,194,194,0.12)_0%,#0a0a0a_65%)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-center sm:px-12">
            <AnimatePresence>
              {revealed && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.6],
                        y: [-20 - Math.random() * 80],
                        x: [(Math.random() - 0.5) * 120],
                      }}
                      transition={{ duration: 2.2, delay: i * 0.08, ease: "easeOut" }}
                      className="pointer-events-none absolute text-lg"
                      style={{ top: "55%", left: "50%" }}
                    >
                      {i % 3 === 0 ? "♥" : i % 3 === 1 ? "✨" : "💍"}
                    </motion.span>
                  ))}
                </>
              )}
            </AnimatePresence>

            <motion.div
              animate={revealed ? { scale: [0.92, 1.02, 1], opacity: 1 } : { opacity: 0.85 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[10px] tracking-[0.35em] text-shez-rose uppercase">
                {revealed ? "She said it with her heart" : "Hidden beneath"}
              </p>
              <h2 className="bilbo-regular mt-4 text-5xl leading-tight text-white drop-shadow-[0_4px_24px_rgba(244,194,194,0.35)] sm:text-6xl md:text-7xl">
                {SCRATCH_REVEAL.headline}
              </h2>
              <p className="story-display mt-6 text-2xl text-white/90 sm:text-3xl">
                {SCRATCH_REVEAL.subline}
              </p>
            </motion.div>
          </div>

          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
            style={{ opacity: revealed ? 0 : 1, transition: "opacity 0.8s ease" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          />
        </div>

        {!revealed && progress > 0 && (
          <p className="mt-4 text-center font-sans text-xs tracking-widest text-white/35 uppercase">
            Keep scratching… {progress}%
          </p>
        )}
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="story-body mt-8 text-center text-lg text-shez-rose md:text-xl"
          >
            {SCRATCH_REVEAL.footnote}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { SCRATCH_MESSAGES } from "@/content/features";
import { useCallback, useEffect, useRef, useState } from "react";

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [message] = useState(
    () => SCRATCH_MESSAGES[Math.floor(Math.random() * SCRATCH_MESSAGES.length)],
  );
  const [revealed, setRevealed] = useState(false);
  const scratching = useRef(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#c9a0a0");
    gradient.addColorStop(0.5, "#e8b4b8");
    gradient.addColorStop(1, "#f4c2c2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = "600 14px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch here ✨", rect.width / 2, rect.height / 2);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc((x - rect.left) * dpr, (y - rect.top) * dpr, 28 * dpr, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    if (cleared / (imageData.data.length / 4) > 0.42) {
      setRevealed(true);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    scratching.current = true;
    scratch(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!scratching.current) return;
    scratch(e.clientX, e.clientY);
  };

  const onPointerUp = () => {
    scratching.current = false;
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="story-body mb-8 text-center text-lg text-white/75">
        Scratch gently — something from my heart is waiting underneath.
      </p>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-black p-8 text-center">
          <p className="story-display text-2xl leading-snug text-white md:text-3xl">{message}</p>
        </div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
          style={{ opacity: revealed ? 0 : 1, transition: "opacity 0.6s ease" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        />
      </div>
      {revealed && (
        <p className="story-body mt-6 text-center text-shez-rose">There it is. Worth the scratch?</p>
      )}
    </div>
  );
}

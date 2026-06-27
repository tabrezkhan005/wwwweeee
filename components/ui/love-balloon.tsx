"use client";

import { motion } from "framer-motion";
import { type CSSProperties, type MouseEvent } from "react";

const BALLOON_COLORS = [
  { main: "#ff6b8a", dark: "#c9184a", shine: "rgba(255,255,255,0.55)" },
  { main: "#f4c2c2", dark: "#b56576", shine: "rgba(255,255,255,0.5)" },
  { main: "#ffb3c6", dark: "#d62856", shine: "rgba(255,255,255,0.45)" },
  { main: "#ff8fab", dark: "#a4133c", shine: "rgba(255,255,255,0.5)" },
  { main: "#ffc8dd", dark: "#c77dff", shine: "rgba(255,255,255,0.55)" },
  { main: "#e8b4b8", dark: "#9d4edd", shine: "rgba(255,255,255,0.45)" },
];

export function LoveBalloon({
  colorIndex,
  popping,
  onPop,
  style,
  delay = 0,
}: {
  colorIndex: number;
  popping: boolean;
  onPop: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  delay?: number;
}) {
  const palette = BALLOON_COLORS[colorIndex % BALLOON_COLORS.length];

  return (
    <motion.button
      type="button"
      onClick={onPop}
      disabled={popping}
      aria-label="Pop balloon"
      className="absolute origin-bottom cursor-pointer border-0 bg-transparent p-0 outline-none disabled:cursor-default"
      style={style}
      initial={{ opacity: 0, y: 24, scale: 0.85 }}
      animate={
        popping
          ? { scale: [1, 1.15, 0], opacity: [1, 1, 0], rotate: [0, -6, 12] }
          : { opacity: 1, y: [0, -10, 0], scale: 1, rotate: [-2, 2, -2] }
      }
      transition={
        popping
          ? { duration: 0.35, ease: "easeIn" }
          : { y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5, delay } }
      }
      whileHover={popping ? undefined : { scale: 1.06 }}
    >
      <div className="relative flex flex-col items-center">
        <div
          className="relative h-[5.5rem] w-[4.25rem] md:h-[6.5rem] md:w-[5rem]"
          style={{
            borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
            background: `radial-gradient(circle at 32% 28%, ${palette.shine} 0%, transparent 42%), radial-gradient(circle at 70% 75%, ${palette.dark} 0%, ${palette.main} 55%, ${palette.dark} 100%)`,
            boxShadow: `inset -8px -12px 20px rgba(0,0,0,0.15), 0 12px 28px rgba(0,0,0,0.35)`,
          }}
        >
          <div
            className="absolute top-[18%] left-[22%] h-[22%] w-[18%] rounded-full opacity-80"
            style={{ background: palette.shine, filter: "blur(1px)" }}
          />
        </div>
        <div
          className="h-2 w-2 rounded-full"
          style={{ background: palette.dark, marginTop: -2 }}
        />
        <svg width="2" height="36" viewBox="0 0 2 36" className="opacity-60">
          <path d="M1 0 Q3 12 1 24 T1 36" stroke={palette.dark} strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </motion.button>
  );
}

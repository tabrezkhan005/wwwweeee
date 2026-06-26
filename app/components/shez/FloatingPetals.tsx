"use client";

const PETALS = [
  { left: "8%", delay: "0s", size: "w-3 h-3" },
  { left: "22%", delay: "1.2s", size: "w-2 h-2" },
  { left: "45%", delay: "0.4s", size: "w-4 h-4" },
  { left: "68%", delay: "2s", size: "w-3 h-3" },
  { left: "85%", delay: "0.8s", size: "w-2.5 h-2.5" },
  { left: "55%", delay: "1.6s", size: "w-2 h-2" },
];

export function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden>
      {PETALS.map((petal, i) => (
        <span
          key={i}
          className={`petal-float absolute bottom-0 rounded-full bg-shez-rose/30 ${petal.size}`}
          style={{ left: petal.left, animationDelay: petal.delay, bottom: `${10 + i * 8}%` }}
        />
      ))}
    </div>
  );
}

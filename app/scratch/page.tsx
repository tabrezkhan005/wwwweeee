"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { ScratchCard } from "@/app/components/shez/features/ScratchCard";

export default function ScratchPage() {
  return (
    <FeaturePageShell eyebrow="For forever" title="Scratch away — I have a question for you.">
      <ScratchCard />
    </FeaturePageShell>
  );
}

"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { ScratchCard } from "@/app/components/shez/features/ScratchCard";

export default function ScratchPage() {
  return (
    <FeaturePageShell eyebrow="A hidden note" title="Scratch away the grey.">
      <ScratchCard />
    </FeaturePageShell>
  );
}

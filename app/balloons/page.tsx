"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { PopBalloons } from "@/app/components/shez/features/PopBalloons";

export default function BalloonsPage() {
  return (
    <FeaturePageShell eyebrow="Little joys" title="Pop one open for me.">
      <PopBalloons />
    </FeaturePageShell>
  );
}

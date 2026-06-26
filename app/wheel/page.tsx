"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { SpinWheel } from "@/app/components/shez/features/SpinWheel";

export default function WheelPage() {
  return (
    <FeaturePageShell eyebrow="Little surprises" title="Something sweet, just for you.">
      <SpinWheel />
    </FeaturePageShell>
  );
}

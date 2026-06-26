"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { RateApology } from "@/app/components/shez/features/RateApology";

export default function RateApologyPage() {
  return (
    <FeaturePageShell eyebrow="From my heart" title="Did I say it well enough?">
      <RateApology />
    </FeaturePageShell>
  );
}

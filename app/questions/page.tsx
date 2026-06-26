"use client";

import { ComingSoonGate } from "@/app/components/ComingSoonGate";
import { FloatingPetals } from "@/app/components/shez/FloatingPetals";
import { QuestionsFlow } from "@/app/components/shez/QuestionsFlow";
import { ShezNav } from "@/app/components/shez/ShezNav";

export default function QuestionsPage() {
  return (
    <ComingSoonGate>
      <div className="relative min-h-screen bg-black">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,194,194,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#0a0a0a_0%,#000_100%)]" />
        <FloatingPetals />
        <ShezNav />
        <div className="relative z-10">
          <QuestionsFlow />
        </div>
      </div>
    </ComingSoonGate>
  );
}

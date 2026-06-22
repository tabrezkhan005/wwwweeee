"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

const FOOTER_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22.5 6.5a2.8 2.8 0 0 0-2-2C18.6 4 12 4 12 4s-6.6 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.5 2.8 2.8 0 0 0 2 2C5.4 20 12 20 12 20s6.6 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.5z" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function LuminaFooter() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black sm:min-h-[115vh]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src={FOOTER_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-4 py-10 font-sans selection:bg-white/20 selection:text-white sm:min-h-[115vh] sm:px-6 lg:px-10">
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass-border mt-24 w-full rounded-3xl p-6 text-white/70 sm:mt-32 md:mt-48 md:p-8 lg:mt-56 lg:p-10 xl:mt-64"
        >
          <div className="mb-8 grid grid-cols-1 gap-10 md:mb-10 md:grid-cols-12 md:gap-8 lg:gap-12">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium">LUMINA</span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed">
                Lumina provides premium clarity on global events and cosmic wonders - shared with
                all for free.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-7 lg:col-span-8 lg:gap-8">
              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-white uppercase">
                  Discover
                </h3>
                <ul className="space-y-2 text-xs">
                  <li><a href="#" className="transition-colors hover:text-white">Labs & Workshops</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Deep Dive Series</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Global Circle</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Resource Vault</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Future Roadmap</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-white uppercase">
                  The Mission
                </h3>
                <ul className="space-y-2 text-xs">
                  <li><a href="#" className="transition-colors hover:text-white">Origin Story</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">The Collective</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Newsroom Hub</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Join the Team</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-white uppercase">
                  Concierge
                </h3>
                <ul className="space-y-2 text-xs">
                  <li><a href="#" className="transition-colors hover:text-white">Get in Touch</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Legal Privacy</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">User Agreement</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Report Concern</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[10px] tracking-widest uppercase opacity-50">Curated by @GotInGeorgiG</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[10px] tracking-widest uppercase opacity-50">Join the Journey:</span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white">
                <a href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100" aria-label="Music"><Music2 size={16} /></a>
                <a href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100" aria-label="Facebook"><FacebookIcon size={16} /></a>
                <a href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100" aria-label="Twitter"><TwitterIcon size={16} /></a>
                <a href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100" aria-label="Youtube"><YoutubeIcon size={16} /></a>
                <a href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100" aria-label="Instagram"><InstagramIcon size={16} /></a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

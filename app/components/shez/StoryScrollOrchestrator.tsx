"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function StoryScrollOrchestrator() {
  useLayoutEffect(() => {
    const story = document.querySelector("#shez-story");
    const footer = document.querySelector<HTMLElement>("[data-shez-footer]");

    if (!story && !footer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chapters = story
      ? gsap.utils.toArray<HTMLElement>("[data-story-chapter]", story)
      : [];

    const scope = story ?? footer ?? document.body;

    const ctx = gsap.context(() => {
      chapters.forEach((chapter) => {
        const isSky = chapter.hasAttribute("data-story-sky");
        const isProse = chapter.hasAttribute("data-story-prose");
        const isFinale = chapter.hasAttribute("data-story-finale");
        const isTeaser = chapter.hasAttribute("data-story-teaser");

        if (isTeaser) {
          const lines = chapter.querySelectorAll<HTMLElement>("[data-teaser-line]");
          const glow = chapter.querySelector<HTMLElement>("[data-teaser-glow]");
          const rule = chapter.querySelector<HTMLElement>("[data-teaser-rule]");

          if (rule) {
            gsap.to(rule, {
              scaleX: 1,
              duration: 1.4,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: chapter,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            });
          }

          gsap.from(lines, {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chapter,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          });

          if (glow) {
            gsap.fromTo(
              glow,
              { opacity: 0 },
              {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 85%",
                  end: "center center",
                  scrub: 1.4,
                },
              },
            );
          }

          return;
        }

        if (isProse) {
          const content = chapter.querySelector<HTMLElement>("[data-prose-content]");
          const exitFade = chapter.querySelector<HTMLElement>("[data-prose-exit-fade]");
          const glow = chapter.querySelector<HTMLElement>("[data-prose-glow]");

          const proseTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1.4,
            },
          });

          if (content) {
            proseTimeline.fromTo(
              content,
              { opacity: 0, y: 72 },
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 },
              0,
            );
            proseTimeline.to(content, { opacity: 1, y: 0, ease: "none", duration: 0.38 }, 0.3);
            proseTimeline.to(content, { opacity: 0, y: -36, ease: "power1.in", duration: 0.32 }, 0.64);
          }

          if (glow) {
            proseTimeline.fromTo(glow, { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.35 }, 0.08);
            proseTimeline.to(glow, { opacity: 0, ease: "none", duration: 0.25 }, 0.7);
          }

          if (exitFade) {
            proseTimeline.fromTo(exitFade, { opacity: 0 }, { opacity: 0, ease: "none", duration: 0.58 }, 0);
            proseTimeline.to(exitFade, { opacity: 1, ease: "power1.in", duration: 0.28 }, 0.62);
          }

          return;
        }

        if (isFinale) {
          const content = chapter.querySelector<HTMLElement>("[data-finale-content]");
          const exitFade = chapter.querySelector<HTMLElement>("[data-finale-exit-fade]");

          const finaleTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1.4,
            },
          });

          if (content) {
            finaleTimeline.fromTo(
              content,
              { opacity: 0, y: 56 },
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.28 },
              0,
            );
            finaleTimeline.to(content, { opacity: 1, y: 0, ease: "none", duration: 0.42 }, 0.28);
            finaleTimeline.to(content, { opacity: 0, y: -28, ease: "power1.in", duration: 0.3 }, 0.62);
          }

          if (exitFade) {
            finaleTimeline.fromTo(exitFade, { opacity: 0 }, { opacity: 0, ease: "none", duration: 0.55 }, 0);
            finaleTimeline.to(exitFade, { opacity: 1, ease: "power1.in", duration: 0.3 }, 0.58);
          }

          return;
        }

        if (isSky) {
          const fadeTop = chapter.querySelector<HTMLElement>("[data-sky-fade-top]");
          const fadeBottom = chapter.querySelector<HTMLElement>("[data-sky-fade-bottom]");
          const video = chapter.querySelector<HTMLElement>("[data-sky-video]");

          const skyTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1.4,
            },
          });

          if (fadeTop) {
            skyTimeline.fromTo(
              fadeTop,
              { opacity: 1 },
              { opacity: 0, ease: "power1.out", duration: 0.2 },
              0,
            );
          }

          if (fadeBottom) {
            skyTimeline.fromTo(
              fadeBottom,
              { opacity: 0 },
              { opacity: 0, ease: "none", duration: 0.58 },
              0,
            );
            skyTimeline.to(fadeBottom, { opacity: 1, ease: "power1.in", duration: 0.22 }, 0.68);
          }

          if (video) {
            gsap.fromTo(
              video,
              { scale: 1.06 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: 1.5,
                },
              },
            );
          }

          const reveals = chapter.querySelectorAll<HTMLElement>("[data-reveal]");
          gsap.from(reveals, {
            y: 36,
            opacity: 0,
            duration: 1.1,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chapter,
              start: "top 42%",
              toggleActions: "play none none none",
            },
          });

          const headline = chapter.querySelector<HTMLElement>("[data-story-headline]");
          if (headline) {
            gsap.to(headline, {
              y: -12,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1.5,
              },
            });
          }

          return;
        }

        const reveals = chapter.querySelectorAll<HTMLElement>("[data-reveal]");
        const rule = chapter.querySelector<HTMLElement>("[data-story-rule]");
        const afterSky = chapter.hasAttribute("data-story-after-sky");

        gsap.from(reveals, {
          y: 48,
          opacity: 0,
          duration: 1.15,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chapter,
            start: afterSky ? "top 90%" : "top 82%",
            toggleActions: "play none none none",
          },
        });

        if (rule) {
          gsap.fromTo(
            rule,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.4,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: chapter,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        const headline = chapter.querySelector<HTMLElement>("[data-story-headline]");
        if (headline) {
          gsap.to(headline, {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.6,
            },
          });
        }
      });

      if (footer) {
        const fadeTop = footer.querySelector<HTMLElement>("[data-footer-fade-top]");
        const content = footer.querySelector<HTMLElement>("[data-footer-content]");
        const video = footer.querySelector<HTMLElement>("[data-footer-video]");

        const footerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.4,
          },
        });

        if (fadeTop) {
          footerTimeline.fromTo(
            fadeTop,
            { opacity: 1 },
            { opacity: 0, ease: "power1.out", duration: 0.32 },
            0,
          );
        }

        if (content) {
          footerTimeline.fromTo(
            content,
            { opacity: 0, y: 48 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 },
            0.18,
          );
        }

        if (video) {
          gsap.fromTo(
            video,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: footer,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1.6,
              },
            },
          );
        }
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return null;
}

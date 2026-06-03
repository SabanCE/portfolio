"use client";

import React, { useEffect, useRef } from "react";

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;
    let killed = false;

    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTriggerModule = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default || ScrollTriggerModule;

      gsap.registerPlugin?.(ScrollTrigger);

      if (killed) return;

      ctx = gsap.context(() => {
        const timeline = gsap.timeline();
        timeline.defaults({ ease: "power3.out" });

        // Header/nav entrance
        timeline.from(
          "header a, header .btn-primary, header button",
          { y: -8, opacity: 0, duration: 0.6, stagger: 0.04, delay: 0.12 },
          0
        );

        // Hero name (site title) entrance
        timeline.from(
          ".hero-name",
          {
            y: 60,
            opacity: 0,
            duration: 1.2,
            delay: 0.25,
            ease: "elastic.out(1, 0.7)",
          },
          0
        );

        // Initial stagger for elements in viewport
        timeline.from(
          "[data-animate]",
          {
            y: 18,
            opacity: 0,
            duration: 0.8,
            stagger: 0.06,
            delay: 0.18,
            immediateRender: false,
          },
          0
        );

        // Scroll-trigger reveal for elements further down the page
        const els = gsap.utils.toArray("[data-animate]");
        els.forEach((el: any, i: number) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            delay: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }, rootRef);
    })();

    return () => {
      killed = true;
      try {
        ctx?.revert?.();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}

"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function GlobalCursorBackground() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const pointerGradient = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(14, 165, 233, 0.35) 0%, rgba(56, 189, 248, 0.08) 18%, transparent 45%), radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(168, 85, 247, 0.18) 0%, transparent 26%)`;

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 100);
      pointerY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none opacity-70"
        style={{ background: pointerGradient }}
      />
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0.8, backdropFilter: "blur(22px)", backgroundColor: "rgba(255,255,255,0.16)" }}
        animate={{ opacity: 0.18, backdropFilter: "blur(0px)", backgroundColor: "rgba(255,255,255,0)" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

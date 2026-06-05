"use client";

import { useEffect, useState } from "react";

export function SnakeGameIframe() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive) return;
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "w",
        "a",
        "s",
        "d",
        "W",
        "A",
        "S",
        "D",
      ];

      if (keys.includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isActive) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isActive]);

  return (
    <div
      className="overflow-hidden rounded-3xl border border-slate-200/80 bg-black shadow-card"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
    >
      <iframe
        src="https://sabance.github.io/snake-game-web/"
        title="Snake Game"
        className="aspect-[16/10] w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

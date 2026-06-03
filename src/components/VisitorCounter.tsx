"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    fetch("/api/visitor", { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json();
        if (!mounted) return;

        if (!res.ok) {
          if (data?.error) {
            setError(true);
            console.error("Visitor counter error:", data.error);
          } else {
            setError(true);
          }
          return;
        }

        if (typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
      {error
        ? "Dijital ayak izi yüklenemedi"
        : count === null
        ? "Dijital ayak izi hesaplanıyor..."
        : `${count.toLocaleString("tr-TR")} dijital ayak izi`}
    </div>
  );
}

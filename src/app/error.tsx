"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-center text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Hata
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-100">
          Bir şeyler ters gitti
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Sayfa yüklenirken beklenmeyen bir sorun oluştu. Yeniden denemek için aşağıdaki butona tıklayabilirsiniz.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Tekrar dene
        </button>
      </div>
    </div>
  );
}

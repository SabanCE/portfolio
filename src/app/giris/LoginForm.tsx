"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Giriş başarısız.");
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card-modern relative w-full max-w-md !p-8 animate-fade-up">
      <Link
        href="/"
        className="text-sm font-medium text-ink-muted transition hover:text-sky-600"
      >
        ← Ana sayfa
      </Link>

      <h1 className="mt-6 font-display text-2xl font-bold text-ink">
        Admin girişi
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        Galeri ve blog yönetimi için giriş yapın.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="username"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Kullanıcı adı
          </label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-ink outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Şifre
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-ink outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            required
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-60"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş yap"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-ink-faint">
        İlk kurulum için proje kökündeki{" "}
        <code className="text-sky-600">.env.local</code> dosyasına bakın.
      </p>
    </div>
  );
}

"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, background: "#020617", color: "#f8fafc", fontFamily: "sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ maxWidth: "460px", width: "100%", border: "1px solid #1e293b", borderRadius: "24px", background: "rgba(15,23,42,0.9)", padding: "32px", boxShadow: "0 24px 80px rgba(0,0,0,0.35)" }}>
            <p style={{ margin: 0, fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#38bdf8" }}>
              Hata
            </p>
            <h2 style={{ margin: "12px 0 8px", fontSize: "24px", color: "#f8fafc" }}>
              Sayfa yüklenirken bir sorun oluştu
            </h2>
            <p style={{ margin: 0, lineHeight: 1.6, color: "#cbd5e1" }}>
              Uygulama kısa bir süreliğine bozulmuş olabilir. Yeniden denemek için aşağıdaki butona basın.
            </p>
            <button
              onClick={() => reset()}
              style={{ marginTop: "24px", border: 0, borderRadius: "999px", background: "#38bdf8", color: "#fff", padding: "10px 18px", cursor: "pointer", fontWeight: 600 }}
            >
              Tekrar dene
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

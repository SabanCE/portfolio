import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="blob -left-16 top-20 h-64 w-64 bg-sky-300/40 animate-float" />
      <div className="blob -right-10 bottom-20 h-72 w-72 bg-violet-300/30 animate-float-delayed" />

      <Suspense
        fallback={
          <div className="card-modern w-full max-w-md !p-8 text-center text-ink-muted">
            Yükleniyor...
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </main>
  );
}

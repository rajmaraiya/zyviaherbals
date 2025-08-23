"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("customer@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", { email, password, callbackUrl: "/account" });
    setLoading(false);
  };

  return (
    <div className="container py-16 max-w-md">
      <h1 className="font-display text-3xl">Welcome back</h1>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
          placeholder="you@domain.com"
        />
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
          placeholder="••••••••"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-ink text-cream px-6 py-3 shadow-edge-highlight"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={() => signIn("google", { callbackUrl: "/account" })}
          className="w-full rounded-2xl border border-ink/15 bg-white px-6 py-3"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

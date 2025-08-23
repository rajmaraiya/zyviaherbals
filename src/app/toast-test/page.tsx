"use client";

import { toast } from "sonner";

export default function ToastTest() {
  return (
    <main className="container py-20">
      <h1 className="font-display text-3xl">Sonner Test</h1>
      <button
        onClick={() => toast.success("Sonner is wired up ✅")}
        className="mt-6 rounded-2xl bg-gold text-ink px-6 py-3 font-semibold shadow-premium"
      >
        Click to toast
      </button>
    </main>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof formSchema>;

export function Newsletter() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // ✅ important: API expects JSON
        body: JSON.stringify({ email: data.email.trim() }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      toast.success("Subscribed!");
      reset();
    } catch (err) {
      toast.error("Could not subscribe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      <div className="container py-16">
        <h3 className="font-display text-2xl md:text-3xl">Join the calm.</h3>
        <p className="text-ink/70 mt-1">New drops, lab notes, and limited runs.</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex max-w-md gap-2"
          aria-label="Newsletter signup form"
        >
          <input
            type="email" // ✅ email input for better mobile keyboards & validation
            inputMode="email"
            autoComplete="email"
            placeholder="you@domain.com"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={errors.email ? "newsletter-email-error" : undefined}
            {...register("email")}
            className="flex-1 rounded-2xl border border-ink/10 bg-cream px-4 py-3 outline-none focus:border-ink/30"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-ink text-cream px-5 py-3 shadow-edge-highlight disabled:opacity-60"
          >
            {loading ? "…" : "Subscribe"}
          </button>
        </form>

        {errors.email && (
          <p id="newsletter-email-error" className="text-sm text-red-600 mt-2">
            {errors.email.message}
          </p>
        )}
      </div>
    </section>
  );
}

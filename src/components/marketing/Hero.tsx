"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(60rem_40rem_at_80%_-20%,rgba(212,175,55,0.10),transparent),_var(--hero-grad)]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-cream/80" />
      <div className="container relative z-10 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl leading-tight text-ink"
          >
            Modern Ayurvedic <span className="text-gold">Luxury</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-ink/80 max-w-xl"
          >
            Clean, lab-tested nutraceuticals crafted for calm focus, daily energy,
            and long-term vitality. Black & gold elegance. No noise.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products?highlight=gummies"
              className="rounded-2xl bg-ink text-cream px-6 py-3 text-sm md:text-base shadow-edge-highlight transition-transform duration-base ease-elegant hover:scale-[1.02] active:scale-[0.98]"
            >
              Shop Gummies
            </Link>
            <Link
              href="/lab-reports"
              className="rounded-2xl border border-ink/15 bg-white/60 backdrop-blur px-6 py-3 text-sm md:text-base text-ink hover:border-ink/25 transition duration-fast"
            >
              Discover the Science
            </Link>
          </div>
        </div>

        <motion.div style={{ y, opacity }} className="relative aspect-[4/3]">
          <div className="absolute inset-0 rounded-card shadow-ambient bg-gradient-to-tr from-charcoal to-ink" />
          <div className="absolute inset-0 p-5 md:p-8 grid grid-rows-3 gap-4">
            <div className="relative rounded-card overflow-hidden">
              <Image
                src="/products/zyvia-shilajit-gummies.png"
                alt="Zyvia Shilajit Gummies"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative rounded-card overflow-hidden">
              <Image
                src="/products/zyvia-honey-sticks.png"
                alt="Zyvia Himalayan Shilajit Honey Sticks"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative rounded-card overflow-hidden">
              <Image
                src="/products/zyvia-shilajit-resin.png"
                alt="Zyvia Pure Shilajit Resin"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] ring-1 ring-gold/15" />
        </motion.div>
      </div>
    </section>
  );
}

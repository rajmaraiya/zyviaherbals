"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  { src: "/products/zyvia-shilajit-gummies.png", title: "Shilajit Gummies", href: "/product/shilajit-gummies" },
  { src: "/products/zyvia-honey-sticks.png", title: "Himalayan Shilajit Honey Sticks", href: "/product/shilajit-honey-sticks" },
  { src: "/products/zyvia-shilajit-resin.png", title: "Pure Shilajit Resin", href: "/product/shilajit-resin" },
];

export function FeaturedCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 2800);
    return () => clearInterval(t);
  }, []);
  const it = items[i];

  return (
    <section className="bg-white">
      <div className="container py-16">
        <h3 className="font-display text-2xl md:text-3xl">Featured</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-ink/5 shadow-ambient">
            <Image src={it.src} alt={it.title} fill className="object-contain" />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold">{it.title}</h4>
            <p className="mt-2 text-ink/70">Elevate your routine with balanced, bioavailable actives.</p>
            <a
              href={it.href}
              className="mt-6 inline-block rounded-2xl bg-ink text-cream px-6 py-3 shadow-edge-highlight transition-transform duration-base ease-elegant hover:scale-[1.02]"
            >
              View product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "shilajit-honey-sticks",
    name: "Himalayan Shilajit Honey Sticks",
    blurb: "Daily vitality in a natural honey infusion.",
    stats: [
      { k: "95%", v: "use 4x per week" },
      { k: "67%", v: "improved digestion" },
      { k: "0%", v: "added sugar" },
    ],
    image: "/images/honey-sticks.png",
    cta: "Shop Honey Sticks",
  },
  {
    slug: "shilajit-gummies",
    name: "Shilajit Gummies",
    blurb: "Energy & focus packed into delicious daily bites.",
    stats: [{ k: "52%", v: "feel more energized daily" }],
    image: "/images/gummies.png",
    cta: "Shop Gummies",
  },
];

export default function ProductCards() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10">
        {products.map((p) => (
          <article key={p.slug} className="rounded-2xl ring-1 ring-surface/70 bg-surface p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-square bg-bg/60 rounded-xl ring-1 ring-surface/60">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold/30 rounded-lg" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-ivory">{p.name}</h3>
                <p className="mt-2 text-ivory/80">{p.blurb}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {p.stats.map((s) => (
                    <div key={s.k}>
                      <div className="font-display text-2xl text-gold">{s.k}</div>
                      <div className="text-sm text-muted">{s.v}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/products/${p.slug}`}
                  className="btn-gold inline-flex mt-8"
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container grid md:grid-cols-2 gap-10 py-16 md:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-ivory">
            Zyvia Herbals — <span className="text-gold">Modern Ayurveda</span>, Elevated.
          </h1>
          <p className="mt-4 text-ivory/80 max-w-xl">
            Ultra-premium nutraceuticals for modern living. Lab-tested, internationally certified.
            Designed for purity, performance & elegance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="btn-gold">Shop Now</Link>
            <Link href="/science" className="btn-outline">Discover the Science</Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-b from-surface to-bg ring-1 ring-surface/60">
          <Image
            src="/images/honey-sticks.png"
            alt="Himalayan Shilajit Honey Sticks"
            fill
            className="object-contain p-6"
            priority
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-gold text-bg text-xs font-semibold px-3 py-1">
            Premium Quality
          </div>
        </div>
      </div>
    </section>
  );
}

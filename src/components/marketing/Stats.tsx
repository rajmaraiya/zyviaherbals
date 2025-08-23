"use client";

import { useEffect, useState } from "react";

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const r = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(r);
    };
    const id = requestAnimationFrame(r);
    return () => cancelAnimationFrame(id);
  }, [to]);
  return <span>{n}%</span>;
}

export function Stats() {
  return (
    <section className="bg-white">
      <div className="container py-16">
        <h2 className="font-display text-3xl md:text-4xl">Modern living leaves our bodies deficient.</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-card border border-ink/5 p-6">
            <div className="text-3xl font-semibold text-ink"><Counter to={92} /></div>
            <p className="text-ink/70 text-sm mt-2">lack optimal mineral balance</p>
          </div>
          <div className="rounded-card border border-ink/5 p-6">
            <div className="text-3xl font-semibold text-ink"><Counter to={74} /></div>
            <p className="text-ink/70 text-sm mt-2">report low daytime energy</p>
          </div>
          <div className="rounded-card border border-ink/5 p-6">
            <div className="text-3xl font-semibold text-ink"><Counter to={61} /></div>
            <p className="text-ink/70 text-sm mt-2">experience poor sleep quality</p>
          </div>
          <div className="rounded-card border border-ink/5 p-6">
            <div className="text-3xl font-semibold text-ink"><Counter to={48} /></div>
            <p className="text-ink/70 text-sm mt-2">show signs of gut imbalance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const items = [
  { icon: "/images/seal-usda.svg", title: "USDA Organic", note: "Certified" },
  { icon: "/images/seal-lab.svg",  title: "Lab Tested", note: "for Purity" },
  { icon: "/images/seal-nosugar.svg", title: "No Added", note: "Sugar" },
  { icon: "/images/seal-vegan.svg", title: "Vegan-Friendly", note: "Options" },
  { icon: "/images/seal-gmp.svg", title: "GMP Certified", note: "Facility" },
];

export default function Features() {
  return (
    <section className="border-y border-surface/60 bg-surface/40">
      <div className="container py-10">
        <h2 className="font-display text-center text-2xl md:text-3xl mb-8 text-ivory">
          Wellness you can trust — crafted with integrity, science, and ancient wisdom.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {items.map((i) => (
            <div key={i.title} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-3 bg-ivory/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gold rounded opacity-90" />
              </div>
              <div className="text-ivory font-semibold">{i.title}</div>
              <div className="text-sm text-muted">{i.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

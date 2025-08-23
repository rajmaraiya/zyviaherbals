import Image from "next/image";

const items = [
  { src: "/badges/organic.svg", label: "Organic" },
  { src: "/badges/lab-tested.svg", label: "Lab-tested" },
  { src: "/badges/vegan.svg", label: "Vegan" },
  { src: "/badges/gmp.svg", label: "GMP Facility" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-ink/5">
      <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src={it.src} alt={it.label} fill className="object-contain" />
            </div>
            <span className="text-ink/70">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

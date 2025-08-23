import { Brain, Battery, Sparkles, Shield } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Brain Health", copy: "Focus, memory, and calm clarity." },
  { icon: Battery, title: "Energy & Body", copy: "Clean daily energy without jitters." },
  { icon: Shield, title: "Immunity", copy: "Support natural defenses." },
  { icon: Sparkles, title: "Gut Health", copy: "Balanced digestion and comfort." },
];

export function Benefits() {
  return (
    <section className="bg-cream">
      <div className="container py-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">Benefits, honestly stated.</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-card bg-white p-6 shadow-ambient border border-ink/5 transition duration-base ease-elegant hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

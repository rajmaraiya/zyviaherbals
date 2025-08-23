import Image from "next/image";

export function SocialProof() {
  return (
    <section className="bg-cream">
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-card bg-white p-8 border border-ink/5 shadow-ambient">
            <h4 className="text-xl font-semibold">What people say</h4>
            <div className="mt-4 space-y-4">
              <p className="text-ink/80">“The only gummies that feel premium inside & out.” ★★★★★</p>
              <p className="text-ink/80">“Clean energy. No crashes. Packaging is gorgeous.” ★★★★★</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-square rounded-card overflow-hidden">
              <Image alt="UGC 1" src="/ugc/ugc-1.jpg" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-card overflow-hidden">
              <Image alt="UGC 2" src="/ugc/ugc-2.jpg" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-card overflow-hidden">
              <Image alt="UGC 3" src="/ugc/ugc-3.jpg" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

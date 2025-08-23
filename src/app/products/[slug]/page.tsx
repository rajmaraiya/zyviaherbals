import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export async function generateStaticParams() {
  const slugs = await prisma.product.findMany({ select: { slug: true } });
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findFirst({
    where: { slug: params.slug },
    include: { images: { orderBy: { priority: "asc" } }, variants: true, reviews: true },
  });
  if (!product) return notFound();

  const image = product.images[0]?.url ?? "/products/zyvia-shilajit-gummies.png";

  return (
    <div className="container py-16 grid lg:grid-cols-2 gap-10">
      <div className="space-y-3">
        <div className="relative aspect-square rounded-card overflow-hidden border border-ink/5 shadow-ambient">
          <Image src={image} alt={product.title} fill className="object-contain" priority />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(product.images.length ? product.images : [{ url: image }]).slice(0, 3).map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-ink/5">
              <Image src={img.url} alt={product.title} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-display text-3xl md:text-4xl">{product.title}</h1>
        <p className="mt-2 text-ink/70">{product.description}</p>
        <div className="mt-4 text-2xl font-semibold">${product.price.toString()}</div>

        {product.benefits?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.benefits.map((b) => (
              <span key={b} className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs">{b}</span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex gap-3">
          <a
            href={`/api/checkout?slug=${encodeURIComponent(product.slug)}&qty=1`}
            className="inline-block rounded-2xl bg-ink text-cream px-6 py-3 shadow-edge-highlight"
          >
            Buy now
          </a>
          <a
            href="/cart"
            className="inline-block rounded-2xl border border-ink/15 bg-white px-6 py-3"
          >
            Add to Cart
          </a>
        </div>

        <div className="mt-10 space-y-4">
          <section>
            <h3 className="font-semibold text-lg">Ingredients</h3>
            <p className="text-ink/70 text-sm mt-2">Detailed panel available in lab reports.</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">FAQs</h3>
            <p className="text-ink/70 text-sm mt-2">Take 2 daily, preferably with water.</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Reviews</h3>
            <p className="text-ink/70 text-sm mt-2">
              {product.reviews.length ? `${product.reviews.length} verified reviews` : "Be the first to review."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

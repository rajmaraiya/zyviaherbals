import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-static";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { benefit?: string; q?: string; price?: string };
}) {
  const { benefit, q } = searchParams;

  const products = await prisma.product.findMany({
    where: {
      AND: [
        q
          ? {
              OR: [
                { title: { contains: q, mode: "insensitive" } },
                { description: { contains: q, mode: "insensitive" } },
              ],
            }
          : {},
        benefit ? { benefits: { has: benefit } } : {},
      ],
    },
    include: { images: { orderBy: { priority: "asc" } } },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  return (
    <div className="container py-16">
      <h1 className="font-display text-3xl md:text-4xl">All Products</h1>
      <form className="mt-6 flex gap-2 max-w-xl">
        <input name="q" placeholder="Search..." className="flex-1 rounded-2xl border border-ink/10 bg-cream px-4 py-3" defaultValue={q ?? ""} />
        <select name="benefit" defaultValue={benefit ?? ""} className="rounded-2xl border border-ink/10 bg-white px-4 py-3">
          <option value="">All benefits</option>
          <option value="Energy">Energy</option>
          <option value="Cognitive">Cognitive</option>
          <option value="Gut">Gut</option>
          <option value="Immunity">Immunity</option>
        </select>
        <button className="rounded-2xl bg-ink text-cream px-5">Filter</button>
      </form>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => {
          const img = p.images[0]?.url ?? "/products/zyvia-shilajit-gummies.png";
          return (
            <Link key={p.id} href={`/product/${p.slug}`} className="group rounded-card bg-white border border-ink/5 shadow-ambient p-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img} alt={p.title} fill className="object-contain transition duration-base ease-elegant group-hover:scale-[1.02]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-ink/70 text-sm">${p.price.toString()}</p>
                </div>
                <div className="text-ink/60 text-xs">View →</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

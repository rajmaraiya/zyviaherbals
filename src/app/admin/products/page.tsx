import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminProducts() {
  const products = await prisma.product.findMany({ include: { images: true }, orderBy: { createdAt: "desc" } });

  return (
    <div className="container py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Products</h1>
        <Link href="/admin/products/new" className="rounded-2xl bg-ink text-cream px-5 py-2">New product</Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-card border border-ink/10 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-cream">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Slug</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Featured</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-ink/5">
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.slug}</td>
                <td className="p-3">${p.price.toString()}</td>
                <td className="p-3">{p.featured ? "Yes" : "No"}</td>
                <td className="p-3">
                  <Link href={`/admin/products/${p.id}`} className="underline">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

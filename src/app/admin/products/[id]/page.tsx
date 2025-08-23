import { prisma } from "@/lib/db";
import ProductForm from "@/components/admin/ProductForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({ where: { id: params.id }, include: { images: true, variants: true } });
  if (!product) return <div className="container py-16">Not found.</div>;
  return (
    <div className="container py-16">
      <h1 className="font-display text-3xl">Edit Product</h1>
      <div className="mt-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}

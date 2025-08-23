import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="container py-16">
      <h1 className="font-display text-3xl">New Product</h1>
      <div className="mt-6">
        <ProductForm />
      </div>
    </div>
  );
}

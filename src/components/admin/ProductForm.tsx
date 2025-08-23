"use client";

import { useState } from "react";

export default function ProductForm({ product }: { product?: any }) {
  const [form, setForm] = useState({
    title: product?.title ?? "",
    slug: product?.slug ?? "",
    description: product?.description ?? "",
    price: product?.price?.toString?.() ?? "29.00",
    benefits: product?.benefits?.join(", ") ?? "Energy, Cognitive",
    featured: product?.featured ?? false,
  });
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(product ? `/api/admin/products/${product.id}` : "/api/admin/products", {
      method: product ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) alert("Failed");
    else window.location.href = "/admin/products";
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-2xl">
      <div>
        <label className="block text-sm">Title</label>
        <input className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
               value={form.title} onChange={(e)=>setForm({...form, title:e.target.value})}/>
      </div>
      <div>
        <label className="block text-sm">Slug</label>
        <input className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
               value={form.slug} onChange={(e)=>setForm({...form, slug:e.target.value})}/>
      </div>
      <div>
        <label className="block text-sm">Description</label>
        <textarea className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
                  value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})}/>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Price (USD)</label>
          <input className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
                 value={form.price} onChange={(e)=>setForm({...form, price:e.target.value})}/>
        </div>
        <div>
          <label className="block text-sm">Benefits (comma separated)</label>
          <input className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3"
                 value={form.benefits} onChange={(e)=>setForm({...form, benefits:e.target.value})}/>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input id="featured" type="checkbox" checked={form.featured} onChange={(e)=>setForm({...form, featured:e.target.checked})}/>
        <label htmlFor="featured">Featured</label>
      </div>
      <button disabled={saving} className="rounded-2xl bg-ink text-cream px-6 py-3 shadow-edge-highlight">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

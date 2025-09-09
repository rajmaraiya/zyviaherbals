import { Metadata } from 'next';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'All Products | Zyvia Herbals',
  description: 'Explore our complete collection of premium Himalayan Shilajit products including honey sticks, gummies, and pure resin.',
};

export default function AllProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              All Products
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of premium Himalayan Shilajit products, each crafted with ancient wisdom and modern quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                Our products are currently being updated. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

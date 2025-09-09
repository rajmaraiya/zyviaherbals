import { Metadata } from 'next';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Shilajit Honey Sticks | Zyvia Herbals',
  description: 'Premium Himalayan Shilajit in Raw Honey Sticks. Convenient, delicious, and packed with natural wellness benefits.',
};

export default function HoneySticksPage() {
  const honeyStickProducts = products.filter(product => 
    product.name.toLowerCase().includes('honey') || 
    product.name.toLowerCase().includes('stick')
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Shilajit Honey Sticks
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of pure Himalayan Shilajit and raw honey. 
            Our convenient honey sticks make it easy to enjoy the benefits of this ancient superfood anywhere, anytime.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Why Choose Our Honey Sticks?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Convenient Portability</h3>
                    <p className="text-neutral-600">Perfect for on-the-go consumption, travel, or busy lifestyles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Pure Raw Honey</h3>
                    <p className="text-neutral-600">Sourced from pristine Himalayan regions, unprocessed and natural.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Precise Dosing</h3>
                    <p className="text-neutral-600">Each stick contains the optimal amount of Shilajit for daily wellness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Health Benefits</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Enhanced Energy & Vitality
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cognitive Support
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Immune System Support
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Natural Antioxidants
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Our Honey Stick Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honeyStickProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {honeyStickProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">
              Our honey stick products are currently being restocked. Check back soon!
            </p>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Shilajit Gummies | Zyvia Herbals',
  description: 'Delicious Shilajit Energy Gummies with raspberry flavor. A convenient and tasty way to enjoy the benefits of Himalayan Shilajit.',
};

export default function GummiesPage() {
  const gummyProducts = products.filter(product => 
    product.name.toLowerCase().includes('gummies') || 
    product.name.toLowerCase().includes('gummy')
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Shilajit Gummies
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Delicious raspberry-flavored gummies packed with premium Himalayan Shilajit. 
            The perfect way to make your daily wellness routine both enjoyable and effective.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Why Our Gummies?</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Delicious Raspberry Flavor
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Easy Daily Consumption
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Artificial Colors
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium Himalayan Shilajit
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Perfect for Active Lifestyles
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Pre-Workout Energy</h3>
                    <p className="text-neutral-600">Natural energy boost without the crash of synthetic stimulants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Recovery Support</h3>
                    <p className="text-neutral-600">Help your body recover faster with natural minerals and nutrients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Mental Clarity</h3>
                    <p className="text-neutral-600">Enhanced focus and cognitive function for peak performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">The Science Behind Our Gummies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-neutral-300">Sourced from 18,000+ ft altitude in the Himalayas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Lab Tested</h3>
                <p className="text-neutral-300">Third-party tested for purity and potency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bioavailable</h3>
                <p className="text-neutral-300">Enhanced absorption for maximum benefits</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Our Gummy Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {gummyProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">
              Our gummy products are currently being restocked. Check back soon!
            </p>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </>
  );
}

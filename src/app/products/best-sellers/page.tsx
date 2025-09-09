import { Metadata } from 'next';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/product-card';

export const metadata: Metadata = {
  title: 'Best Sellers | Zyvia Herbals',
  description: 'Discover our most popular Himalayan Shilajit products. These customer favorites deliver exceptional quality and results.',
};

export default function BestSellersPage() {
  // Mark all current products as best sellers for now
  const bestSellerProducts = products.map(product => ({
    ...product,
    badges: [...(product.badges || []), 'Best Seller']
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Customer Favorites
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Best Sellers
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of customers trust these premium Himalayan Shilajit products. 
            Each one represents the pinnacle of quality, effectiveness, and customer satisfaction.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Customer Loved</h3>
              <p className="text-neutral-600">Highest rated products with 4.8+ star reviews from real customers.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Proven Results</h3>
              <p className="text-neutral-600">Products that consistently deliver on their wellness promises.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">High Repurchase</h3>
              <p className="text-neutral-600">Products customers order again and again for continued benefits.</p>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why These Are Our Best Sellers</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Premium Sourcing</h3>
                  <p className="text-neutral-300">Harvested from the pristine Himalayas at optimal altitudes for maximum potency.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Tested</h3>
                  <p className="text-neutral-300">Every batch is independently tested for purity, potency, and safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customer Support</h3>
                  <p className="text-neutral-300">Dedicated customer service team to help you on your wellness journey.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Money-Back Guarantee</h3>
                  <p className="text-neutral-300">30-day satisfaction guarantee on all our best-selling products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Our Best Selling Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {bestSellerProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">
              Our best seller products are currently being updated. Check back soon!
            </p>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Experience the difference that premium quality and authentic Himalayan Shilajit can make in your wellness journey.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-neutral-700 font-medium">4.8/5 from 1,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

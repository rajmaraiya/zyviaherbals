import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Information | Zyvia Herbals',
  description: 'Learn about our shipping options, delivery times, and policies for both domestic and international orders.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Shipping & Delivery
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Fast, secure shipping to get your wellness products delivered safely to your door. 
            We offer multiple shipping options to meet your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">🇺🇸 Domestic Shipping (US)</h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Standard Shipping</h3>
                  <span className="text-green-600 font-bold">FREE on orders $75+</span>
                </div>
                <p className="text-neutral-600 text-sm mb-2">3-5 business days</p>
                <p className="text-neutral-500 text-sm">$6.99 for orders under $75</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Express Shipping</h3>
                  <span className="text-amber-600 font-bold">$12.99</span>
                </div>
                <p className="text-neutral-600 text-sm">1-2 business days</p>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Overnight Shipping</h3>
                  <span className="text-red-600 font-bold">$24.99</span>
                </div>
                <p className="text-neutral-600 text-sm">Next business day by 12 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">🌍 International Shipping</h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Canada</h3>
                  <span className="text-blue-600 font-bold">$15.99</span>
                </div>
                <p className="text-neutral-600 text-sm">7-14 business days</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Europe & Australia</h3>
                  <span className="text-blue-600 font-bold">$22.99</span>
                </div>
                <p className="text-neutral-600 text-sm">10-21 business days</p>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutral-900">Rest of World</h3>
                  <span className="text-blue-600 font-bold">$29.99</span>
                </div>
                <p className="text-neutral-600 text-sm">14-28 business days</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> International customers may be subject to customs fees and import duties determined by their country's regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Order Processing & Fulfillment</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Order Received</h3>
              <p className="text-neutral-300 text-sm">We process your order within 1 business day</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Check</h3>
              <p className="text-neutral-300 text-sm">Each product is inspected before packaging</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-neutral-300 text-sm">Products are carefully packed for protection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Tracking Sent</h3>
              <p className="text-neutral-300 text-sm">You'll receive tracking info via email</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              What We Ship
            </h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>All Zyvia Herbals products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Temperature-sensitive items with cold packs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Bulk orders and subscriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Gift orders with special packaging</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
              </svg>
              Shipping Restrictions
            </h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">×</span>
                <span>No PO Boxes for Express/Overnight shipping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">×</span>
                <span>Some countries restrict supplement imports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">×</span>
                <span>Age-restricted delivery required (18+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">×</span>
                <span>APO/FPO addresses require standard shipping</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Questions About Your Shipment?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help with any shipping questions or concerns. 
            Track your order anytime or contact us for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200">
              Track My Order
            </button>
            <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

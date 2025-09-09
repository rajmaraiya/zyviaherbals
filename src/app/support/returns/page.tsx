import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns & Refunds | Zyvia Herbals',
  description: 'Learn about our 30-day money-back guarantee, return process, and refund policy for complete peace of mind.',
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Returns & Refunds
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Your satisfaction is our priority. We offer a comprehensive 30-day money-back guarantee 
            because we're confident you'll love our premium wellness products.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 text-center mb-16">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Try our products risk-free for 30 days. If you're not completely satisfied, 
            return them for a full refund - no questions asked.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              What Can Be Returned
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unopened products in original packaging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Products damaged during shipping</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Wrong items sent by mistake</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Defective or expired products</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
              </svg>
              Return Restrictions
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Opened consumable products (unless defective)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Products returned after 30 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Items damaged by customer misuse</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Products without original packaging</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Easy Return Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-neutral-300 text-sm">Email or call our support team to initiate return</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Get Return Label</h3>
              <p className="text-neutral-300 text-sm">We'll email you a prepaid return shipping label</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Ship Items</h3>
              <p className="text-neutral-300 text-sm">Package items securely and drop off at carrier location</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Get Refund</h3>
              <p className="text-neutral-300 text-sm">Receive full refund within 3-5 business days</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">💳 Refund Information</h3>
            <div className="space-y-4 text-neutral-600">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                <span className="font-medium">Credit Card Refunds</span>
                <span className="text-green-600 font-bold">3-5 business days</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                <span className="font-medium">PayPal Refunds</span>
                <span className="text-green-600 font-bold">1-2 business days</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                <span className="font-medium">Processing Time</span>
                <span className="text-blue-600 font-bold">Same day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Shipping Refund</span>
                <span className="text-amber-600 font-bold">Defective items only</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">📋 Return Requirements</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Items must be returned within 30 days of delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Original packaging and labels must be intact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Include order number or return authorization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Use provided prepaid return label when possible</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Need to Start a Return?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Our customer service team is ready to help you with your return. Contact us and we'll guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200">
              Start Return Process
            </button>
            <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Email Support</h3>
            <p className="text-neutral-600 text-sm mb-3">returns@zyviaherbals.com</p>
            <p className="text-xs text-neutral-500">Response within 2-4 hours</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Phone Support</h3>
            <p className="text-neutral-600 text-sm mb-3">1-800-ZYVIA-HERBS</p>
            <p className="text-xs text-neutral-500">Mon-Fri 9AM-6PM EST</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Live Chat</h3>
            <p className="text-neutral-600 text-sm mb-3">Available on website</p>
            <p className="text-xs text-neutral-500">Real-time assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

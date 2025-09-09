import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Order | Zyvia Herbals',
  description: 'Track your Zyvia Herbals order with real-time shipping updates and delivery information.',
};

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Track Your Order
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated on your wellness journey with real-time tracking information for your Zyvia Herbals order.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Enter Your Tracking Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Order Number or Tracking Number</label>
                <input
                  type="text"
                  placeholder="Enter your order number (e.g., ZH-12345) or tracking number"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="Email address used for your order"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <button className="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-700 transition-colors duration-200 font-medium">
                Track My Order
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Order Status Guide
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Order Confirmed</h4>
                  <p className="text-neutral-600 text-sm">We've received and are processing your order</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-1.5"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Preparing for Shipment</h4>
                  <p className="text-neutral-600 text-sm">Your items are being packed and prepared</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Shipped</h4>
                  <p className="text-neutral-600 text-sm">Your order is on its way to you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Delivered</h4>
                  <p className="text-neutral-600 text-sm">Your order has been successfully delivered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Helpful Tips
            </h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Check your email for shipping confirmation with tracking details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Orders typically process within 1 business day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Tracking updates may take 24-48 hours to appear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Contact support if you don't receive tracking info within 48 hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Shipping Partners</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">USPS</h3>
              <p className="text-neutral-300 text-sm">Standard & Priority Mail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">UPS</h3>
              <p className="text-neutral-300 text-sm">Ground & Express</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">FedEx</h3>
              <p className="text-neutral-300 text-sm">Express & Ground</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4.293 3.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">DHL</h3>
              <p className="text-neutral-300 text-sm">International Express</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Need Help with Your Order?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Can't find your tracking information or have questions about your order? 
            Our customer support team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
              View Order History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

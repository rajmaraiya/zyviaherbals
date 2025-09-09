"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function TrackOrderPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "Track Order" }
  ]

  return (
    <main className="bg-zyvia-cream min-h-screen">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="pb-24">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">
              Track Your Order
            </h1>
            <p className="text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
              Stay updated on your wellness journey with real-time tracking information for your Zyvia Herbals order.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-6 text-center">Enter Your Tracking Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zyvia-coffee mb-2">Order Number or Tracking Number</label>
                  <input
                    type="text"
                    placeholder="Enter your order number (e.g., ZH-12345) or tracking number"
                    className="w-full px-4 py-3 border border-zyvia-brown/20 rounded-lg focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zyvia-coffee mb-2">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="Email address used for your order"
                    className="w-full px-4 py-3 border border-zyvia-brown/20 rounded-lg focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-zyvia-coffee text-zyvia-cream py-3 rounded-lg hover:bg-zyvia-brown transition-colors duration-200 font-display font-medium">
                  Track My Order
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-xl font-bold text-zyvia-coffee mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-zyvia-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Order Status Guide
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-zyvia-gold rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="font-display font-semibold text-zyvia-coffee">Order Confirmed</h4>
                    <p className="text-zyvia-coffee/70 text-sm">We've received and are processing your order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-zyvia-gold rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="font-display font-semibold text-zyvia-coffee">Preparing for Shipment</h4>
                    <p className="text-zyvia-coffee/70 text-sm">Your items are being packed and prepared</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-zyvia-gold rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="font-display font-semibold text-zyvia-coffee">Shipped</h4>
                    <p className="text-zyvia-coffee/70 text-sm">Your order is on its way to you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-zyvia-gold rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="font-display font-semibold text-zyvia-coffee">Delivered</h4>
                    <p className="text-zyvia-coffee/70 text-sm">Your order has been successfully delivered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-xl font-bold text-zyvia-coffee mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-zyvia-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Helpful Tips
              </h3>
              <ul className="space-y-3 text-zyvia-coffee/70">
                <li className="flex items-start gap-2">
                  <span className="text-zyvia-gold mt-1">•</span>
                  <span>Check your email for shipping confirmation with tracking details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zyvia-gold mt-1">•</span>
                  <span>Orders typically process within 1 business day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zyvia-gold mt-1">•</span>
                  <span>Tracking updates may take 24-48 hours to appear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zyvia-gold mt-1">•</span>
                  <span>Contact support if you don't receive tracking info within 48 hours</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-zyvia-gold/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">
              Need Help with Your Order?
            </h3>
            <p className="text-zyvia-coffee/70 mb-6 max-w-2xl mx-auto">
              Can't find your tracking information or have questions about your order? 
              Our customer support team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-zyvia-coffee text-zyvia-cream rounded-lg hover:bg-zyvia-brown transition-colors duration-200 font-display">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-zyvia-coffee text-zyvia-coffee rounded-lg hover:bg-zyvia-coffee hover:text-zyvia-cream transition-colors duration-200 font-display">
                View Order History
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

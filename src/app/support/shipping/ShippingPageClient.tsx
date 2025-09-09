"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function ShippingPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "Shipping" }
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
              Shipping & Delivery
            </h1>
            <p className="text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
              Fast, secure shipping to get your wellness products delivered safely to your door. 
              We offer multiple shipping options to meet your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-6">🇺🇸 Domestic Shipping (US)</h2>
              <div className="space-y-6">
                <div className="border-b border-zyvia-brown/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Standard Shipping</h3>
                    <span className="text-zyvia-gold font-bold">FREE on orders $75+</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm mb-2">3-5 business days</p>
                  <p className="text-zyvia-coffee/60 text-sm">$6.99 for orders under $75</p>
                </div>
                <div className="border-b border-zyvia-brown/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Express Shipping</h3>
                    <span className="text-zyvia-gold font-bold">$12.99</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm">1-2 business days</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Overnight Shipping</h3>
                    <span className="text-zyvia-gold font-bold">$24.99</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm">Next business day by 12 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-6">🌍 International Shipping</h2>
              <div className="space-y-6">
                <div className="border-b border-zyvia-brown/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Canada</h3>
                    <span className="text-zyvia-gold font-bold">$15.99</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm">7-14 business days</p>
                </div>
                <div className="border-b border-zyvia-brown/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Europe & Australia</h3>
                    <span className="text-zyvia-gold font-bold">$22.99</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm">10-21 business days</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-semibold text-zyvia-coffee">Rest of World</h3>
                    <span className="text-zyvia-gold font-bold">$29.99</span>
                  </div>
                  <p className="text-zyvia-coffee/70 text-sm">14-28 business days</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-zyvia-gold/10 rounded-xl">
                <p className="text-sm text-zyvia-coffee/80">
                  <strong>Note:</strong> International customers may be subject to customs fees and import duties determined by their country's regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zyvia-coffee rounded-3xl p-8 text-zyvia-cream mb-16 max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Order Processing & Fulfillment</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">1</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Order Received</h3>
                <p className="text-zyvia-cream/80 text-sm">We process your order within 1 business day</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">2</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Quality Check</h3>
                <p className="text-zyvia-cream/80 text-sm">Each product is inspected before packaging</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">3</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Secure Packaging</h3>
                <p className="text-zyvia-cream/80 text-sm">Products are carefully packed for protection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">4</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Tracking Sent</h3>
                <p className="text-zyvia-cream/80 text-sm">You'll receive tracking info via email</p>
              </div>
            </div>
          </div>

          <div className="bg-zyvia-gold/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">
              Questions About Your Shipment?
            </h3>
            <p className="text-zyvia-coffee/70 mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help with any shipping questions or concerns. 
              Track your order anytime or contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-zyvia-coffee text-zyvia-cream rounded-lg hover:bg-zyvia-brown transition-colors duration-200 font-display">
                Track My Order
              </button>
              <button className="px-6 py-3 border border-zyvia-coffee text-zyvia-coffee rounded-lg hover:bg-zyvia-coffee hover:text-zyvia-cream transition-colors duration-200 font-display">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

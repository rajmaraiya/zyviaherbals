"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function ReturnsPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "Returns" }
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
              Returns & Refunds
            </h1>
            <p className="text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
              Your satisfaction is our priority. We offer a comprehensive 30-day money-back guarantee 
              because we're confident you'll love our premium wellness products.
            </p>
          </div>

          <div className="bg-zyvia-gold/10 border border-zyvia-gold/30 rounded-3xl p-8 text-center mb-16 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-zyvia-coffee" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-zyvia-coffee mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-zyvia-coffee/80 max-w-2xl mx-auto">
              Try our products risk-free for 30 days. If you're not completely satisfied, 
              return them for a full refund - no questions asked.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-zyvia-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                What Can Be Returned
              </h2>
              <ul className="space-y-4 text-zyvia-coffee/80">
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-gold mt-1">✓</span>
                  <span>Unopened products in original packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-gold mt-1">✓</span>
                  <span>Products damaged during shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-gold mt-1">✓</span>
                  <span>Wrong items sent by mistake</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-gold mt-1">✓</span>
                  <span>Defective or expired products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-zyvia-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                Return Restrictions
              </h2>
              <ul className="space-y-4 text-zyvia-coffee/80">
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-brown mt-1">×</span>
                  <span>Opened consumable products (unless defective)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-brown mt-1">×</span>
                  <span>Products returned after 30 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-brown mt-1">×</span>
                  <span>Items damaged by customer misuse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zyvia-brown mt-1">×</span>
                  <span>Products without original packaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-zyvia-coffee rounded-3xl p-8 text-zyvia-cream mb-16 max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Easy Return Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">1</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Contact Us</h3>
                <p className="text-zyvia-cream/80 text-sm">Email or call our support team to initiate return</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">2</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Get Return Label</h3>
                <p className="text-zyvia-cream/80 text-sm">We'll email you a prepaid return shipping label</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">3</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Ship Items</h3>
                <p className="text-zyvia-cream/80 text-sm">Package items securely and drop off at carrier location</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-zyvia-coffee font-bold">4</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Get Refund</h3>
                <p className="text-zyvia-cream/80 text-sm">Receive full refund within 3-5 business days</p>
              </div>
            </div>
          </div>

          <div className="bg-zyvia-gold/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">
              Need to Start a Return?
            </h3>
            <p className="text-zyvia-coffee/70 mb-6 max-w-2xl mx-auto">
              Our customer service team is ready to help you with your return. Contact us and we'll guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-zyvia-coffee text-zyvia-cream rounded-lg hover:bg-zyvia-brown transition-colors duration-200 font-display">
                Start Return Process
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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Zyvia Herbals',
  description: 'Our comprehensive refund policy ensures your satisfaction with clear guidelines for returns, refunds, and exchanges.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            At Zyvia Herbals, your satisfaction is our top priority. We stand behind our products 
            and offer a comprehensive refund policy to ensure your complete peace of mind.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">30-Day Money-Back Guarantee</h2>
            <div className="prose max-w-none text-neutral-600">
              <p className="mb-4">
                We offer a 30-day money-back guarantee on all purchases. If you are not completely satisfied 
                with your order, you may return unused items in their original packaging for a full refund 
                within 30 days of the delivery date.
              </p>
              <p>
                This guarantee reflects our confidence in the quality and effectiveness of our premium 
                Himalayan Shilajit products. We want you to experience the full benefits of our wellness 
                products with complete confidence.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Refund Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4">✓ Eligible for Refund</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Unopened products in original packaging</li>
                  <li>• Products damaged during shipping</li>
                  <li>• Wrong items sent by our error</li>
                  <li>• Defective or expired products</li>
                  <li>• Products that don't match description</li>
                  <li>• Returns initiated within 30 days of delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-4">✗ Not Eligible for Refund</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Opened consumable products (unless defective)</li>
                  <li>• Products returned after 30-day period</li>
                  <li>• Items damaged by customer misuse</li>
                  <li>• Products purchased with promotional discounts exceeding 50%</li>
                  <li>• Products without original packaging or labels</li>
                  <li>• Gift cards or digital products</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Refund Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Contact Us</h3>
                <p className="text-neutral-600 text-sm">Email support@zyviaherbals.com or call our customer service team to initiate your refund request.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Return Authorization</h3>
                <p className="text-neutral-600 text-sm">We'll provide you with a Return Authorization Number (RA#) and prepaid return shipping label.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Ship Items</h3>
                <p className="text-neutral-600 text-sm">Package items securely with the RA# clearly marked and ship using our prepaid label.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Receive Refund</h3>
                <p className="text-neutral-600 text-sm">Once we receive and inspect your return, we'll process your refund within 3-5 business days.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Refund Timeline & Methods</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Processing Time</h3>
                <p className="text-neutral-600">
                  Refunds are processed within 3-5 business days after we receive and inspect your returned items. 
                  You will receive an email confirmation once your refund has been processed.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Credit Card Refunds</h3>
                <p className="text-neutral-600">
                  Refunds to credit cards typically appear on your statement within 5-10 business days, 
                  depending on your card issuer's processing time.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-neutral-900 mb-2">PayPal Refunds</h3>
                <p className="text-neutral-600">
                  PayPal refunds are processed immediately and typically appear in your PayPal account within 1-2 business days.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Alternative Payment Methods</h3>
                <p className="text-neutral-600">
                  For other payment methods, refunds will be processed using the same method used for the original purchase 
                  or via store credit if the original method is no longer available.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Shipping Costs & Fees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4">Free Return Shipping</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Products damaged during shipping</li>
                  <li>• Wrong items sent by our error</li>
                  <li>• Defective or expired products</li>
                  <li>• Quality issues or product defects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-600 mb-4">Customer Pays Return Shipping</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Change of mind returns</li>
                  <li>• Ordered wrong size or quantity</li>
                  <li>• No longer needed items</li>
                  <li>• Personal preference changes</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Original shipping costs are non-refundable except in cases where we shipped 
                the wrong item or the product arrived damaged or defective.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Exchanges</h2>
            <div className="prose max-w-none text-neutral-600">
              <p className="mb-4">
                While we primarily process refunds, we may offer direct exchanges in certain circumstances:
              </p>
              <ul className="space-y-2">
                <li>• Defective products can be exchanged for the same item</li>
                <li>• Wrong items shipped can be exchanged for the correct product</li>
                <li>• Size or variant exchanges (subject to availability)</li>
                <li>• Damaged products can be exchanged for new ones</li>
              </ul>
              <p className="mt-4">
                To request an exchange, contact our customer service team. Exchanges are subject to product availability 
                and must meet the same eligibility requirements as refunds.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">International Returns</h2>
            <div className="prose max-w-none text-neutral-600">
              <p className="mb-4">
                International customers may return products subject to the same 30-day policy. However, 
                please note the following:
              </p>
              <ul className="space-y-2">
                <li>• Customer responsible for return shipping costs (unless product defect)</li>
                <li>• Items must clear customs and may be subject to inspection</li>
                <li>• Refund amount excludes original international shipping costs</li>
                <li>• Processing may take additional time due to international shipping</li>
                <li>• Some countries may impose import duties on returned items</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-neutral-300 text-sm">support@zyviaherbals.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-neutral-300 text-sm">1-800-ZYVIA-HERBS</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-neutral-300 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Questions About Our Refund Policy?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help clarify any questions about our refund policy 
              or assist you with your return.
            </p>
            <button className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200">
              Contact Support Team
            </button>
          </section>

          <section className="text-center text-neutral-500 text-sm">
            <p>This refund policy was last updated on December 15, 2024.</p>
            <p className="mt-2">
              Zyvia Herbals reserves the right to update this policy. Customers will be notified of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

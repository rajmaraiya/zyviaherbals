"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function TermsPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/legal" },
    { label: "Terms of Service" }
  ]

  return (
    <main className="bg-zyvia-cream min-h-screen">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="pb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">
              Terms of Service
            </h1>
            <p className="text-zyvia-coffee/70 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using Zyvia Herbals services or purchasing our products.
            </p>
            <p className="text-zyvia-coffee/60 text-sm mt-4">
              Last updated: January 6, 2025
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg prose-zyvia max-w-none">
                
                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">1. Acceptance of Terms</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    By accessing and using the Zyvia Herbals website (zyviaherbals.com), mobile application, or services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">2. Description of Service</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    Zyvia Herbals provides premium Ayurvedic supplements, including Himalayan Shilajit products, through our e-commerce platform. Our services include:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• Online catalog and product information</li>
                    <li>• Secure payment processing</li>
                    <li>• Order fulfillment and shipping</li>
                    <li>• Customer support services</li>
                    <li>• Educational content about Ayurvedic wellness</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">3. Product Information & Health Claims</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    All products sold by Zyvia Herbals are dietary supplements. Important disclaimers:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• These statements have not been evaluated by the Food and Drug Administration</li>
                    <li>• Our products are not intended to diagnose, treat, cure, or prevent any disease</li>
                    <li>• Consult with a healthcare professional before use if pregnant, nursing, or have medical conditions</li>
                    <li>• Individual results may vary</li>
                    <li>• Keep products out of reach of children</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">4. Account Registration & Security</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    When creating an account, you agree to:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your login credentials</li>
                    <li>• Accept responsibility for all activities under your account</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>• Use your account for lawful purposes only</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">5. Orders & Payment</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      <strong>Order Acceptance:</strong> All orders are subject to acceptance by Zyvia Herbals. We reserve the right to refuse or cancel any order for any reason.
                    </p>
                    <p>
                      <strong>Pricing:</strong> Prices are in USD and subject to change without notice. We strive to display accurate pricing, but errors may occur.
                    </p>
                    <p>
                      <strong>Payment:</strong> Payment is required at time of order. We accept major credit cards processed securely through Stripe.
                    </p>
                    <p>
                      <strong>Taxes:</strong> Applicable taxes will be calculated and added at checkout based on shipping address.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">6. Shipping & Delivery</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      <strong>Shipping Times:</strong> Orders typically ship within 1-3 business days. Delivery times vary by location and shipping method selected.
                    </p>
                    <p>
                      <strong>Shipping Costs:</strong> Shipping fees are calculated at checkout based on order weight, dimensions, and destination.
                    </p>
                    <p>
                      <strong>Risk of Loss:</strong> Risk of loss and title for products pass to you upon delivery to the shipping carrier.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">7. Returns & Refunds</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      <strong>30-Day Guarantee:</strong> We offer a 30-day satisfaction guarantee on unopened products. Contact customer service to initiate a return.
                    </p>
                    <p>
                      <strong>Return Conditions:</strong> Products must be in original packaging, unopened, and in resalable condition. Customer is responsible for return shipping costs unless product is defective.
                    </p>
                    <p>
                      <strong>Refund Processing:</strong> Approved refunds will be processed within 5-7 business days to original payment method.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">8. Intellectual Property</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property of Zyvia Herbals or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or republish any content without written permission.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">9. User Conduct</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    You agree not to:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• Use our services for illegal or unauthorized purposes</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Transmit viruses, malware, or other harmful code</li>
                    <li>• Harass, abuse, or harm other users</li>
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Interfere with the proper working of our services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">10. Privacy & Data Protection</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our services, you consent to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">11. Disclaimers & Limitations</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      <strong>AS IS BASIS:</strong> Our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                    <p>
                      <strong>LIMITATION OF LIABILITY:</strong> Zyvia Herbals shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">12. Indemnification</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    You agree to indemnify and hold harmless Zyvia Herbals, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">13. Governing Law</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of California.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">14. Changes to Terms</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">15. Severability</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full force and effect.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">16. Contact Information</h2>
                  <div className="text-zyvia-coffee/80 leading-relaxed space-y-2">
                    <p>For questions about these Terms of Service, please contact us:</p>
                    <p><strong>Email:</strong> legal@zyviaherbals.com</p>
                    <p><strong>Support:</strong> support@zyviaherbals.com</p>
                    <p><strong>Mail:</strong> Zyvia Herbals Legal Department<br />
                    [Address to be added]</p>
                    <p><strong>Phone:</strong> 1-800-ZYVIA-HERBS</p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

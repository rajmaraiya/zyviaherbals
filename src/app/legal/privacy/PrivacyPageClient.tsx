"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function PrivacyPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/legal" },
    { label: "Privacy Policy" }
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
              Privacy Policy
            </h1>
            <p className="text-zyvia-coffee/70 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
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
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">1. Introduction</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    Zyvia Herbals ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website zyviaherbals.com, use our mobile application, or interact with our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">2. Information We Collect</h2>
                  
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-3">Personal Information You Provide</h3>
                    <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                      We collect information you voluntarily provide when you:
                    </p>
                    <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                      <li>• Create an account (name, email address, password)</li>
                      <li>• Make a purchase (billing and shipping addresses, payment information)</li>
                      <li>• Contact customer support (name, email, inquiry details)</li>
                      <li>• Subscribe to our newsletter (email address, preferences)</li>
                      <li>• Leave product reviews (name, review content, ratings)</li>
                      <li>• Participate in surveys or promotions</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-3">Automatically Collected Information</h3>
                    <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                      When you use our services, we automatically collect:
                    </p>
                    <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                      <li>• Device information (IP address, browser type, operating system)</li>
                      <li>• Usage data (pages visited, time spent, clicks, search terms)</li>
                      <li>• Location data (general geographic location based on IP address)</li>
                      <li>• Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-3">Third-Party Information</h3>
                    <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                      We may receive information from third parties such as:
                    </p>
                    <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                      <li>• Social media platforms (Google, Apple) when you use social login</li>
                      <li>• Payment processors (Stripe) for transaction processing</li>
                      <li>• Marketing partners and analytics providers</li>
                      <li>• Shipping carriers for delivery tracking</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">3. How We Use Your Information</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• Process and fulfill your orders</li>
                    <li>• Provide customer support and respond to inquiries</li>
                    <li>• Send order confirmations, shipping updates, and receipts</li>
                    <li>• Personalize your shopping experience</li>
                    <li>• Send marketing communications (with your consent)</li>
                    <li>• Improve our website and services</li>
                    <li>• Prevent fraud and ensure security</li>
                    <li>• Comply with legal obligations</li>
                    <li>• Conduct research and analytics</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      <strong>Service Providers:</strong> Third parties who provide services on our behalf, including payment processing, shipping, email delivery, and analytics.
                    </p>
                    <p>
                      <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales, your information may be transferred to the new entity.
                    </p>
                    <p>
                      <strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights, property, or safety.
                    </p>
                    <p>
                      <strong>Consent:</strong> With your explicit consent for specific purposes not covered in this policy.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">5. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      We use cookies and similar technologies to enhance your experience, including:
                    </p>
                    <p>
                      <strong>Essential Cookies:</strong> Required for basic website functionality, such as shopping cart and authentication.
                    </p>
                    <p>
                      <strong>Analytics Cookies:</strong> Help us understand how visitors use our website to improve performance.
                    </p>
                    <p>
                      <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements and track campaign effectiveness.
                    </p>
                    <p>
                      You can manage cookie preferences through your browser settings, but disabling cookies may affect website functionality.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">6. Data Security</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    We implement appropriate security measures to protect your information, including:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure servers and databases</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Employee training on data protection</li>
                  </ul>
                  <p className="text-zyvia-coffee/80 leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">7. Data Retention</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is retained until you request deletion or close your account. Transaction records are kept for tax and regulatory compliance purposes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">8. Your Rights and Choices</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                    <li>• <strong>Access:</strong> Request a copy of your personal information</li>
                    <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
                    <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li>• <strong>Objection:</strong> Object to certain processing activities</li>
                  </ul>
                  <p className="text-zyvia-coffee/80 leading-relaxed mt-4">
                    To exercise these rights, contact us at privacy@zyviaherbals.com. We will respond within 30 days of receiving your request.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">9. Marketing Communications</h2>
                  <div className="space-y-4 text-zyvia-coffee/80 leading-relaxed">
                    <p>
                      With your consent, we may send you marketing emails about new products, promotions, and wellness tips. You can opt out at any time by:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li>• Clicking the unsubscribe link in any email</li>
                      <li>• Updating your preferences in your account settings</li>
                      <li>• Contacting us at support@zyviaherbals.com</li>
                    </ul>
                    <p>
                      Note that you cannot opt out of transactional emails related to your orders or account.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">10. International Data Transfers</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during international transfers, including using standard contractual clauses and working with service providers that maintain adequate data protection standards.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">11. Children's Privacy</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will delete it promptly. If you believe we may have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">12. State-Specific Privacy Rights</h2>
                  
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-3">California Residents (CCPA)</h3>
                    <p className="text-zyvia-coffee/80 leading-relaxed mb-4">
                      Under the California Consumer Privacy Act, California residents have additional rights:
                    </p>
                    <ul className="text-zyvia-coffee/80 leading-relaxed ml-6 space-y-2">
                      <li>• Right to know what personal information is collected and how it's used</li>
                      <li>• Right to delete personal information</li>
                      <li>• Right to opt-out of the sale of personal information</li>
                      <li>• Right to non-discrimination for exercising privacy rights</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-3">European Residents (GDPR)</h3>
                    <p className="text-zyvia-coffee/80 leading-relaxed">
                      Under the General Data Protection Regulation, EU residents have rights including data portability, the right to be forgotten, and the right to lodge a complaint with supervisory authorities.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">13. Changes to This Privacy Policy</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the revised policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">14. Third-Party Links</h2>
                  <p className="text-zyvia-coffee/80 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">15. Contact Information</h2>
                  <div className="text-zyvia-coffee/80 leading-relaxed space-y-2">
                    <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                    <p><strong>Privacy Officer:</strong> privacy@zyviaherbals.com</p>
                    <p><strong>General Support:</strong> support@zyviaherbals.com</p>
                    <p><strong>Mail:</strong> Zyvia Herbals Privacy Department<br />
                    [Address to be added]</p>
                    <p><strong>Phone:</strong> 1-800-ZYVIA-HERBS</p>
                  </div>
                </section>

                <div className="bg-zyvia-gold/10 border border-zyvia-gold/30 rounded-2xl p-6 mt-8">
                  <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3">Your Privacy Matters</h3>
                  <p className="text-zyvia-coffee/80 text-sm leading-relaxed">
                    At Zyvia Herbals, we are committed to transparency and protecting your privacy. If you have any concerns or questions about how we handle your personal information, please don't hesitate to reach out to our privacy team.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

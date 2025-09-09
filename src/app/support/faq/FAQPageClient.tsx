"use client"

import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function FAQPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "FAQ" }
  ]

  const faqData = [
    {
      category: "Products",
      questions: [
        {
          question: "What is Shilajit and what are its benefits?",
          answer: "Shilajit is a natural tar-like substance formed over centuries from the decomposition of plant matter in the Himalayas. It contains over 80 minerals, fulvic acid, and other bioactive compounds that support energy, cognitive function, immune health, and overall vitality."
        },
        {
          question: "How do I take Shilajit products?",
          answer: "For our resin: Take a rice grain-sized amount (300-500mg) dissolved in warm water or milk once daily on an empty stomach. For gummies: Take 1-2 gummies daily with food. For honey sticks: Consume 1 stick daily, preferably in the morning."
        },
        {
          question: "Are your products third-party tested?",
          answer: "Yes, every batch is tested by independent, FDA-registered laboratories for purity, potency, heavy metals, microbials, and contaminants. We provide certificates of analysis upon request."
        },
        {
          question: "What makes your Shilajit different from others?",
          answer: "Our Shilajit is sourced directly from pristine Himalayan regions at 18,000+ feet, using traditional harvesting methods. We ensure minimum 15% fulvic acid content and conduct rigorous quality testing for authenticity and purity."
        }
      ]
    },
    {
      category: "Ordering & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and international shipping options are available. All orders are processed within 1 business day."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping times vary by destination (7-21 business days). Additional customs fees may apply depending on your country's regulations."
        },
        {
          question: "What if my order arrives damaged?",
          answer: "We carefully package all orders, but if your items arrive damaged, please contact us within 48 hours with photos. We'll immediately send a replacement at no cost to you."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "You can modify or cancel your order within 2 hours of placement. After that, orders are processed for shipping. Contact our support team immediately if you need to make changes."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return unused products in original packaging for a full refund. Return shipping costs are covered by us for defective items."
        },
        {
          question: "How do I return a product?",
          answer: "Contact our support team to initiate a return. We'll provide a prepaid return label and instructions. Once we receive and inspect your return, refunds are processed within 3-5 business days."
        },
        {
          question: "Are there any items that can't be returned?",
          answer: "For health and safety reasons, we cannot accept returns of opened consumable products unless they're defective or damaged upon arrival. Unopened products can be returned within 30 days."
        }
      ]
    },
    {
      category: "Health & Safety",
      questions: [
        {
          question: "Is Shilajit safe for everyone?",
          answer: "Shilajit is generally safe for healthy adults. However, pregnant or nursing women, children, and individuals with medical conditions should consult a healthcare provider before use. Start with small doses to assess tolerance."
        },
        {
          question: "Are there any side effects?",
          answer: "Shilajit is well-tolerated by most people. Rare side effects may include digestive upset if taken on an empty stomach or in large doses. Always follow recommended dosages and discontinue if you experience any adverse reactions."
        },
        {
          question: "Can I take Shilajit with medications?",
          answer: "While Shilajit is natural, it may interact with certain medications. Consult your healthcare provider before combining Shilajit with prescription medications, especially blood thinners or diabetes medications."
        },
        {
          question: "How long before I see results?",
          answer: "Many customers report increased energy within the first week. However, optimal benefits typically develop over 4-8 weeks of consistent use as your body adapts and mineral levels are restored."
        }
      ]
    }
  ]

  return (
    <main className="bg-zyvia-cream min-h-screen">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="pb-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our products, orders, and wellness guidance. 
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-zyvia-gold rounded-full flex items-center justify-center">
                    <span className="text-zyvia-coffee font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group border border-zyvia-brown/20 rounded-xl">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zyvia-cream/50 transition-colors duration-200">
                        <h3 className="font-display text-lg font-semibold text-zyvia-coffee pr-4">
                          {faq.question}
                        </h3>
                        <svg 
                          className="w-6 h-6 text-zyvia-coffee/60 transition-transform duration-200 group-open:rotate-180" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-zyvia-coffee/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-zyvia-coffee rounded-3xl p-8 text-zyvia-cream text-center">
              <h2 className="font-display text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-zyvia-cream/80 mb-8 max-w-2xl mx-auto">
                Our customer support team is available to help you with any questions not covered in our FAQ. 
                We typically respond within 2-4 hours during business hours.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zyvia-coffee" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold mb-2">Email Support</h3>
                  <p className="text-zyvia-cream/70 text-sm mb-3">Get detailed answers via email</p>
                  <p className="text-zyvia-gold text-sm">support@zyviaherbals.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zyvia-coffee" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold mb-2">Phone Support</h3>
                  <p className="text-zyvia-cream/70 text-sm mb-3">Speak directly with our team</p>
                  <p className="text-zyvia-gold text-sm">1-800-ZYVIA-HERBS</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zyvia-coffee" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold mb-2">Live Chat</h3>
                  <p className="text-zyvia-cream/70 text-sm mb-3">Real-time assistance online</p>
                  <p className="text-zyvia-gold text-sm">Available 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

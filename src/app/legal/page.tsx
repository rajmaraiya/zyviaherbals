import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import Link from "next/link"
import type { Metadata } from "next"
import { FileText, Shield, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal | Zyvia Herbals",
  description:
    "Access legal documents including Terms of Service, Privacy Policy, and other important policies for Zyvia Herbals.",
  openGraph: {
    title: "Legal | Zyvia Herbals",
    description:
      "Access legal documents including Terms of Service, Privacy Policy, and other important policies for Zyvia Herbals.",
  },
}

export default function LegalPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal" }
  ]

  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "Terms and conditions for using Zyvia Herbals services and purchasing our premium Ayurvedic supplements.",
      href: "/legal/terms",
      icon: Scale,
      updated: "January 6, 2025"
    },
    {
      title: "Privacy Policy", 
      description: "Learn how we protect your privacy and handle your personal information when you use our services.",
      href: "/legal/privacy",
      icon: Shield,
      updated: "January 6, 2025"
    }
  ]

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-zyvia-coffee rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-zyvia-cream" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">
                Legal Documents
              </h1>
              <p className="text-zyvia-coffee/70 max-w-2xl mx-auto">
                Access important legal information about your rights, our policies, and terms governing the use of Zyvia Herbals services.
              </p>
            </div>

            {/* Legal Documents Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                {legalDocuments.map((doc) => {
                  const IconComponent = doc.icon
                  return (
                    <div key={doc.href} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-zyvia-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-zyvia-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-bold text-zyvia-coffee mb-3">
                            {doc.title}
                          </h3>
                          <p className="text-zyvia-coffee/70 leading-relaxed mb-4">
                            {doc.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-zyvia-coffee/50">
                              Updated {doc.updated}
                            </span>
                            <Button asChild variant="ghost" size="sm" className="text-zyvia-gold hover:text-zyvia-coffee">
                              <Link href={doc.href}>
                                Read Document →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-2xl mx-auto mt-16">
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <h2 className="font-display text-2xl font-bold text-zyvia-coffee mb-4">
                  Have Legal Questions?
                </h2>
                <p className="text-zyvia-coffee/70 leading-relaxed mb-6">
                  If you have questions about our legal policies or need clarification on any terms, our legal team is here to help.
                </p>
                <div className="space-y-2 text-zyvia-coffee/80">
                  <p><strong>Legal Inquiries:</strong> legal@zyviaherbals.com</p>
                  <p><strong>Privacy Questions:</strong> privacy@zyviaherbals.com</p>
                  <p><strong>General Support:</strong> support@zyviaherbals.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

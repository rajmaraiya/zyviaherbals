"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const [orderNumber, setOrderNumber] = useState<string>("")

  useEffect(() => {
    const order = searchParams.get("order")
    setOrderNumber(order || `ZH${Date.now().toString().slice(-6)}`)
  }, [searchParams])

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-24">
            {/* Success Hero */}
            <div className="text-center mb-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-4">Order Confirmed!</h1>
              <p className="text-xl text-zyvia-coffee/70 mb-2">Thank you for choosing Zyvia Herbals</p>
              <p className="text-lg text-zyvia-coffee/60">Order #{orderNumber}</p>
            </div>

            {/* Order Details */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="font-display text-2xl font-semibold text-zyvia-coffee mb-6">What happens next?</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zyvia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-zyvia-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zyvia-coffee mb-1">Order Confirmation Email</h3>
                      <p className="text-zyvia-coffee/70 text-sm">
                        You'll receive a confirmation email with your order details shortly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zyvia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="h-6 w-6 text-zyvia-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zyvia-coffee mb-1">Processing & Shipping</h3>
                      <p className="text-zyvia-coffee/70 text-sm">
                        Your order will be processed within 1-2 business days and shipped with tracking information.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zyvia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-zyvia-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zyvia-coffee mb-1">Delivery</h3>
                      <p className="text-zyvia-coffee/70 text-sm">
                        Free shipping on all orders. Expect delivery within 3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-zyvia-coffee text-zyvia-cream rounded-2xl p-8 mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">Need Help?</h2>
                <p className="text-zyvia-cream/90 mb-4">
                  Our wellness experts are here to support your journey. Contact us with any questions about your order
                  or our products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="gold">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="border-zyvia-cream text-zyvia-cream hover:bg-zyvia-cream hover:text-zyvia-coffee"
                  >
                    <a href="mailto:hello@zyviaherbals.com">hello@zyviaherbals.com</a>
                  </Button>
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="text-center">
                <h2 className="font-display text-2xl font-semibold text-zyvia-coffee mb-4">
                  Continue Your Wellness Journey
                </h2>
                <p className="text-zyvia-coffee/70 mb-6">
                  Explore more premium Ayurvedic supplements to enhance your daily routine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/products">
                      Continue Shopping
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <Link href="/science">Learn About Our Science</Link>
                  </Button>
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

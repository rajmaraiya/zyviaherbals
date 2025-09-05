"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Price } from "@/components/shop/Price"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { useCartStore } from "@/store/cart"
import { CreditCard, Lock, Truck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const subtotal = getTotalPrice()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]

  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  // Handle empty cart redirect on client side
  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart")
    } else {
      setIsLoading(false)
    }
  }, [items.length, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate mock order number
    const orderNumber = `ZH${Date.now().toString().slice(-6)}`

    // Clear cart and redirect to success page
    clearCart()
    router.push(`/order/success?order=${orderNumber}`)
  }

  // Show loading or redirect if cart is empty
  if (isLoading || items.length === 0) {
    return null
  }

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-8">Checkout</h1>

            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div className="space-y-8">
                  {/* Shipping Information */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <Truck className="h-5 w-5 text-zyvia-gold" />
                      <h2 className="font-display text-xl font-semibold text-zyvia-coffee">Shipping Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">Address</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">City</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">ZIP Code</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="h-5 w-5 text-zyvia-gold" />
                      <h2 className="font-display text-xl font-semibold text-zyvia-coffee">Payment Information</h2>
                      <Lock className="h-4 w-4 text-zyvia-coffee/60 ml-auto" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">Card Number</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zyvia-coffee mb-2">Expiry Date</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zyvia-coffee mb-2">CVV</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                    <h2 className="font-display text-xl font-semibold text-zyvia-coffee mb-6">Order Summary</h2>

                    {/* Order Items */}
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="relative w-16 h-16 bg-zyvia-cream/30 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.product.images[0] || `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(item.product.name)}`}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-zyvia-coffee text-sm line-clamp-2">{item.product.name}</h3>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-zyvia-coffee/60 text-sm">Qty: {item.quantity}</span>
                              <Price price={item.product.price * item.quantity} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Totals */}
                    <div className="space-y-3 mb-6 pt-6 border-t border-zyvia-coffee/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-zyvia-coffee/70">Subtotal</span>
                        <Price price={subtotal} />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zyvia-coffee/70">Shipping</span>
                        <span className="text-zyvia-coffee font-medium">Free</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zyvia-coffee/70">Tax</span>
                        <Price price={tax} />
                      </div>
                      <div className="border-t border-zyvia-coffee/10 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-display text-lg font-semibold text-zyvia-coffee">Total</span>
                          <Price price={total} />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" variant="primary" className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : "Complete Order"}
                    </Button>

                    {/* Security Notice */}
                    <div className="mt-4 text-center text-xs text-zyvia-coffee/60">
                      <Lock className="h-3 w-3 inline mr-1" />
                      Your payment information is secure and encrypted
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Quantity } from "@/components/shop/Quantity"
import { Price } from "@/components/shop/Price"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { useCartStore } from "@/store/cart"
import { Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore()
  const subtotal = getTotalPrice()

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Cart" }]

  const shipping = 0 // Free shipping placeholder
  const tax = subtotal * 0.08 // 8% tax placeholder
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="bg-zyvia-cream min-h-screen">
          <Container>
            <div className="py-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>

            <div className="pb-24">
              {/* Empty Cart State */}
              <div className="text-center py-24">
                <div className="w-24 h-24 bg-zyvia-coffee/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="h-12 w-12 text-zyvia-coffee/40" />
                </div>
                <h1 className="font-display text-3xl font-bold text-zyvia-coffee mb-4">Your Cart is Empty</h1>
                <p className="text-lg text-zyvia-coffee/70 mb-8 max-w-md mx-auto">
                  Discover our premium Ayurvedic supplements and start your wellness journey today.
                </p>
                <Button asChild size="lg" variant="primary">
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    )
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 bg-zyvia-cream/30 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0] || `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(item.product.name)}`}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-1">
                              <Link href={`/product/${item.product.slug}`} className="hover:text-zyvia-gold transition-colors">
                                {item.product.name}
                              </Link>
                            </h3>
                            <Price price={item.product.price} />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-zyvia-coffee/60 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <Quantity value={item.quantity} onChange={(qty) => updateQuantity(item.id, qty)} className="w-auto" />
                          <div className="text-right">
                            <Price price={item.product.price * item.quantity} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <div className="flex justify-between items-center pt-6 border-t border-zyvia-coffee/10">
                  <Button variant="ghost" onClick={clearCart} className="text-zyvia-coffee/60 hover:text-red-600">
                    Clear Cart
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                  <h2 className="font-display text-xl font-semibold text-zyvia-coffee mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-zyvia-coffee/70">
                        Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
                      </span>
                      <Price price={subtotal} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zyvia-coffee/70">Shipping</span>
                      <span className="text-zyvia-coffee font-medium">
                        {shipping === 0 ? "Free" : `$${(shipping as number).toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zyvia-coffee/70">Tax</span>
                      <Price price={tax} />
                    </div>
                    <div className="border-t border-zyvia-coffee/10 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-display text-lg font-semibold text-zyvia-coffee">Total</span>
                          <Price price={total} />
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg" variant="primary" className="w-full">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-zyvia-coffee/10">
                    <div className="text-center text-sm text-zyvia-coffee/60 space-y-2">
                      <p>✓ Secure checkout</p>
                      <p>✓ Free shipping on all orders</p>
                      <p>✓ 30-day money-back guarantee</p>
                    </div>
                  </div>
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

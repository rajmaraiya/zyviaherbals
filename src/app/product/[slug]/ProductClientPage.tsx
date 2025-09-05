"use client"

import { notFound } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Gallery } from "@/components/shop/Gallery"
import { Quantity } from "@/components/shop/Quantity"
import { Price } from "@/components/shop/Price"
import { Badges } from "@/components/shop/Badges"
import { ProductCard } from "@/components/shop/ProductCard"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getProductBySlug, products } from "@/data/products"
import { Star, Shield, Award, FlaskConical } from "lucide-react"
import { useCartStore } from "@/store/cart" // Import useCartStore
import { useState } from "react" // Import useState

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductClientPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.name },
  ]

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  const tabs = [
    { id: "benefits", label: "Benefits", content: product.benefits },
    { id: "ingredients", label: "Ingredients", content: product.ingredients },
    { id: "how-to-use", label: "How to Use", content: product.howToUse },
    { id: "lab-results", label: "Lab Results", content: product.labResults },
  ]

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.subtitle,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "Zyvia Herbals",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    // No ratings data in current product structure
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            {/* Product Details */}
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              {/* Gallery */}
              <div>
                <Gallery images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-2">{product.name}</h1>
                  <p className="text-lg text-zyvia-coffee/70 mb-4">{product.subtitle}</p>
                  {product.badge && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* No rating system implemented yet */}

                {/* Price */}
                <Price price={product.price} originalPrice={product.originalPrice} />

                {/* Add to Cart Section */}
                <ProductAddToCartSection product={product} />

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zyvia-coffee/10">
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-zyvia-gold mx-auto mb-2" />
                    <p className="text-xs text-zyvia-coffee/70">Third-Party Tested</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-6 w-6 text-zyvia-gold mx-auto mb-2" />
                    <p className="text-xs text-zyvia-coffee/70">GMP Certified</p>
                  </div>
                  <div className="text-center">
                    <FlaskConical className="h-6 w-6 text-zyvia-gold mx-auto mb-2" />
                    <p className="text-xs text-zyvia-coffee/70">Lab Verified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Tabs */}
            <ProductTabs tabs={tabs} />

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="mt-24">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-zyvia-coffee mb-8 text-center">
                  You Might Also Like
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

// Client component for add to cart functionality
function ProductAddToCartSection({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    // Navigate to checkout - we'll implement this in the next task
    window.location.href = "/checkout"
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="text-zyvia-coffee font-medium">Quantity:</label>
        <Quantity value={quantity} onChange={setQuantity} />
      </div>

      <div className="flex gap-3">
        <Button onClick={handleAddToCart} className="flex-1" variant="primary">
          Add to Cart
        </Button>
        <Button onClick={handleBuyNow} className="flex-1" variant="gold">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

// Client component for tabs
function ProductTabs({ tabs }: { tabs: any[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Tab Headers */}
      <div className="border-b border-zyvia-coffee/10">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-zyvia-gold border-b-2 border-zyvia-gold"
                  : "text-zyvia-coffee/70 hover:text-zyvia-coffee"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {Array.isArray(tab.content) ? (
              <ul className="space-y-3">
                {tab.content.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zyvia-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-zyvia-coffee/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-zyvia-coffee/80 leading-relaxed">{tab.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

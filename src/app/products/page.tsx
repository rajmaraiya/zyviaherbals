import { Container } from "@/components/ui/Container"
import { ProductCard } from "@/components/shop/ProductCard"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { products } from "@/data/products"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Ayurvedic Supplements | Zyvia Herbals",
  description:
    "Discover our complete collection of premium Himalayan Shilajit and Ayurvedic supplements. Lab-tested, organic, and sourced from the pristine Himalayas.",
  openGraph: {
    title: "Premium Ayurvedic Supplements | Zyvia Herbals",
    description:
      "Discover our complete collection of premium Himalayan Shilajit and Ayurvedic supplements. Lab-tested, organic, and sourced from the pristine Himalayas.",
  },
}

export default function ProductsPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Products" }]

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-4">
                Premium Ayurvedic Supplements
              </h1>
              <p className="text-lg text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
                Discover our complete collection of premium Himalayan Shilajit and time-tested Ayurvedic supplements,
                each rigorously tested for purity and potency to support your wellness journey.
              </p>
              
              {/* Maintenance Notice */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-amber-800">
                      🔧 Website Under Maintenance
                    </h3>
                  </div>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    We're currently updating our product catalog to serve you better. Some products may be temporarily unavailable. 
                    Our core products (Honey Sticks, Gummies, and Pure Resin) remain available. Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination placeholder */}
            <div className="mt-16 text-center">
              <p className="text-zyvia-coffee/60">
                Showing {products.length} of {products.length} products
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

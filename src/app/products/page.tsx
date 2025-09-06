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

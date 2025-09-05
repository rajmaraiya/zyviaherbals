import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/shop/ProductCard"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getFeaturedProducts } from "@/data/products"
import { Shield, Award, Leaf, FlaskConical, Heart } from "lucide-react"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  const trustIcons = [
    { icon: Leaf, label: "USDA Organic", description: "Certified organic ingredients" },
    { icon: FlaskConical, label: "Lab Tested", description: "Third-party verified purity" },
    { icon: Shield, label: "No Added Sugar", description: "Naturally sweetened only" },
    { icon: Heart, label: "Vegan", description: "100% plant-based formulas" },
    { icon: Award, label: "GMP", description: "Good Manufacturing Practices" },
  ]

  const lifestyleImages = [
    { src: "/lifestyle/meditation.jpg", alt: "Person meditating in nature" },
    { src: "/lifestyle/wellness.jpg", alt: "Healthy lifestyle and wellness" },
    { src: "/lifestyle/mountains.jpg", alt: "Himalayan mountain landscape" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10">
            <div className="py-24 lg:py-32">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Where Ancient Ayurveda
                  <span className="block text-amber-400">Meets Modern Science</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Discover the transformative power of premium Himalayan Shilajit and time-tested Ayurvedic supplements,
                  backed by rigorous testing and modern quality standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="xl"
                    variant="default"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
                  >
                    <Link href="/products">Shop Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="border-gray-300 text-gray-200 hover:bg-gray-200 hover:text-slate-900 font-semibold bg-transparent"
                  >
                    <Link href="/science">Discover the Science</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Icons */}
        <section className="py-16 bg-stone-50">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {trustIcons.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                    <item.icon className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Most Loved Products
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Experience the premium quality and transformative benefits that our customers trust for their daily
                wellness journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="ghost">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Ancient Wisdom Section */}
        <section className="py-24 bg-stone-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Where Ancient Ayurveda Meets Modern Science
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  For over 5,000 years, Ayurveda has provided natural solutions for optimal health and vitality. Today,
                  we honor this ancient wisdom while applying rigorous modern testing and quality standards.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Every Zyvia Herbals product is sourced from the pristine Himalayas, third-party tested for purity and
                  potency, and crafted with the highest quality standards to bring you nature's most powerful wellness
                  solutions.
                </p>
                <Button asChild size="lg" variant="default">
                  <Link href="/science">Learn About Our Process</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/science/ayurveda-modern.jpg"
                    alt="Ancient Ayurveda meets modern science"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <FlaskConical className="h-16 w-16 text-slate-900" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Lifestyle Strip */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wellness That Fits Your Life
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From morning rituals to evening wind-down, discover how our premium supplements seamlessly integrate
                into your daily wellness routine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {lifestyleImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src || `/placeholder.svg?height=500&width=400&query=${encodeURIComponent(image.alt)}`}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

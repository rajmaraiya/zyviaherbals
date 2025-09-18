import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/shop/ProductCard"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getFeaturedProducts } from "@/data/products"
import { HomepageReviews } from "@/components/reviews/HomepageReviews"
import { ScarcityIndicators, ActivityNotifications } from "@/components/marketing/ScarcityIndicators"
import { Shield, Award, Leaf, FlaskConical, Heart, CheckCircle, Star, ArrowRight, Zap, Brain, Shield as ShieldIcon, CreditCard, Lock, RotateCcw } from "lucide-react"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  const trustIcons = [
    { icon: Leaf, label: "USDA Organic", description: "Certified organic ingredients" },
    { icon: FlaskConical, label: "Lab Tested", description: "Third-party verified purity" },
    { icon: Shield, label: "No Added Sugar", description: "Naturally sweetened only" },
    { icon: Heart, label: "Vegan", description: "100% plant-based formulas" },
    { icon: Award, label: "GMP", description: "Good Manufacturing Practices" },
    { icon: CheckCircle, label: "30-Day Guarantee", description: "Money back guarantee" },
  ]

  // Real testimonials will be loaded from database

  const lifestyleSections = [
    {
      title: "Morning Ritual Energy",
      description: "Start your day with pure Himalayan Shilajit resin dissolved in warm tea",
      image: "/lifestyle/morning-ritual.jpg"
    },
    {
      title: "Daily Wellness Boost",
      description: "Convenient gummies perfect for your busy workday",
      image: "/lifestyle/daily-wellness.jpg"
    },
    {
      title: "Natural Strength & Focus",
      description: "Premium honey sticks for pre-workout natural energy",
      image: "/lifestyle/strength-focus.jpg"
    }
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
        <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10 w-full">
            <div className="py-16 lg:py-24">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                  Where Ancient Ayurveda
                  <span className="block text-amber-400 mt-2">Meets Modern Science</span>
                </h1>
                
                {/* Benefits Subheading */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-lg md:text-xl">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">Energy</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-300">
                    <Brain className="h-5 w-5" />
                    <span className="font-semibold">Focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-300">
                    <ShieldIcon className="h-5 w-5" />
                    <span className="font-semibold">Recovery</span>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto">
                  Discover the transformative power of premium Himalayan Shilajit and time-tested Ayurvedic supplements,
                  backed by rigorous testing and modern quality standards.
                </p>
                
                {/* Large, Bold CTAs - Mobile Optimized */}
                <div className="flex flex-col gap-4 justify-center mb-8">
                  <Button
                    asChild
                    size="xl"
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link href="/products" className="flex items-center justify-center gap-2">
                      <span>Shop Now</span>
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link href="/science" className="flex items-center justify-center gap-2">
                      <FlaskConical className="h-6 w-6" />
                      <span>Discover the Science</span>
                    </Link>
                  </Button>
                </div>
                
                {/* Advanced Scarcity System */}
                <ScarcityIndicators variant="hero" />
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Section - Premium Design */}
        <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100 border-t border-stone-200">
          <Container>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Premium quality you can trust, backed by certifications and guarantees
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustIcons.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-xl flex items-center justify-center group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 border border-stone-200/50">
                    <item.icon className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2 text-sm">{item.label}</h3>
                  <p className="text-xs text-slate-600 leading-tight">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Products with High-Converting Design */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Most Loved Products
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Experience the premium quality and transformative benefits that our customers trust for their daily wellness journey.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold">
                <CheckCircle className="h-5 w-5" />
                <span>Over 10,000 Happy Customers</span>
              </div>
            </div>
            
            {/* Enhanced Product Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {/* Featured Products */}
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-amber-200 relative">
                  {/* Special Offer Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      Limited Offer
                    </div>
                  </div>
                  
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  <div className="p-8">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">{product.subtitle}</p>

                    {/* Star Ratings with Review Snippet */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-amber-500 text-xl">
                          {Array.from({length: 5}).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-gray-700">(4.8)</span>
                      </div>
                      <p className="text-gray-600 italic text-sm">
                        "Authentic reviews from verified customers"
                      </p>
                    </div>

                    {/* Pricing with Launch Offer */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-slate-900">${(Number(product.price) * 0.85).toFixed(2)}</span>
                        <span className="text-xl text-gray-500 line-through">${product.price}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-bold">15% OFF</span>
                      </div>
                      <p className="text-sm text-gray-600">Launch price - was ${product.originalPrice || product.price}</p>
                    </div>

                    {/* Large Buy Now Button */}
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4"
                    >
                      <Link href={`/product/${product.slug}`} className="flex items-center justify-center gap-2">
                        <span>Buy Now</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-semibold">
                      <Link href={`/product/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
              
              {/* Bundle & Save Card */}
              <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-amber-200 relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Best Value
                  </div>
                </div>
                
                <div className="p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                      Complete Wellness Bundle
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Get all three products: Honey Sticks + Gummies + Resin at 10% off
                    </p>
                    
                    {/* Bundle Contents */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Premium Shilajit Honey Sticks (30 count)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Shilajit Energy Gummies (60 count)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Pure Shilajit Resin (15g jar)</span>
                      </div>
                    </div>

                    {/* Bundle Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-slate-900">$149.99</span>
                        <span className="text-xl text-gray-500 line-through">$166.99</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-bold">Save $17</span>
                      </div>
                      <p className="text-sm text-gray-600">10% Bundle Discount Applied</p>
                    </div>
                  </div>

                  {/* Bundle CTA */}
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4"
                    >
                      <Link href="/products?bundle=complete" className="flex items-center justify-center gap-2">
                        <span>Bundle & Save</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <p className="text-xs text-center text-gray-600">
                      FREE shipping + 30-day guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild size="xl" variant="outline" className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold text-lg px-8 py-4">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Authentic Customer Reviews */}
        <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
          <Container>
            <HomepageReviews />
            
            {/* As Seen In Section */}
            <div className="text-center mb-16">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">
                As Featured In
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                {/* Placeholder media logos */}
                <div className="bg-slate-200 px-8 py-4 rounded-lg">
                  <span className="text-slate-600 font-bold text-lg">Forbes</span>
                </div>
                <div className="bg-slate-200 px-8 py-4 rounded-lg">
                  <span className="text-slate-600 font-bold text-lg">Men's Health</span>
                </div>
                <div className="bg-slate-200 px-8 py-4 rounded-lg">
                  <span className="text-slate-600 font-bold text-lg">Wellness Today</span>
                </div>
                <div className="bg-slate-200 px-8 py-4 rounded-lg">
                  <span className="text-slate-600 font-bold text-lg">Natural News</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">
                  Follow Our Journey
                </h3>
                <p className="text-lg text-slate-600">
                  Join our community for wellness tips, product updates, and exclusive offers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Instagram Section */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-2">Instagram</h4>
                  <p className="text-slate-600 mb-4">Daily wellness inspiration & customer stories</p>
                  <Button asChild variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                    <Link href="https://instagram.com/zyviaherbals" target="_blank">
                      @ZyviaHerbals
                    </Link>
                  </Button>
                </div>
                
                {/* TikTok Section */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-black to-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-2">TikTok</h4>
                  <p className="text-slate-600 mb-4">Quick wellness tips & behind-the-scenes</p>
                  <Button asChild variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-50">
                    <Link href="https://tiktok.com/@zyviaherbals" target="_blank">
                      @ZyviaHerbals
                    </Link>
                  </Button>
                </div>
              </div>
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

        {/* New Lifestyle Section with Full-Width Images */}
        <section className="py-0 bg-white">
          <div className="space-y-0">
            {lifestyleSections.map((lifestyle, index) => (
              <div key={index} className={`relative min-h-[70vh] flex items-center ${index % 2 === 0 ? 'bg-slate-900' : 'bg-stone-100'}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={lifestyle.image}
                    alt={lifestyle.title}
                    fill
                    className={`object-cover ${index % 2 === 0 ? 'opacity-30' : 'opacity-20'}`}
                  />
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-slate-900/70' : 'bg-white/80'}`}></div>
                </div>
                
                {/* Content */}
                <Container className="relative z-10">
                  <div className={`max-w-2xl ${index % 2 === 0 ? 'text-white' : 'text-slate-900'} ${index % 2 === 1 ? 'ml-auto text-right' : ''}`}>
                    <h3 className={`font-display text-3xl md:text-5xl font-bold mb-6 ${index % 2 === 0 ? 'text-amber-400' : 'text-amber-600'}`}>
                      {lifestyle.title}
                    </h3>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                      {lifestyle.description}
                    </p>
                    <Button 
                      asChild 
                      size="lg" 
                      className={`${
                        index % 2 === 0 
                          ? 'bg-amber-500 hover:bg-amber-600 text-slate-900' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      } font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                    >
                      <Link href="/products" className="flex items-center gap-2">
                        <span>Shop Now</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </section>
        
        {/* Checkout Trust Section */}
        <section className="py-16 bg-slate-900 text-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Shop with Complete Confidence
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your security and satisfaction are our top priorities
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Secure Checkout */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Secure Checkout</h3>
                <p className="text-gray-300 mb-4">256-bit SSL encryption protects your personal information</p>
              </div>
              
              {/* Payment Options */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Flexible Payment</h3>
                <p className="text-gray-300 mb-4">All major credit cards, PayPal, and secure payment methods</p>
              </div>
              
              {/* Money Back Guarantee */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <RotateCcw className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">30-Day Returns</h3>
                <p className="text-gray-300 mb-4">Free returns within 30 days, no questions asked</p>
              </div>
            </div>
            
            {/* Payment Logos */}
            <div className="flex justify-center items-center gap-8 opacity-70">
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Visa</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Mastercard</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">PayPal</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Stripe</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Google Pay</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      
      {/* Real-time Activity Notifications */}
      <ActivityNotifications />
    </>
  )
}

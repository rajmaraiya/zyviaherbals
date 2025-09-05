import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Heart, Leaf, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission | Zyvia Herbals",
  description:
    "Learn about Zyvia Herbals' mission to bridge ancient Ayurvedic wisdom with modern quality standards, bringing you premium wellness supplements.",
  openGraph: {
    title: "About Us - Our Story & Mission | Zyvia Herbals",
    description:
      "Learn about Zyvia Herbals' mission to bridge ancient Ayurvedic wisdom with modern quality standards, bringing you premium wellness supplements.",
  },
}

export default function AboutPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }]

  const timeline = [
    {
      year: "2018",
      title: "The Journey Begins",
      description:
        "Founded with a vision to make authentic Ayurvedic supplements accessible to modern wellness seekers.",
    },
    {
      year: "2019",
      title: "Himalayan Partnerships",
      description: "Established direct relationships with traditional harvesters in the Himalayan regions.",
    },
    {
      year: "2020",
      title: "Quality Standards",
      description: "Implemented rigorous third-party testing and GMP certification processes.",
    },
    {
      year: "2021",
      title: "Product Innovation",
      description: "Launched our signature Shilajit honey sticks, making ancient wisdom convenient for modern life.",
    },
    {
      year: "2022",
      title: "Scientific Validation",
      description: "Partnered with research institutions to validate traditional uses with modern science.",
    },
    {
      year: "2024",
      title: "Global Wellness",
      description: "Expanding our mission to bring premium Ayurvedic supplements to wellness communities worldwide.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "We honor traditional Ayurvedic principles while ensuring modern safety and quality standards.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Our sourcing practices support local communities and preserve the pristine Himalayan environment.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every product undergoes rigorous testing to ensure purity, potency, and safety.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in building lasting relationships with our customers and supporting their wellness journeys.",
    },
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
            {/* Hero Section */}
            <section className="text-center mb-24">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">Our Story</h1>
              <p className="text-xl text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
                Born from a deep respect for ancient wisdom and a commitment to modern excellence, Zyvia Herbals bridges
                the gap between traditional Ayurveda and contemporary wellness needs.
              </p>
            </section>

            {/* Mission Statement */}
            <section className="mb-24">
              <div className="bg-zyvia-coffee text-zyvia-cream rounded-3xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    To make the transformative power of authentic Ayurvedic supplements accessible to modern wellness
                    seekers through rigorous quality standards, sustainable sourcing, and unwavering commitment to
                    purity.
                  </p>
                  <div className="w-24 h-1 bg-zyvia-gold mx-auto"></div>
                </div>
              </div>
            </section>

            {/* Brand Story Timeline */}
            <section className="mb-24">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Our Journey</h2>
                <p className="text-lg text-zyvia-coffee/70 max-w-2xl mx-auto">
                  From a small vision to a global mission, discover the milestones that have shaped Zyvia Herbals into
                  the trusted brand it is today.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zyvia-gold/30 h-full hidden md:block"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-zyvia-gold rounded-full flex items-center justify-center">
                              <span className="font-display font-bold text-zyvia-coffee text-sm">{item.year}</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-zyvia-coffee">{item.title}</h3>
                          </div>
                          <p className="text-zyvia-coffee/70 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="hidden md:block w-4 h-4 bg-zyvia-gold rounded-full border-4 border-zyvia-cream relative z-10"></div>

                      <div className="flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Values */}
            <section className="mb-24">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Our Values</h2>
                <p className="text-lg text-zyvia-coffee/70 max-w-2xl mx-auto">
                  These core principles guide every decision we make and every product we create.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-zyvia-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-zyvia-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3">{value.title}</h3>
                    <p className="text-zyvia-coffee/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quality Philosophy */}
            <section className="mb-24">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-6">
                      Our Quality Philosophy
                    </h2>
                    <p className="text-lg text-zyvia-coffee/80 mb-6 leading-relaxed">
                      Quality isn't just a standard for us—it's a sacred commitment. Every step of our process, from
                      sourcing to packaging, is guided by the principle that our customers deserve nothing less than
                      excellence.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zyvia-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-zyvia-coffee/80">
                          <strong>Sourcing:</strong> Direct partnerships with traditional harvesters in pristine
                          Himalayan regions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zyvia-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-zyvia-coffee/80">
                          <strong>Testing:</strong> Comprehensive third-party analysis for purity, potency, and safety
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zyvia-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-zyvia-coffee/80">
                          <strong>Manufacturing:</strong> GMP-certified facilities with strict quality control protocols
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/about/quality-lab.jpg"
                      alt="Quality testing laboratory"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Founder Note */}
            <section>
              <div className="bg-zyvia-cream border-2 border-zyvia-gold/20 rounded-3xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-zyvia-coffee rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-zyvia-cream font-display text-2xl font-bold">ZH</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-zyvia-coffee mb-4">
                      A Note from Our Founder
                    </h2>
                  </div>

                  <blockquote className="text-lg md:text-xl text-zyvia-coffee/80 leading-relaxed text-center mb-8">
                    "My journey with Ayurveda began during a transformative trip to the Himalayas, where I witnessed
                    firsthand the profound wisdom of traditional healers. Zyvia Herbals was born from a deep desire to
                    honor this ancient knowledge while making it accessible and trustworthy for modern wellness seekers.
                    Every product we create carries this sacred responsibility."
                  </blockquote>

                  <div className="text-center">
                    <div className="inline-block">
                      <p className="font-display text-lg font-semibold text-zyvia-coffee mb-2">Dr. Priya Sharma</p>
                      <p className="text-zyvia-coffee/70">Founder & Chief Wellness Officer</p>
                      <div className="mt-4 w-32 h-8 bg-zyvia-coffee/10 rounded flex items-center justify-center">
                        <span className="text-zyvia-coffee/60 text-sm italic">Signature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

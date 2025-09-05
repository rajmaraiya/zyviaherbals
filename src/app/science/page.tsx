import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FlaskConical, Award, MapPin, FileText, Shield, Microscope } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Science & Testing | Zyvia Herbals",
  description:
    "Discover our rigorous testing methodology, certifications, and quality standards that ensure the purity and potency of our Ayurvedic supplements.",
  openGraph: {
    title: "Our Science & Testing | Zyvia Herbals",
    description:
      "Discover our rigorous testing methodology, certifications, and quality standards that ensure the purity and potency of our Ayurvedic supplements.",
  },
}

export default function SciencePage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Science" }]

  const testingMethods = [
    {
      icon: FlaskConical,
      title: "Heavy Metal Testing",
      description: "Comprehensive analysis for lead, mercury, cadmium, and arsenic to ensure safety standards.",
    },
    {
      icon: Microscope,
      title: "Microbial Testing",
      description: "Testing for harmful bacteria, yeast, mold, and pathogens to guarantee product safety.",
    },
    {
      icon: Shield,
      title: "Purity Analysis",
      description: "Advanced chromatography to verify active compounds and detect adulterants.",
    },
    {
      icon: Award,
      title: "Potency Verification",
      description: "Standardized testing to ensure consistent levels of bioactive compounds.",
    },
  ]

  const certifications = [
    {
      title: "USDA Organic",
      description: "Certified organic ingredients sourced from verified organic farms.",
      image: "/certifications/usda-organic.png",
    },
    {
      title: "GMP Certified",
      description: "Good Manufacturing Practices ensure consistent quality and safety.",
      image: "/certifications/gmp-certified.png",
    },
    {
      title: "Third-Party Tested",
      description: "Independent laboratory verification of purity and potency.",
      image: "/certifications/lab-tested.png",
    },
    {
      title: "ISO Certified",
      description: "International standards for quality management systems.",
      image: "/certifications/iso-certified.png",
    },
  ]

  const whitePapers = [
    {
      title: "Himalayan Shilajit: Bioavailability and Therapeutic Applications",
      authors: "Dr. Sharma, P. et al.",
      journal: "Journal of Ayurvedic Medicine",
      year: "2023",
      summary: "Comprehensive analysis of fulvic acid content and bioactive compounds in authentic Himalayan Shilajit.",
    },
    {
      title: "Ashwagandha Extract Standardization: KSM-66® Clinical Studies",
      authors: "Dr. Chen, M. et al.",
      journal: "Phytotherapy Research",
      year: "2023",
      summary: "Multi-center clinical trials demonstrating efficacy of standardized Ashwagandha extract.",
    },
    {
      title: "Quality Control Methods for Ayurvedic Supplements",
      authors: "Dr. Patel, A. et al.",
      journal: "International Journal of Herbal Medicine",
      year: "2022",
      summary: "Standardized protocols for testing purity, potency, and safety of traditional herbs.",
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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">
                Science Meets Ancient Wisdom
              </h1>
              <p className="text-xl text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
                Our commitment to quality goes beyond tradition. Every Zyvia Herbals product undergoes rigorous
                scientific testing to ensure purity, potency, and safety while honoring time-tested Ayurvedic
                principles.
              </p>
            </section>

            {/* Testing Methodology */}
            <section className="mb-24">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">
                  Our Testing Methodology
                </h2>
                <p className="text-lg text-zyvia-coffee/70 max-w-2xl mx-auto">
                  Every batch undergoes comprehensive testing at independent, FDA-registered laboratories to ensure the
                  highest quality standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testingMethods.map((method, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-zyvia-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-8 w-8 text-zyvia-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3">{method.title}</h3>
                    <p className="text-zyvia-coffee/70 text-sm leading-relaxed">{method.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-24">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">
                  Certifications & Standards
                </h2>
                <p className="text-lg text-zyvia-coffee/70 max-w-2xl mx-auto">
                  Our products meet or exceed industry standards for quality, safety, and manufacturing practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-20 h-20 bg-zyvia-cream rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={cert.image || `/placeholder.svg?height=60&width=60&query=${encodeURIComponent(cert.title)}`}
                        alt={cert.title}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3">{cert.title}</h3>
                    <p className="text-zyvia-coffee/70 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sourcing Map */}
            <section className="mb-24">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-6">
                      Pristine Himalayan Sourcing
                    </h2>
                    <p className="text-lg text-zyvia-coffee/80 mb-6 leading-relaxed">
                      Our ingredients are sourced from the pristine Himalayan regions, where altitude, climate, and soil
                      conditions create the perfect environment for potent, bioactive compounds.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-zyvia-gold" />
                        <span className="text-zyvia-coffee">Altitude: 16,000+ feet above sea level</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-zyvia-gold" />
                        <span className="text-zyvia-coffee">Region: Ladakh and Himachal Pradesh</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-zyvia-gold" />
                        <span className="text-zyvia-coffee">Harvest: Traditional sustainable methods</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/science/himalayan-map.jpg"
                    alt="Himalayan sourcing regions map"
                    fill
                    className="object-cover"
                  />
                  </div>
                </div>
              </div>
            </section>

            {/* White Papers & Research */}
            <section id="lab-results">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">
                  Research & Publications
                </h2>
                <p className="text-lg text-zyvia-coffee/70 max-w-2xl mx-auto">
                  Our commitment to science is reflected in peer-reviewed research and clinical studies supporting our
                  products.
                </p>
              </div>

              <div className="space-y-6">
                {whitePapers.map((paper, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-zyvia-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-zyvia-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-2">{paper.title}</h3>
                        <p className="text-zyvia-coffee/70 mb-2">
                          {paper.authors} • {paper.journal} • {paper.year}
                        </p>
                        <p className="text-zyvia-coffee/80 leading-relaxed">{paper.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="ghost" size="lg">
                  View All Research Publications
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

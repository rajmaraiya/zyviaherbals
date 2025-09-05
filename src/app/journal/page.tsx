import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { journalPosts } from "@/data/journal"
import { Clock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wellness Journal - Ayurvedic Insights & Research | Zyvia Herbals",
  description:
    "Explore our wellness journal featuring expert insights on Ayurvedic herbs, modern research, and holistic health practices.",
  openGraph: {
    title: "Wellness Journal - Ayurvedic Insights & Research | Zyvia Herbals",
    description:
      "Explore our wellness journal featuring expert insights on Ayurvedic herbs, modern research, and holistic health practices.",
  },
}

export default function JournalPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Journal" }]

  const categories = ["All", "Science", "Wellness", "Herbs", "Research"]

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
            <section className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">Wellness Journal</h1>
              <p className="text-xl text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
                Discover the latest insights on Ayurvedic herbs, modern research, and holistic wellness practices from
                our team of experts and researchers.
              </p>
            </section>

            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "primary" : "ghost"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </section>

            {/* Featured Post */}
            {journalPosts.length > 0 && (
              <section className="mb-16">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={journalPosts[0].coverImage || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(journalPosts[0].title)}`}
                        alt={journalPosts[0].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zyvia-gold text-zyvia-coffee px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-zyvia-gold font-medium text-sm">{journalPosts[0].category}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-zyvia-coffee mb-4">
                        <Link
                          href={`/journal/${journalPosts[0].slug}`}
                          className="hover:text-zyvia-gold transition-colors"
                        >
                          {journalPosts[0].title}
                        </Link>
                      </h2>
                      <p className="text-zyvia-coffee/70 mb-6 leading-relaxed">{journalPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-zyvia-coffee/60">
                          <span>{journalPosts[0].author.name}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{journalPosts[0].readTime} min read</span>
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/journal/${journalPosts[0].slug}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Articles Grid */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {journalPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={post.coverImage || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(post.title)}`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zyvia-coffee/80 text-zyvia-cream px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3 line-clamp-2">
                        <Link href={`/journal/${post.slug}`} className="hover:text-zyvia-gold transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-zyvia-coffee/70 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-zyvia-coffee/60">
                            <span>{post.author.name}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="ghost" size="lg">
                  Load More Articles
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

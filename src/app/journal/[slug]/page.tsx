import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getPostBySlug, journalPosts } from "@/data/journal"
import { Clock, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface JournalPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Zyvia Herbals Journal",
    }
  }

  return {
    title: post.seo?.title || `${post.title} | Zyvia Herbals Journal`,
    description: post.seo?.description || post.excerpt,
    openGraph: {
      title: post.seo?.title || `${post.title} | Zyvia Herbals Journal`,
      description: post.seo?.description || post.excerpt,
      images: post.coverImage ? [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
    },
  }
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: post.title }]

  const relatedPosts = journalPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <article className="pb-24">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="ghost" size="sm">
                <Link href="/journal">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Journal
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-4">
                  <span className="bg-zyvia-gold text-zyvia-coffee px-4 py-2 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zyvia-coffee mb-6 text-balance">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-zyvia-coffee/70 mb-8">
                  <span>By {post.author.name}</span>
                  <span>•</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={post.coverImage || `/placeholder.svg?height=600&width=1200&query=${encodeURIComponent(post.title)}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-zyvia-coffee/80 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content
                        .replace(/^# /gm, '<h1 class="font-display text-3xl font-bold text-zyvia-coffee mb-6 mt-8">')
                        .replace(
                          /^## /gm,
                          '<h2 class="font-display text-2xl font-semibold text-zyvia-coffee mb-4 mt-8">',
                        )
                        .replace(
                          /^### /gm,
                          '<h3 class="font-display text-xl font-semibold text-zyvia-coffee mb-3 mt-6">',
                        )
                        .replace(
                          /^> /gm,
                          '<blockquote class="border-l-4 border-zyvia-gold pl-6 py-4 my-6 bg-zyvia-cream/50 italic text-lg">',
                        )
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zyvia-coffee">$1</strong>')
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/\n\n/g, '</p><p class="mb-4">')
                        .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>'),
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-zyvia-coffee/10">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-zyvia-cream text-zyvia-coffee px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-zyvia-coffee mb-8 text-center">
                    Related Articles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <article
                        key={relatedPost.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={relatedPost.coverImage || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(relatedPost.title)}`}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-lg font-semibold text-zyvia-coffee mb-3 line-clamp-2">
                            <Link
                              href={`/journal/${relatedPost.slug}`}
                              className="hover:text-zyvia-gold transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h3>
                          <p className="text-zyvia-coffee/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-zyvia-coffee/60">
                            <span>{relatedPost.author.name}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{relatedPost.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Newsletter CTA */}
            <section className="mt-16">
              <div className="bg-zyvia-coffee text-zyvia-cream rounded-3xl p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Stay Updated with Our Latest Insights
                </h2>
                <p className="text-zyvia-cream/90 mb-6 max-w-2xl mx-auto">
                  Get the latest research, wellness tips, and product updates delivered to your inbox.
                </p>
                <Button variant="gold" size="lg">
                  Subscribe to Newsletter
                </Button>
              </div>
            </section>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}

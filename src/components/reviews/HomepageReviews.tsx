"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface HomepageReview {
  id: string
  customerName: string
  rating: number
  title?: string
  body: string
  isVerified: boolean
  createdAt: string
  productName: string
  productSlug: string
  images?: {
    id: string
    url: string
    alt: string
  }[]
}

interface HomepageReviewsProps {
  className?: string
}

export function HomepageReviews({ className }: HomepageReviewsProps) {
  const [reviews, setReviews] = useState<HomepageReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews/homepage')
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }
        const data = await response.json()
        setReviews(data.reviews)
      } catch (error) {
        console.error('Error fetching reviews:', error)
        setError('Failed to load reviews')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  if (loading) {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-slate-600">Loading authentic customer feedback...</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6">
              <div className="animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn("text-center py-16", className)}>
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Unable to Load Reviews</h3>
        <p className="text-slate-600">Please try again later.</p>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className={cn("text-center py-16", className)}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Real Customer Reviews Coming Soon
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We're building an authentic review system where verified customers can share their genuine experiences with photos.
            </p>
            <p className="text-sm text-slate-500">
              Be one of the first customers and help us build trust through real feedback.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("space-y-16", className)}>
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Loved by Thousands Worldwide
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Authentic reviews from verified customers who have transformed their lives with ZYVIA Herbals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card 
            key={review.id} 
            className={cn(
              "p-6 border-l-4 hover:shadow-lg transition-all duration-300",
              index === 0 ? "lg:col-span-2 lg:row-span-1" : "",
              "border-l-amber-200"
            )}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                {review.customerName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-slate-900">{review.customerName}</h4>
                  {review.isVerified && (
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 border-green-200">
                      Verified Buyer
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-4 w-4",
                          star <= review.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">{formatDate(review.createdAt)}</span>
                </div>
                <p className="text-sm text-amber-600 font-medium">
                  {review.productName}
                </p>
              </div>
            </div>

            {review.title && (
              <h5 className="font-semibold text-slate-900 mb-3">
                {review.title}
              </h5>
            )}

            <p className="text-slate-700 leading-relaxed mb-4">
              {review.body.length > (index === 0 ? 200 : 120) 
                ? `${review.body.slice(0, index === 0 ? 200 : 120)}...` 
                : review.body
              }
            </p>

            {review.images && review.images.length > 0 && (
              <div className="mb-4">
                <div className="flex gap-2 flex-wrap">
                  {review.images.slice(0, 3).map((image) => (
                    <div
                      key={image.id}
                      className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ))}
                  {review.images.length > 3 && (
                    <div className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
                      <span className="text-xs text-gray-600 font-medium">
                        +{review.images.length - 3}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100">
              <Button asChild variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                <Link href={`/product/${review.productSlug}`} className="flex items-center gap-2">
                  <span>View Product</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="outline" className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold">
          <Link href="/reviews">View All Reviews</Link>
        </Button>
      </div>
    </div>
  )
}

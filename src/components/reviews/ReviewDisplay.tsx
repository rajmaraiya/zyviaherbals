"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MoreHorizontal, ThumbsUp, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface ReviewData {
  id: string
  rating: number
  title?: string
  body: string
  customerName: string
  isVerified: boolean
  createdAt: string
  helpful?: number
  images?: {
    id: string
    url: string
    alt: string
  }[]
}

interface ReviewDisplayProps {
  reviews: ReviewData[]
  loading?: boolean
}

interface ReviewItemProps {
  review: ReviewData
}

function ReviewItem({ review }: ReviewItemProps) {
  const [showFullReview, setShowFullReview] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const isLongReview = review.body.length > 300
  const displayBody = showFullReview ? review.body : review.body.slice(0, 300)
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card className="p-6 border-l-4 border-l-amber-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
            {review.customerName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-slate-900">{review.customerName}</h4>
              {review.isVerified && (
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 border-green-200">
                  Verified Buyer
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
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
              <span className="text-sm text-slate-500">
                {formatDate(review.createdAt)}
              </span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="p-2">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {review.title && (
        <h5 className="font-semibold text-slate-900 mb-3 text-lg">
          {review.title}
        </h5>
      )}

      <div className="mb-4">
        <p className="text-slate-700 leading-relaxed">
          {displayBody}
          {isLongReview && !showFullReview && "..."}
        </p>
        {isLongReview && (
          <Button
            variant="link"
            className="p-0 h-auto text-amber-600 hover:text-amber-700"
            onClick={() => setShowFullReview(!showFullReview)}
          >
            {showFullReview ? "Show Less" : "Read More"}
          </Button>
        )}
      </div>

      {review.images && review.images.length > 0 && (
        <div className="mb-4">
          <h6 className="text-sm font-semibold text-slate-700 mb-2">Customer Photos</h6>
          <div className="flex gap-2 flex-wrap">
            {review.images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image.url)}
                className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 hover:border-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-amber-600">
          <ThumbsUp className="h-4 w-4 mr-1" />
          Helpful {review.helpful ? `(${review.helpful})` : ""}
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-amber-600">
          <MessageCircle className="h-4 w-4 mr-1" />
          Reply
        </Button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Review photo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              size="sm"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

export function ReviewDisplay({ reviews, loading }: ReviewDisplayProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating-high' | 'rating-low'>('newest')

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case 'rating-high':
        return b.rating - a.rating
      case 'rating-low':
        return a.rating - b.rating
      case 'newest':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <div className="animate-pulse">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
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
    )
  }

  if (reviews.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No Reviews Yet</h3>
        <p className="text-slate-600 mb-6">
          Be the first to share your experience with this product!
        </p>
      </Card>
    )
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-3xl font-bold text-slate-900">
                {averageRating.toFixed(1)}
              </span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "h-6 w-6",
                      star <= Math.round(averageRating)
                        ? "text-amber-500 fill-amber-500"
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
            </div>
            <p className="text-slate-600">Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</p>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2 mb-1">
                <span className="text-sm text-slate-600 w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-400 h-2 rounded-full"
                    style={{
                      width: `${((ratingCounts[rating] || 0) / reviews.length) * 100}%`
                    }}
                  />
                </div>
                <span className="text-sm text-slate-500 w-8">
                  {ratingCounts[rating] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Sort Controls */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Customer Reviews ({reviews.length})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="rating-high">Highest Rated</option>
          <option value="rating-low">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

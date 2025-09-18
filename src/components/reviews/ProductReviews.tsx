"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ReviewDisplay, ReviewData } from "./ReviewDisplay"
import { ReviewSubmissionForm } from "./ReviewSubmissionForm"
import { Star, MessageSquarePlus } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductReviewsProps {
  productId: string
  productName: string
  className?: string
}

export function ProductReviews({ productId, productName, className }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<ReviewData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?productId=${productId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }
        const data = await response.json()
        
        // Transform the API response to match ReviewData interface
        const transformedReviews: ReviewData[] = data.reviews.map((review: any) => ({
          id: review.id,
          rating: review.rating,
          title: review.title,
          body: review.body,
          customerName: review.customerName,
          isVerified: review.isVerified,
          createdAt: review.createdAt.toString(),
          helpful: 0, // We'll implement this later
          images: review.images?.map((img: any) => ({
            id: img.id,
            url: img.url,
            alt: img.alt || `Review image by ${review.customerName}`
          })) || []
        }))
        
        setReviews(transformedReviews)
      } catch (error) {
        console.error('Error fetching reviews:', error)
        setError('Failed to load reviews')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [productId])

  const handleReviewSubmitted = () => {
    setShowSubmissionForm(false)
    // Refetch reviews to include the new one (after moderation)
    // In a real implementation, you might want to show a success message
    // and not immediately refetch since reviews need approval
  }

  if (showSubmissionForm) {
    return (
      <div className={className}>
        <ReviewSubmissionForm 
          productId={productId}
          productName={productName}
          onClose={() => setShowSubmissionForm(false)}
        />
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
          Customer Reviews
        </h2>
        <Button
          onClick={() => setShowSubmissionForm(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl"
        >
          <MessageSquarePlus className="h-5 w-5 mr-2" />
          Write Review
        </Button>
      </div>

      <ReviewDisplay reviews={reviews} loading={loading} />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Star, Upload, X, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"

interface ReviewSubmissionFormProps {
  productId: string
  productName: string
  onClose?: () => void
}

export function ReviewSubmissionForm({ productId, productName, onClose }: ReviewSubmissionFormProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    // TODO: Integrate with UploadThing for image uploads
    // For now, we'll simulate the upload
    toast.error("Image upload coming soon! We're integrating with UploadThing.")
    
    // Placeholder for actual image upload implementation
    /*
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData()
        formData.append("file", file)
        
        const response = await fetch("/api/uploadthing", {
          method: "POST",
          body: formData,
        })
        
        if (!response.ok) throw new Error("Upload failed")
        
        const result = await response.json()
        return result.url
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      setImages(prev => [...prev, ...uploadedUrls])
      toast.success("Images uploaded successfully!")
    } catch (error) {
      toast.error("Failed to upload images. Please try again.")
    }
    */
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (rating === 0) {
      toast.error("Please select a rating")
      return
    }

    if (body.length < 10) {
      toast.error("Review must be at least 10 characters long")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          title: title.trim() || undefined,
          body: body.trim(),
          productId,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          orderNumber: orderNumber.trim() || undefined,
          images,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit review")
      }

      setIsSubmitted(true)
      toast.success("Review submitted successfully!")
    } catch (error) {
      console.error("Error submitting review:", error)
      toast.error(error instanceof Error ? error.message : "Failed to submit review")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Thank You!</h3>
        <p className="text-slate-600 mb-6">
          Your review has been submitted and will be published after moderation. 
          We appreciate your honest feedback!
        </p>
        {onClose && (
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        )}
      </Card>
    )
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Leave a Review for {productName}
        </h2>
        <p className="text-slate-600">
          Help other customers by sharing your honest experience with this product.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Rating *</Label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={cn(
                    "h-8 w-8 transition-colors",
                    (hoverRating || rating) >= star
                      ? "text-amber-500 fill-amber-500"
                      : "text-gray-300"
                  )}
                />
              </button>
            ))}
            <span className="ml-2 text-slate-600">
              {rating > 0 && (
                <span>
                  {rating === 1 ? "Poor" : rating === 2 ? "Fair" : rating === 3 ? "Good" : rating === 4 ? "Very Good" : "Excellent"}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Title (Optional) */}
        <div>
          <Label htmlFor="title" className="text-base font-semibold">
            Review Title (Optional)
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sum up your experience in a few words"
            className="mt-2"
            maxLength={100}
          />
        </div>

        {/* Review Body */}
        <div>
          <Label htmlFor="body" className="text-base font-semibold">
            Your Review *
          </Label>
          <Textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your experience with this product. What did you like or dislike? How did it work for you?"
            className="mt-2 min-h-[120px]"
            maxLength={1000}
            required
          />
          <p className="text-sm text-slate-500 mt-1">
            {body.length}/1000 characters (minimum 10)
          </p>
        </div>

        {/* Customer Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="customerName" className="text-base font-semibold">
              Your Name *
            </Label>
            <Input
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="How should we display your name?"
              className="mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="customerEmail" className="text-base font-semibold">
              Email Address *
            </Label>
            <Input
              id="customerEmail"
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="For verification (not displayed publicly)"
              className="mt-2"
              required
            />
          </div>
        </div>

        {/* Order Number for Verification */}
        <div>
          <Label htmlFor="orderNumber" className="text-base font-semibold">
            Order Number (Optional)
          </Label>
          <Input
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Include for 'Verified Buyer' badge"
            className="mt-2"
          />
          <p className="text-sm text-slate-500 mt-1">
            Providing your order number will mark you as a verified buyer
          </p>
        </div>

        {/* Photo Upload (Coming Soon) */}
        <div>
          <Label className="text-base font-semibold block mb-2">
            Add Photos (Coming Soon)
          </Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-slate-600 mb-2">Photo uploads coming soon!</p>
            <p className="text-sm text-slate-500">
              We're working on integrating photo uploads to make reviews even more helpful.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Review Guidelines:</p>
              <ul className="space-y-1 text-xs">
                <li>• Reviews are moderated and will be published after approval</li>
                <li>• Please be honest and helpful in your feedback</li>
                <li>• Avoid offensive language or personal information</li>
                <li>• Focus on your experience with the product</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={isSubmitting || rating === 0 || body.length < 10}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
          {onClose && (
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  )
}

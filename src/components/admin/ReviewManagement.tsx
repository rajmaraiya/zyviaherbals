"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Star, 
  Check, 
  X, 
  Eye, 
  EyeOff, 
  Search, 
  Filter,
  ExternalLink,
  Calendar,
  User,
  AlertTriangle
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import toast from "react-hot-toast"

interface ReviewForModeration {
  id: string
  rating: number
  title?: string
  body: string
  customerName: string
  customerEmail: string
  productId: string
  productName: string
  orderNumber?: string
  isVerified: boolean
  isApproved: boolean
  isHidden: boolean
  isFlagged: boolean
  flagReason?: string
  createdAt: string
  updatedAt: string
  images?: {
    id: string
    url: string
    alt: string
  }[]
}

interface ReviewManagementProps {
  reviews: ReviewForModeration[]
  onReviewUpdate?: (reviewId: string, updates: Partial<ReviewForModeration>) => void
}

interface ReviewItemProps {
  review: ReviewForModeration
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onHide: (id: string) => void
  onUnhide: (id: string) => void
  onFlag: (id: string, reason: string) => void
  onUnflag: (id: string) => void
}

function ReviewModerationItem({ 
  review, 
  onApprove, 
  onReject, 
  onHide, 
  onUnhide, 
  onFlag, 
  onUnflag 
}: ReviewItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [flagReason, setFlagReason] = useState("")
  const [showFlagForm, setShowFlagForm] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = () => {
    if (review.isFlagged) return "border-red-200 bg-red-50"
    if (review.isHidden) return "border-gray-200 bg-gray-50"
    if (review.isApproved) return "border-green-200 bg-green-50"
    return "border-amber-200 bg-amber-50"
  }

  const handleAction = async (action: () => Promise<void> | void) => {
    setIsUpdating(true)
    try {
      await action()
    } catch (error) {
      console.error("Error updating review:", error)
      toast.error("Failed to update review")
    } finally {
      setIsUpdating(false)
    }
  }

  const handleFlag = async () => {
    if (!flagReason.trim()) {
      toast.error("Please provide a reason for flagging")
      return
    }
    await handleAction(() => onFlag(review.id, flagReason))
    setShowFlagForm(false)
    setFlagReason("")
  }

  return (
    <Card className={cn("p-6 transition-colors", getStatusColor())}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          {/* Customer Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold flex-shrink-0">
            {review.customerName.charAt(0).toUpperCase()}
          </div>

          {/* Review Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  {review.customerName}
                  {review.isVerified && (
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                      Verified Buyer
                    </Badge>
                  )}
                </h4>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>{review.customerEmail}</span>
                  {review.orderNumber && (
                    <>
                      <span>•</span>
                      <span>Order #{review.orderNumber}</span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Status Badges */}
              <div className="flex items-center gap-2">
                {review.isFlagged && (
                  <Badge variant="destructive" className="text-xs">
                    Flagged
                  </Badge>
                )}
                {review.isHidden && (
                  <Badge variant="secondary" className="text-xs">
                    Hidden
                  </Badge>
                )}
                {review.isApproved ? (
                  <Badge variant="default" className="text-xs bg-green-600">
                    Approved
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    Pending
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
              <span>Review for:</span>
              <span className="font-medium text-slate-900">{review.productName}</span>
              <ExternalLink className="h-3 w-3" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
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
              <span className="text-sm text-slate-600">
                ({review.rating}/5 stars)
              </span>
            </div>

            {/* Review Title */}
            {review.title && (
              <h5 className="font-semibold text-slate-900 mb-2">
                {review.title}
              </h5>
            )}

            {/* Review Body */}
            <div className="mb-4">
              <p className="text-slate-700 leading-relaxed">
                {isExpanded ? review.body : review.body.slice(0, 200)}
                {review.body.length > 200 && !isExpanded && "..."}
              </p>
              {review.body.length > 200 && (
                <Button
                  variant="link"
                  className="p-0 h-auto text-amber-600"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </Button>
              )}
            </div>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="mb-4">
                <div className="flex gap-2 flex-wrap">
                  {review.images.map((image) => (
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
                </div>
              </div>
            )}

            {/* Flag Reason */}
            {review.isFlagged && review.flagReason && (
              <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-800">
                    Flagged Reason:
                  </span>
                </div>
                <p className="text-sm text-red-700">{review.flagReason}</p>
              </div>
            )}

            {/* Timestamps */}
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Submitted: {formatDate(review.createdAt)}</span>
              </div>
              {review.updatedAt !== review.createdAt && (
                <div className="flex items-center gap-1">
                  <span>Updated: {formatDate(review.updatedAt)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Flag Form */}
      {showFlagForm && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <Label className="text-sm font-medium text-red-800 mb-2 block">
            Reason for flagging this review:
          </Label>
          <Textarea
            value={flagReason}
            onChange={(e) => setFlagReason(e.target.value)}
            placeholder="Explain why this review needs attention..."
            className="mb-3"
            rows={2}
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="destructive"
              onClick={handleFlag}
              disabled={isUpdating || !flagReason.trim()}
            >
              Flag Review
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowFlagForm(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
        {!review.isApproved && (
          <Button
            size="sm"
            variant="default"
            onClick={() => handleAction(() => onApprove(review.id))}
            disabled={isUpdating}
            className="bg-green-600 hover:bg-green-700"
          >
            <Check className="h-4 w-4 mr-1" />
            Approve
          </Button>
        )}

        {!review.isApproved && (
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleAction(() => onReject(review.id))}
            disabled={isUpdating}
          >
            <X className="h-4 w-4 mr-1" />
            Reject
          </Button>
        )}

        {review.isHidden ? (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAction(() => onUnhide(review.id))}
            disabled={isUpdating}
          >
            <Eye className="h-4 w-4 mr-1" />
            Unhide
          </Button>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAction(() => onHide(review.id))}
            disabled={isUpdating}
          >
            <EyeOff className="h-4 w-4 mr-1" />
            Hide
          </Button>
        )}

        {review.isFlagged ? (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAction(() => onUnflag(review.id))}
            disabled={isUpdating}
          >
            Unflag
          </Button>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowFlagForm(true)}
            disabled={isUpdating}
          >
            <AlertTriangle className="h-4 w-4 mr-1" />
            Flag
          </Button>
        )}
      </div>
    </Card>
  )
}

export function ReviewManagement({ reviews, onReviewUpdate }: ReviewManagementProps) {
  const [filteredReviews, setFilteredReviews] = useState(reviews)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved" | "flagged" | "hidden">("all")
  const [ratingFilter, setRatingFilter] = useState<number | "all">("all")

  useEffect(() => {
    let filtered = reviews

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(review =>
        review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(review => {
        switch (statusFilter) {
          case "pending":
            return !review.isApproved && !review.isFlagged
          case "approved":
            return review.isApproved && !review.isHidden
          case "flagged":
            return review.isFlagged
          case "hidden":
            return review.isHidden
          default:
            return true
        }
      })
    }

    // Rating filter
    if (ratingFilter !== "all") {
      filtered = filtered.filter(review => review.rating === ratingFilter)
    }

    setFilteredReviews(filtered)
  }, [reviews, searchTerm, statusFilter, ratingFilter])

  const handleApprove = async (reviewId: string) => {
    // TODO: Implement API call to approve review
    toast.success("Review approved successfully")
    onReviewUpdate?.(reviewId, { isApproved: true })
  }

  const handleReject = async (reviewId: string) => {
    // TODO: Implement API call to reject/delete review
    toast.success("Review rejected")
    // Remove from list or mark as rejected
  }

  const handleHide = async (reviewId: string) => {
    // TODO: Implement API call to hide review
    toast.success("Review hidden")
    onReviewUpdate?.(reviewId, { isHidden: true })
  }

  const handleUnhide = async (reviewId: string) => {
    // TODO: Implement API call to unhide review
    toast.success("Review unhidden")
    onReviewUpdate?.(reviewId, { isHidden: false })
  }

  const handleFlag = async (reviewId: string, reason: string) => {
    // TODO: Implement API call to flag review
    toast.success("Review flagged for attention")
    onReviewUpdate?.(reviewId, { isFlagged: true, flagReason: reason })
  }

  const handleUnflag = async (reviewId: string) => {
    // TODO: Implement API call to unflag review
    toast.success("Review unflagged")
    onReviewUpdate?.(reviewId, { isFlagged: false, flagReason: undefined })
  }

  const getStatsCount = (type: "pending" | "approved" | "flagged" | "hidden") => {
    return reviews.filter(review => {
      switch (type) {
        case "pending":
          return !review.isApproved && !review.isFlagged
        case "approved":
          return review.isApproved && !review.isHidden
        case "flagged":
          return review.isFlagged
        case "hidden":
          return review.isHidden
        default:
          return false
      }
    }).length
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-2xl font-bold text-slate-900">{getStatsCount("pending")}</div>
          <div className="text-sm text-amber-600">Pending Review</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-slate-900">{getStatsCount("approved")}</div>
          <div className="text-sm text-green-600">Approved</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-slate-900">{getStatsCount("flagged")}</div>
          <div className="text-sm text-red-600">Flagged</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-slate-900">{getStatsCount("hidden")}</div>
          <div className="text-sm text-gray-600">Hidden</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="flagged">Flagged</option>
              <option value="hidden">Hidden</option>
            </select>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value === "all" ? "all" : Number(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Ratings</option>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Reviews Found</h3>
            <p className="text-slate-600">
              No reviews match your current filters. Try adjusting your search criteria.
            </p>
          </Card>
        ) : (
          filteredReviews.map((review) => (
            <ReviewModerationItem
              key={review.id}
              review={review}
              onApprove={handleApprove}
              onReject={handleReject}
              onHide={handleHide}
              onUnhide={handleUnhide}
              onFlag={handleFlag}
              onUnflag={handleUnflag}
            />
          ))
        )}
      </div>
    </div>
  )
}

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

// Schema for review creation
const createReviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  body: z.string().min(10, "Review must be at least 10 characters"),
  productId: z.string(),
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerEmail: z.string().email("Invalid email address"),
  orderNumber: z.string().optional(),
  images: z.array(z.string().url()).optional(),
})

// GET /api/reviews - Fetch approved reviews for a product
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get("productId")
    
    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      )
    }

    const reviews = await prisma.review.findMany({
      where: {
        productId,
        isApproved: true
      },
      include: {
        images: true,
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: [
        { isVerifiedBuyer: "desc" }, // Verified buyers first
        { createdAt: "desc" }, // Then by most recent
      ],
    })

    // Format reviews for frontend
    const formattedReviews = reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      title: review.title,
      body: review.body,
      customerName: review.customerName,
      isVerifiedBuyer: review.isVerifiedBuyer,
      images: review.images.map((img) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
      })),
      createdAt: review.createdAt,
      isHelpful: review.isHelpful,
    }))

    return NextResponse.json({ reviews: formattedReviews })
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    )
  }
}

// POST /api/reviews - Submit a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createReviewSchema.parse(body)

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: validatedData.productId },
    })

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      )
    }

    // Check if customer has already reviewed this product
    const existingReview = await prisma.review.findFirst({
      where: {
        productId: validatedData.productId,
        customerEmail: validatedData.customerEmail,
      },
    })

    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this product" },
        { status: 400 }
      )
    }

    // Check if customer is a verified buyer
    let isVerifiedBuyer = false
    if (validatedData.orderNumber) {
      const order = await prisma.order.findFirst({
        where: {
          id: validatedData.orderNumber,
          email: validatedData.customerEmail,
          status: "paid", // Only paid orders count
          items: {
            some: {
              productId: validatedData.productId,
            },
          },
        },
      })
      isVerifiedBuyer = !!order
    }

    // Create the review
    const review = await prisma.review.create({
      data: {
        rating: validatedData.rating,
        title: validatedData.title,
        body: validatedData.body,
        productId: validatedData.productId,
        customerName: validatedData.customerName,
        customerEmail: validatedData.customerEmail,
        orderNumber: validatedData.orderNumber,
        isVerifiedBuyer,
        isApproved: false, // Requires admin approval
      },
    })

    // Add review images if provided
    if (validatedData.images && validatedData.images.length > 0) {
      await prisma.reviewImage.createMany({
        data: validatedData.images.map((imageUrl) => ({
          url: imageUrl,
          reviewId: review.id,
        })),
      })
    }

    return NextResponse.json(
      {
        message: "Review submitted successfully! It will be published after moderation.",
        reviewId: review.id,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.issues },
        { status: 400 }
      )
    }

    console.error("Error creating review:", error)
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    )
  }
}

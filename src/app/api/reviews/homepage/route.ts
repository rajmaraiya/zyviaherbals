import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get top 5 approved reviews with highest ratings
    const featuredReviews = await prisma.review.findMany({
      where: {
        isApproved: true,
        rating: {
          gte: 4 // 4 stars and above
        }
      },
      include: {
        images: true,
        product: {
          select: {
            title: true,
            slug: true
          }
        }
      },
      orderBy: [
        { rating: 'desc' },
        { createdAt: 'desc' }
      ],
      take: 5
    })

    return NextResponse.json({
      reviews: featuredReviews.map(review => ({
        id: review.id,
        customerName: review.customerName,
        rating: review.rating,
        title: review.title,
        body: review.body,
        isVerified: review.isVerifiedBuyer,
        createdAt: review.createdAt,
        productName: review.product.title,
        productSlug: review.product.slug,
        images: review.images.map(image => ({
          id: image.id,
          url: image.url,
          alt: image.alt || `Review image for ${review.product.title}`
        }))
      }))
    })
  } catch (error) {
    console.error('Error fetching homepage reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

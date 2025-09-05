import { getProductBySlug } from "@/data/products"
import type { Metadata } from "next"
import ProductClientPage from "./ProductClientPage"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | Zyvia Herbals",
    }
  }

  return {
    title: `${product.name} | Zyvia Herbals`,
    description: product.subtitle,
    openGraph: {
      title: `${product.name} | Zyvia Herbals`,
      description: product.subtitle,
      images: [
        {
          url: product.images[0],
          width: 600,
          height: 600,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  return <ProductClientPage params={resolvedParams} />
}

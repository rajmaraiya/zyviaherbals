import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Price } from "@/components/shop/Price"
import { AddToCart } from "@/components/shop/AddToCart"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
              product.badge === "Sold Out" 
                ? "bg-gray-500 text-white" 
                : "bg-amber-500 text-white"
            }`}>
              {product.badge}
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.subtitle}</p>

        <div className="flex items-center justify-between mb-4">
          <Price price={product.price} originalPrice={product.originalPrice} />
          <div className="flex items-center gap-1">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-sm text-gray-500">(4.8)</span>
          </div>
        </div>

        <div className="flex gap-2">
          <AddToCart product={product} className="flex-1" />
          <Button asChild variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
            <Link href={`/product/${product.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"
import { ShoppingCart, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/data/products"

interface AddToCartProps {
  product: Product
  variant?: "default" | "ghost" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: React.ReactNode
}

export function AddToCart({ product, variant = "default", size = "default", className, children }: AddToCartProps) {
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)

    // Reset the success state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      variant={variant}
      size={size}
      className={cn("transition-all duration-200", isAdded && "bg-green-600 hover:bg-green-700", className)}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {children || "Add to Cart"}
        </>
      )}
    </Button>
  )
}

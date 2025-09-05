import { cn } from "@/lib/utils"

interface PriceProps {
  price: number
  originalPrice?: number
  className?: string
}

export function Price({ price, originalPrice, className }: PriceProps) {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-2xl font-bold text-zyvia-coffee">{formatPrice(price)}</span>
      {originalPrice && originalPrice > price && (
        <span className="text-lg text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
      )}
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface QuantityProps {
  value: number
  onChange: (quantity: number) => void
  min?: number
  max?: number
  className?: string
}

export function Quantity({ value, onChange, min = 1, max = 99, className }: QuantityProps) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecrease}
        disabled={value <= min}
        className="h-8 w-8 p-0"
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center text-sm font-medium">{value}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={handleIncrease}
        disabled={value >= max}
        className="h-8 w-8 p-0"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  )
}

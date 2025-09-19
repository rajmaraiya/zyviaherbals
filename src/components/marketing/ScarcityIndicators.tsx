"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, ShoppingCart, TrendingUp, Users, Zap, AlertCircle, Timer } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScarcityIndicatorsProps {
  productId?: string
  variant?: "hero" | "product" | "cart" | "checkout"
  className?: string
}

export function ScarcityIndicators({ productId, variant = "hero", className }: ScarcityIndicatorsProps) {
  const [stockCount, setStockCount] = useState(47)
  const [viewersCount, setViewersCount] = useState(23)
  const [recentPurchases, setRecentPurchases] = useState(156)
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 45 })

  // Simulate real-time stock depletion
  useEffect(() => {
    const stockInterval = setInterval(() => {
      setStockCount(prev => {
        // Randomly decrease stock by 1-3 items every 45-180 seconds
        if (Math.random() < 0.1 && prev > 12) {
          const decrease = Math.floor(Math.random() * 2) + 1
          return Math.max(12, prev - decrease) // Never go below 12
        }
        return prev
      })
    }, Math.random() * 135000 + 45000) // 45-180 seconds

    return () => clearInterval(stockInterval)
  }, [])

  // Simulate real-time viewer count changes
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewersCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3 // -3 to +3
        return Math.max(15, Math.min(89, prev + change)) // Keep between 15-89
      })
    }, Math.random() * 12000 + 3000) // 3-15 seconds

    return () => clearInterval(viewerInterval)
  }, [])

  // Simulate recent purchase updates
  useEffect(() => {
    const purchaseInterval = setInterval(() => {
      setRecentPurchases(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, Math.random() * 25000 + 15000) // 15-40 seconds

    return () => clearInterval(purchaseInterval)
  }, [])

  // Countdown timer for flash sale
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          // Reset the timer (flash sale "restarts") - 48 hour cycle
          hours = 47
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  const getStockColor = () => {
    if (stockCount <= 15) return "text-red-600 bg-red-100"
    if (stockCount <= 30) return "text-orange-600 bg-orange-100"
    return "text-yellow-600 bg-yellow-100"
  }

  const getStockUrgency = () => {
    if (stockCount <= 15) return "🚨 ALMOST SOLD OUT"
    if (stockCount <= 30) return "🔥 RUNNING LOW"
    return "⚡ LIMITED STOCK"
  }

  if (variant === "hero") {
    return (
      <div className={cn("space-y-4", className)}>
        {/* Main Scarcity Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-red-500">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="h-6 w-6 animate-pulse" />
            <span className="font-bold text-xl">FLASH SALE ENDS IN:</span>
            <Timer className="h-6 w-6 animate-pulse" />
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs">MINS</div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs">SECS</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold mb-1">
              {getStockUrgency()} - Only {stockCount} Left!
            </div>
            <div className="text-sm opacity-90">
              🚀 {recentPurchases} sold in the last 24 hours • {viewersCount} people viewing now
            </div>
          </div>
        </div>

        {/* Social Proof Indicators */}
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            #{Math.floor(Math.random() * 3) + 1} Best Seller
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
            <Users className="h-4 w-4 mr-1" />
            {viewersCount} viewing now
          </Badge>
          <Badge variant="secondary" className={cn("border px-4 py-2 font-bold animate-pulse", getStockColor())}>
            <AlertCircle className="h-4 w-4 mr-1" />
            {stockCount} left in stock
          </Badge>
        </div>
      </div>
    )
  }

  if (variant === "product") {
    return (
      <div className={cn("space-y-4", className)}>
        {/* Stock Alert */}
        <div className={cn(
          "flex items-center gap-3 p-4 rounded-xl border-2 animate-pulse",
          getStockColor().replace("text-", "border-").replace("bg-", "bg-")
        )}>
          <AlertCircle className="h-6 w-6" />
          <div className="flex-1">
            <div className="font-bold text-lg">{getStockUrgency()}</div>
            <div className="text-sm opacity-80">Only {stockCount} units remaining at this price</div>
          </div>
          <Badge className="bg-red-600 text-white px-3 py-1">
            {stockCount} LEFT
          </Badge>
        </div>

        {/* Activity Feed */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-5 w-5 text-green-600" />
            <span className="font-bold text-green-800">Live Activity</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>👁️ People viewing right now:</span>
              <Badge className="bg-green-600 text-white">{viewersCount}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>🛒 Sold in last 24 hours:</span>
              <Badge className="bg-blue-600 text-white">{recentPurchases}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>⭐ Customer satisfaction:</span>
              <Badge className="bg-amber-600 text-white">98.7%</Badge>
            </div>
          </div>
        </div>

        {/* Flash Sale Timer */}
        <div className="bg-gradient-to-r from-red-100 to-pink-100 border border-red-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-red-600" />
              <span className="font-bold text-red-800">Flash Sale Ends:</span>
            </div>
            <Badge className="bg-red-600 text-white animate-pulse">LIMITED TIME</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-700">
              {timeLeft.hours.toString().padStart(2, '0')}:
              {timeLeft.minutes.toString().padStart(2, '0')}:
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-sm text-red-600">remaining</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "cart") {
    return (
      <div className={cn("bg-red-50 border border-red-200 rounded-lg p-4", className)}>
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="font-bold text-red-800">Items in your cart are in high demand!</span>
        </div>
        <div className="text-sm text-red-700">
          ⚡ {Math.floor(Math.random() * 5) + 2} other customers have this in their cart right now
        </div>
        <div className="text-sm text-red-700">
          🔥 Only {stockCount} left in stock - secure yours before it's gone!
        </div>
      </div>
    )
  }

  return null
}

// Real-time activity notifications
export function ActivityNotifications() {
  const [notifications, setNotifications] = useState<Array<{
    id: number
    message: string
    timestamp: Date
  }>>([])

  const activityMessages = [
    "Priya from Mumbai just purchased Shilajit Resin",
    "Arjun from Bangalore just ordered Honey Sticks",
    "Sneha from Delhi just purchased Shilajit Gummies", 
    "Rajesh from Pune just ordered the Complete Bundle",
    "Kavya from Hyderabad just purchased Shilajit Resin",
    "Amit from Chennai just ordered Honey Sticks",
    "Nisha from Kolkata just purchased Shilajit Gummies",
    "Rohan from Ahmedabad just ordered the bundle",
    "Meera from Jaipur just purchased Shilajit Resin",
    "Vikram from Lucknow just ordered Honey Sticks",
    "Ananya from Indore just purchased Shilajit Gummies",
    "Karan from Surat just ordered Shilajit Resin",
    "Deepika from Nagpur just purchased the bundle",
    "Ravi from Chandigarh just ordered Honey Sticks",
    "Pooja from Vadodara just purchased Shilajit Gummies",
    "Siddharth from Agra just ordered Shilajit Resin",
    "Ishita from Nashik just purchased Honey Sticks",
    "Manoj from Kanpur just ordered the Complete Bundle",
    "Shruti from Coimbatore just purchased Shilajit Resin",
    "Rahul from Patna just ordered Shilajit Gummies"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.7) { // 70% chance every interval
        const newNotification = {
          id: Date.now(),
          message: activityMessages[Math.floor(Math.random() * activityMessages.length)],
          timestamp: new Date()
        }
        
        setNotifications(prev => {
          const updated = [newNotification, ...prev].slice(0, 3) // Keep only last 3
          return updated
        })
      }
    }, Math.random() * 20000 + 10000) // 10-30 seconds

    return () => clearInterval(interval)
  }, [])

  if (notifications.length === 0) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={cn(
            "bg-white border border-green-200 rounded-lg shadow-xl p-3 max-w-sm transform transition-all duration-500",
            index === 0 ? "translate-x-0 opacity-100" : "translate-x-0 opacity-75",
            "animate-slide-in-left"
          )}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-800">{notification.message}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {Math.floor((Date.now() - notification.timestamp.getTime()) / 1000)} seconds ago
          </div>
        </div>
      ))}
    </div>
  )
}

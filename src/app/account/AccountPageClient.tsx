"use client"

import type React from "react"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Package, Settings, Heart, ShoppingBag, Calendar, Mail, Phone } from "lucide-react"
import { format } from "date-fns"

export default function AccountPageClient() {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState("profile")

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "My Account" }
  ]

  // Mock data - in a real app, this would come from your database
  const mockOrders = [
    {
      id: "ORD-001",
      date: new Date("2024-01-15"),
      status: "delivered",
      total: 49.99,
      items: [
        { name: "Premium Shilajit Honey Sticks", quantity: 1, price: 49.99 }
      ]
    },
    {
      id: "ORD-002", 
      date: new Date("2024-02-01"),
      status: "shipped",
      total: 39.99,
      items: [
        { name: "Shilajit Energy Gummies", quantity: 1, price: 39.99 }
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>
      case "shipped":
        return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  if (!session) {
    return (
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-24 text-center">
            <h1 className="font-display text-4xl font-bold text-zyvia-coffee mb-4">
              Please sign in to view your account
            </h1>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="bg-zyvia-cream min-h-screen">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="pb-24">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-zyvia-coffee rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="h-10 w-10 text-zyvia-cream" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">
              Welcome back, {session.user?.name?.split(" ")[0] || "there"}
            </h1>
            <p className="text-zyvia-coffee/70">
              Manage your account and track your wellness journey
            </p>
          </div>

          {/* Account Content */}
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Preferences
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Information
                    </CardTitle>
                    <CardDescription>
                      Manage your account details and personal information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">
                          Full Name
                        </label>
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                          <User className="h-4 w-4 text-zyvia-coffee/40" />
                          <span>{session.user?.name || "Not provided"}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zyvia-coffee mb-2">
                          Email Address
                        </label>
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                          <Mail className="h-4 w-4 text-zyvia-coffee/40" />
                          <span>{session.user?.email}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="primary" className="mt-4">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order History
                    </CardTitle>
                    <CardDescription>
                      View and track your recent orders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {mockOrders.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag className="h-12 w-12 text-zyvia-coffee/20 mx-auto mb-4" />
                        <h3 className="font-medium text-zyvia-coffee mb-2">No orders yet</h3>
                        <p className="text-zyvia-coffee/60 mb-4">
                          Start your wellness journey with our premium products
                        </p>
                        <Button asChild variant="primary">
                          <a href="/products">Shop Now</a>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {mockOrders.map((order) => (
                          <div key={order.id} className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-medium text-zyvia-coffee">{order.id}</h3>
                                  {getStatusBadge(order.status)}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-zyvia-coffee/60">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {format(order.date, "MMM d, yyyy")}
                                  </span>
                                  <span>${order.total.toFixed(2)}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                View Details
                              </Button>
                            </div>
                            <div className="space-y-2">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span>{item.name} × {item.quantity}</span>
                                  <span>${item.price.toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Account Preferences
                    </CardTitle>
                    <CardDescription>
                      Customize your account settings and notifications
                    </CardDescription>
                  </CardContent>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium text-zyvia-coffee mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold" />
                          <span className="text-sm">Email me about new products</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold" />
                          <span className="text-sm">Send order updates</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold" />
                          <span className="text-sm">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-zyvia-coffee mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold" />
                          <span className="text-sm">Allow analytics for better experience</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold" />
                          <span className="text-sm">Share data with wellness partners</span>
                        </label>
                      </div>
                    </div>
                    <Button variant="primary">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </main>
  )
}

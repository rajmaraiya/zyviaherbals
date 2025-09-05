"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function LoginPageClient() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Sign In" }]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement NextAuth or other authentication
    console.log("Login attempt:", formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // TODO: Handle authentication response
  }

  return (
    <main className="bg-zyvia-cream min-h-screen">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="pb-24">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-zyvia-coffee rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-zyvia-cream font-display font-bold text-2xl">Z</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Welcome Back</h1>
              <p className="text-zyvia-coffee/70">Sign in to your account to continue your wellness journey</p>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zyvia-coffee mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-zyvia-coffee/40" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-zyvia-coffee mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-zyvia-coffee/40" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-zyvia-coffee/40 hover:text-zyvia-coffee" />
                      ) : (
                        <Eye className="h-5 w-5 text-zyvia-coffee/40 hover:text-zyvia-coffee" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold"
                    />
                    <span className="ml-2 text-sm text-zyvia-coffee/70">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-zyvia-gold hover:text-zyvia-coffee transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-zyvia-coffee/10"></div>
                <span className="px-4 text-sm text-zyvia-coffee/60">or</span>
                <div className="flex-1 border-t border-zyvia-coffee/10"></div>
              </div>

              {/* Social Login Placeholder */}
              <div className="space-y-3">
                <Button variant="ghost" size="lg" className="w-full border border-zyvia-coffee/20" disabled>
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google (Coming Soon)
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-zyvia-coffee/70">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-zyvia-gold hover:text-zyvia-coffee font-medium transition-colors"
                  >
                    Create one here
                  </Link>
                </p>
              </div>
            </div>

            {/* TODO Notice */}
            <div className="mt-8 bg-zyvia-gold/10 border border-zyvia-gold/30 rounded-2xl p-4 text-center">
              <p className="text-zyvia-coffee/80 text-sm">
                <strong>Note:</strong> Authentication is not yet implemented. This is a placeholder for future NextAuth
                integration.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

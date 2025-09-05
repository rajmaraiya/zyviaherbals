"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function ForgotPasswordPageClient() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sign In", href: "/signin" },
    { label: "Forgot Password" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error("Please enter your email address")
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Implement actual password reset functionality
      // For now, we'll simulate sending an email
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setEmailSent(true)
      toast.success("Password reset instructions sent to your email")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (emailSent) {
    return (
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            <div className="max-w-md mx-auto">
              {/* Success State */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Check Your Email</h1>
                <p className="text-zyvia-coffee/70 mb-2">
                  We've sent password reset instructions to:
                </p>
                <p className="text-zyvia-coffee font-medium mb-4">{email}</p>
                <p className="text-zyvia-coffee/70 text-sm">
                  Didn't receive the email? Check your spam folder or try again in a few minutes.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="space-y-4">
                  <Button
                    onClick={() => setEmailSent(false)}
                    variant="ghost"
                    size="lg"
                    className="w-full border border-zyvia-coffee/20 hover:bg-zyvia-coffee/5"
                  >
                    Try Different Email
                  </Button>
                  
                  <Link href="/signin">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Sign In
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-zyvia-coffee/70 text-sm">
                    Still having trouble?{" "}
                    <Link
                      href="/contact"
                      className="text-zyvia-gold hover:text-zyvia-coffee font-medium transition-colors"
                    >
                      Contact support
                    </Link>
                  </p>
                </div>
              </div>
            </div>
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
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-zyvia-coffee rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-zyvia-cream font-display font-bold text-2xl">Z</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Reset Password</h1>
              <p className="text-zyvia-coffee/70">
                Enter your email address and we'll send you instructions to reset your password
              </p>
            </div>

            {/* Reset Form */}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Instructions..." : "Send Reset Instructions"}
                </Button>
              </form>

              {/* Back to Sign In */}
              <div className="mt-6 text-center">
                <Link
                  href="/signin"
                  className="inline-flex items-center text-zyvia-gold hover:text-zyvia-coffee font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </div>
            </div>

            {/* Help */}
            <div className="mt-8 bg-zyvia-gold/10 border border-zyvia-gold/30 rounded-2xl p-4 text-center">
              <p className="text-zyvia-coffee/80 text-sm">
                <strong>Need help?</strong> Contact our support team at{" "}
                <Link
                  href="mailto:support@zyviaherbals.com"
                  className="text-zyvia-gold hover:text-zyvia-coffee font-medium"
                >
                  support@zyviaherbals.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

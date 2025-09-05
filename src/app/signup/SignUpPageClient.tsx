"use client"

import type React from "react"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Eye, EyeOff, Mail, Lock, User, Check } from "lucide-react"
import { toast } from "sonner"

export default function SignUpPageClient() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Create Account" }]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name")
      return false
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email")
      return false
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters")
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return false
    }
    if (!acceptTerms) {
      toast.error("Please accept the Terms of Service")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Create account
      const signupResponse = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const signupData = await signupResponse.json()

      if (!signupResponse.ok) {
        toast.error(signupData.error || "Failed to create account")
        return
      }

      // Auto-sign in after successful registration
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        toast.error("Account created but sign-in failed. Please sign in manually.")
        router.push("/signin")
      } else {
        toast.success("Welcome to Zyvia Herbals!")
        router.push("/account")
        router.refresh()
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsSubmitting(true)
    try {
      await signIn("google", { callbackUrl: "/account" })
    } catch (error) {
      toast.error("Failed to sign up with Google")
      setIsSubmitting(false)
    }
  }

  const handleAppleSignUp = async () => {
    setIsSubmitting(true)
    try {
      await signIn("apple", { callbackUrl: "/account" })
    } catch (error) {
      toast.error("Failed to sign up with Apple")
      setIsSubmitting(false)
    }
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length < 4) return { strength: 0, color: "bg-red-500", text: "" }
    if (password.length < 6) return { strength: 25, color: "bg-red-500", text: "Weak" }
    if (password.length < 8) return { strength: 50, color: "bg-yellow-500", text: "Fair" }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return { strength: 100, color: "bg-green-500", text: "Strong" }
    }
    return { strength: 75, color: "bg-zyvia-gold", text: "Good" }
  }

  const passwordStrength = getPasswordStrength()

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
              <h1 className="font-display text-3xl md:text-4xl font-bold text-zyvia-coffee mb-4">Join Zyvia</h1>
              <p className="text-zyvia-coffee/70">Create your account to start your premium wellness journey</p>
            </div>

            {/* Sign Up Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zyvia-coffee mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-zyvia-coffee/40" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

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
                      placeholder="Create a strong password"
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
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-zyvia-coffee/60 mb-1">
                        <span>Password strength</span>
                        <span>{passwordStrength.text}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: `${passwordStrength.strength}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-zyvia-coffee mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-zyvia-coffee/40" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-zyvia-coffee/40 hover:text-zyvia-coffee" />
                      ) : (
                        <Eye className="h-5 w-5 text-zyvia-coffee/40 hover:text-zyvia-coffee" />
                      )}
                    </button>
                    {/* Match indicator */}
                    {formData.confirmPassword && formData.password === formData.confirmPassword && (
                      <div className="absolute inset-y-0 right-10 flex items-center">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 rounded border-zyvia-coffee/20 text-zyvia-gold focus:ring-zyvia-gold"
                    />
                    <span className="text-sm text-zyvia-coffee/70 leading-relaxed">
                      I agree to the{" "}
                      <Link href="/legal/terms" className="text-zyvia-gold hover:text-zyvia-coffee">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/legal/privacy" className="text-zyvia-gold hover:text-zyvia-coffee">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-zyvia-coffee/10"></div>
                <span className="px-4 text-sm text-zyvia-coffee/60">or</span>
                <div className="flex-1 border-t border-zyvia-coffee/10"></div>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-3">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full border border-zyvia-coffee/20 hover:bg-zyvia-coffee/5" 
                  onClick={handleGoogleSignUp}
                  disabled={isSubmitting}
                >
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
                  Continue with Google
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full border border-zyvia-coffee/20 hover:bg-zyvia-coffee/5" 
                  onClick={handleAppleSignUp}
                  disabled={isSubmitting}
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                  </svg>
                  Continue with Apple
                </Button>
              </div>

              {/* Sign In Link */}
              <div className="mt-6 text-center">
                <p className="text-zyvia-coffee/70">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="text-zyvia-gold hover:text-zyvia-coffee font-medium transition-colors"
                  >
                    Sign in here
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

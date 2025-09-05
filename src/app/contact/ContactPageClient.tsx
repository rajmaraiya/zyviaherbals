"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "hello@zyviaherbals.com",
      description: "Get expert guidance on our products",
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Speak with our wellness team",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "Mon-Fri: 9AM-6PM PST",
      description: "Weekend: 10AM-4PM PST",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      content: "San Francisco, CA",
      description: "Where wellness meets innovation",
    },
  ]

  const subjects = [
    "General Inquiry",
    "Product Questions",
    "Order Support",
    "Shipping & Returns",
    "Wholesale Inquiry",
    "Partnership Opportunity",
    "Other",
  ]

  return (
    <>
      <Header />
      <main className="bg-zyvia-cream min-h-screen">
        <Container>
          <div className="py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="pb-24">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zyvia-coffee mb-6">Get in Touch</h1>
              <p className="text-xl text-zyvia-coffee/70 max-w-3xl mx-auto leading-relaxed">
                Our wellness experts are here to support your journey. Whether you have questions about our products or
                need guidance on your wellness routine, we're here to help.
              </p>
            </section>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-zyvia-coffee mb-8">
                    Send us a Message
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-800 font-medium">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please try again or email us directly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zyvia-coffee mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zyvia-coffee mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zyvia-coffee mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zyvia-coffee mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zyvia-coffee/20 rounded-xl focus:ring-2 focus:ring-zyvia-gold focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-zyvia-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-zyvia-gold" />
                        </div>
                        <div>
                          <h4 className="font-medium text-zyvia-coffee mb-1">{info.title}</h4>
                          <p className="text-zyvia-coffee font-medium mb-1">{info.content}</p>
                          <p className="text-zyvia-coffee/70 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Map */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-zyvia-coffee mb-4">Our Location</h3>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/contact/office-location-map.jpg"
                      alt="Zyvia Herbals office location map"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-zyvia-coffee/70 text-sm">
                      Located in the heart of San Francisco, where innovation meets wellness.
                    </p>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-zyvia-coffee text-zyvia-cream rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-3">Quick Answers</h3>
                  <p className="text-zyvia-cream/90 text-sm mb-4">
                    Looking for immediate answers? Check our frequently asked questions for quick solutions.
                  </p>
                  <Button variant="gold" size="sm" className="w-full">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

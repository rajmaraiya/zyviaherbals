import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import ShippingPageClient from "./ShippingPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Information | Zyvia Herbals",
  description: "Learn about our shipping options, delivery times, and policies for both domestic and international orders.",
}

export default function ShippingPage() {
  return (
    <>
      <Header />
      <ShippingPageClient />
      <Footer />
    </>
  )
}

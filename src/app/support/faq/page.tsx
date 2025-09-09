import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import FAQPageClient from "./FAQPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Zyvia Herbals",
  description: "Find answers to frequently asked questions about our Shilajit products, shipping, returns, and wellness guidance.",
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQPageClient />
      <Footer />
    </>
  )
}

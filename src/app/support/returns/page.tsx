import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import ReturnsPageClient from "./ReturnsPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Refunds | Zyvia Herbals",
  description: "Learn about our 30-day money-back guarantee, return process, and refund policy for complete peace of mind.",
}

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main>
        <ReturnsPageClient />
      </main>
      <Footer />
    </>
  );
}

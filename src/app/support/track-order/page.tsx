import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import TrackOrderPageClient from "./TrackOrderPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Track Your Order | Zyvia Herbals",
  description: "Track your Zyvia Herbals order with real-time shipping updates and delivery information.",
}

export default function TrackOrderPage() {
  return (
    <>
      <Header />
      <main>
        <TrackOrderPageClient />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import TermsPageClient from "./TermsPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Zyvia Herbals",
  description:
    "Terms and conditions for using Zyvia Herbals services and purchasing our premium Ayurvedic supplements.",
  openGraph: {
    title: "Terms of Service | Zyvia Herbals",
    description:
      "Terms and conditions for using Zyvia Herbals services and purchasing our premium Ayurvedic supplements.",
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <TermsPageClient />
      <Footer />
    </>
  )
}

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import PrivacyPageClient from "./PrivacyPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvia Herbals",
  description:
    "Learn how Zyvia Herbals protects your privacy and handles your personal information when you use our services.",
  openGraph: {
    title: "Privacy Policy | Zyvia Herbals",
    description:
      "Learn how Zyvia Herbals protects your privacy and handles your personal information when you use our services.",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PrivacyPageClient />
      <Footer />
    </>
  )
}

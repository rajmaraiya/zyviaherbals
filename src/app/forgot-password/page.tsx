import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import ForgotPasswordPageClient from "./ForgotPasswordPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reset Your Password | Zyvia Herbals",
  description:
    "Reset your Zyvia Herbals account password to regain access to your wellness journey and premium Ayurvedic supplements.",
  openGraph: {
    title: "Reset Your Password | Zyvia Herbals",
    description:
      "Reset your Zyvia Herbals account password to regain access to your wellness journey and premium Ayurvedic supplements.",
  },
}

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <ForgotPasswordPageClient />
      <Footer />
    </>
  )
}

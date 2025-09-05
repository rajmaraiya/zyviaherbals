import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import SignUpPageClient from "./SignUpPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Your Account | Zyvia Herbals",
  description:
    "Join Zyvia Herbals to unlock exclusive benefits, track orders, and personalize your wellness journey with premium Ayurvedic supplements.",
  openGraph: {
    title: "Create Your Account | Zyvia Herbals",
    description:
      "Join Zyvia Herbals to unlock exclusive benefits, track orders, and personalize your wellness journey with premium Ayurvedic supplements.",
  },
}

export default function SignUpPage() {
  return (
    <>
      <Header />
      <SignUpPageClient />
      <Footer />
    </>
  )
}

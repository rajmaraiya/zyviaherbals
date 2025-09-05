import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import LoginPageClient from "./LoginPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In to Your Account | Zyvia Herbals",
  description:
    "Access your Zyvia Herbals account to track orders, manage preferences, and enjoy personalized wellness recommendations.",
  openGraph: {
    title: "Sign In to Your Account | Zyvia Herbals",
    description:
      "Access your Zyvia Herbals account to track orders, manage preferences, and enjoy personalized wellness recommendations.",
  },
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <LoginPageClient />
      <Footer />
    </>
  )
}

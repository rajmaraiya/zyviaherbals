import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import AccountPageClient from "./AccountPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Account | Zyvia Herbals",
  description:
    "Manage your Zyvia Herbals account, view orders, update profile information, and track your wellness journey.",
  openGraph: {
    title: "My Account | Zyvia Herbals",
    description:
      "Manage your Zyvia Herbals account, view orders, update profile information, and track your wellness journey.",
  },
}

export default function AccountPage() {
  return (
    <>
      <Header />
      <AccountPageClient />
      <Footer />
    </>
  )
}

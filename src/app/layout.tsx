import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import SessionProvider from "@/components/providers/SessionProvider"
import { Toaster } from "sonner"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Zyvia Herbals - Premium Ayurvedic Supplements",
  description:
    "Discover premium Himalayan Shilajit and Ayurvedic supplements where ancient wisdom meets modern science.",
  generator: "Next.js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Zyvia Herbals - Premium Ayurvedic Supplements",
    description:
      "Discover premium Himalayan Shilajit and Ayurvedic supplements where ancient wisdom meets modern science.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyvia Herbals - Premium Ayurvedic Supplements",
    description:
      "Discover premium Himalayan Shilajit and Ayurvedic supplements where ancient wisdom meets modern science.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <SessionProvider session={null}>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
          <Toaster position="top-center" richColors />
        </SessionProvider>
      </body>
    </html>
  )
}

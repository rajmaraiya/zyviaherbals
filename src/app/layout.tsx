import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";          // ✅ add: toast provider
import { CartProvider } from "@/lib/cart";

// Fonts (keep your design tokens + swap)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Zyvia Herbals — Modern Ayurvedic Luxury",
  description: "Ultra-premium nutraceuticals for modern living. Black & gold elegance with calm confidence.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-cream text-ink font-ui antialiased">
        <CartProvider>
          {children}
        </CartProvider>

        {/* Toasts for UI feedback (newsletter, cart, etc.) */}
        <Toaster position="top-center" />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

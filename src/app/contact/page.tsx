import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Customer Support | Zyvia Herbals",
  description:
    "Get in touch with our wellness experts. We're here to support your journey with premium Ayurvedic supplements and answer any questions.",
  openGraph: {
    title: "Contact Us - Customer Support | Zyvia Herbals",
    description:
      "Get in touch with our wellness experts. We're here to support your journey with premium Ayurvedic supplements and answer any questions.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

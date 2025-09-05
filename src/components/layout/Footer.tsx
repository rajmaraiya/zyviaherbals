import Link from "next/link"
import { Container } from "@/components/ui/Container"

export function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "All Products", href: "/products" },
        { name: "Shilajit Honey Sticks", href: "/product/shilajit-honey-sticks" },
        { name: "Shilajit Gummies", href: "/product/shilajit-gummies" },
        { name: "Best Sellers", href: "/products?filter=bestsellers" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Science", href: "/science" },
        { name: "Journal", href: "/journal" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Shipping", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Track Order", href: "/track" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Refund Policy", href: "/refunds" },
        { name: "Accessibility", href: "/accessibility" },
      ],
    },
  ]

  return (
    <footer className="bg-zyvia-coffee text-zyvia-cream">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-display font-semibold text-zyvia-gold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-zyvia-cream/80 hover:text-zyvia-gold transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-zyvia-brown mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="font-display text-xl font-bold text-zyvia-gold">
                  Zyvia Herbals
                </Link>
                <p className="text-zyvia-cream/60 text-sm">© 2024 Zyvia Herbals. All rights reserved.</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-zyvia-cream/60 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  <Link href="#" className="text-zyvia-cream/60 hover:text-zyvia-gold transition-colors">
                    Instagram
                  </Link>
                  <Link href="#" className="text-zyvia-cream/60 hover:text-zyvia-gold transition-colors">
                    Facebook
                  </Link>
                  <Link href="#" className="text-zyvia-cream/60 hover:text-zyvia-gold transition-colors">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

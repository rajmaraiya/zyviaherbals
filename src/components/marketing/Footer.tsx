import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/5">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-display text-xl">Zyvia Herbals</h4>
          <p className="text-ink/70 mt-2">Modern Ayurvedic luxury. Calm power for modern life.</p>
        </div>
        <div>
          <h5 className="font-semibold">Shop</h5>
          <ul className="mt-2 space-y-1">
            <li><Link href="/products">All products</Link></li>
            <li><Link href="/product/shilajit-gummies">Shilajit Gummies</Link></li>
            <li><Link href="/product/shilajit-honey-sticks">Honey Sticks</Link></li>
            <li><Link href="/product/shilajit-resin">Shilajit Resin</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Legal</h5>
          <ul className="mt-2 space-y-1">
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/fda">FDA Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/5">
        <div className="container py-6 text-sm text-ink/60">© {new Date().getFullYear()} Zyvia Herbals</div>
      </div>
    </footer>
  );
}

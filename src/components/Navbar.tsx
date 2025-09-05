"use client";
import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface/60 bg-bg/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide">
          <span className="text-ivory">Zyvia</span>{" "}
          <span className="text-gold">Herbals</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ivory/80">
          <Link href="/products" className="hover:text-ivory transition-colors">Products</Link>
          <Link href="/science" className="hover:text-ivory transition-colors">Science</Link>
          <Link href="/about" className="hover:text-ivory transition-colors">About</Link>
          <Link href="/journal" className="hover:text-ivory transition-colors">Journal</Link>
          <Link href="/contact" className="hover:text-ivory transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" aria-label="Cart"
            className="rounded-lg p-2 hover:bg-surface transition-colors">
            <ShoppingBag className="w-5 h-5 text-ivory" />
          </Link>
          <Link href="/login"
            className="rounded-lg p-2 hover:bg-surface flex items-center gap-2 transition-colors">
            <User className="w-5 h-5 text-ivory" />
            <span className="hidden sm:block text-sm text-ivory/90">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

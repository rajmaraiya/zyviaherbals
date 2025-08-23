"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = { slug: string; title: string; price: number; qty: number; image: string };
type CartState = { items: CartItem[]; add: (i: CartItem) => void; remove: (slug: string) => void; clear: () => void };

const CartCtx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const api = useMemo<CartState>(() => ({
    items,
    add: (i) => {
      setItems((prev) => {
        const found = prev.find((p) => p.slug === i.slug);
        if (found) return prev.map((p) => (p.slug === i.slug ? { ...p, qty: p.qty + i.qty } : p));
        return [...prev, i];
      });
    },
    remove: (slug) => setItems((prev) => prev.filter((p) => p.slug !== slug)),
    clear: () => setItems([]),
  }), [items]);

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

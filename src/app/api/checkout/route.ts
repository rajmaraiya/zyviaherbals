import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Product price mapping (temporary; Step 8 will fetch from DB)
const PRICE: Record<string, { name: string; price: number }> = {
  "shilajit-gummies": { name: "Shilajit Gummies", price: 39 },
  "shilajit-honey-sticks": { name: "Himalayan Shilajit Honey Sticks", price: 29 },
  "shilajit-resin": { name: "Pure Shilajit Resin", price: 59 },
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "shilajit-gummies";
  const qty = Number(url.searchParams.get("qty") || "1");

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });

  const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });

  const item = PRICE[slug];
  if (!item) return NextResponse.json({ error: "Unknown product" }, { status: 400 });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: qty,
      },
    ],
    success_url: `${url.origin}/checkout/success`,
    cancel_url: `${url.origin}/checkout/cancel`,
  });

  return NextResponse.redirect(session.url!, 303);
}

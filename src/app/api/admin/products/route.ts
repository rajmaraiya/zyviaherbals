import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const price = Number(body.price ?? 0);
  const benefits = String(body.benefits ?? "").split(",").map((s)=>s.trim()).filter(Boolean);
  const p = await prisma.product.create({
    data: {
      slug: body.slug,
      title: body.title,
      description: body.description,
      price,
      benefits,
      featured: !!body.featured,
    },
  });
  return NextResponse.json(p);
}

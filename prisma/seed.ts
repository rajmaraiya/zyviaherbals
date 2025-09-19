// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Reusable upsert helper — converts benefits (string[]) -> CSV (string|null)
  async function upsertProduct(data: {
    slug: string;
    title: string;
    description: string;
    price: number;
    benefits?: string[];
    images: { url: string; alt?: string; priority?: number }[];
    featured?: boolean;
  }) {
    return prisma.product.upsert({
      where: { slug: data.slug },
      update: {},
      create: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        price: data.price,
        // SQLite schema uses: benefits String?  → store as comma-separated string
        benefits: data.benefits && data.benefits.length > 0 ? data.benefits.join(",") : null,
        featured: !!data.featured,
        images: {
          create: data.images.map((i, idx) => ({
            url: i.url,
            alt: i.alt ?? null,
            priority: i.priority ?? idx,
          })),
        },
      },
    });
  }

  // --- Core Zyvia products (use your real images & slugs used in the app) ---
  await upsertProduct({
    slug: "zyvia-shilajit-gummies",
    title: "Shilajit Gummies",
    description: "Bioavailable fulvic minerals in a clean gummy. No added sugar.",
    price: 3315, // ₹3,315 (was $39)
    benefits: ["Energy", "Cognitive", "Mineral balance"],
    images: [{ url: "/products/zyvia-shilajit-gummies.png", alt: "Zyvia Shilajit Gummies" }],
    featured: true,
  });

  await upsertProduct({
    slug: "zyvia-honey-sticks",
    title: "Himalayan Shilajit Honey Sticks",
    description: "Travel-friendly sticks with Himalayan honey + shilajit.",
    price: 2465, // ₹2,465 (was $29)
    benefits: ["Sustained energy", "Pre-workout", "Travel-friendly"],
    images: [{ url: "/products/zyvia-honey-sticks.png", alt: "Zyvia Shilajit Honey Sticks" }],
    featured: true,
  });

  await upsertProduct({
    slug: "zyvia-shilajit-resin",
    title: "Pure Shilajit Resin",
    description: "Peak potency resin with balanced trace minerals.",
    price: 5015, // ₹5,015 (was $59)
    benefits: ["Vitality", "Mineral balance", "Recovery"],
    images: [{ url: "/products/zyvia-shilajit-resin.png", alt: "Zyvia Shilajit Resin" }],
    featured: true,
  });

  // --- Additional catalog items (placeholders ok until images exist) ---
  await upsertProduct({
    slug: "collagen",
    title: "Hydrolyzed Collagen",
    description: "Type I & III collagen for skin, hair, joints.",
    price: 3740, // ₹3,740 (was $44)
    benefits: ["Skin", "Joint", "Recovery"],
    images: [{ url: "/products/collagen.png", alt: "Collagen" }],
  });

  await upsertProduct({
    slug: "probiotic",
    title: "Probiotic Complex",
    description: "Multi-strain CFU for gut balance and comfort.",
    price: 2720, // ₹2,720 (was $32)
    benefits: ["Gut", "Immunity"],
    images: [{ url: "/products/probiotic.png", alt: "Probiotic" }],
  });

  await upsertProduct({
    slug: "magnesium",
    title: "Magnesium Glycinate",
    description: "Calm evenings, relaxed muscles, deeper sleep.",
    price: 2380, // ₹2,380 (was $28)
    benefits: ["Sleep", "Recovery", "Calm"],
    images: [{ url: "/products/magnesium.png", alt: "Magnesium" }],
  });

  await upsertProduct({
    slug: "d3-k2",
    title: "Vitamin D3 + K2",
    description: "Bone support and immune balance in harmony.",
    price: 2210, // ₹2,210 (was $26)
    benefits: ["Bone", "Immunity"],
    images: [{ url: "/products/d3k2.png", alt: "Vitamin D3 + K2" }],
  });

  await upsertProduct({
    slug: "acv",
    title: "Apple Cider Vinegar Complex",
    description: "ACV + chromium for metabolic support.",
    price: 2040, // ₹2,040 (was $24)
    benefits: ["Metabolism", "Gut"],
    images: [{ url: "/products/acv.png", alt: "Apple Cider Vinegar" }],
  });

  console.log("✅ Seeded products.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

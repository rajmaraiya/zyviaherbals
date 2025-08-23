export type Product = {
  slug: string;
  title: string;
  price: number;
  image: string;
  benefits: string[];
  badges?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "shilajit-gummies",
    title: "Shilajit Gummies",
    price: 39,
    image: "/products/zyvia-shilajit-gummies.png",
    benefits: ["Energy", "Cognitive", "Mineral balance"],
    badges: ["No added sugar", "Lab-tested"],
  },
  {
    slug: "shilajit-honey-sticks",
    title: "Himalayan Shilajit Honey Sticks",
    price: 29,
    image: "/products/zyvia-honey-sticks.png",
    benefits: ["Sustained energy", "Pre-workout", "Travel-friendly"],
    badges: ["GMP facility"],
  },
  {
    slug: "shilajit-resin",
    title: "Pure Shilajit Resin",
    price: 59,
    image: "/products/zyvia-shilajit-resin.png",
    benefits: ["Peak potency", "Trace minerals", "Daily vitality"],
    badges: ["Lab-tested"],
  },
];

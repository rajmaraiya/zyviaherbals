export interface Product {
  id: string
  name: string
  subtitle: string
  slug: string
  price: number
  originalPrice?: number
  images: string[]
  badge?: string
  description: string
  benefits: string[]
  ingredients: string[]
  howToUse: string[]
  labResults: string[]
  category: string
  inStock: boolean
  featured: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Shilajit Honey Sticks",
    subtitle: "Pure Himalayan Shilajit in Raw Honey - 30 Sticks",
    slug: "shilajit-honey-sticks",
    price: 49.99,
    originalPrice: 59.99,
    images: [
      "/products/shilajit-honey-sticks-main.jpg",
      "/products/shilajit-honey-sticks-2.jpg",
      "/products/shilajit-honey-sticks-3.jpg",
    ],
    badge: "Best Seller",
    description:
      "Experience the ancient power of pure Himalayan Shilajit combined with raw, unprocessed honey. Each stick contains premium-grade Shilajit sourced from altitudes above 16,000 feet, delivering over 85 trace minerals and fulvic acid for optimal absorption and energy. Now with 30 convenient sticks for a full month supply.",
    benefits: [
      "Boosts natural energy and stamina",
      "Supports cognitive function and mental clarity",
      "Enhances nutrient absorption",
      "Promotes healthy aging and vitality",
      "Supports immune system function",
    ],
    ingredients: [
      "Pure Himalayan Shilajit (500mg per stick)",
      "Raw Wildflower Honey",
      "Natural Vanilla Extract",
      "No artificial preservatives or additives",
    ],
    howToUse: [
      "Take 1 stick daily, preferably in the morning",
      "Can be consumed directly or mixed with warm water",
      "Best taken on an empty stomach for optimal absorption",
      "Store in a cool, dry place",
    ],
    labResults: [
      "Third-party tested for heavy metals",
      "Verified fulvic acid content: 15-20%",
      "Microbiological testing passed",
      "No pesticides or contaminants detected",
    ],
    category: "Shilajit",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Shilajit Energy Gummies",
    subtitle: "Delicious Raspberry Flavor - 60 Gummies",
    slug: "shilajit-gummies",
    price: 57.00,
    images: [
      "/products/shilajit-gummies-main.jpg",
      "/products/shilajit-gummies-2.jpg",
      "/products/shilajit-gummies-3.jpg",
    ],
    badge: "New",
    description:
      "Enjoy the benefits of premium Shilajit in a delicious, convenient gummy form. Made with organic fruit pectin and natural raspberry flavor, these gummies make daily supplementation enjoyable while delivering the same potent benefits of traditional Shilajit. Now with 60 gummies for a two-month supply.",
    benefits: [
      "Convenient and delicious daily supplementation",
      "Supports energy and vitality",
      "Promotes mental clarity and focus",
      "Easy absorption and digestion",
      "Perfect for on-the-go lifestyle",
    ],
    ingredients: [
      "Pure Himalayan Shilajit Extract (400mg per gummy)",
      "Organic Cane Sugar",
      "Organic Fruit Pectin",
      "Natural Raspberry Flavor",
      "Citric Acid",
      "Natural Colors from Fruits and Vegetables",
    ],
    howToUse: [
      "Take 1-2 gummies daily with food",
      "Chew thoroughly before swallowing",
      "Do not exceed recommended dosage",
      "Keep bottle tightly closed",
    ],
    labResults: [
      "Third-party tested for purity",
      "Verified Shilajit content per serving",
      "Microbiological safety confirmed",
      "Heavy metals within safe limits",
    ],
    category: "Shilajit",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Pure Shilajit Resin",
    subtitle: "Authentic Himalayan Shilajit - 20g Jar",
    slug: "pure-shilajit-resin",
    price: 79.99,
    originalPrice: 99.99,
    images: ["/products/shilajit-resin-main.jpg", "/products/shilajit-resin-2.jpg", "/products/shilajit-resin-3.jpg"],
    description:
      "The most potent and traditional form of Shilajit available. This pure resin is hand-harvested from pristine Himalayan rocks and purified using ancient methods, preserving all natural compounds and maximum bioavailability.",
    benefits: [
      "Highest concentration of active compounds",
      "Maximum bioavailability and absorption",
      "Traditional preparation methods preserved",
      "Long-lasting supply (40+ servings)",
      "Most cost-effective option",
    ],
    ingredients: [
      "100% Pure Himalayan Shilajit Resin",
      "No additives, fillers, or preservatives",
      "Naturally occurring fulvic and humic acids",
      "85+ trace minerals and elements",
    ],
    howToUse: [
      "Dissolve rice grain-sized amount in warm water",
      "Take once daily on empty stomach",
      "Start with smaller amounts and gradually increase",
      "Use included measuring spoon for accuracy",
    ],
    labResults: [
      "Fulvic acid content: 20-25%",
      "Heavy metals below detection limits",
      "Microbiological purity confirmed",
      "Authenticity verified through spectral analysis",
    ],
    category: "Shilajit",
    inStock: true,
    featured: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getRelatedProducts(currentProductId: string, limit = 3): Product[] {
  const currentProduct = products.find((p) => p.id === currentProductId)
  if (!currentProduct) return []

  return products.filter((p) => p.id !== currentProductId && p.category === currentProduct.category).slice(0, limit)
}

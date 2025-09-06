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
  {
    id: "4",
    name: "Ashwagandha Root Powder",
    subtitle: "Organic KSM-66 Extract - 120 Capsules",
    slug: "ashwagandha-root-powder",
    price: 34.99,
    images: ["/products/ashwagandha-main.jpg", "/products/ashwagandha-2.jpg", "/products/ashwagandha-3.jpg"],
    badge: "Sold Out",
    description:
      "Premium organic Ashwagandha featuring KSM-66, the most clinically studied extract. This adaptogenic herb has been used for over 3,000 years to support stress management, energy levels, and overall vitality.",
    benefits: [
      "Helps manage stress and anxiety",
      "Supports healthy energy levels",
      "Promotes restful sleep",
      "Supports cognitive function",
      "Helps maintain healthy cortisol levels",
    ],
    ingredients: [
      "Organic Ashwagandha Root Extract (KSM-66) - 600mg",
      "Organic Ashwagandha Root Powder - 100mg",
      "Vegetarian Capsule (Cellulose)",
      "No artificial fillers or additives",
    ],
    howToUse: [
      "Take 1-2 capsules daily with food",
      "Best taken in the evening for sleep support",
      "Can be taken in morning for energy support",
      "Consistent daily use recommended for best results",
    ],
    labResults: [
      "Withanolide content verified at 5%",
      "Organic certification maintained",
      "Heavy metals testing passed",
      "Microbiological safety confirmed",
    ],
    category: "Adaptogens",
    inStock: false,
    featured: false,
  },
  {
    id: "5",
    name: "Turmeric Curcumin Complex",
    subtitle: "With Black Pepper Extract - 90 Capsules",
    slug: "turmeric-curcumin-complex",
    price: 29.99,
    images: ["/products/turmeric-main.jpg", "/products/turmeric-2.jpg", "/products/turmeric-3.jpg"],
    badge: "Sold Out",
    description:
      "High-potency turmeric extract standardized to 95% curcuminoids, enhanced with BioPerine black pepper extract for superior absorption. Supports healthy inflammation response and joint comfort.",
    benefits: [
      "Supports healthy inflammation response",
      "Promotes joint comfort and mobility",
      "Powerful antioxidant protection",
      "Supports cardiovascular health",
      "Enhanced absorption with BioPerine",
    ],
    ingredients: [
      "Turmeric Root Extract (95% Curcuminoids) - 500mg",
      "BioPerine Black Pepper Extract - 5mg",
      "Organic Turmeric Root Powder - 50mg",
      "Vegetarian Capsule (Cellulose)",
    ],
    howToUse: [
      "Take 1 capsule daily with food",
      "Can increase to 2 capsules if needed",
      "Take with healthy fats for better absorption",
      "Consistent use recommended for optimal benefits",
    ],
    labResults: [
      "Curcuminoid content verified at 95%",
      "BioPerine potency confirmed",
      "Heavy metals within safe limits",
      "Microbiological testing passed",
    ],
    category: "Anti-inflammatory",
    inStock: false,
    featured: false,
  },
  {
    id: "6",
    name: "Himalayan Sea Buckthorn Oil",
    subtitle: "Cold-Pressed Omega Complex - 60 Softgels",
    slug: "sea-buckthorn-oil",
    price: 44.99,
    images: ["/products/sea-buckthorn-main.jpg", "/products/sea-buckthorn-2.jpg", "/products/sea-buckthorn-3.jpg"],
    badge: "Sold Out",
    description:
      "Rare Himalayan Sea Buckthorn oil containing the complete omega profile (3, 6, 7, and 9) plus over 190 bioactive compounds. Cold-pressed to preserve nutritional integrity and potency.",
    benefits: [
      "Complete omega fatty acid profile",
      "Supports skin health and radiance",
      "Promotes cardiovascular wellness",
      "Rich in antioxidants and vitamins",
      "Supports immune system function",
    ],
    ingredients: [
      "Cold-Pressed Sea Buckthorn Fruit Oil - 500mg",
      "Cold-Pressed Sea Buckthorn Seed Oil - 200mg",
      "Natural Vitamin E (as mixed tocopherols)",
      "Softgel Capsule (Gelatin, Glycerin, Water)",
    ],
    howToUse: [
      "Take 1-2 softgels daily with meals",
      "Can be taken morning or evening",
      "Store in refrigerator after opening",
      "Take consistently for 4-6 weeks for best results",
    ],
    labResults: [
      "Omega fatty acid profile verified",
      "Vitamin content analysis completed",
      "Oxidation levels within optimal range",
      "Heavy metals and contaminants not detected",
    ],
    category: "Omega Oils",
    inStock: false,
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

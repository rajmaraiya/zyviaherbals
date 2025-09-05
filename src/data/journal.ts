export interface JournalPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  category: string
  featured: boolean
  image: string
  coverImage?: string
  tags: string[]
  seo?: {
    title?: string
    description?: string
  }
}

export const journalPosts: JournalPost[] = [
  {
    id: "1",
    slug: "ancient-wisdom-modern-science",
    title: "How Ancient Ayurvedic Wisdom Meets Modern Science",
    excerpt: "Discover how traditional Ayurvedic practices are validated by contemporary research, creating powerful wellness solutions for modern life.",
    content: `
      <p>For over 5,000 years, Ayurveda has provided holistic wellness solutions rooted in the understanding that true health comes from balance. Today, modern science is validating what ancient practitioners have long known—that nature provides the most powerful tools for healing and vitality.</p>
      
      <h2>The Science Behind Traditional Wisdom</h2>
      <p>At Zyvia Herbals, we bridge this gap between ancient knowledge and modern validation. Our premium Shilajit, for example, has been used in Ayurvedic medicine for centuries to enhance energy and vitality. Today, clinical studies confirm its rich mineral content and adaptogenic properties.</p>
      
      <h2>Third-Party Testing Meets Traditional Sourcing</h2>
      <p>While we honor traditional harvesting methods from the pristine Himalayas, we also subject every batch to rigorous third-party testing. This ensures purity, potency, and safety—giving you confidence in both the ancient wisdom and modern quality standards.</p>
    `,
    author: {
      name: "Dr. Priya Sharma",
      role: "Lead Ayurvedic Specialist",
      avatar: "/team/dr-priya.jpg"
    },
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Science",
    featured: true,
    image: "/journal/ancient-wisdom.jpg",
    coverImage: "/journal/ancient-wisdom.jpg",
    tags: ["ayurveda", "science", "wellness", "shilajit"]
  },
  {
    id: "2",
    slug: "benefits-of-himalayan-shilajit",
    title: "The Complete Guide to Himalayan Shilajit Benefits",
    excerpt: "Explore the comprehensive benefits of genuine Himalayan Shilajit and how this ancient superfood can transform your daily wellness routine.",
    content: `
      <p>Himalayan Shilajit, often called the "destroyer of weakness," is one of nature's most powerful adaptogens. Formed over centuries from the decomposition of plant matter in the Himalayan mountains, this mineral-rich substance has been revered in traditional medicine systems.</p>
      
      <h2>Key Benefits of Shilajit</h2>
      <ul>
        <li><strong>Enhanced Energy:</strong> Rich in fulvic acid and minerals that support cellular energy production</li>
        <li><strong>Cognitive Support:</strong> May help improve memory, focus, and mental clarity</li>
        <li><strong>Immune Function:</strong> Contains antioxidants that support overall immune health</li>
        <li><strong>Physical Performance:</strong> Traditional use for strength and endurance</li>
      </ul>
      
      <h2>Quality Matters</h2>
      <p>Not all Shilajit is created equal. At Zyvia Herbals, we source only the highest grade Shilajit from elevations above 16,000 feet in the Himalayas, ensuring maximum potency and purity.</p>
    `,
    author: {
      name: "Marcus Chen",
      role: "Product Development Manager",
      avatar: "/team/marcus.jpg"
    },
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    category: "Products",
    featured: false,
    image: "/journal/shilajit-benefits.jpg",
    coverImage: "/journal/shilajit-benefits.jpg",
    tags: ["shilajit", "benefits", "himalayan", "wellness"]
  },
  {
    id: "3",
    slug: "sustainable-sourcing-practices",
    title: "Our Commitment to Sustainable and Ethical Sourcing",
    excerpt: "Learn about our partnerships with local Himalayan communities and our commitment to sustainable harvesting practices that preserve these precious resources for future generations.",
    content: `
      <p>At Zyvia Herbals, we believe that premium wellness products should not come at the expense of the environment or the communities that make them possible. Our commitment to sustainable sourcing is at the heart of everything we do.</p>
      
      <h2>Partnership with Local Communities</h2>
      <p>We work directly with traditional harvesters in remote Himalayan villages, ensuring fair wages and supporting local economies. These communities have been stewards of these natural resources for generations, and their knowledge is invaluable to our mission.</p>
      
      <h2>Environmental Stewardship</h2>
      <p>Our harvesting practices are designed to preserve the delicate Himalayan ecosystem. We follow strict guidelines that ensure natural regeneration and minimize environmental impact, protecting these pristine regions for future generations.</p>
      
      <h2>Transparency and Traceability</h2>
      <p>Every product can be traced back to its source location and harvesting date. We maintain complete transparency in our supply chain, allowing you to know exactly where your wellness supplements come from.</p>
    `,
    author: {
      name: "Sarah Mitchell",
      role: "Sustainability Director",
      avatar: "/team/sarah.jpg"
    },
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    category: "Sustainability",
    featured: false,
    image: "/journal/sustainable-sourcing.jpg",
    coverImage: "/journal/sustainable-sourcing.jpg",
    tags: ["sustainability", "sourcing", "community", "environment"]
  }
]

export function getJournalPosts() {
  return journalPosts
}

export function getFeaturedPosts() {
  return journalPosts.filter(post => post.featured)
}

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find(post => post.slug === slug)
}

// Alias for compatibility
export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string) {
  return journalPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

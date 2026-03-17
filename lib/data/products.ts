export interface StaticProduct {
  id: string
  name: string
  price: number
  category: string
  slug: string
  image: string
  images: string[]
  description: string
  sizes: string[]
  inStock: boolean
  featured: boolean
  capsule?: string
}

export const STATIC_PRODUCTS: StaticProduct[] = [
  {
    id: "01",
    name: "Oversized Wool Coat",
    price: 890,
    category: "Outerwear",
    slug: "oversized-wool-coat",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396b75b2b5b?w=800&q=80"
    ],
    description: "A study in restraint. Our wool coat is cut from a single piece of double-faced cashmere wool, structured at the shoulder and deliberately oversized through the body. Wear it as the final word.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    capsule: "silence"
  },
  {
    id: "02",
    name: "Relaxed Cashmere Knit",
    price: 420,
    category: "Knitwear",
    slug: "relaxed-cashmere-knit",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80"
    ],
    description: "Grade-A Mongolian cashmere, garment-washed for immediate softness. The relaxed silhouette sits slightly off-shoulder. A piece that improves with every wear.",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    featured: true,
    capsule: "foundation"
  },
  {
    id: "03",
    name: "Wide Leg Trousers",
    price: 340,
    category: "Trousers",
    slug: "wide-leg-trousers",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
    ],
    description: "Italian wool-blend with a high rise and wide, floor-grazing leg. Lined to the knee. The trouser that ends the search.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    capsule: "foundation"
  },
  {
    id: "04",
    name: "Structured Blazer",
    price: 680,
    category: "Tailoring",
    slug: "structured-blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80"
    ],
    description: "Canvas-constructed in British wool. The lapel is hand-stitched, the shoulder is natural. This is tailoring that does not announce itself.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    capsule: "silence"
  },
  {
    id: "05",
    name: "Cotton Oxford Shirt",
    price: 195,
    category: "Shirts",
    slug: "cotton-oxford-shirt",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80"
    ],
    description: "Two-ply Oxford cotton from Thomas Mason. Slightly oversized with a long placket and curved hem. The shirt underneath everything else.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: false,
    capsule: "foundation"
  },
  {
    id: "06",
    name: "Leather Derby Shoes",
    price: 520,
    category: "Footwear",
    slug: "leather-derby-shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80"
    ],
    description: "Goodyear-welted on a last developed exclusively for SOLNR. Full-grain calf leather, natural leather sole. Built to last thirty years.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
    featured: false,
    capsule: "archive"
  },
  {
    id: "07",
    name: "Merino Turtleneck",
    price: 280,
    category: "Knitwear",
    slug: "merino-turtleneck",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80"
    ],
    description: "Extra-fine 17.5 micron merino. The neck rolls twice and sits just below the chin. In black, bone, and a single seasonal colour each year.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    capsule: "foundation"
  },
  {
    id: "08",
    name: "Canvas Tote",
    price: 145,
    category: "Accessories",
    slug: "canvas-tote",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"
    ],
    description: "12oz waxed canvas with vegetable-tanned leather handles. Internal divider. The bag that has been everywhere and shows nothing.",
    sizes: ["ONE SIZE"],
    inStock: true,
    featured: false,
    capsule: "archive"
  },
  {
    id: "09",
    name: "Silk Crewneck",
    price: 360,
    category: "Shirts",
    slug: "silk-crewneck",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80"
    ],
    description: "19mm mulberry silk, washed for a matte finish. The weight is substantial; the drape, effortless. Tucked or untucked — both correct.",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    featured: false,
    capsule: "silence"
  },
  {
    id: "10",
    name: "Leather Card Holder",
    price: 95,
    category: "Accessories",
    slug: "leather-card-holder",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
    ],
    description: "Vegetable-tanned bridle leather. Four card slots, one slip pocket. It will not need replacing.",
    sizes: ["ONE SIZE"],
    inStock: true,
    featured: false,
    capsule: "archive"
  },
  {
    id: "11",
    name: "Pleated Wool Trousers",
    price: 395,
    category: "Trousers",
    slug: "pleated-wool-trousers",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"
    ],
    description: "Double-pleat construction in 280g Italian flannel. The waistband sits at the natural waist. Worn with or without a belt — the trouser holds its shape either way.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    capsule: "silence"
  },
  {
    id: "12",
    name: "Wool Scarf",
    price: 165,
    category: "Accessories",
    slug: "wool-scarf",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80"
    ],
    description: "Brushed lambswool, 200cm × 35cm. Finished with hand-rolled edges. The piece that makes every other piece feel considered.",
    sizes: ["ONE SIZE"],
    inStock: true,
    featured: false,
    capsule: "archive"
  }
]

export const CATEGORIES = [
  "Outerwear",
  "Knitwear",
  "Trousers",
  "Tailoring",
  "Shirts",
  "Footwear",
  "Accessories"
]

export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

export function filterProducts(
  products: StaticProduct[],
  category?: string,
  sort?: string,
  capsule?: string
): StaticProduct[] {
  let filtered = [...products]
  if (category && category.toLowerCase() !== "all") {
    filtered = filtered.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    )
  }
  if (capsule) {
    filtered = filtered.filter(p => p.capsule === capsule)
  }
  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price)
  }
  return filtered
}

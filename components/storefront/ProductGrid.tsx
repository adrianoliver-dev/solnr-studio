import { Heading, Container } from "@/components/ui";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

const PRODUCTS = [
  { name: "Oversized Wool Coat", price: 890, category: "Outerwear",
    slug: "oversized-wool-coat",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80" },
  { name: "Relaxed Cashmere Knit", price: 420, category: "Knitwear",
    slug: "relaxed-cashmere-knit",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80" },
  { name: "Wide Leg Trousers", price: 340, category: "Trousers",
    slug: "wide-leg-trousers",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=600&q=80" },
  { name: "Structured Blazer", price: 680, category: "Tailoring",
    slug: "structured-blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" },
  { name: "Cotton Oxford Shirt", price: 195, category: "Shirts",
    slug: "cotton-oxford-shirt",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80" },
  { name: "Leather Derby Shoes", price: 520, category: "Footwear",
    slug: "leather-derby-shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { name: "Merino Turtleneck", price: 280, category: "Knitwear",
    slug: "merino-turtleneck",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80" },
  { name: "Canvas Tote Bag", price: 145, category: "Accessories",
    slug: "canvas-tote-bag",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80" }
];

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32 bg-[--color-base]">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <Heading level={2}>New Arrivals</Heading>
          <Link 
            href="/catalog" 
            className="font-sans text-xs uppercase tracking-[0.2em] text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors pb-1"
          >
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.slug}
              {...product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

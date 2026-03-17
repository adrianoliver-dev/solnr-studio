import { Heading, Container } from "@/components/ui"
import Link from "next/link"
import { ProductCard } from "./ProductCard"
import { STATIC_PRODUCTS } from "@/lib/data/products"

export function ProductGrid(): React.JSX.Element {
  // Show only the first 8 products on the homepage
  const products = STATIC_PRODUCTS.slice(0, 8)

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
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  )
}

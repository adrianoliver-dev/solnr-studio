import { Container, Heading } from "@/components/ui"
import {
  CatalogFilters,
  CatalogFiltersMobile,
  CatalogGrid,
} from "@/components/storefront"
import {
  STATIC_PRODUCTS,
  CATEGORIES,
  filterProducts,
} from "@/lib/data/products"

interface CatalogPageProps {
  searchParams: Promise<{
    category?: string
    sort?: string
    capsule?: string
  }>
}

export default async function CatalogPage({
  searchParams,
}: CatalogPageProps): Promise<React.JSX.Element> {
  const params = await searchParams
  const activeCategory = params.category || "all"
  const activeSort = params.sort || "newest"
  const activeCapsule = params.capsule

  const filteredProducts = filterProducts(
    STATIC_PRODUCTS,
    activeCategory,
    activeSort,
    activeCapsule
  )

  const pageTitle = activeCategory === "all" 
    ? "All Pieces" 
    : CATEGORIES.find(c => c.toLowerCase() === activeCategory.toLowerCase()) || "Collection"

  return (
    <main className="min-h-screen bg-[--color-base]">
      {/* Page Header */}
      <header className="pt-32 pb-12">
        <Container>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-accent] mb-3 block">
            Collection
          </span>
          <Heading level={1} className="mb-2">
            {pageTitle}
          </Heading>
          <p className="font-sans text-sm text-[--color-text-muted]">
            {filteredProducts.length} pieces
          </p>
        </Container>
      </header>

      {/* Catalog Layout */}
      <section className="pb-32">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Desktop Sidebar */}
            <CatalogFilters
              categories={CATEGORIES}
              activeCategory={activeCategory}
              activeSort={activeSort}
              className="hidden lg:flex w-64 shrink-0"
            />

            {/* Mobile Filters (Sticky) */}
            <CatalogFiltersMobile
              categories={CATEGORIES}
              activeCategory={activeCategory}
              activeSort={activeSort}
              productCount={filteredProducts.length}
            />

            {/* Product Grid */}
            <CatalogGrid products={filteredProducts} />
          </div>
        </Container>
      </section>
    </main>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui"
import { CatalogGridClient } from "./CatalogGridClient"
import { StaticProduct } from "@/lib/data/products"

interface CatalogGridProps {
  products: StaticProduct[]
}

export function CatalogGrid({ products }: CatalogGridProps): React.JSX.Element {
  if (products.length === 0) {
    return (
      <div className="flex-1 py-24 text-center">
        <p className="font-sans text-sm text-[--color-text-muted] mb-6">
          No pieces found in this selection.
        </p>
        <Link href="/catalog">
          <Button variant="ghost" size="sm">
            Clear filters
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <CatalogGridClient products={products} />
    </div>
  )
}

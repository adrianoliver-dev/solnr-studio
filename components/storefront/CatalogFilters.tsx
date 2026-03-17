"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Separator } from "@/components/ui"
import { cn } from "@/lib/utils/cn"
import { SORT_OPTIONS } from "@/lib/data/products"

interface CatalogFiltersProps {
  categories: string[]
  activeCategory?: string
  activeSort?: string
  className?: string
}

export function CatalogFilters({
  categories,
  activeCategory = "all",
  activeSort = "newest",
  className,
}: CatalogFiltersProps): React.JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams(searchParams.toString())
    if (value.toLowerCase() === "all" || value === "newest") {
      params.delete(name)
    } else {
      params.set(name, value)
    }
    return params.toString()
  }

  const handleFilterChange = (name: string, value: string): void => {
    const query = createQueryString(name, value)
    router.push(`/catalog?${query}`, { scroll: false })
  }

  return (
    <aside className={cn("flex flex-col", className)}>
      <section>
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted] mb-4">
          Filter
        </h3>
        <Separator className="bg-[--color-border] opacity-50" />
        <div className="mt-4 flex flex-col space-y-1">
          <button
            onClick={() => handleFilterChange("category", "all")}
            className={cn(
              "text-left text-sm tracking-wide uppercase transition-colors duration-200 py-1",
              activeCategory?.toLowerCase() === "all"
                ? "text-[--color-text-primary] font-medium"
                : "text-[--color-text-muted] hover:text-[--color-text-secondary]"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange("category", category.toLowerCase())}
              className={cn(
                "text-left text-sm tracking-wide uppercase transition-colors duration-200 py-1",
                activeCategory?.toLowerCase() === category.toLowerCase()
                  ? "text-[--color-text-primary] font-medium"
                  : "text-[--color-text-muted] hover:text-[--color-text-secondary]"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted] mb-4">
          Sort
        </h3>
        <Separator className="bg-[--color-border] opacity-50" />
        <div className="mt-4 flex flex-col space-y-1">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange("sort", option.value)}
              className={cn(
                "text-left text-sm tracking-wide uppercase transition-colors duration-200 py-1",
                activeSort === option.value
                  ? "text-[--color-text-primary] font-medium"
                  : "text-[--color-text-muted] hover:text-[--color-text-secondary]"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </aside>
  )
}

"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { Separator } from "@/components/ui"
import { cn } from "@/lib/utils/cn"
import { SORT_OPTIONS } from "@/lib/data/products"

interface CatalogFiltersMobileProps {
  categories: string[]
  activeCategory?: string
  activeSort?: string
  productCount: number
}

export function CatalogFiltersMobile({
  categories,
  activeCategory = "all",
  activeSort = "newest",
  productCount,
}: CatalogFiltersMobileProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
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
    // We don't close the drawer automatically to allow multiple filters
  }

  return (
    <>
      {/* Sticky Trigger Bar */}
      <div className="lg:hidden sticky top-20 z-30 h-12 border-b border-[--color-border] flex items-center justify-between px-6 bg-[--color-base]">
        <span className="font-sans text-xs uppercase tracking-widest text-[--color-text-muted]">
          {productCount} pieces
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="font-sans text-xs uppercase tracking-widest text-[--color-text-primary] hover:opacity-70 transition-opacity"
        >
          Filter + Sort
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100]"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed bottom-0 left-0 right-0 h-[75vh] bg-[--color-base] z-[101] border-t border-[--color-border] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[--color-border]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
                  Filters & Sorting
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-12 pb-32">
                {/* Category Section */}
                <section>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted] mb-4">
                    Category
                  </h3>
                  <Separator className="bg-[--color-border] opacity-50" />
                  <div className="mt-4 flex flex-col space-y-3">
                    <button
                      onClick={() => handleFilterChange("category", "all")}
                      className={cn(
                        "text-left text-sm tracking-wide uppercase transition-colors duration-200",
                        activeCategory?.toLowerCase() === "all"
                          ? "text-[--color-text-primary] font-medium"
                          : "text-[--color-text-muted]"
                      )}
                    >
                      All Pieces
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleFilterChange("category", category.toLowerCase())}
                        className={cn(
                          "text-left text-sm tracking-wide uppercase transition-colors duration-200",
                          activeCategory?.toLowerCase() === category.toLowerCase()
                            ? "text-[--color-text-primary] font-medium"
                            : "text-[--color-text-muted]"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Sort Section */}
                <section>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted] mb-4">
                    Sort By
                  </h3>
                  <Separator className="bg-[--color-border] opacity-50" />
                  <div className="mt-4 flex flex-col space-y-3">
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleFilterChange("sort", option.value)}
                        className={cn(
                          "text-left text-sm tracking-wide uppercase transition-colors duration-200",
                          activeSort === option.value
                            ? "text-[--color-text-primary] font-medium"
                            : "text-[--color-text-muted]"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              {/* Apply/Close Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[--color-base] border-t border-[--color-border]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[--color-text-primary] text-[--color-base] py-4 text-xs uppercase tracking-[0.2em] font-medium"
                >
                  View {productCount} Pieces
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

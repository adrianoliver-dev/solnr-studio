"use client"

import { motion } from "motion/react"
import { ProductCard } from "./ProductCard"
import { StaticProduct } from "@/lib/data/products"

interface CatalogGridClientProps {
  products: StaticProduct[]
}

export function CatalogGridClient({ products }: CatalogGridClientProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo
          }}
        >
          <ProductCard
            name={product.name}
            price={product.price}
            category={product.category}
            slug={product.slug}
            image={product.image}
          />
        </motion.div>
      ))}
    </div>
  )
}

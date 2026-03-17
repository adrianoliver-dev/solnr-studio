import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  slug: string;
  image: string;
  className?: string;
}

export function ProductCard({
  name,
  price,
  category,
  slug,
  image,
  className
}: ProductCardProps) {
  return (
    <Link 
      href={`/products/${slug}`}
      className={cn("group flex flex-col cursor-pointer", className)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden border border-transparent transition-colors duration-300 group-hover:border-[--color-accent]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[0.16,1,0.3,1] scale-100 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Text Area */}
      <div className="pt-4 flex flex-col space-y-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-text-muted]">
          {category}
        </span>
        <h4 className="font-sans text-sm font-normal uppercase tracking-wide text-[--color-text-primary]">
          {name}
        </h4>
        <span className="font-sans text-sm text-[--color-text-secondary]">
          ${price}
        </span>
      </div>
    </Link>
  );
}

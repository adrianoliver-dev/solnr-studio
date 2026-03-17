import { useState } from 'react';
import { StaticProduct } from '@/lib/data/products';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { useCart } from '@/lib/cart';

interface PDPInfoProps {
  product: StaticProduct;
}

export function PDPInfo({ product }: PDPInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const { addItem, openCart } = useCart();

  const handleAddToBag = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }

    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    });

    openCart();
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setError(false);
  };

  return (
    <div className="flex flex-col w-full self-start sticky top-32">
      {/* Section 1 — Product Identity */}
      <div className="pb-8 border-b border-[--color-border]">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent] mb-3 block">
          {product.category}
        </span>
        <Heading level={1} className="text-3xl md:text-4xl font-normal font-display leading-tight">
          {product.name}
        </Heading>
        <p className="font-sans text-2xl font-normal text-[--color-text-primary] mt-4">
          ${product.price}
        </p>
      </div>

      {/* Section 2 — Size Selector */}
      <div className="py-8 border-b border-[--color-border]">
        <div className="flex justify-between items-center mb-4">
          <span className="font-sans text-xs uppercase tracking-widest text-[--color-text-muted]">
            Select Size
          </span>
          <button className="font-sans text-xs text-[--color-text-muted] underline hover:text-[--color-text-primary] transition-colors">
            Size Guide
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeSelect(size)}
              style={
                selectedSize === size
                   ? {
                      backgroundColor: 'var(--color-text-primary)',
                      color: 'var(--color-base)',
                      borderColor: 'var(--color-text-primary)',
                    }
                  : undefined
              }
              className={cn(
                "min-w-[48px] h-[44px] px-3 font-sans text-xs uppercase tracking-wide border transition-all duration-200",
                selectedSize === size
                  ? "border-transparent"
                  : "text-[--color-text-secondary] border-[--color-border] hover:border-[--color-text-secondary] hover:text-[--color-text-primary]"
              )}
            >
              {size}
            </button>
          ))}
        </div>
        {error && (
          <p className="font-mono text-[10px] text-red-400 mt-2">
            Select a size to continue
          </p>
        )}
      </div>

      {/* Section 3 — Add to Cart */}
      <div className="py-8 border-b border-[--color-border]">
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full"
          onClick={handleAddToBag}
        >
          Add to Bag
        </Button>
        <p className="font-sans text-xs text-[--color-text-muted] text-center mt-3">
          Free shipping on orders over $200
        </p>
      </div>

      {/* Section 4 — Product Description */}
      <div className="pt-8">
        <span className="font-sans text-xs uppercase tracking-widest text-[--color-text-muted] mb-4 block">
          Description
        </span>
        <p className="font-sans text-sm leading-relaxed text-[--color-text-secondary] max-w-[440px]">
          {product.description}
        </p>
      </div>
    </div>
  );
}

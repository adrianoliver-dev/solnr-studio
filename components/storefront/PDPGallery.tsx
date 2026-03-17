'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils/cn';

interface PDPGalleryProps {
  images: string[];
  name: string;
}

export function PDPGallery({ images, name }: PDPGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col w-full">
      {/* Main Image Viewport */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[--color-surface]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }} // easeOutExpo
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex]}
              alt={`${name} — view ${activeIndex + 1}`}
              fill
              className="object-cover"
              priority={activeIndex === 0}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div 
          className="flex gap-2 mt-3 overflow-x-auto scrollbar-none pb-2 -mb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative flex-shrink-0 w-16 aspect-[3/4] overflow-hidden border transition-colors duration-200",
                activeIndex === index 
                  ? "border-[--color-accent]" 
                  : "border-transparent hover:border-[--color-border]"
              )}
              aria-label={`Switch to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

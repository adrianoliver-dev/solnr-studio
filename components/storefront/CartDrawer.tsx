'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/lib/cart';
import { cn } from '@/lib/utils/cn';

export function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    itemCount, 
    subtotal, 
    removeItem, 
    updateQuantity 
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 h-full z-[70] w-full md:w-[420px] bg-[--color-surface] flex flex-col shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex-shrink-0 px-6 py-6 border-b border-[--color-border] flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
                  Your Selection
                </p>
                <p className="font-mono text-[10px] text-[--color-text-muted] mt-1">
                  {itemCount} {itemCount === 1 ? 'piece' : 'pieces'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 -mr-2 text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
                aria-label="Close cart"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 px-6 text-center">
                  <div className="w-16 h-16 bg-[--color-elevated] flex items-center justify-center rounded-none mb-2">
                    <ShoppingBag size={24} strokeWidth={1} className="text-[--color-text-muted]" />
                  </div>
                  <h3 className="font-display text-2xl font-normal text-[--color-text-primary]">
                    Nothing selected yet.
                  </h3>
                  <p className="font-sans text-sm text-[--color-text-muted] max-w-[200px] leading-relaxed">
                    Add pieces from the collection to begin your selection.
                  </p>
                  <Link
                    href="/catalog"
                    onClick={closeCart}
                    className="font-sans text-[10px] uppercase tracking-widest text-[--color-accent] hover:opacity-70 transition-opacity mt-4 border-b border-[--color-accent] pb-1"
                  >
                    Browse Collection →
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-[--color-border]">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="px-6 py-6 flex gap-5">
                      {/* Image */}
                      <div className="relative w-20 h-24 flex-shrink-0 bg-[--color-elevated]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-between flex-1 py-0.5">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="font-sans text-xs font-medium text-[--color-text-primary] uppercase tracking-wider">
                              {item.name}
                            </h4>
                            <p className="font-mono text-[10px] text-[--color-text-muted] mt-1.5">
                              SIZE {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors"
                            aria-label="Remove item"
                          >
                            <X size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[--color-border] h-8">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-full flex items-center justify-center text-[--color-text-secondary] disabled:opacity-20 hover:text-[--color-text-primary] transition-colors"
                            >
                              <Minus size={12} strokeWidth={1.5} />
                            </button>
                            <span className="w-8 text-center font-mono text-[10px] text-[--color-text-primary]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-8 h-full flex items-center justify-center text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
                            >
                              <Plus size={12} strokeWidth={1.5} />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-sans text-xs text-[--color-text-secondary]">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER */}
            {items.length > 0 && (
              <div className="flex-shrink-0 px-6 py-6 border-t border-[--color-border] space-y-6 bg-[--color-surface]">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[--color-text-muted]">
                    Subtotal
                  </span>
                  <span className="font-sans text-lg text-[--color-text-primary]">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => console.log('Proceed to checkout')}
                    className="w-full py-4 bg-[--color-accent] text-[--color-base] font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[--color-accent-hover] transition-colors duration-300"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors duration-300 text-center"
                  >
                    Continue Shopping
                  </button>
                </div>

                <p className="font-sans text-[9px] text-[--color-text-muted] text-center tracking-wider">
                  VAT EXCL. — SHIPPING CALCULATED AT CHECKOUT
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

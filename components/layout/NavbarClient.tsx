"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { motion, AnimatePresence } from "motion/react";

export default function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "/catalog", label: "Shop" },
    { href: "/stories", label: "Stories" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled || isMobileMenuOpen
            ? "bg-[--color-base]/90 border-b border-[--color-border] backdrop-blur-sm py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo - Left */}
          <Link 
            href="/" 
            className="text-xl font-medium tracking-[0.3em] text-[--color-text-primary] lg:text-2xl"
            onClick={closeMenu}
          >
            SOLNR
          </Link>

          {/* Desktop Navigation - Center-ish */}
          <div className="hidden items-center space-x-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons - Right */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <button className="text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link 
              href="/account" 
              className="text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
              onClick={closeMenu}
            >
              <User size={18} strokeWidth={1.5} />
            </Link>
            <button className="relative text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]">
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[--color-accent] text-[8px] font-bold text-[--color-base]">
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[--color-base]"
          >
            <div className="flex flex-col items-center justify-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl font-normal text-[--color-text-primary] transition-colors hover:text-[--color-text-accent]"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Close Button UI - Optional extra check against spec, spec says Absolute top-6 right-6 */}
            <button 
              className="absolute top-6 right-6 text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
              onClick={closeMenu}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

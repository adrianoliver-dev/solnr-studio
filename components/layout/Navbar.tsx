import Link from "next/link";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled
          ? "bg-[--color-base]/90 border-b border-[--color-border] backdrop-blur-sm py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo - Left */}
        <Link 
          href="/" 
          className="text-xl font-medium tracking-[0.3em] text-[--color-text-primary] lg:text-2xl"
        >
          SOLNR
        </Link>

        {/* Desktop Navigation - Center-ish */}
        <div className="hidden items-center space-x-12 lg:flex">
          <Link
            href="/catalog"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
          >
            Shop
          </Link>
          <Link
            href="/stories"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
          >
            Stories
          </Link>
          <Link
            href="/about"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
          >
            About
          </Link>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          <button className="text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link href="/account" className="text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]">
            <User size={18} strokeWidth={1.5} />
          </Link>
          <button className="relative text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[--color-accent] text-[8px] font-bold text-[--color-base]">
              0
            </span>
          </button>
          <button className="text-[--color-text-secondary] lg:hidden">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}

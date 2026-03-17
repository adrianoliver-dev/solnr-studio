import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  className?: string;
  variant?: "display" | "functional";
}

export default function Heading({
  children,
  level = 1,
  as,
  className,
  variant,
}: HeadingProps) {
  const Component = as || `h${level}`;
  
  // P-06: Playfair Display for display/editorial, Inter for functional
  // Heroes and section titles (variant="display") use Playfair Display
  const isDisplay = variant === "display" || (level <= 3 && !variant);

  return (
    <Component
      className={cn(
        "font-normal tracking-tight text-[--color-text-primary]",
        isDisplay ? "font-display" : "font-sans uppercase tracking-widest text-xs font-medium",
        level === 1 && "text-5xl md:text-7xl lg:text-8xl",
        level === 2 && "text-4xl md:text-5xl lg:text-6xl",
        level === 3 && "text-2xl md:text-3xl lg:text-4xl",
        level === 4 && "text-xl md:text-2xl",
        level === 5 && "text-lg md:text-xl",
        level === 6 && "text-base",
        className
      )}
    >
      {children}
    </Component>
  );
}

import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "elevated";
}

export default function Badge({
  children,
  className,
  variant = "outline",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest rounded-full",
        variant === "outline" && "border border-[--color-border] text-[--color-text-muted]",
        variant === "elevated" && "bg-[--color-elevated] text-[--color-text-secondary]",
        className
      )}
    >
      {children}
    </span>
  );
}

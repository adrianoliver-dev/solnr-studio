import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center uppercase tracking-widest transition-all duration-200 ease-out-expo disabled:opacity-50 disabled:pointer-events-none font-sans font-medium text-xs",
          // [Section 3]: Primary Button
          variant === "primary" && 
            "border border-[--color-accent] text-[--color-accent] bg-transparent hover:bg-[--color-accent] hover:text-[--color-base]",
          // [Section 3]: Secondary Button
          variant === "secondary" && 
            "border border-[--color-border] text-[--color-text-primary] bg-transparent hover:bg-[--color-text-primary] hover:text-[--color-base]",
          // Ghost variant
          variant === "ghost" && 
            "text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-surface]",
          // [Section 2/3]: Sizing & Touch Targets (44px min for mobile)
          size === "sm" && "px-6 py-2 min-h-[40px]",
          size === "md" && "px-8 py-3 min-h-[44px]",
          size === "lg" && "px-10 py-4 min-h-[52px]",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

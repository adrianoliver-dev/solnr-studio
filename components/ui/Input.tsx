import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-[--color-surface] border border-[--color-border] px-4 py-3 text-sm text-[--color-text-primary] placeholder:text-[--color-text-muted] focus:border-[--color-text-secondary] outline-none transition-colors duration-200 rounded-none min-h-[44px]",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

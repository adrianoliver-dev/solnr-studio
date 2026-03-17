import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
  fluid?: boolean;
}

export default function Container({
  children,
  className,
  as: Component = "div",
  fluid = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-16",
        !fluid && "max-w-[1280px]",
        className
      )}
    >
      {children}
    </Component>
  );
}

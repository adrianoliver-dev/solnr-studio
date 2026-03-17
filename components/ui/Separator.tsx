import { cn } from "@/lib/utils/cn";

interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Separator({
  className,
  orientation = "horizontal",
}: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0 bg-[--color-border]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
}

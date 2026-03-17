import { cn } from "@/lib/utils/cn";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-[--color-elevated] rounded-none",
        className
      )}
    />
  );
}

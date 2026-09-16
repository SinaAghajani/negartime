import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export default function Spinner({
  size = "md",
  className,
  label = "در حال بارگذاری",
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-border border-t-accent",
        {
          "size-4": size === "sm",
          "size-6": size === "md",
          "size-9": size === "lg",
        },
        className,
      )}
    />
  );
}

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "muted" | "success" | "danger";
}

export default function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-accent text-background": variant === "accent",
          "border border-border bg-transparent text-foreground":
            variant === "outline",
          "bg-surface-muted text-muted": variant === "muted",
          "bg-success/15 text-success": variant === "success",
          "bg-danger/15 text-danger": variant === "danger",
        },
        className,
      )}
      {...props}
    />
  );
}

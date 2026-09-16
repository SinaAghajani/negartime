"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/use-wishlist";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

interface WishlistButtonProps {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

export default function WishlistButton({
  product,
  size = "md",
  className,
  showLabel = false,
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const active = isInWishlist(product.id);

  return (
    <button
      type="button"
      aria-label={
        active
          ? `حذف ${product.name} از علاقه‌مندی‌ها`
          : `افزودن ${product.name} به علاقه‌مندی‌ها`
      }
      aria-pressed={active}
      onClick={() => toggleWishlist(product)}
      className={cn(
        "group inline-flex items-center justify-center rounded-full transition-all duration-300",
        {
          "size-9": size === "sm",
          "size-10": size === "md",
          "size-12": size === "lg",
          "bg-surface/90 backdrop-blur-md": !showLabel,
          "gap-2 border border-border px-4": showLabel,
        },
        active
          ? "text-accent"
          : "text-muted hover:bg-surface-muted hover:text-accent",
        className,
      )}
    >
      <Heart
        className={cn(
          "transition-all duration-300",
          {
            "size-4": size === "sm",
            "size-4.5": size === "md",
            "size-5": size === "lg",
          },
          active && "fill-current",
        )}
        strokeWidth={1.7}
      />
      {showLabel && (
        <span className="text-xs font-medium">
          {active ? "در علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
        </span>
      )}
    </button>
  );
}

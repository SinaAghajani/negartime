import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/formatters";
import type { Product } from "@/types/product";
interface ProductPriceProps {
  product: Product;
  className?: string;
  compact?: boolean;
}
export default function ProductPrice({
  product,
  className,
  compact = false,
}: ProductPriceProps) {
  const hasDiscount =
    typeof product.compareAtPrice === "number" &&
    product.compareAtPrice > product.price;
  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-3 gap-y-1", className)}
    >
      <span
        className={cn(
          "font-semibold text-foreground",
          compact ? "text-sm" : "text-lg",
        )}
      >
        {formatPrice(
          product.price,
          product.currency === "IRR" ? "تومان" : product.currency,
        )}
      </span>
      {hasDiscount && (
        <span
          className={cn(
            "text-muted-foreground line-through",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {formatPrice(
            product.compareAtPrice!,
            product.currency === "IRR" ? "تومان" : product.currency,
          )}
        </span>
      )}
    </div>
  );
}

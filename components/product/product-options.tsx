"use client";
import { cn } from "@/lib/utils";
import type { Product, ProductVariant } from "@/types/product";
interface ProductOptionsProps {
  product: Product;
  selectedVariantId?: string;
  onVariantChange: (variant: ProductVariant) => void;
  className?: string;
}
export default function ProductOptions({
  product,
  selectedVariantId,
  onVariantChange,
  className,
}: ProductOptionsProps) {
  if (!product.variants?.length) return null;
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">انتخاب مدل</span>
        {selectedVariantId && (
          <span className="text-xs text-muted">
            {
              product.variants.find(
                (variant) => variant.id === selectedVariantId,
              )?.value
            }
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {product.variants.map((variant) => {
          const selected = variant.id === selectedVariantId;
          const available =
            variant.available !== false &&
            (variant.stock === undefined || variant.stock > 0);
          return (
            <button
              key={variant.id}
              type="button"
              disabled={!available}
              onClick={() => onVariantChange(variant)}
              aria-pressed={selected}
              className={cn(
                "rounded-xl border px-4 py-3 text-right transition-all duration-300",
                selected
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-surface text-foreground hover:border-accent/50",
                !available && "cursor-not-allowed opacity-40",
              )}
            >
              <span className="block text-xs font-medium">{variant.name}</span>
              <span className="mt-1 block text-[11px] text-muted">
                {variant.value}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

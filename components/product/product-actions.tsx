"use client";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { MAX_CART_QUANTITY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Product, ProductVariant } from "@/types/product";
import WishlistButton from "@/components/wishlist/wishlist-button";
interface ProductActionsProps {
  product: Product;
  selectedVariant?: ProductVariant;
  className?: string;
}
export default function ProductActions({
  product,
  selectedVariant,
  className,
}: ProductActionsProps) {
  const { addItem, openCart } = useCart();
  const { isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const variantStock = selectedVariant?.stock;
  const availableStock =
    typeof variantStock === "number" ? variantStock : product.stock;
  const maxQuantity = Math.min(MAX_CART_QUANTITY, Math.max(1, availableStock));
  const available =
    product.inStock &&
    product.stock > 0 &&
    selectedVariant?.available !== false &&
    (selectedVariant?.stock === undefined || selectedVariant.stock > 0);
  const handleAdd = () => {
    if (!available) return;
    addItem({
      product,
      quantity,
      variantId: selectedVariant?.id,
      variant: selectedVariant
        ? {
            id: selectedVariant.id,
            name: selectedVariant.name,
            value: selectedVariant.value,
          }
        : undefined,
      unitPrice: selectedVariant?.price,
    });
    setAdded(true);
    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };
  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };
  const increase = () => {
    setQuantity((current) => Math.min(maxQuantity, current + 1));
  };
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <div className="flex h-12 items-center rounded-full border border-border bg-surface">
          <button
            type="button"
            onClick={decrease}
            disabled={quantity <= 1}
            aria-label="کاهش تعداد"
            className="flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground disabled:opacity-30"
          >
            <Minus className="size-4" />
          </button>
          <span className="min-w-8 text-center text-sm font-medium text-foreground">
            {quantity.toLocaleString("fa-IR")}
          </span>
          <button
            type="button"
            onClick={increase}
            disabled={quantity >= maxQuantity}
            aria-label="افزایش تعداد"
            className="flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground disabled:opacity-30"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <div className="flex flex-1 gap-2">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!available}
            className={cn(
              "flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300",
              available
                ? "bg-accent text-background hover:-translate-y-0.5 hover:bg-accent-light"
                : "cursor-not-allowed bg-surface text-muted-foreground",
            )}
          >
            <ShoppingBag className="size-4" />
            {added
              ? "به سبد اضافه شد"
              : available
                ? "افزودن به سبد"
                : "ناموجود"}
          </button>
          <WishlistButton
            product={product}
            size="md"
            aria-label={
              isInWishlist(product.id)
                ? "حذف از علاقه‌مندی‌ها"
                : "افزودن به علاقه‌مندی‌ها"
            }
          />
        </div>
      </div>
      {available && availableStock <= 3 && (
        <p className="text-xs text-danger">
          تنها {availableStock.toLocaleString("fa-IR")} عدد باقی مانده
        </p>
      )}
    </div>
  );
}

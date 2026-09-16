"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatters";
import type { CartItem as CartItemType } from "@/types/cart";
import { cn } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

export default function CartItem({ item, className }: CartItemProps) {
  const { increment, decrement, removeItem } = useCart();

  const maxQuantity = Math.min(10, item.product.stock);

  return (
    <article
      className={cn(
        "flex gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0",
        className,
      )}
    >
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-surface sm:size-28">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-foreground">
              {item.product.name}
            </h3>

            {item.variant && (
              <p className="mt-1 text-xs text-muted">
                {item.variant.name}: {item.variant.value}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label={`حذف ${item.product.name}`}
            onClick={() => removeItem(item.productId, item.variantId)}
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-danger/10 hover:text-danger"
          >
            <Trash2 className="size-3.5" strokeWidth={1.7} />
          </button>
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="flex h-8 items-center rounded-full border border-border bg-surface">
            <button
              type="button"
              aria-label="کاهش تعداد"
              onClick={() => decrement(item.productId, item.variantId)}
              className="flex size-8 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground"
            >
              <Minus className="size-3" strokeWidth={1.8} />
            </button>

            <span className="min-w-7 text-center text-xs font-medium text-foreground">
              {item.quantity.toLocaleString("fa-IR")}
            </span>

            <button
              type="button"
              aria-label="افزایش تعداد"
              disabled={item.quantity >= maxQuantity}
              onClick={() => increment(item.productId, item.variantId)}
              className="flex size-8 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus className="size-3" strokeWidth={1.8} />
            </button>
          </div>

          <p className="text-sm font-semibold text-foreground">
            {formatPrice(item.totalPrice)}
          </p>
        </div>
      </div>
    </article>
  );
}

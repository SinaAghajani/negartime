"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, X } from "lucide-react";

import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

import CartItem from "./cart-item";
import CartSummary from "./cart-summary";
import EmptyCart from "./empty-cart";

interface CartDrawerProps {
  className?: string;
}

export default function CartDrawer({ className }: CartDrawerProps) {
  const { items, isOpen, closeCart, itemCount } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn("fixed inset-0 z-150", className)}
      role="dialog"
      aria-modal="true"
      aria-label="سبد خرید"
    >
      <button
        type="button"
        aria-label="بستن سبد خرید"
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-border bg-background shadow-2xl">
        <div className="flex min-h-20 shrink-0 items-center justify-between border-b border-border px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-surface">
              <ShoppingBag className="size-4.5 text-accent" strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-foreground">
                سبد خرید
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                {itemCount.toLocaleString("fa-IR")} کالا
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="بستن"
            onClick={closeCart}
            className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-foreground"
          >
            <X className="size-5" strokeWidth={1.7} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-5 sm:p-6">
            <EmptyCart />
          </div>
        ) : (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="shrink-0 border-t border-border bg-surface/60 px-5 py-5 sm:px-6">
              <CartSummary compact />

              <Link
                href="/cart"
                onClick={closeCart}
                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                مشاهده سبد خرید
                <ArrowLeft className="size-4" />
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

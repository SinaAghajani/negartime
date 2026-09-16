"use client";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import EmptyCart from "@/components/cart/empty-cart";
export default function CartPage() {
  const { items, itemCount, clearCart } = useCart();
  if (!items.length) {
    return (
      <main>
        <section className="border-b border-border">
          <div className="container py-14 sm:py-20">
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Shopping Bag
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground">
              سبد خرید
            </h1>
          </div>
        </section>
        <section className="section">
          <div className="container flex justify-center">
            <EmptyCart />
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-12 sm:py-16">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowRight className="size-4" /> ادامه خرید
          </Link>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                Shopping Bag
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-foreground">
                سبد خرید
              </h1>
            </div>
            <span className="text-sm text-muted">
              {itemCount.toLocaleString("fa-IR")} کالا
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                محصولات انتخاب‌شده
              </p>
              <button
                type="button"
                onClick={clearCart}
                className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-danger"
              >
                <Trash2 className="size-3.5" /> حذف همه
              </button>
            </div>
            <div className="space-y-3">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-foreground">
                خلاصه سفارش
              </h2>
              <CartSummary />
              <button
                type="button"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                ادامه فرایند خرید <ShoppingBag className="size-4" />
              </button>
              <p className="mt-4 text-center text-[10px] leading-5 text-muted">
                پرداخت آنلاین در نسخه بعدی به این بخش متصل خواهد شد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

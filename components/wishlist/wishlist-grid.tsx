"use client";

import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

import { useWishlist } from "@/hooks/use-wishlist";
import ProductCard from "@/components/product/product-card";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

interface WishlistGridProps {
  className?: string;
}

export default function WishlistGrid({ className }: WishlistGridProps) {
  const { items, isEmpty, clearWishlist } = useWishlist();

  if (isEmpty) {
    return (
      <section className={className}>
        <Container>
          <div className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
            <div className="flex size-20 items-center justify-center rounded-full border border-border bg-surface">
              <Heart className="size-8 text-muted" strokeWidth={1.4} />
            </div>
            <h1 className="mt-7 text-2xl font-semibold text-foreground sm:text-3xl">
              لیست علاقه‌مندی‌ها خالی است
            </h1>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              ساعت‌هایی که دوست دارید را به لیست علاقه‌مندی‌ها اضافه کنید تا
              بعداً به‌راحتی به آن‌ها دسترسی داشته باشید.
            </p>
            <Link href="/shop" className="mt-7">
              <Button variant="accent" size="lg">
                مشاهده فروشگاه
                <ArrowLeft className="size-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={className}>
      <Container>
        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
              Wishlist
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              علاقه‌مندی‌های شما
            </h1>
            <p className="mt-2 text-sm text-muted">
              {items.length.toLocaleString("fa-IR")} محصول در لیست شما
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearWishlist}
            className="self-start sm:self-auto"
          >
            پاک کردن لیست
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

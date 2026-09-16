import type { Metadata } from "next";
import WishlistGrid from "@/components/wishlist/wishlist-grid";
import { createPageMetadata } from "@/config/seo";
export const metadata: Metadata = createPageMetadata(
  "علاقه‌مندی‌ها",
  "محصولات مورد علاقه شما در NegarTime.",
  "/wishlist",
);
export default function WishlistPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-14 sm:py-20">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Your Selection
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            علاقه‌مندی‌ها
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            مدل‌هایی که برای بررسی و خرید در آینده ذخیره کرده‌اید.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <WishlistGrid />
        </div>
      </section>
    </main>
  );
}

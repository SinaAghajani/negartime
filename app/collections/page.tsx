import type { Metadata } from "next";
import CollectionGrid from "@/components/collection/collection-grid";
import { collections } from "@/data/collections";
import { createPageMetadata } from "@/config/seo";
export const metadata: Metadata = createPageMetadata(
  "کالکشن‌ها",
  "کالکشن‌های منتخب NegarTime؛ از طراحی‌های کلاسیک تا مدل‌های مدرن و جسورانه.",
  "/collections",
);
export default function CollectionsPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-16 sm:py-24">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            The Collections
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            کالکشن‌های NegarTime
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-muted">
            هر کالکشن داستانی متفاوت از طراحی، فرم و شخصیت را روایت می‌کند.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CollectionGrid collections={collections} />
        </div>
      </section>
    </main>
  );
}

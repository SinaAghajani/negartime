import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import ProductCard from "./product-card";
interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: 2 | 3 | 4;
}
const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};
export default function ProductGrid({
  products,
  className,
  columns = 4,
}: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-surface/40 px-6 py-20 text-center">
        <p className="text-sm font-medium text-foreground">محصولی پیدا نشد</p>
        <p className="mt-2 text-xs text-muted">
          در حال حاضر محصولی با این مشخصات موجود نیست.
        </p>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-5 gap-y-10",
        columnClasses[columns],
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/types/product";
import ProductGrid from "./product-grid";
interface RelatedProductsProps {
  product: Product;
  limit?: number;
}
export default function RelatedProducts({
  product,
  limit = 4,
}: RelatedProductsProps) {
  const related = products
    .filter((item) => item.id !== product.id)
    .map((item) => ({
      product: item,
      score:
        (item.categoryId === product.categoryId ? 4 : 0) +
        (item.collectionId && item.collectionId === product.collectionId
          ? 3
          : 0) +
        (item.featured === product.featured ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ product: item }) => item);
  if (!related.length) return null;
  return (
    <section className="section-sm border-t border-border">
      <div className="container">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              You May Also Like
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              محصولات مرتبط
            </h2>
          </div>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            مشاهده همه
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
        <ProductGrid products={related} columns={4} />
      </div>
    </section>
  );
}

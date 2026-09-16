"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { formatStock } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import ProductPrice from "./product-price";
interface ProductCardProps {
  product: Product;
  className?: string;
}
export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wished = isInWishlist(product.id);
  const image = product.image || product.images[0];
  const handleAddToCart = () => {
    if (!product.inStock || product.stock <= 0) return;
    addItem({ product, quantity: 1 });
    openCart();
  };
  return (
    <article className={cn("group relative min-w-0", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <Link
          href={`/shop/${product.slug}`}
          className="relative block aspect-4/5 overflow-hidden"
          aria-label={`مشاهده ${product.name}`}
        >
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          {product.badge && (
            <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
              {product.badge}
            </span>
          )}
          {product.isNew && !product.badge && (
            <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-background/70 px-3 py-1.5 text-[10px] font-medium text-accent backdrop-blur-md">
              جدید
            </span>
          )}
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            wished ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
          aria-pressed={wished}
          className={cn(
            "absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300",
            wished
              ? "border-danger/30 bg-danger/10 text-danger"
              : "border-white/10 bg-black/40 text-white hover:border-accent/40 hover:text-accent",
          )}
        >
          <Heart className={cn("size-4", wished && "fill-current")} />
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock || product.stock <= 0}
          aria-label="افزودن به سبد خرید"
          className="absolute bottom-4 left-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-accent text-background opacity-0 shadow-lg transition-all duration-300 hover:bg-accent-light group-hover:translate-y-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingBag className="size-4" />
        </button>
      </div>
      <div className="px-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/shop/${product.slug}`}
              className="block truncate text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
            >
              {product.name}
            </Link>
            {product.tags?.[0] && (
              <p className="mt-1 truncate text-[11px] text-muted">
                {product.tags[0]}
              </p>
            )}
          </div>
          <span
            className={cn(
              "shrink-0 text-[10px]",
              product.inStock ? "text-success" : "text-danger",
            )}
          >
            {formatStock(product.stock)}
          </span>
        </div>
        <ProductPrice product={product} className="mt-3" compact />
      </div>
    </article>
  );
}

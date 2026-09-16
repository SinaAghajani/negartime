import { Star } from "lucide-react";
import { formatRating, formatStock } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import Badge from "@/components/ui/badge";
interface ProductInfoProps {
  product: Product;
  className?: string;
}
export default function ProductInfo({ product, className }: ProductInfoProps) {
  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-2">
        {product.badge && <Badge>{product.badge}</Badge>}
        {product.isNew && <Badge variant="outline">جدید</Badge>}
      </div>
      <div>
        <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        {product.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted">
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Star className="size-4 fill-accent text-accent" />
          <span className="text-sm font-medium text-foreground">
            {formatRating(product.rating)}
          </span>
          <span className="text-xs text-muted">
            ({product.reviewCount.toLocaleString("fa-IR")} نظر)
          </span>
        </div>
        <span className="h-4 w-px bg-border" />
        <span
          className={cn(
            "text-xs",
            product.inStock ? "text-success" : "text-danger",
          )}
        >
          {formatStock(product.stock)}
        </span>
      </div>
      <p className="max-w-2xl text-sm leading-8 text-muted">
        {product.description}
      </p>
    </div>
  );
}

import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
interface ShopHeaderProps {
  title?: string;
  description?: string;
  productCount?: number;
  onMobileFilterClick?: () => void;
  className?: string;
}
export default function ShopHeader({
  title = "فروشگاه",
  description = "مجموعه‌ای منتخب از ساعت‌های ماندگار، مدرن و لوکس NegarTime.",
  productCount,
  onMobileFilterClick,
  className,
}: ShopHeaderProps) {
  return (
    <header className={cn("border-b border-border", className)}>
      <div className="container py-10 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              NegarTime Collection
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
            {typeof productCount === "number" && (
              <span className="text-xs text-muted">
                {productCount.toLocaleString("fa-IR")} محصول
              </span>
            )}
            {onMobileFilterClick && (
              <button
                type="button"
                onClick={onMobileFilterClick}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden"
              >
                <SlidersHorizontal className="size-4" /> فیلترها
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

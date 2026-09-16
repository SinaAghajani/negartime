"use client";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatters";
import { SHIPPING } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CartSummaryProps {
  compact?: boolean;
  className?: string;
}

export default function CartSummary({
  compact = false,
  className,
}: CartSummaryProps) {
  const { subtotal } = useCart();

  const shipping =
    subtotal >= SHIPPING.FREE_THRESHOLD
      ? 0
      : subtotal > 0
        ? SHIPPING.STANDARD_COST
        : 0;

  const total = subtotal + shipping;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="text-muted">جمع محصولات</span>
        <span className="font-medium text-foreground">
          {formatPrice(subtotal)}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="text-muted">هزینه ارسال</span>
        <span
          className={cn(
            "font-medium",
            shipping === 0 ? "text-success" : "text-foreground",
          )}
        >
          {shipping === 0 ? "رایگان" : formatPrice(shipping)}
        </span>
      </div>
      {!compact && subtotal > 0 && subtotal < SHIPPING.FREE_THRESHOLD && (
        <p className="rounded-xl bg-accent/10 px-3 py-2 text-xs leading-6 text-accent">
          با خرید {formatPrice(SHIPPING.FREE_THRESHOLD - subtotal)} بیشتر، ارسال
          برای شما رایگان می‌شود.
        </p>
      )}
      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-foreground">
            مبلغ نهایی
          </span>

          <span className="text-lg font-semibold text-accent">
            {formatPrice(total)}
          </span>
        </div>
      </div>
    </div>
  );
}

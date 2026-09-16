"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import ShopFilters, { type ShopFilterState } from "./shop-filters";
interface MobileFiltersProps {
  open: boolean;
  value: ShopFilterState;
  onChange: (value: ShopFilterState) => void;
  onClose: () => void;
  className?: string;
}
export default function MobileFilters({
  open,
  value,
  onChange,
  onClose,
  className,
}: MobileFiltersProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className={cn("fixed inset-0 z-160 lg:hidden", className)}
      role="dialog"
      aria-modal="true"
      aria-label="فیلتر محصولات"
    >
      <button
        type="button"
        aria-label="بستن فیلترها"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl">
        <div className="flex min-h-20 shrink-0 items-center justify-between border-b border-border px-5">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              Filters
            </p>
            <h2 className="mt-1 text-base font-semibold text-foreground">
              فیلتر محصولات
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
          <ShopFilters value={value} onChange={onChange} />
        </div>
        <div className="shrink-0 border-t border-border bg-surface/70 p-5 backdrop-blur-xl">
          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
          >
            نمایش نتایج
          </button>
        </div>
      </aside>
    </div>
  );
}

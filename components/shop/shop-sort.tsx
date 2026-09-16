"use client";
import { ChevronDown, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_SORT_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
export type ProductSortValue = (typeof PRODUCT_SORT_OPTIONS)[number]["value"];
interface ShopSortProps {
  value?: ProductSortValue;
  onChange?: (value: ProductSortValue) => void;
  className?: string;
}
export default function ShopSort({
  value = "featured",
  onChange,
  className,
}: ShopSortProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selected =
    PRODUCT_SORT_OPTIONS.find((option) => option.value === value) ??
    PRODUCT_SORT_OPTIONS[0];
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const selectOption = (nextValue: ProductSortValue) => {
    setOpen(false);
    onChange?.(nextValue);
  };
  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex h-11 min-w-44 items-center justify-between gap-4 rounded-full border border-border bg-surface px-4 text-sm text-foreground transition-colors duration-300 hover:border-accent/50"
      >
        <span className="text-muted">مرتب‌سازی:</span>
        <span className="font-medium">{selected.label}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="مرتب‌سازی محصولات"
          className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-full overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-2xl"
        >
          {PRODUCT_SORT_OPTIONS.map((option) => {
            const selectedOption = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selectedOption}
                onClick={() => selectOption(option.value)}
                className={cn(
                  "flex w-full items-center justify-between gap-5 rounded-xl px-4 py-3 text-right text-sm transition-colors duration-200",
                  selectedOption
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-background",
                )}
              >
                <span>{option.label}</span>
                {selectedOption && <Check className="size-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

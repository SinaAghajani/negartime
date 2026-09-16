"use client";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { cn } from "@/lib/utils";
export interface ShopFilterState {
  category: string;
  collection: string;
  availability: "all" | "in-stock";
  minPrice: string;
  maxPrice: string;
}
interface ShopFiltersProps {
  value: ShopFilterState;
  onChange: (value: ShopFilterState) => void;
  className?: string;
}
interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-5 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-sm font-medium text-foreground"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 text-muted transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}
export default function ShopFilters({
  value,
  onChange,
  className,
}: ShopFiltersProps) {
  const update = <K extends keyof ShopFilterState>(
    key: K,
    nextValue: ShopFilterState[K],
  ) => {
    onChange({ ...value, [key]: nextValue });
  };
  const reset = () => {
    onChange({
      category: "",
      collection: "",
      availability: "all",
      minPrice: "",
      maxPrice: "",
    });
  };
  const hasFilters =
    Boolean(value.category) ||
    Boolean(value.collection) ||
    value.availability !== "all" ||
    Boolean(value.minPrice) ||
    Boolean(value.maxPrice);
  return (
    <aside className={cn("w-full", className)}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Refine
          </p>
          <h2 className="mt-2 text-lg font-semibold text-foreground">
            فیلتر محصولات
          </h2>
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-danger"
          >
            <RotateCcw className="size-3.5" /> پاک کردن
          </button>
        )}
      </div>
      <FilterSection title="دسته‌بندی">
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => update("category", "")}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition-colors",
              !value.category
                ? "bg-accent/10 text-accent"
                : "text-muted hover:bg-surface hover:text-foreground",
            )}
          >
            <span>همه دسته‌بندی‌ها</span>
            {!value.category && (
              <span className="size-1.5 rounded-full bg-accent" />
            )}
          </button>
          {categories.map((category) => {
            const selected = value.category === category.slug;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => update("category", category.slug)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition-colors",
                  selected
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface hover:text-foreground",
                )}
              >
                <span>{category.name}</span>
                {selected && (
                  <span className="size-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>
      <FilterSection title="کالکشن">
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => update("collection", "")}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition-colors",
              !value.collection
                ? "bg-accent/10 text-accent"
                : "text-muted hover:bg-surface hover:text-foreground",
            )}
          >
            <span>همه کالکشن‌ها</span>
            {!value.collection && (
              <span className="size-1.5 rounded-full bg-accent" />
            )}
          </button>
          {collections.map((collection) => {
            const selected = value.collection === collection.slug;
            return (
              <button
                key={collection.id}
                type="button"
                onClick={() => update("collection", collection.slug)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition-colors",
                  selected
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface hover:text-foreground",
                )}
              >
                <span>{collection.name}</span>
                {selected && (
                  <span className="size-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>
      <FilterSection title="قیمت">
        <div className="grid grid-cols-2 gap-2">
          <label className="block">
            <span className="mb-2 block text-[11px] text-muted">حداقل</span>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={value.minPrice}
              onChange={(event) => update("minPrice", event.target.value)}
              placeholder="۰"
              className="h-11 w-full rounded-xl border border-border bg-surface px-3 text-xs text-foreground outline-none transition-colors focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] text-muted">حداکثر</span>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={value.maxPrice}
              onChange={(event) => update("maxPrice", event.target.value)}
              placeholder="∞"
              className="h-11 w-full rounded-xl border border-border bg-surface px-3 text-xs text-foreground outline-none transition-colors focus:border-accent"
            />
          </label>
        </div>
      </FilterSection>
      <FilterSection title="موجودی">
        <div className="space-y-2">
          {[
            { value: "all" as const, label: "همه محصولات" },
            { value: "in-stock" as const, label: "فقط محصولات موجود" },
          ].map((option) => {
            const selected = value.availability === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => update("availability", option.value)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition-colors",
                  selected
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface hover:text-foreground",
                )}
              >
                <span>{option.label}</span>
                {selected && (
                  <span className="size-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>
    </aside>
  );
}

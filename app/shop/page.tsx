"use client";
import { useMemo, useState } from "react";
import ProductGrid from "@/components/product/product-grid";
import MobileFilters from "@/components/shop/mobile-filters";
import SearchBar from "@/components/shop/search-bar";
import ShopFilters, {
  type ShopFilterState,
} from "@/components/shop/shop-filters";
import ShopHeader from "@/components/shop/shop-header";
import ShopSort, { type ProductSortValue } from "@/components/shop/shop-sort";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
const initialFilters: ShopFilterState = {
  category: "",
  collection: "",
  availability: "all",
  minPrice: "",
  maxPrice: "",
};
export default function ShopPage() {
  const [filters, setFilters] = useState<ShopFilterState>(initialFilters);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ProductSortValue>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const minPrice = Number(filters.minPrice);
    const maxPrice = Number(filters.maxPrice);
    const result = products.filter((product) => {
      const category = categories.find(
        (item) => item.slug === filters.category,
      );
      const collection = collections.find(
        (item) => item.slug === filters.collection,
      );
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.tags?.some((tag) =>
          tag.toLowerCase().includes(normalizedSearch),
        );
      const matchesCategory = !category || product.categoryId === category.id;
      const matchesCollection =
        !collection || product.collectionId === collection.id;
      const matchesAvailability =
        filters.availability === "all" ||
        (product.inStock && product.stock > 0);
      const matchesMinPrice =
        !filters.minPrice ||
        (!Number.isNaN(minPrice) && product.price >= minPrice);
      const matchesMaxPrice =
        !filters.maxPrice ||
        (!Number.isNaN(maxPrice) && product.price <= maxPrice);
      return (
        matchesSearch &&
        matchesCategory &&
        matchesCollection &&
        matchesAvailability &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
    return result.sort((a, b) => {
      switch (sort) {
        case "newest":
          return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name, "fa");
        case "featured":
        default:
          return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }
    });
  }, [filters, search, sort]);
  return (
    <main>
      <ShopHeader productCount={filteredProducts.length} />
      <div className="container py-8">
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SearchBar
            value={search}
            onChange={setSearch}
            className="lg:max-w-md"
          />
          <div className="flex justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground lg:hidden"
            >
              فیلترها
            </button>
            <ShopSort value={sort} onChange={setSort} />
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <ShopFilters value={filters} onChange={setFilters} />
          </div>
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs text-muted">
                نمایش {filteredProducts.length.toLocaleString("fa-IR")}
                محصول
              </p>
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-xs text-accent"
                >
                  پاک کردن جستجو
                </button>
              )}
            </div>
            <ProductGrid products={filteredProducts} columns={4} />
          </div>
        </div>
      </div>
      <MobileFilters
        open={mobileFiltersOpen}
        value={filters}
        onChange={setFilters}
        onClose={() => setMobileFiltersOpen(false)}
      />
    </main>
  );
}

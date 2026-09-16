import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/product/product-grid";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { createPageMetadata } from "@/config/seo";
interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    return createPageMetadata("دسته‌بندی پیدا نشد");
  }
  return createPageMetadata(
    category.name,
    category.description,
    `/categories/${category.slug}`,
  );
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    notFound();
  }
  const categoryProducts = getProductsByCategory(category.id);
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container grid min-h-105 items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-3.5" /> همه دسته‌بندی‌ها
            </Link>
            <p className="mt-8 text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Category
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-8 text-muted">
              {category.description}
            </p>
            <p className="mt-6 text-xs text-muted">
              {categoryProducts.length.toLocaleString("fa-IR")} محصول
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src={category.image}
              alt={category.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProductGrid products={categoryProducts} columns={4} />
        </div>
      </section>
    </main>
  );
}

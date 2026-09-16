import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="section-sm border-y border-border bg-surface/40">
      <div className="container">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Explore
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              بر اساس سبک
            </h2>
          </div>
          <Link
            href="/categories"
            className="group hidden items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent sm:inline-flex"
          >
            همه دسته‌بندی‌ها
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-sm font-medium text-white">
                    {category.name}
                  </h3>

                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-white/60 transition-colors duration-300 group-hover:text-accent">
                    مشاهده
                    <ArrowLeft className="size-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/categories"
          className="mt-5 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent sm:hidden"
        >
          همه دسته‌بندی‌ها
          <ArrowLeft className="size-4" />
        </Link>
      </div>
    </section>
  );
}

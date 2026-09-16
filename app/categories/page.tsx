import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/data/categories";
import { createPageMetadata } from "@/config/seo";
import Container from "@/components/ui/container";

export const metadata: Metadata = createPageMetadata(
  "دسته‌بندی ساعت‌ها",
  "دسته‌بندی‌های ساعت NegarTime؛ از ساعت‌های مردانه و زنانه تا مدل‌های کلاسیک، مدرن، لوکس و نسخه‌های محدود.",
  "/categories",
);

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent">
              NEGARTIME
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              دسته‌بندی ساعت‌ها
            </h1>

            <p className="mt-5 text-sm leading-8 text-muted md:text-base">
              مجموعه‌ای از ساعت‌های منتخب NegarTime را بر اساس سبک، طراحی و
              کاربرد مورد نظر خود کشف کنید.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-surface-muted">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {category.name}
                      </h2>

                      {category.productCount !== undefined && (
                        <p className="mt-1 text-xs text-white/70">
                          {new Intl.NumberFormat("fa-IR").format(
                            category.productCount,
                          )}{" "}
                          محصول
                        </p>
                      )}
                    </div>

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-x-1">
                      <ArrowLeft className="size-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="line-clamp-2 text-sm leading-7 text-muted">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/product/product-card";

export default function FeaturedProducts() {
  const products = featuredProducts.slice(0, 8);

  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Curated Selection
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              انتخاب‌های ویژه
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              مدل‌هایی که برای نمایش شخصیت، ظرافت و سلیقه متفاوت انتخاب شده‌اند.
            </p>
          </div>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
          >
            مشاهده همه
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.06, 0.24),
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

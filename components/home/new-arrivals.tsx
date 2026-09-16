"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { newArrivals } from "@/data/products";
import ProductCard from "@/components/product/product-card";

export default function NewArrivals() {
const products = newArrivals.slice(0, 4);

return ( <section className="section-sm"> <div className="container"> <div className="mb-9 flex items-end justify-between gap-5"> <div> <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
Just In </p>

        <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
          تازه‌واردها
        </h2>
      </div>

      <Link
        href="/shop?sort=newest"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
      >
        مشاهده همه
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
      </Link>
    </div>

    <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
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

"use client";

import Link from "next/link";
import { ArrowLeft, Move3d } from "lucide-react";
import { motion } from "framer-motion";

import WatchScene from "@/components/three/watch-scene";

export default function Showcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.08),transparent_40%)]" />
      <div className="container relative grid items-center gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 h-100 sm:h-130 lg:order-1"
        >
          <WatchScene
            modelPath="/models/watches/default.glb"
            className="size-full"
            cameraPosition={[0, 0, 5]}
            modelScale={1.2}
            enableControls
            enableEnvironment
            enableShadows
          />

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2.5 backdrop-blur-xl">
            <Move3d className="size-3.5 text-accent" />
            <span className="text-[10px] text-muted">
              برای چرخاندن ساعت حرکت دهید
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 max-w-xl lg:order-2"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            See It Differently
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            جزئیات را
            <span className="gold-text block">از نزدیک ببین.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
            در NegarTime فقط به عکس‌ها اکتفا نمی‌کنیم. تجربه‌ای تعاملی برای کشف
            فرم، متریال و جزئیات ساعت‌ها ساخته‌ایم تا انتخاب شما با اطمینان
            بیشتری همراه باشد.
          </p>
          <Link
            href="/shop"
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#f5f1e8",
              color: "#0a0a0a",
            }}
          >
            کشف مجموعه
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

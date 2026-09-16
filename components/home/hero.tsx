"use client";

import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";

import WatchScene from "@/components/three/watch-scene";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-112px)] overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(198,161,91,0.12),transparent_35%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.04),transparent_30%)]" />
      <div className="container relative grid min-h-[calc(100vh-112px)] grid-cols-1 items-center gap-8 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:py-10">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" />
              NegarTime
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              زمان را
              <span className="gold-text block">با سبک خودت</span>
              زندگی کن.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-muted sm:text-base">
              مجموعه‌ای منتخب از ساعت‌هایی که هنر طراحی، دقت مهندسی و زیبایی
              ماندگار را در یک تجربه متفاوت کنار هم قرار می‌دهند.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/shop"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                مشاهده فروشگاه
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>

              <Link
                href="/collections"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
              >
                کشف کالکشن‌ها
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-border py-5">
              <div className="border-l border-border px-4 first:pr-0">
                <p className="text-lg font-semibold text-foreground">100%</p>
                <p className="mt-1 text-[11px] text-muted">انتخاب دقیق</p>
              </div>

              <div className="border-l border-border px-4">
                <p className="text-lg font-semibold text-foreground">24/7</p>
                <p className="mt-1 text-[11px] text-muted">همراه شما</p>
              </div>

              <div className="px-4 pl-0">
                <p className="text-lg font-semibold text-foreground">Premium</p>
                <p className="mt-1 text-[11px] text-muted">تجربه خرید</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative h-105 sm:h-130 lg:h-170"
        >
          <div className="absolute inset-1/2 size-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px] sm:size-107.5" />

          <WatchScene
            modelPath="/models/watches/default.glb"
            className="relative z-10 size-full"
            cameraPosition={[0, 0, 5.2]}
            modelScale={1.35}
            enableControls
            enableEnvironment
            enableShadows
          />

          <div className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
            <div className="flex items-center gap-3 [writing-mode:vertical-rl]">
              <span className="text-[9px] tracking-[0.35em] text-muted uppercase">
                Where Time Meets Style
              </span>
              <span className="h-16 w-px bg-accent/50" />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl">
            <span className="flex size-7 items-center justify-center rounded-full bg-accent text-background">
              <Play className="-mr-px size-3 fill-current" />
            </span>
            <span className="text-[11px] font-medium text-foreground">
              تجربه سه‌بعدی
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

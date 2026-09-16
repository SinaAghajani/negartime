"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="section overflow-hidden border-y border-border bg-surface/40">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-background">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(198,161,91,0.2),transparent_32%),linear-gradient(145deg,#151515,#080808)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex size-56 items-center justify-center rounded-full border border-accent/30 sm:size-72">
                  <div className="absolute inset-6 rounded-full border border-border" />
                  <div className="absolute inset-12 rounded-full border border-accent/20" />

                  <div className="text-center">
                    <p className="text-4xl font-semibold tracking-widest text-foreground">
                      NT
                    </p>
                    <p className="mt-2 text-[9px] tracking-[0.3em] text-accent uppercase">
                      Since 2026
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 left-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[10px] tracking-[0.25em] text-muted uppercase">
                  NegarTime
                </span>
                <span className="text-[10px] text-muted">
                  Where Time Meets Style.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex size-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Sparkles className="size-5" strokeWidth={1.5} />
            </div>

            <p className="mt-7 text-xs font-medium tracking-[0.25em] text-accent uppercase">
              The NegarTime Story
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              زمان فقط چیزی نیست که
              <span className="gold-text block">می‌گذرد.</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-muted">
              <p>
                ما باور داریم یک ساعت فقط وسیله‌ای برای نمایش زمان نیست؛ بخشی از
                شخصیت، سلیقه و داستان هر انسان است.
              </p>

              <p>
                NegarTime با نگاه به طراحی معاصر و احترام به ظرافت کلاسیک،
                مجموعه‌ای را انتخاب می‌کند که بتواند سال‌ها بخشی از استایل شما
                باقی بماند.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
            >
              داستان NegarTime
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

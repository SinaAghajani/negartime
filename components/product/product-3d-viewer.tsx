"use client";
import { Box, Rotate3d } from "lucide-react";
import { useState } from "react";
import WatchScene from "@/components/three/watch-scene";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
interface Product3DViewerProps {
  product: Product;
  className?: string;
}
export default function Product3DViewer({
  product,
  className,
}: Product3DViewerProps) {
  const [active, setActive] = useState(true);
  if (!product.modelPath) return null;
  return (
    <section
      className={cn("rounded-2xl border border-border bg-surface", className)}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Rotate3d className="size-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              نمای سه‌بعدی
            </h2>
            <p className="mt-1 text-[11px] text-muted">
              مدل را بچرخانید و جزئیات را بررسی کنید
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setActive((current) => !current)}
          className={cn(
            "flex size-9 items-center justify-center rounded-full border transition-colors",
            active
              ? "border-accent/30 bg-accent/10 text-accent"
              : "border-border text-muted hover:text-foreground",
          )}
          aria-label={
            active ? "غیرفعال کردن نمایش سه‌بعدی" : "فعال کردن نمایش سه‌بعدی"
          }
        >
          <Box className="size-4" />
        </button>
      </div>
      <div className="relative h-105 sm:h-130">
        {active ? (
          <>
            <WatchScene
              modelPath={product.modelPath}
              className="size-full"
              cameraPosition={[0, 0, 5]}
              modelScale={1.2}
              enableControls
              enableEnvironment
              enableShadows
            />
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/75 px-4 py-2 text-[10px] text-muted backdrop-blur-xl">
              برای چرخاندن ساعت حرکت دهید
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            نمایش سه‌بعدی غیرفعال است
          </div>
        )}
      </div>
    </section>
  );
}

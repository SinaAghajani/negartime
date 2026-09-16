"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import Modal from "@/components/ui/modal";
interface ProductGalleryProps {
  product: Product;
  className?: string;
}
export default function ProductGallery({
  product,
  className,
}: ProductGalleryProps) {
  const images = Array.from(
    new Set([product.image, ...product.images].filter(Boolean)),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const activeImage = images[activeIndex] ?? product.image;
  const previous = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };
  const next = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (event.key === "ArrowLeft") next();
      if (event.key === "ArrowRight") previous();
      if (event.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });
  return (
    <>
      <div className={cn("space-y-3", className)}>
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface">
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            aria-label="نمایش تصویر در اندازه بزرگ"
            className="absolute left-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 hover:border-accent hover:text-accent group-hover:opacity-100"
          >
            <Maximize2 className="size-4" />
          </button>
          <div className="relative aspect-square">
            <Image
              src={activeImage}
              alt={`${product.name} - تصویر ${activeIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500"
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="تصویر قبلی"
                className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/75 text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="تصویر بعدی"
                className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/75 text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="size-4" />
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`انتخاب تصویر ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-xl border bg-surface transition-all duration-300",
                  activeIndex === index
                    ? "border-accent"
                    : "border-border opacity-70 hover:border-accent/50 hover:opacity-100",
                )}
              >
                <Image
                  src={image}
                  alt={`${product.name} - تصویر کوچک ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      <Modal
        open={isFullscreen}
        onClose={() => setIsFullscreen(false)}
        className="max-w-6xl"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-background sm:aspect-4/3">
          <Image
            src={activeImage}
            alt={`${product.name} - تصویر بزرگ`}
            fill
            sizes="90vw"
            className="object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="تصویر قبلی"
                className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-foreground hover:border-accent hover:text-accent"
              >
                <ChevronRight className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="تصویر بعدی"
                className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-foreground hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="size-5" />
              </button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

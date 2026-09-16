import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Collection } from "@/types/collection";

interface CollectionHeroProps {
  collection: Collection;
}

export default function CollectionHero({ collection }: CollectionHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative min-h-105 sm:min-h-125 lg:min-h-150">
        <Image
          src={collection.bannerImage ?? collection.image}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/20" />

        <div className="container relative flex min-h-105 items-end py-12 sm:min-h-125 sm:py-16 lg:min-h-150 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
              NegarTime Collection
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {collection.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              {collection.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={`/shop?collection=${encodeURIComponent(collection.slug)}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                مشاهده محصولات
                <ArrowLeft className="size-4" />
              </Link>

              <Link
                href="/collections"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
              >
                همه کالکشن‌ها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

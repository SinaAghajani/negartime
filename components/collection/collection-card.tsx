import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Collection } from "@/types/collection";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
  className?: string;
}

export default function CollectionCard({
  collection,
  className,
}: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-border bg-surface",
        className,
      )}
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-[10px] font-medium tracking-[0.25em] text-accent uppercase">
            {collection.name}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            {collection.title}
          </h3>

          <p className="mt-2 max-w-md text-xs leading-6 text-white/70 sm:text-sm">
            {collection.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white transition-colors duration-300 group-hover:text-accent">
            مشاهده کالکشن
            <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

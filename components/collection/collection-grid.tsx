import type { Collection } from "@/types/collection";

import CollectionCard from "./collection-card";

interface CollectionGridProps {
  collections: Collection[];
  className?: string;
}

export default function CollectionGrid({
  collections,
  className,
}: CollectionGridProps) {
  if (collections.length === 0) {
    return (
      <div className={className} role="status">
        <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">
          <p className="text-sm text-muted">کالکشنی برای نمایش وجود ندارد.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}
    >
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}

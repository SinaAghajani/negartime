import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { collections } from "@/data/collections";
import CollectionCard from "@/components/collection/collection-card";

export default function CollectionsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              The Collections
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              داستان هر لحظه
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              هر کالکشن یک زبان بصری متفاوت دارد؛ از میراث کلاسیک تا طراحی‌های
              معاصر و جسورانه.
            </p>
          </div>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
          >
            مشاهده همه کالکشن‌ها
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {collections.slice(0, 4).map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-border bg-surface px-10 py-2.5">
      <div className="container flex min-h-8 items-center justify-center">
        <Link
          href="/shop"
          className="group inline-flex items-center gap-2 text-center text-xs font-medium text-muted transition-colors duration-300 hover:text-accent sm:text-sm"
        >
          <span>کالکشن جدید NegarTime را کشف کنید</span>
          <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
        <button
          type="button"
          aria-label="بستن اعلان"
          className="absolute left-4 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface-muted hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

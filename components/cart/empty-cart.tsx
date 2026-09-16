import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";

interface EmptyCartProps {
  title?: string;
  description?: string;
}

export default function EmptyCart({
  title = "سبد خرید شما خالی است",
  description = "محصولات مورد علاقه‌تان را انتخاب کنید و برای تکمیل خرید به سبد خرید اضافه کنید.",
}: EmptyCartProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      <div className="flex size-20 items-center justify-center rounded-full border border-border bg-surface">
        <ShoppingBag className="size-8 text-muted" strokeWidth={1.4} />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      <Link href="/shop" className="mt-6">
        <Button variant="accent" size="lg">
          مشاهده فروشگاه
          <ArrowLeft className="size-4" />
        </Button>
      </Link>
    </div>
  );
}

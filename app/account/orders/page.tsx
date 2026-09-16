import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, ShoppingBag, UserRound } from "lucide-react";
import { createPageMetadata } from "@/config/seo";
import Container from "@/components/ui/container";

export const metadata: Metadata = createPageMetadata(
  "سفارش‌های من",
  "مشاهده و پیگیری سفارش‌های ثبت‌شده در NegarTime.",
  "/account/orders",
);

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Link
                  href="/account"
                  className="transition-colors hover:text-accent"
                >
                  حساب کاربری
                </Link>

                <ArrowRight className="size-4" />

                <span>سفارش‌های من</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                سفارش‌های من
              </h1>

              <p className="mt-3 text-sm leading-7 text-muted">
                سفارش‌های ثبت‌شده و وضعیت ارسال آن‌ها را از این بخش پیگیری کنید.
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
            >
              <ShoppingBag className="size-4" />
              مشاهده فروشگاه
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-surface px-6 py-14 text-center md:px-10 md:py-20">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-surface-muted text-accent">
                <Package className="size-7" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
                هنوز سفارشی ثبت نشده است
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-8 text-muted">
                بعد از ثبت اولین سفارش، اطلاعات سفارش، وضعیت پرداخت و روند ارسال
                آن در این بخش نمایش داده خواهد شد.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                <ShoppingBag className="size-4" />
                شروع خرید
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/account"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <UserRound className="size-4" />
                بازگشت به حساب کاربری
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

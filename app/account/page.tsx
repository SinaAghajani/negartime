import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Package,
  Settings,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { createPageMetadata } from "@/config/seo";
import Container from "@/components/ui/container";

export const metadata: Metadata = createPageMetadata(
  "حساب کاربری",
  "مدیریت حساب کاربری، سفارش‌ها، علاقه‌مندی‌ها و اطلاعات شخصی در NegarTime.",
  "/account",
);

const accountItems = [
  {
    title: "سفارش‌های من",
    description: "مشاهده و پیگیری سفارش‌های ثبت‌شده",
    href: "/account/orders",
    icon: Package,
  },
  {
    title: "علاقه‌مندی‌ها",
    description: "مشاهده ساعت‌های ذخیره‌شده",
    href: "/wishlist",
    icon: Heart,
  },
  {
    title: "سبد خرید",
    description: "مشاهده محصولات انتخاب‌شده",
    href: "/cart",
    icon: ShoppingBag,
  },
  {
    title: "تنظیمات حساب",
    description: "مدیریت اطلاعات و تنظیمات حساب",
    href: "/account/settings",
    icon: Settings,
  },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <UserRound className="size-6" />
            </div>

            <span className="mt-6 block text-xs font-semibold tracking-[0.2em] text-accent">
              NEGARTIME
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              حساب کاربری
            </h1>

            <p className="mt-5 text-sm leading-8 text-muted md:text-base">
              حساب کاربری خود را مدیریت کنید و به سفارش‌ها، علاقه‌مندی‌ها و
              تنظیمات شخصی دسترسی داشته باشید.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-2xl border border-border bg-surface p-6 md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <UserRound className="size-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-foreground">
                      به NegarTime خوش آمدید
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                      برای مشاهده امکانات حساب کاربری وارد شوید.
                    </p>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
                >
                  ورود به حساب
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {accountItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-surface-muted text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                        <Icon className="size-5" />
                      </div>

                      <ArrowLeft className="size-5 text-muted transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
                    </div>

                    <h3 className="mt-6 font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

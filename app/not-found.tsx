import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full border border-border bg-surface">
          <Clock3 className="size-9 text-accent" strokeWidth={1.5} />
        </div>
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent uppercase">
          404
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          این صفحه پیدا نشد
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-8 text-muted sm:text-base">
          به نظر می‌رسد این صفحه دیگر وجود ندارد یا آدرس واردشده نادرست است.
          می‌توانید به فروشگاه NegarTime برگردید و مجموعه ساعت‌های ما را مشاهده
          کنید.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5f1e8] px-7 text-sm font-medium text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            بازگشت به خانه
            <ArrowLeft className="size-4" />
          </Link>

          <Link
            href="/shop"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            مشاهده فروشگاه
          </Link>
        </div>
        <div className="mt-16">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            NegarTime
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Where Time Meets Style.
          </p>
        </div>
      </section>
    </main>
  );
}

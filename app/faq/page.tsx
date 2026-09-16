import type { Metadata } from "next";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { createPageMetadata } from "@/config/seo";
import Container from "@/components/ui/container";

export const metadata: Metadata = createPageMetadata(
  "سوالات متداول",
  "پاسخ سوالات متداول درباره خرید، ارسال، پرداخت، گارانتی و خدمات پس از فروش NegarTime.",
  "/faq",
);

const faqGroups = [
  {
    title: "خرید و سفارش",
    items: [
      {
        question: "چطور می‌توانم از NegarTime خرید کنم؟",
        answer:
          "محصول مورد نظر خود را از فروشگاه انتخاب کنید، وارد صفحه محصول شوید و پس از انتخاب گزینه‌های موجود، آن را به سبد خرید اضافه کنید. سپس می‌توانید مراحل ثبت سفارش و پرداخت را تکمیل کنید.",
      },
      {
        question: "آیا امکان مقایسه ساعت‌ها وجود دارد؟",
        answer:
          "در نسخه فعلی تمرکز اصلی روی مشاهده مشخصات، تصاویر و جزئیات هر محصول است. قابلیت مقایسه محصولات می‌تواند در نسخه‌های بعدی به فروشگاه اضافه شود.",
      },
      {
        question: "آیا می‌توانم محصولی را به لیست علاقه‌مندی‌ها اضافه کنم؟",
        answer:
          "بله. با استفاده از آیکون قلب در کارت محصول یا صفحه محصول می‌توانید ساعت مورد علاقه خود را به لیست علاقه‌مندی‌ها اضافه کنید.",
      },
      {
        question: "چطور وضعیت موجودی محصول را بررسی کنم؟",
        answer:
          "وضعیت موجودی در صفحه هر محصول نمایش داده می‌شود. در صورت ناموجود بودن محصول، امکان افزودن آن به سبد خرید فعال نخواهد بود.",
      },
    ],
  },
  {
    title: "ارسال و تحویل",
    items: [
      {
        question: "سفارش‌ها چگونه ارسال می‌شوند؟",
        answer:
          "سفارش‌ها پس از تأیید پرداخت و آماده‌سازی محصول برای ارسال، از طریق روش ارسال انتخاب‌شده در اختیار شما قرار می‌گیرند.",
      },
      {
        question: "هزینه ارسال چقدر است؟",
        answer:
          "هزینه ارسال بر اساس مبلغ سفارش و روش ارسال محاسبه می‌شود. شرایط ارسال رایگان نیز می‌تواند بر اساس سیاست‌های فروشگاه اعمال شود.",
      },
      {
        question: "چه مدت طول می‌کشد سفارش به دستم برسد؟",
        answer:
          "زمان تحویل بسته به مقصد، روش ارسال و زمان آماده‌سازی سفارش متفاوت است و هنگام تکمیل سفارش قابل نمایش خواهد بود.",
      },
    ],
  },
  {
    title: "پرداخت و امنیت",
    items: [
      {
        question: "چه روش‌هایی برای پرداخت وجود دارد؟",
        answer:
          "روش‌های پرداخت بر اساس درگاه‌ها و سرویس‌های فعال فروشگاه در مرحله نهایی ثبت سفارش نمایش داده خواهند شد.",
      },
      {
        question: "آیا اطلاعات پرداخت من امن است؟",
        answer:
          "پرداخت آنلاین باید از طریق درگاه پرداخت معتبر انجام شود و اطلاعات حساس کارت بانکی مستقیماً در اختیار فروشگاه قرار نمی‌گیرد.",
      },
    ],
  },
  {
    title: "گارانتی و خدمات",
    items: [
      {
        question: "آیا ساعت‌ها دارای گارانتی هستند؟",
        answer:
          "اطلاعات گارانتی هر محصول در صفحه همان محصول نمایش داده می‌شود. شرایط گارانتی ممکن است بر اساس مدل و برند متفاوت باشد.",
      },
      {
        question: "در صورت وجود مشکل در سفارش چه کاری انجام دهم؟",
        answer:
          "در صورت وجود هرگونه مشکل می‌توانید از طریق صفحه تماس با ما با تیم NegarTime ارتباط برقرار کنید تا درخواست شما بررسی شود.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <HelpCircle className="size-6" />
            </div>

            <span className="mt-6 block text-xs font-semibold tracking-[0.2em] text-accent">
              NEGARTIME
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              سوالات متداول
            </h1>

            <p className="mt-5 text-sm leading-8 text-muted md:text-base">
              پاسخ پرسش‌های متداول درباره خرید، ارسال، پرداخت و خدمات
              NegarTime را در این صفحه پیدا کنید.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            {faqGroups.map((group) => (
              <section key={group.title}>
                <h2 className="mb-5 text-xl font-bold text-foreground md:text-2xl">
                  {group.title}
                </h2>

                <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                  {group.items.map((item, index) => (
                    <details
                      key={item.question}
                      className="group border-border not-last:border-b"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-sm font-medium text-foreground transition-colors hover:text-accent md:px-6">
                        <span>{item.question}</span>

                        <ChevronDown className="size-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
                      </summary>

                      <div className="px-5 pb-5 text-sm leading-8 text-muted md:px-6">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    پاسخ سوالتان را پیدا نکردید؟
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    تیم NegarTime آماده پاسخ‌گویی به سوالات و درخواست‌های شماست.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-background"
                >
                  <MessageCircle className="size-4" />
                  تماس با ما
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

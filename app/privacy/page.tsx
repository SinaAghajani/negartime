import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/config/seo";
import Container from "@/components/ui/container";

export const metadata: Metadata = createPageMetadata(
  "حریم خصوصی",
  "سیاست حفظ حریم خصوصی NegarTime و نحوه جمع‌آوری، استفاده و محافظت از اطلاعات کاربران.",
  "/privacy",
);

const sections = [
  {
    title: "اطلاعاتی که ممکن است جمع‌آوری شود",
    content:
      "در زمان استفاده از خدمات NegarTime ممکن است اطلاعاتی مانند نام، شماره تماس، نشانی، اطلاعات سفارش و اطلاعات مورد نیاز برای ارائه خدمات از شما دریافت شود. میزان اطلاعات جمع‌آوری‌شده به نوع سرویس و اقدامی که انجام می‌دهید بستگی دارد.",
  },
  {
    title: "نحوه استفاده از اطلاعات",
    content:
      "اطلاعات کاربران برای پردازش سفارش‌ها، ارائه خدمات، پاسخ‌گویی به درخواست‌ها، بهبود تجربه کاربری و برقراری ارتباط درباره سفارش‌ها و خدمات مرتبط استفاده می‌شود.",
  },
  {
    title: "محافظت از اطلاعات",
    content:
      "NegarTime تلاش می‌کند اطلاعات کاربران را با استفاده از اقدامات فنی و مدیریتی مناسب محافظت کند. با این حال، هیچ روش انتقال یا ذخیره‌سازی اطلاعات در اینترنت را نمی‌توان کاملاً بدون ریسک در نظر گرفت.",
  },
  {
    title: "اطلاعات پرداخت",
    content:
      "اطلاعات حساس کارت بانکی باید از طریق درگاه پرداخت معتبر وارد شود. NegarTime نباید اطلاعات محرمانه کارت بانکی مانند رمز پویا یا رمز کارت را از طریق فرم‌های معمول سایت دریافت یا ذخیره کند.",
  },
  {
    title: "کوکی‌ها و فناوری‌های مشابه",
    content:
      "ممکن است برای حفظ تنظیمات، مدیریت نشست کاربر، بهبود عملکرد سایت و ارائه تجربه بهتر از کوکی‌ها یا فناوری‌های مشابه استفاده شود. برخی از این موارد ممکن است برای عملکرد صحیح بخش‌هایی از سایت ضروری باشند.",
  },
  {
    title: "اشتراک‌گذاری اطلاعات",
    content:
      "اطلاعات کاربران تنها در موارد لازم برای ارائه خدمات، پردازش سفارش، ارسال کالا، پشتیبانی یا انجام الزامات قانونی می‌تواند در اختیار سرویس‌دهندگان مرتبط قرار گیرد.",
  },
  {
    title: "حقوق کاربران",
    content:
      "کاربران می‌توانند درباره اطلاعات مرتبط با حساب یا سفارش خود درخواست اطلاعات، اصلاح یا پیگیری داشته باشند. درخواست‌ها از طریق راه‌های ارتباطی رسمی NegarTime بررسی خواهند شد.",
  },
  {
    title: "به‌روزرسانی سیاست حریم خصوصی",
    content:
      "این سیاست ممکن است با توسعه خدمات، تغییر قابلیت‌های سایت یا الزامات قانونی به‌روزرسانی شود. نسخه جدید پس از انتشار در همین صفحه قابل مشاهده خواهد بود.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <ShieldCheck className="size-6" />
            </div>

            <span className="mt-6 block text-xs font-semibold tracking-[0.2em] text-accent">
              NEGARTIME
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              حریم خصوصی
            </h1>

            <p className="mt-5 text-sm leading-8 text-muted md:text-base">
              حفظ حریم خصوصی و محافظت از اطلاعات کاربران برای NegarTime اهمیت
              دارد. در این صفحه نحوه مدیریت اطلاعات کاربران توضیح داده شده است.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-surface">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  className="p-6 md:p-8 not-last:border-b not-last:border-border"
                >
                  <div className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                      {new Intl.NumberFormat("fa-IR").format(index + 1)}
                    </span>

                    <div>
                      <h2 className="text-lg font-bold text-foreground md:text-xl">
                        {section.title}
                      </h2>

                      <p className="mt-3 text-sm leading-8 text-muted md:text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
              <h2 className="text-lg font-bold text-foreground">
                سوالی درباره حریم خصوصی دارید؟
              </h2>

              <p className="mt-2 text-sm leading-7 text-muted">
                اگر درباره نحوه استفاده از اطلاعات خود سوالی دارید، می‌توانید از
                طریق صفحه تماس با ما با NegarTime ارتباط برقرار کنید.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

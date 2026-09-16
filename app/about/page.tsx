import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Gem, ShieldCheck, Sparkles, Watch } from "lucide-react";
import { createPageMetadata } from "@/config/seo";
export const metadata: Metadata = createPageMetadata(
  "درباره ما",
  "داستان NegarTime؛ نگاهی متفاوت به ساعت، طراحی و سبک زندگی.",
  "/about",
);
const values = [
  {
    icon: Watch,
    title: "طراحی ماندگار",
    description:
      "مدل‌هایی را انتخاب می‌کنیم که زیبایی آن‌ها وابسته به یک ترند کوتاه‌مدت نباشد.",
  },
  {
    icon: Gem,
    title: "توجه به جزئیات",
    description:
      "از فرم قاب تا متریال بند، جزئیات کوچک بخش مهمی از تجربه یک ساعت خوب هستند.",
  },
  {
    icon: ShieldCheck,
    title: "انتخاب مطمئن",
    description:
      "هدف ما ساخت تجربه‌ای شفاف و قابل اعتماد برای انتخاب و خرید ساعت است.",
  },
  {
    icon: Sparkles,
    title: "تجربه متفاوت",
    description:
      "NegarTime ترکیبی از فروشگاه، داستان‌گویی و تجربه دیجیتال مدرن است.",
  },
];
export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,161,91,0.12),transparent_35%)]" />
        <div className="container relative py-20 sm:py-28 lg:py-36">
          <p className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
            The NegarTime Story
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            زمان فقط چیزی نیست که
            <span className="gold-text block">می‌گذرد.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            NegarTime با یک نگاه ساده شکل گرفت؛ اینکه ساعت فقط وسیله‌ای برای
            نمایش زمان نباشد، بلکه بخشی از شخصیت، استایل و داستان صاحب آن باشد.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                Our Philosophy
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                یک انتخاب، فراتر از زمان
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-8 text-muted">
              <p>
                ما در NegarTime تلاش می‌کنیم مجموعه‌ای از ساعت‌ها را گرد هم
                بیاوریم که در کنار عملکرد دقیق، شخصیت بصری مشخصی داشته باشند.
              </p>
              <p>
                طراحی کلاسیک، فرم‌های مدرن، متریال متفاوت و جزئیات ظریف، هرکدام
                می‌توانند زبان متفاوتی برای بیان سبک شخصی شما باشند.
              </p>
              <p>
                تجربه فروشگاه نیز بخشی از همین نگاه است؛ از کشف کالکشن‌ها تا
                مشاهده جزئیات محصول و تجربه سه‌بعدی مدل‌های منتخب.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm border-y border-border bg-surface/40">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-10 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.12),transparent_42%)]" />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                Where Time Meets Style.
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                ساعت مناسب خودت را پیدا کن.
              </h2>
              <Link
                href="/shop"
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                ورود به فروشگاه
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

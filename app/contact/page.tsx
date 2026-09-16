import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { createPageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = createPageMetadata(
  "تماس با ما",
  "راه‌های ارتباط با NegarTime برای پشتیبانی، همکاری و پاسخ به سوالات شما.",
  "/contact",
);
const contactItems = [
  {
    icon: Mail,
    title: "ایمیل",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    title: "تلفن",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, title: "آدرس", value: siteConfig.address, href: undefined },
];
export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-16 sm:py-24">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Contact NegarTime
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            با ما در ارتباط باشید
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-muted">
            اگر درباره محصولات، سفارش، همکاری یا تجربه خرید سوالی دارید، خوشحال
            می‌شویم با شما در ارتباط باشیم.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.title}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              برای ما پیام بفرستید
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              فرم تماس در نسخه فعلی آماده اتصال به API و سیستم مدیریت پیام‌ها
              است.
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-muted">نام</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs text-muted">ایمیل</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-xs text-muted">موضوع</span>
                <input
                  type="text"
                  name="subject"
                  required
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs text-muted">پیام</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-7 text-foreground outline-none transition-colors focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-accent text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

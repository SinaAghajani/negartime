import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

const shopLinks = [
  { label: "فروشگاه", href: "/shop" },
  { label: "کالکشن‌ها", href: "/collections" },
  { label: "دسته‌بندی‌ها", href: "/categories" },
  { label: "جدیدترین‌ها", href: "/shop?sort=newest" },
];

const companyLinks = [
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
  { label: "سؤالات متداول", href: "/faq" },
  { label: "حریم خصوصی", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex flex-col">
              <span className="text-2xl font-semibold tracking-[0.12em] text-foreground transition-colors duration-300 group-hover:text-accent">
                NEGARTIME
              </span>
              <span className="mt-1 text-[8px] tracking-[0.3em] text-muted uppercase">
                Where Time Meets Style.
              </span>
            </Link>
            <p className="mt-6 text-sm leading-8 text-muted">
              NegarTime جایی برای کشف ساعت‌هایی است که ظرافت، اصالت و سبک معاصر
              را در کنار یکدیگر قرار می‌دهند.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="mailto:hello@negartime.com"
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Mail className="size-4" strokeWidth={1.7} />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">فروشگاه</h2>

            <ul className="mt-5 space-y-3.5">
              {shopLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">اطلاعات</h2>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              ارتباط با ما
            </h2>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm leading-7 text-muted">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-accent"
                  strokeWidth={1.6}
                />
                <span>کمنی، ایران</span>
              </li>

              <li>
                <Link
                  href="tel:+982100000000"
                  className="flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  <Phone
                    className="size-4 shrink-0 text-accent"
                    strokeWidth={1.6}
                  />
                  <span dir="ltr">+98 21 0000 0000</span>
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:hello@negartime.com"
                  className="flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  <Mail
                    className="size-4 shrink-0 text-accent"
                    strokeWidth={1.6}
                  />
                  <span>hello@negartime.com</span>
                </Link>
              </li>
            </ul>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
            >
              ارتباط با NegarTime
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border py-6 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-right">
          <p>© {new Date().getFullYear()} NegarTime. تمامی حقوق محفوظ است.</p>

          <p className="tracking-wide">Where Time Meets Style.</p>
        </div>
      </div>
    </footer>
  );
}

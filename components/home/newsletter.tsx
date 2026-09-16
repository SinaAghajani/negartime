"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = email.trim();

    if (!value || !value.includes("@")) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="section-sm">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -top-32 -left-32 size-72 rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute -right-32 -bottom-32 size-72 rounded-full bg-accent/5 blur-[100px]" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Stay In Time
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              از دنیای NegarTime باخبر بمانید
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted">
              برای اطلاع از کالکشن‌های جدید، محصولات منتخب و اتفاقات تازه، ایمیل
              خود را ثبت کنید.
            </p>

            {submitted ? (
              <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 rounded-full border border-success/20 bg-success/10 px-5 py-3.5 text-sm text-success">
                <Check className="size-4" />
                ایمیل شما با موفقیت ثبت شد.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  ایمیل
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ایمیل شما"
                  autoComplete="email"
                  required
                  className="h-12 min-w-0 flex-1 rounded-full border border-border bg-background px-5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent"
                />

                <button
                  type="submit"
                  className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
                >
                  عضویت
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </form>
            )}

            <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
              با ثبت ایمیل، شما با دریافت اخبار و پیشنهادهای NegarTime موافقت
              می‌کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

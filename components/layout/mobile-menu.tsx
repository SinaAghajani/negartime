"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { label: "خانه", href: "/" },
  { label: "فروشگاه", href: "/shop" },
  { label: "کالکشن‌ها", href: "/collections" },
  { label: "دسته‌بندی‌ها", href: "/categories" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 lg:hidden">
      <button
        type="button"
        aria-label="بستن منو"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <aside className="absolute top-0 right-0 flex h-full w-[min(88%,380px)] flex-col border-l border-border bg-background shadow-2xl">
        <div className="flex h-20 items-center justify-between border-b border-border px-5">
          <Link href="/" onClick={onClose} className="flex flex-col">
            <span className="text-lg font-semibold tracking-[0.12em] text-foreground">
              NEGARTIME
            </span>
            <span className="mt-0.5 text-[7px] tracking-[0.25em] text-muted uppercase">
              Where Time Meets Style.
            </span>
          </Link>

          <button
            type="button"
            aria-label="بستن منو"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-foreground"
          >
            <X className="size-5" strokeWidth={1.7} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-8">
          <nav aria-label="منوی موبایل">
            <ul className="space-y-1">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </span>

                    <ArrowLeft className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 grid grid-cols-3 gap-2">
            <Link
              href="/shop"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-4 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Search className="size-5" strokeWidth={1.6} />
              <span className="text-[11px]">جستجو</span>
            </Link>

            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-4 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Heart className="size-5" strokeWidth={1.6} />
              <span className="text-[11px]">علاقه‌مندی</span>
            </Link>

            <Link
              href="/cart"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-4 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <ShoppingBag className="size-5" strokeWidth={1.6} />
              <span className="text-[11px]">سبد خرید</span>
            </Link>
          </div>

          <Link
            href="/account"
            onClick={onClose}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <UserRound className="size-4" strokeWidth={1.7} />
            حساب کاربری
          </Link>
        </div>

        <div className="border-t border-border px-5 py-5">
          <p className="text-center text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Where Time Meets Style.
          </p>
        </div>
      </aside>
    </div>
  );
}

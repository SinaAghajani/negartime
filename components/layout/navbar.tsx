"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";

import MobileMenu from "./mobile-menu";

const navigation = [
{ label: "خانه", href: "/" },
{ label: "فروشگاه", href: "/shop" },
{ label: "کالکشن‌ها", href: "/collections" },
{ label: "دسته‌بندی‌ها", href: "/categories" },
{ label: "درباره ما", href: "/about" },
{ label: "تماس با ما", href: "/contact" },
];

export default function Navbar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
<> <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl"> <div className="container"> <div className="flex h-20 items-center justify-between gap-6"> <div className="flex items-center lg:hidden">
<button
type="button"
aria-label="باز کردن منو"
aria-expanded={isMobileMenuOpen}
onClick={() => setIsMobileMenuOpen(true)}
className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-surface hover:text-accent"
> <Menu className="size-5" strokeWidth={1.7} /> </button> </div>

        <Link
          href="/"
          aria-label="NegarTime"
          className="group flex shrink-0 flex-col items-center lg:items-start"
        >
          <span className="font-serif text-xl font-semibold tracking-[0.12em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
            NEGARTIME
          </span>
          <span className="mt-0.5 hidden text-[8px] tracking-[0.28em] text-muted uppercase sm:block">
            Where Time Meets Style.
          </span>
        </Link>

        <nav
          aria-label="ناوبری اصلی"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <ul className="flex items-center gap-7 xl:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground after:absolute after:right-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/shop"
            aria-label="جستجوی محصولات"
            className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-accent"
          >
            <Search className="size-4.5" strokeWidth={1.7} />
          </Link>

          <Link
            href="/wishlist"
            aria-label="علاقه‌مندی‌ها"
            className="hidden size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-accent sm:flex"
          >
            <Heart className="size-4.5" strokeWidth={1.7} />
          </Link>

          <Link
            href="/cart"
            aria-label="سبد خرید"
            className="relative flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-accent"
          >
            <ShoppingBag className="size-4.5" strokeWidth={1.7} />
            <span className="absolute top-1 right-1 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-background">
              0
            </span>
          </Link>

          <Link
            href="/account"
            aria-label="حساب کاربری"
            className="hidden size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-accent md:flex"
          >
            <UserRound className="size-4.5" strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </div>
  </header>

  <MobileMenu
    isOpen={isMobileMenuOpen}
    onClose={() => setIsMobileMenuOpen(false)}
  />
</>

);
}

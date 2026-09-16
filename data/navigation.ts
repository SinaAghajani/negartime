import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
    {
        label: "خانه",
        href: "/",
    },
    {
        label: "فروشگاه",
        href: "/shop",
    },
    {
        label: "کالکشن‌ها",
        href: "/collections",
    },
    {
        label: "دسته‌بندی‌ها",
        href: "/categories",
    },
    {
        label: "درباره ما",
        href: "/about",
    },
    {
        label: "تماس با ما",
        href: "/contact",
    },
];

export const footerNavigation = {
    shop: [
        {
            label: "همه محصولات",
            href: "/shop",
        },
        {
            label: "جدیدترین‌ها",
            href: "/shop?sort=newest",
        },
        {
            label: "ساعت مردانه",
            href: "/categories/men",
        },
        {
            label: "ساعت زنانه",
            href: "/categories/women",
        },
    ],
    company: [
        {
            label: "درباره ما",
            href: "/about",
        },
        {
            label: "کالکشن‌ها",
            href: "/collections",
        },
        {
            label: "تماس با ما",
            href: "/contact",
        },
    ],
    customer: [
        {
            label: "علاقه‌مندی‌ها",
            href: "/wishlist",
        },
        {
            label: "سبد خرید",
            href: "/cart",
        },
        {
            label: "حساب کاربری",
            href: "/account",
        },
    ],
} as const;

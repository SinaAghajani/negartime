export const siteConfig = {
    name: "NegarTime",
    title: "NegarTime | Where Time Meets Style.",
    description:
        "NegarTime is a premium watch destination where timeless craftsmanship meets contemporary style.",
    url: "https://negartime.com",
    locale: "fa_IR",
    language: "fa",
    direction: "rtl",
    currency: "IRR",
    currencyLabel: "تومان",
    email: "[hello@negartime.com](mailto:hello@negartime.com)",
    phone: "+98 21 0000 0000",
    address: "کمنی، ایران",
    slogan: "Where Time Meets Style.",
    navigation: {
        home: "/",
        shop: "/shop",
        collections: "/collections",
        categories: "/categories",
        about: "/about",
        contact: "/contact",
        wishlist: "/wishlist",
        cart: "/cart",
        account: "/account",
    },
    social: {
        instagram: "https://instagram.com/negartime",
        telegram: "https://t.me/negartime",
    },
} as const;

export type SiteConfig = typeof siteConfig;

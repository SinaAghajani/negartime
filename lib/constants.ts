export const SITE_NAME = "NegarTime";

export const SITE_TAGLINE = "Where Time Meets Style.";

export const SITE_DESCRIPTION =
    "NegarTime is a premium watch destination where timeless craftsmanship meets contemporary style.";

export const DEFAULT_LOCALE = "fa-IR";

export const DEFAULT_CURRENCY = "IRR";

export const DEFAULT_CURRENCY_LABEL = "تومان";

export const ITEMS_PER_PAGE = 12;

export const MAX_CART_QUANTITY = 10;

export const MIN_CART_QUANTITY = 1;

export const PRODUCT_IMAGE_PLACEHOLDER = "/images/products/placeholder.webp";

export const BRAND_LOGO_PATH = "/images/brand/logo.svg";

export const BRAND_FAVICON_PATH = "/images/brand/favicon.svg";

export const SOCIAL_LINKS = {
    instagram: "https://instagram.com/negartime",
    telegram: "https://t.me/negartime",
};

export const CONTACT_INFO = {
    email: "[hello@negartime.com](mailto:hello@negartime.com)",
    phone: "+98 21 0000 0000",
    address: "کمنی، ایران",
};

export const SHIPPING = {
    FREE_THRESHOLD: 50000000,
    STANDARD_COST: 150000,
};

export const PRODUCT_SORT_OPTIONS = [
    {
        value: "featured",
        label: "پیشنهاد شده",
    },
    {
        value: "newest",
        label: "جدیدترین",
    },
    {
        value: "price-asc",
        label: "ارزان‌ترین",
    },
    {
        value: "price-desc",
        label: "گران‌ترین",
    },
    {
        value: "name-asc",
        label: "نام: الف تا ی",
    },
] as const;

export const PRODUCT_BADGES = {
    NEW: "جدید",
    SALE: "فروش ویژه",
    FEATURED: "منتخب",
    LIMITED: "نسخه محدود",
    SOLD_OUT: "ناموجود",
} as const;

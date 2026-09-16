import { DEFAULT_CURRENCY_LABEL } from "./constants";

export function formatPrice(
    value: number,
    currency = DEFAULT_CURRENCY_LABEL,
): string {
    if (!Number.isFinite(value)) {
        return `۰ ${currency}`;
    }

    return `${new Intl.NumberFormat("fa-IR").format(Math.round(value))} ${currency}`;
}

export function formatNumber(value: number): string {
    if (!Number.isFinite(value)) {
        return "۰";
    }

    return new Intl.NumberFormat("fa-IR").format(value);
}

export function formatPercentage(value: number): string {
    if (!Number.isFinite(value)) {
        return "۰٪";
    }

    return `${new Intl.NumberFormat("fa-IR", {
        maximumFractionDigits: 1,
    }).format(value)}٪`;
}

export function formatDate(
    date: string | number | Date,
    options?: Intl.DateTimeFormatOptions,
): string {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    }).format(parsedDate);
}

export function formatShortDate(date: string | number | Date): string {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(parsedDate);
}

export function formatCompactNumber(value: number): string {
    if (!Number.isFinite(value)) {
        return "۰";
    }

    return new Intl.NumberFormat("fa-IR", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
}

export function formatRating(value: number): string {
    if (!Number.isFinite(value)) {
        return "۰";
    }

    return new Intl.NumberFormat("fa-IR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(value);
}

export function toSlug(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[\u200C\u200D]/g, "-")
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function truncateText(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
        return value;
    }

    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

export function formatStock(stock: number): string {
    if (stock <= 0) {
        return "ناموجود";
    }

    if (stock <= 3) {
        return `تنها ${formatNumber(stock)} عدد باقی مانده`;
    }

    return `${formatNumber(stock)} عدد موجود`;
}

import type { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Shopping",
    keywords: [
        "NegarTime",
        "نگار تایم",
        "ساعت",
        "ساعت مچی",
        "فروشگاه ساعت",
        "خرید ساعت",
        "ساعت لوکس",
        "ساعت مردانه",
        "ساعت زنانه",
        "ساعت کلاسیک",
        "ساعت مدرن",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export function createPageMetadata(
    title: string,
    description: string = siteConfig.description,
    path = "/",
): Metadata {
    const canonical = path === "/" ? "/" : path;

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "website",
            locale: siteConfig.locale,
            url: new URL(canonical, siteConfig.url).toString(),
            siteName: siteConfig.name,
            title: `${title} | ${siteConfig.name}`,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${siteConfig.name}`,
            description,
        },
    };
}

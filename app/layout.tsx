import type { Metadata } from "next";

import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";

import AnnouncementBar from "@/components/layout/announcement-bar";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NegarTime | Where Time Meets Style.",
    template: "%s | NegarTime",
  },
  description:
    "NegarTime is a premium watch destination where timeless craftsmanship meets contemporary style.",
  keywords: [
    "NegarTime",
    "ساعت",
    "فروشگاه ساعت",
    "ساعت مچی",
    "ساعت لوکس",
    "ساعت مردانه",
    "ساعت زنانه",
    "خرید ساعت",
  ],
  authors: [{ name: "NegarTime" }],
  creator: "NegarTime",
  publisher: "NegarTime",
  applicationName: "NegarTime",
  category: "Shopping",
  metadataBase: new URL("https://negartime.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://negartime.com",
    siteName: "NegarTime",
    title: "NegarTime | Where Time Meets Style.",
    description:
      "Where Time Meets Style. Discover timeless watches crafted for modern taste.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NegarTime | Where Time Meets Style.",
    description:
      "Where Time Meets Style. Discover timeless watches crafted for modern taste.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <AnnouncementBar /> <Navbar /> <main>{children}</main> <Footer />
      </body>
    </html>
  );
}

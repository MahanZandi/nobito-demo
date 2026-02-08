import { ReactNode } from "react";
import "@/assets/styles/global.css";
import type { Metadata, Viewport } from "next";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Nobito | نوبیتو",
  description: "این پروژه یک دمو از وبسایت نوبت دهی آنلاین میباشد",
  applicationName: "Nobito",
  manifest: "/manifest.json", // ✅ connect manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nobito | نوبیتو",
  },
  openGraph: {
    title: "Nobito | نوبیتو",
    description: "این پروژه یک دمو از وبسایت نوبت دهی آنلاین میباشد",
    type: "website",
    locale: "fa_IR",
    url: "https://nobito-demo.vercel.app/",
    images: [
      {
        url: "/logo-title.png",
        width: 1200,
        height: 630,
        alt: "favicon",
      },
    ],
    siteName: "Nobito",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobito | نوبیتو",
    description: "این پروژه یک دمو از وبسایت نوبت دهی آنلاین میباشد",
    images: ["/logo-title.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ رنگ بالای مرورگر (theme-color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="//favicon.ico" />
      </Head>
      <body className="rtl:font-vazir-farsi">{children}</body>
    </html>
  );
};

export default Layout;

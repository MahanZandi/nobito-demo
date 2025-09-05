import { ReactNode } from "react";
import "@/assets/styles/global.css";
import { Metadata } from "next";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Nobito | نوبیتو",
  description: "این پروژه یک دمو از وبسایت نوبت دهی آنلاین میباشد",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body dir="rtl" className="rtl:font-vazir-farsi">
        {children}
      </body>
    </html>
  );
};

export default Layout;

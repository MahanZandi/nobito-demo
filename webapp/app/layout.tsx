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
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Nobito",
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

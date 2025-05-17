"use client";
import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "@/Types/Footer";
import { useState } from "react";

const Footer: React.FC = () => {
  const footerLinks: FooterLinks[] = [
    {
      title: "نوبیتو",
      links: [
        {
          title: "سوالات متداول",
          url: "#",
        },
        {
          title: "تماس با ما",
          url: "#",
        },
        {
          title: "میثاق نام",
          url: "#",
        },
        {
          title: "درباره ما",
          url: "#",
        },
      ],
    },
    {
      title: "خدمات",
      links: [
        {
          title: "نوبت‌دهی آنلاین",
          url: "#",
        },
        {
          title: "مشاوره حضوری",
          url: "#",
        },
        {
          title: "مشاوره غیرحضوری",
          url: "#",
        },
        {
          title: "خدمات پزشکی در منزل",
          url: "#",
        },
      ],
    },
    {
      title: "نیکوکاری",
      links: [
        {
          title: "درمانگر داوطلب",
          url: "#",
        },
        {
          title: "بیشتر بدانید",
          url: "#",
        },
        {
          title: "کمک مالی",
          url: "#",
        },
      ],
    },
    {
      title: "پشتیبانی",
      links: [
        {
          title: "شبکه های اجتمایی",
          url: "#",
        },
        {
          title: "واحد انفورماتیک",
          url: "#",
        },
        {
          title: "حریم شخصی",
          url: "#",
        },
        {
          title: "تماس با ما",
          url: "#",
        },
      ],
    },
  ];

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  return (
    <footer className="bg-white-100">
      <div className="container py-[48px]">
        <div className="flex flex-col items-center xl:flex-row gap-6">
          <Image
            src="/images/footer-logo.png"
            alt="Logo"
            width={112}
            height={178}
            className="w-[112px] h-[178px]"
          />
          <div className="flex flex-col gap-6 pb-[48px]">
            <h3 className="text-[20px] leading-[155%] font-semibold text-black-400 text-center xl:text-start">
              تلاش ما دسترسی آسان تر به خدمات پزشکی است
            </h3>
            <p className="text-[16px] leading-[155%] text-grey-500 text-center xl:text-start">
              با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به
              عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین،
              خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه
              می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری،
              همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه
              دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و
              درمان را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در
              روزهای ناخوش احوالی همراه و همیار شما باشد.
            </p>
          </div>
        </div>
        <div className="flex xl:justify-between">
          <div className="grid w-full xl:grid-cols-4 xl:gap-[64px]">
            {footerLinks.map((link, index) => (
              <div key={link.title} className="py-[16px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium xl:text-[22px] leading-[155%] xl:font-semibold text-black-400">
                    {link.title}
                  </h3>
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === index ? null : index
                      )
                    }
                    className={`flex xl:hidden isax isax-arrow-down-1 text-2xl transition-all ${
                      openDropdownIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></button>
                </div>
                {/* footer links item in mobile view (dropdown) */}
                <ul
                  className={`flex xl:hidden flex-col transition-all duration-400 gap-4 ${
                    openDropdownIndex === index
                      ? "max-h-[500px] opacity-100 pt-[16px]"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.links.map((item) => (
                    <li
                      key={item.title}
                      className="text-[14px] leading-[155%] text-grey-500"
                    >
                      <Link href={item.url} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* horizontal line between footer links in mobile view */}
                <div className="xl:hidden h-px mt-[16px] bg-grey-200"></div>
                <ul className="hidden xl:flex flex-col gap-[16px] text-[16px] leading-[155%] text-grey-500 pt-[32px]">
                  {link.links.map((item) => (
                    <li key={item.title}>
                      <Link href={item.url} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Footer Form */}
          <div className="pt-[70px]">
            <div>
              <h4 className="text-[16px]">خبرنامه</h4>
              <p className="text-[12px] text-grey-500 pt-2 pb-4">
                برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="rounded-xl border h-[48px] w-[336px] text-[12px] px-[12px] border-grey-400"
                placeholder="ایمیل خود را اینجا وارد کنید"
              />
              <button className="flex bg-primary-500 text-white-500 gap-2 py-[12px] px-[16px] rounded-lg">
                <p>ارسال</p>
                <span className="isax isax-arrow-left-3 text-2xl"></span>
              </button>
            </div>
            <p className="pt-2 text-[12px] text-grey-500">تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

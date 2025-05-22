"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./SideBar";

interface NavLink {
  title: string;
  url: string;
  hasNotification?: boolean;
  dropdownItems?: DropDownType[];
  icon?: string;
}

interface DropDownType {
  label: string;
  link: string;
}

interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

interface NavLinksProps {
  links: NavLink[];
}

interface SocialLinksProps {
  socials: SocialLink[];
}

// 📌 Reusable component for navigation links
const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  return (
    <>
      {/* Overlay for close dropdown */}
      {openDropdownIndex !== null && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setOpenDropdownIndex(null)}
        />
      )}

      <ul className="flex items-center gap-6 relative z-10">
        {links.map((link, index) => (
          <li key={link.title} className="relative">
            {link.dropdownItems ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                  className="font-t2-regular text-grey-500 flex items-center gap-2 h-6"
                  aria-label={link.title}
                >
                  {link.hasNotification && (
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-4 h-4 bg-error-50 rounded-full animate-ping"></span>
                      <span className="w-2 h-2 bg-error-500 rounded-full"></span>
                    </span>
                  )}
                  {link.icon && (
                    <i
                      className={`leading-4 text-xl ${link.icon}`}
                      aria-hidden="true"
                    ></i>
                  )}
                  {link.title}
                </button>

                {openDropdownIndex === index && (
                  <ul className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-10">
                    {link.dropdownItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={link.url}
                className="font-t2-regular text-grey-500 flex items-center gap-2 h-6"
                aria-label={link.title}
              >
                {link.hasNotification && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-4 h-4 bg-error-50 rounded-full animate-ping"></span>
                    <span className="w-2 h-2 bg-error-500 rounded-full"></span>
                  </span>
                )}
                {link.icon && (
                  <i
                    className={`leading-4 text-xl ${link.icon}`}
                    aria-hidden="true"
                  ></i>
                )}
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

// 📌 Reusable component for social links
const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => (
  <ul className="flex items-center gap-6">
    {socials.map((social) => (
      <li key={social.title}>
        <Link
          href={social.url}
          className="font-t2-regular text-grey-500 flex items-center gap-2"
          aria-label={social.title}
        >
          <i
            className={`text-2xl leading-6 ${social.icon}`}
            aria-hidden="true"
          ></i>
        </Link>
      </li>
    ))}
  </ul>
);

const AppHeader: React.FC = () => {
  const primaryLinks: NavLink[] = [
    { title: "نوبت دهی مطب", url: "#" },
    {
      title: "خدمات",
      url: "#",
      icon: "isax isax-arrow-down-1",
      dropdownItems: [
        { label: "ایتم ۱", link: "#" },
        { label: "ایتم ۲", link: "#" },
        { label: "ایتم ۳", link: "#" },
        { label: "ایتم ۴", link: "#" },
      ],
    },
    { title: "مشاوره آنلاین", url: "#" },
    { title: "مجله سلامت", url: "#" },
    { title: "نیکوکاری", url: "#", hasNotification: true },
  ];

  const socialLinks: SocialLink[] = [
    { title: "اینستاگرام", url: "#", icon: "isax isax-instagram" },
    { title: "تلگرام", url: "#", icon: "isax isax-send-2" },
    { title: "یوتیوب", url: "#", icon: "icon-youtube" },
    { title: "لینکدین", url: "#", icon: "icon-linkedin" },
  ];

  const secondaryLinks: NavLink[] = [
    { title: "درباره ما", url: "#" },
    { title: "تماس با ما", url: "#" },
    { title: "سوالات متداول", url: "#" },
    { title: "+ انتخاب آدرس", url: "#", icon: "isax isax-location" },
  ];

  // states for mobile side bar menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white-100 py-2 xl:pt-6 xl:pb-4">
      <div className="container">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/" aria-label="صفحه اصلی">
            <Image
              src="/logo-title.png"
              alt="nobito"
              className="w-[133px] h-[48px] xl:w-[180px] xl:h-[65px]"
              width={180}
              height={65}
              priority
            />
          </Link>

          {/* Separator for mobile view */}
          <div className="flex-1 flex xl:hidden"></div>

          {/* Primary Navigation (for desktop view) */}
          <nav className="hidden xl:flex flex-1">
            <NavLinks links={primaryLinks} />
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            {/* Notifications Button (for descktop view) */}
            <button
              className="w-12 h-12 hidden xl:flex items-center justify-center"
              aria-label="اعلان‌ها"
            >
              <i className="isax isax-notification text-[32px] leading-8 text-grey-500"></i>
            </button>

            {/* Auth Button (for descktop view) */}
            <Link
              href="/"
              className="bg-primary-500 w-[117px] h-12 hidden xl:flex items-center justify-center text-white-500 font-t2-medium rounded-lg"
            >
              ورود/ثبت نام
            </Link>

            {/* sidebar and searchbar for mobile view */}
            <div className="flex text-2xl gap-3 xl:hidden">
              <Link href="/search">
                <span className="isax isax-search-normal"></span>
              </Link>
              <span
                className="isax isax-menu-1"
                onClick={() => setIsOpen(true)}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator (for desktop view)*/}
      <div className="bg-grey-200 h-px mt-6 hidden xl:block"></div>

      {/* Social & Secondary Links (for desktop view)*/}
      <div className="container pt-4 hidden xl:flex items-center justify-between">
        <SocialLinks socials={socialLinks} />
        <NavLinks links={secondaryLinks} />
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default AppHeader;

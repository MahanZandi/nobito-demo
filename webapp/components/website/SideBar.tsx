"use client";
import LogoTitle from "@/public/logo-title.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";
import useStore from "@/lib/store";
interface SideBarLinks {
  title: string;
  url: string;
  hasNotification?: boolean;
  dropdownItems?: DropDownType[];
  icon?: string;
}

interface SideBarLinksProps {
  links: SideBarLinks[];
  closeSidebar: () => void;
}

interface DropDownType {
  title: string;
  link: string;
  icon?: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  socials: SocialLink[];
  closeSidebar: () => void;
}

// 📌 Primary links
const PrimaryLinks: React.FC<SideBarLinksProps> = ({ links, closeSidebar }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const closeAccordion = () => {
    setOpenDropdownIndex(null);
    closeSidebar();
  };

  return (
    <>
      <ul className="flex flex-col py-6 gap-6 z-10 font-t2-regular">
        {links.map((link, index) => (
          <li key={link.title} className="relative">
            {/* Drop Down item open , close */}
            {link.dropdownItems ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                  className="font-t2-regular text-grey-500 flex items-center gap-2 h-6 w-full"
                  aria-label={link.title}
                >
                  {link.hasNotification && (
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-4 h-4 bg-error-50 rounded-full animate-ping"></span>
                      <span className="w-2 h-2 bg-error-500 rounded-full"></span>
                    </span>
                  )}
                  <span className="flex flex-1">{link.title}</span>
                  {link.icon && (
                    <i
                      className={`leading-4 text-xl ${link.icon}`}
                      aria-hidden="true"
                    ></i>
                  )}
                </button>

                <ul
                  className={`
                    rounded-xl transition-all duration-300 flex flex-col overflow-hidden 
                    ${
                      openDropdownIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      href={item.link}
                      key={item.title}
                      onClick={closeAccordion}
                      className="text-gray-500 border-b border-b-gray-300 hover:bg-gray-100 p-2"
                    >
                      <li>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={link.url}
                onClick={closeSidebar}
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

// 📌 Secondary links
const SecondaryLinks: React.FC<SideBarLinksProps> = ({
  links,
  closeSidebar,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  type ActiveTabsType =
    | "account-information"
    | "history-of-turns"
    | "messages"
    | "medical-files"
    | "feedbacks"
    | "password"
    | "logout";

  const { setActiveTab, setIsModalOpen } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabFromQuery = searchParams.get("tab") as ActiveTabsType | null;
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams, setActiveTab]);

  const changeTabs = (tab: ActiveTabsType) => {
    setActiveTab(tab);

    const newUrl = `/user-dashboard?tab=${tab}`;
    router.push(newUrl, { scroll: false });

    if (tab === "logout") {
      setIsModalOpen(true);
    }
    closeSidebar();
    setOpenDropdownIndex(null);
  };

  return (
    <>
      <ul className="flex flex-col py-6 gap-6 z-10 font-t2-regular">
        {links.map((link, index) => (
          <li key={link.title} className="relative">
            {/* Drop Down item open , close */}
            {link.dropdownItems ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                  className="font-t2-regular text-grey-500 flex items-center gap-2 h-6 w-full"
                  aria-label={link.title}
                >
                  {link.hasNotification && (
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-4 h-4 bg-error-50 rounded-full animate-ping"></span>
                      <span className="w-2 h-2 bg-error-500 rounded-full"></span>
                    </span>
                  )}
                  <span className="flex flex-1">{link.title}</span>
                  {link.icon && (
                    <i
                      className={`leading-4 text-xl ${link.icon}`}
                      aria-hidden="true"
                    ></i>
                  )}
                </button>

                <ul
                  className={`
                    transition-all duration-300 flex flex-col gap-2 pt-3 overflow-hidden
                    ${openDropdownIndex === index ? "max-h-[500px]" : "hidden"}
                  `}
                >
                  {link.dropdownItems.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => changeTabs(item.link as ActiveTabsType)}
                      className="text-grey-500 border-b border-b-gray-300 hover:bg-gray-100 py-2 flex gap-2"
                    >
                      {item.icon && <span className={`${item.icon}`}></span>}
                      <li>{item.title}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={link.url}
                onClick={closeSidebar}
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

// 📌 Social links
const SocialLinks: React.FC<SocialLinksProps> = ({ socials, closeSidebar }) => (
  <div className="">
    <ul className="flex items-center justify-center gap-8">
      {socials.map((social) => (
        <li key={social.title}>
          <Link
            onClick={closeSidebar}
            href={social.url}
            className="font-t2-regular text-grey-500 flex items-center gap-2"
            aria-label={social.title}
          >
            <i
              className={`text-[32px] leading-6 ${social.icon}`}
              aria-hidden="true"
            ></i>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// side bar for app header
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const primaryLinks: SideBarLinks[] = [
    { title: "نوبت دهی مطب", url: "/turn-rating" },
    {
      title: "خدمات",
      url: "#",
      icon: "isax isax-arrow-down-1",
      dropdownItems: [
        { title: "نوبت‌دهی آنلاین", link: "#" },
        { title: "فروشگاه کالای پزشکی", link: "/shop" },
        { title: "استعلام دارو", link: "/shop/drug-inquiry" },
        { title: "خدمات پزشکی در منزل", link: "/medical-services-at-home" },
      ],
    },
    { title: "مشاوره آنلاین", url: "#" },
    { title: "مجله سلامت", url: "#" },
    { title: "نیکوکاری", url: "#", hasNotification: true },
  ];

  const secondaryLinks: SideBarLinks[] = [
    {
      title: "داشبورد",
      url: "#",
      icon: "isax isax-arrow-down-1",
      dropdownItems: [
        {
          title: "اطلاعات حساب کاربری",
          icon: "isax isax-frame-1 text-2xl",
          link: "account-information",
        },
        {
          title: "تاریخچه نوبت ها",
          icon: "isax isax-note-text text-2xl",
          link: "history-of-turns",
        },
        {
          title: "پیغام ها",
          icon: "isax isax-sms text-xl",
          link: "messages",
        },
        {
          title: "پرونده های پزشکی",
          icon: "isax isax-folder-2 text-xl",
          link: "medical-files",
        },
        {
          title: "بازخورد ها",
          icon: "isax isax-message text-xl",
          link: "feedbacks",
        },
        {
          title: "رمز عبور",
          icon: "isax isax-key text-xl",
          link: "password",
        },
        {
          title: "خروج از حساب کاربری",
          icon: "isax isax-login text-xl",
          link: "logout",
        },
      ],
    },
    { title: "درباره ما", url: "#" },
    { title: "تماس با ما", url: "#" },
    { title: "سوالات متداول", url: "#" },
  ];

  const socialLinks: SocialLink[] = [
    { title: "اینستاگرام", url: "#", icon: "isax isax-instagram" },
    { title: "تلگرام", url: "#", icon: "isax isax-send-2" },
    { title: "یوتیوب", url: "#", icon: "icon-youtube" },
    { title: "لینکدین", url: "#", icon: "icon-linkedin" },
  ];

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1240) {
        closeSidebar();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeSidebar]);

  return (
    <nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-body z-50 transition-transform duration-300
          ${isOpen ? "translate-0" : "translate-x-full"}`}
      >
        {/* sidebar content */}
        <div className="p-4 overflow-y-auto h-full">
          <div className="flex flex-col min-h-screen pb-10">
            <div className="pb-4">
              <Image src={LogoTitle} alt="logo" width={156} height={56} />
            </div>
            <div className="h-px bg-grey-200"></div> {/* horizontal line */}
            <div>
              <PrimaryLinks closeSidebar={closeSidebar} links={primaryLinks} />
            </div>
            <div className="h-px bg-grey-200"></div> {/* horizontal line */}
            <div>
              <SecondaryLinks
                closeSidebar={closeSidebar}
                links={secondaryLinks}
              />
            </div>
            <div className="mt-auto pb-6">
              <SocialLinks closeSidebar={closeSidebar} socials={socialLinks} />
            </div>
            <div className="h-px bg-grey-200"></div> {/* horizontal line */}
            <span className="text-grey-500 pt-4">
              آپدیت شده در تاریخ 17/08/1402
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

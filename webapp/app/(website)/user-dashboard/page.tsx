"use client";
import Image from "next/image";
import { useState } from "react";

interface BeardCrumbsProps {
  activeTab: string;
}

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState<
    | "account-information"
    | "history-of-turns"
    | "messages"
    | "medical-files"
    | "feedbacks"
    | "password"
    | "logout"
  >("account-information");

  const changeTabs = (tab: typeof activeTab) => {
    setActiveTab(tab);
  };

  const BeardCrumbs: React.FC<BeardCrumbsProps> = ({ activeTab }) => {
    const activeTabsText = () => {
      switch (activeTab) {
        case "account-information":
          return "اطلاعات حساب کاربری";
        case "history-of-turns":
          return "تاریخچه نوبت ها";
        case "messages":
          return "پیغام ها";
        case "medical-files":
          return "پرونده های پزشکی";
        case "feedbacks":
          return "بازخورد ها";
        case "password":
          return "رمز عبور";
        case "logout":
          return "خروج از حساب کاربری";
        default:
          return "account-information";
      }
    };

    return (
      <div className="bg-primary-500 text-white-500 xl:py-3 py-2">
        <ul className="flex container gap-4 text-xl">
          <li className="flex gap-4 items-center">
            <span>نوبیتو</span>
            <span className="isax isax-arrow-left-2 text-2xl"></span>
          </li>
          <li className="flex gap-4 items-center">
            <span>حساب شخصی</span>
            <span className="isax isax-arrow-left-2 text-2xl"></span>
          </li>
          <li className="flex gap-4 items-center">
            <span className="font-bold">{activeTabsText()}</span>
          </li>
        </ul>
      </div>
    );
  };

  const userPannelLinks = [
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
      icon: "isax isax-sms text-2xl",
      link: "messages",
    },
    {
      title: "پرونده های پزشکی",
      icon: "isax isax-folder-2 text-2xl",
      link: "medical-files",
    },
    {
      title: "بازخورد ها",
      icon: "isax isax-message text-2xl",
      link: "feedbacks",
    },
    {
      title: "رمز عبور",
      icon: "isax isax-key text-2xl",
      link: "password",
    },
    {
      title: "خروج از حساب کاربری",
      icon: "isax isax-login text-2xl",
      link: "logout",
    },
  ] as const;

  return (
    <div>
      <BeardCrumbs activeTab={activeTab} />
      <aside className="mt-10 container">
        <div className="w-[384px] bg-white-100  rounded-2xl border border-grey-100">
          <div className="p-6">
            <div className="bg-[url('/banner.png')] h-[120px] w-full rounded-xl flex justify-center">
              <div className="rounded-full bg-body p-6 size-[144px] mt-12">
                <Image
                  src="/images/png-icons/profile-add.png"
                  width={96}
                  height={96}
                  alt="Profile Add"
                />
              </div>
            </div>
          </div>
          <div className="mt-20 mb-6 px-6">
            <div className="flex justify-between items-center">
              <div className="flex-col flex gap-3">
                <div className="text-2xl text-black-400">نام کاربر</div>
                <div className="text-grey-500">۲۱۸۷۸‍</div>
              </div>
              <div>
                <span className="isax isax-edit-2 text-[32px] cursor-pointer text-black-400"></span>
              </div>
            </div>
          </div>
          <ul className="pl-6">
            {userPannelLinks.map((link, index) => (
              <div key={index}>
                <div>
                  <div className="h-px mr-6 bg-grey-100"></div>
                  <li
                    onClick={() => changeTabs(link.link)}
                    className={`${
                      activeTab === link.link
                        ? "text-primary-500 font-medium"
                        : "text-black-400"
                    } py-6 flex items-center gap-2 `}
                  >
                    {activeTab === link.link && (
                      
                        <div className="rounded-tl-[6px] rounded-bl-[6px] w-2 h-[53px] absolute bg-primary-500 "></div>
                      
                    )}
                    <div className="pr-6 flex items-center gap-2">
                      <span className={link.icon}></span>
                      <span className="text-xl">{link.title}</span>
                    </div>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default UserDashboard;

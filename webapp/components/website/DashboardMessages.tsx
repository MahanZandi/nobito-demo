"use client";
import { useState } from "react";

type TabType = "دستور پزشک" | "اطلاع رسانی ها" | "همه پیغام ها";

type MessageType = "اطلاع رسانی" | "دستور پزشک" | "همه پیام‌ها";

interface MessageData {
  title: string;
  description: string;
  hasNotfication: boolean;
  messageType: MessageType | MessageType[];
  icon: string;
  date: string;
}

interface MessagesProps {
  messageData: MessageData;
  isLastItem?: boolean;
}

const DashboardMessages = () => {
  const [activeTab, setActiveTab] = useState<TabType>("همه پیغام ها");
  const allMessageTab = () => setActiveTab("همه پیغام ها");
  const notificationsTab = () => setActiveTab("اطلاع رسانی ها");
  const doctorsOrderTab = () => setActiveTab("دستور پزشک");

  const allMessageData: MessageData[] = [
    {
      title: "دستور مصرف دارو توسط پزشک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای",
      hasNotfication: true,
      messageType: "دستور پزشک",
      icon: "isax isax-note-1 xl:text-2xl text-[18px] p-2 bg-sky-750 text-white rounded-full",
      date: "۱۴۰۳/۰۳/۰۴",
    },
    {
      title: "تغییر ساعت کاری کلینیک",
      description:
        "ساعت کاری کلینیک در تعطیلات تغییر کرد. لطفاً برای دریافت خدمات حضوری یا تلفنی، قبل از مراجعه با پذیرش هماهنگ کنید. اطلاعات بیشتر در وبسایت موجود است.",
      hasNotfication: true,
      messageType: "اطلاع رسانی",
      icon: "isax isax-notification xl:text-2xl text-[18px] p-2 bg-secondary-500 text-black-400 rounded-full",
      date: "۱۴۰۳/۰۳/۰۸",
    },
    {
      title: "اطلاعیه قطعی سامانه",
      description:
        "سامانه نوبیتو به دلیل به‌روزرسانی از ساعت ۲۳ تا ۳ بامداد در دسترس نخواهد بود.",
      hasNotfication: true,
      messageType: "اطلاع رسانی",
      icon: "isax isax-notification xl:text-2xl text-[18px] p-2 bg-secondary-500 text-black-400 rounded-full",
      date: "۱۴۰۳/۰۳/۰۷",
    },
    {
      title: "خوش آمدگویی به سامانه نوبیتو",
      description:
        "به سامانه نوبیتو خوش آمدید. با استفاده از این سامانه می‌توانید به راحتی نوبت رزرو کنید، سوابق پزشکی خود را مشاهده نمایید و با پزشکان در ارتباط باشید.",
      hasNotfication: false,
      messageType: "همه پیام‌ها",
      icon: "isax isax-notification xl:text-2xl text-[18px] p-2 bg-primary-500 text-white rounded-full",
      date: "۱۴۰۳/۰۳/۰۵",
    },
  ];

  const notificationsData: MessageData[] = [
    {
      title: "تغییر ساعت کاری کلینیک",
      description:
        "ساعت کاری کلینیک در تعطیلات تغییر کرد. لطفاً برای دریافت خدمات حضوری یا تلفنی، قبل از مراجعه با پذیرش هماهنگ کنید. اطلاعات بیشتر در وبسایت موجود است.",
      hasNotfication: true,
      messageType: "اطلاع رسانی",
      icon: "isax isax-notification xl:text-2xl text-[18px] p-2 bg-secondary-500 text-black-400 rounded-full",
      date: "۱۴۰۳/۰۳/۰۸",
    },
    {
      title: "اطلاعیه قطعی سامانه",
      description:
        "سامانه نوبیتو به دلیل به‌روزرسانی از ساعت ۲۳ تا ۳ بامداد در دسترس نخواهد بود.",
      hasNotfication: true,
      messageType: "اطلاع رسانی",
      icon: "isax isax-notification xl:text-2xl text-[18px] p-2 bg-secondary-500 text-black-400 rounded-full",
      date: "۱۴۰۳/۰۳/۰۷",
    },
  ];

  const doctorsOrderData: MessageData[] = [
    {
      title: "دستور مصرف دارو توسط پزشک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای",
      hasNotfication: true,
      messageType: "دستور پزشک",
      icon: "isax isax-note-1 xl:text-2xl text-[18px] p-2 bg-sky-750 text-white rounded-full",
      date: "۱۴۰۳/۰۳/۰۴",
    },
  ];

  const Message: React.FC<MessagesProps> = ({ messageData, isLastItem }) => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center font-medium">
              <span className={messageData.icon}></span>
              <span className="xl:text-xl text-black-400">
                {messageData.title}
              </span>
            </div>
            {messageData.hasNotfication && (
              <span className="bg-sky-750 size-2 rounded-full"></span>
            )}
          </div>
          <p className="text-grey-500 text-xs lg:text-sm">{messageData.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-grey-400">{messageData.date}</span>
            <div className="flex gap-2 text-sky-750">
              <span className="font-medium">جزئیات بیشتر</span>
              <span className="isax isax-arrow-down-1 text-xl"></span>
            </div>
          </div>
        </div>
        <div
          className={`${isLastItem ? "" : "h-px bg-grey-200"} lg:block hidden`}
        ></div>
        <div className="bg-grey-200 h-px xl:hidden block"></div>
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="lg:bg-white-100 lg:border border-grey-100 lg:rounded-2xl pt-6 lg:px-6">
        <div className="pb-4 xl:pb-6 flex justify-between">
          <h1 className="text-[22px] text-black-400">پیام ها</h1>
          <div className="flex items-center gap-2 text-primary-500 cursor-pointer">
            <span className="isax isax-notification text-lg xl:text-2xl"></span>
            <span className="text-xs xl:text-sm">تغییر پیام ها به خوانده شده</span>
          </div>
        </div>
        <div className="bg-grey-200 w-full h-px mb-6"></div>
        <ul className="flex text-xs gap-3 mb-6">
          <li
            onClick={allMessageTab}
            className={`${
              activeTab === "همه پیغام ها"
                ? "text-primary-500 border-primary-500"
                : "text-grey-400 border-grey-400"
            }  rounded-[200px] gap-2 border flex items-center h-8 px-3 cursor-pointer`}
          >
            همه پیام ها
          </li>
          <li
            onClick={notificationsTab}
            className={`${
              activeTab === "اطلاع رسانی ها"
                ? "text-primary-500 border-primary-500"
                : "text-grey-400 border-grey-400"
            }  rounded-[200px] gap-2 border flex px-3 cursor-pointer items-center h-8`}
          >
            <span className="isax isax-notification text-lg"></span>
            <span>اطلاع رسانی ها</span>
          </li>
          <li
            onClick={doctorsOrderTab}
            className={`${
              activeTab === "دستور پزشک"
                ? "text-primary-500 border-primary-500"
                : "text-grey-400 border-grey-400"
            } rounded-[200px] gap-2 border flex px-3 cursor-pointer items-center h-8`}
          >
            <span className="isax isax-note-1 text-lg"></span>
            <span>دستور پزشک</span>
          </li>
        </ul>
        <div className="flex flex-col gap-4 xl:gap-6">
          {activeTab === "همه پیغام ها" &&
            allMessageData.map((message, index) => {
              const isLastItem = index === allMessageData.length - 1;
              return (
                <Message
                  messageData={message}
                  isLastItem={isLastItem}
                  key={index}
                />
              );
            })}
          {activeTab === "اطلاع رسانی ها" &&
            notificationsData.map((message, index) => {
              const isLastItem = index === notificationsData.length - 1;
              return (
                <Message
                  messageData={message}
                  isLastItem={isLastItem}
                  key={index}
                />
              );
            })}
          {activeTab === "دستور پزشک" &&
            doctorsOrderData.map((message, index) => {
              const isLastItem = index === doctorsOrderData.length - 1;
              return (
                <Message
                  messageData={message}
                  isLastItem={isLastItem}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardMessages;

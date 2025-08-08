"use client";
import { useState } from "react";
import Image from "next/image";

type Tab = "جاری" | "انجام شده" | "لغو شده";

type VisitType = "نوبت تلفنی" | "نوبت حضوری" | "نوبت آنلاین";

interface DoctorCardType {
  name: string;
  doctorComment: string;
  image: string;
  date: string;
  time: string;
  visitTypeIcon: string;
  specialization: string;
  visitType: VisitType;
}

interface DoctorCardProps {
  doctorData: DoctorCardType;
  isLastItem?: boolean;
}

const HistoryOfTurns = () => {
  const [activeTab, setActiveTab] = useState<Tab>("جاری");
  const currentlyTab = () => setActiveTab("جاری");
  const completedTab = () => setActiveTab("انجام شده");
  const canceledTab = () => setActiveTab("لغو شده");

  const currentlyTabData: DoctorCardType[] = [
    {
      name: "محمد میرزایی",
      doctorComment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است",
      image: "/images/doctor-2.jpeg",
      date: "دوشنبه ۱۲ بهمن",
      time: "۱۲:۰۰",
      visitType: "نوبت تلفنی",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-call-calling",
    },
    {
      name: "سارا احمدی",
      doctorComment: "توضیحات پزشک برای این نوبت ثبت نشده است",
      image: "/images/comment-1.png",
      date: "سه‌شنبه ۱۳ بهمن",
      time: "۱۴:۳۰",
      visitType: "نوبت حضوری",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-buliding",
    },
    {
      name: "علی رضایی",
      doctorComment: "مراجعه جهت چکاپ سالانه",
      image: "/images/doctor-2.jpeg",
      date: "چهارشنبه ۱۴ بهمن",
      time: "۱۰:۱۵",
      visitType: "نوبت آنلاین",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-monitor-mobbile",
    },
    {
      name: "زهرا موسوی",
      doctorComment: "پیگیری نتایج آزمایش",
      image: "/images/comment-1.png",
      date: "پنجشنبه ۱۵ بهمن",
      time: "۱۶:۴۵",
      visitType: "نوبت تلفنی",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-call-calling",
    },
  ];

  const completedTabData: DoctorCardType[] = [
    {
      name: "علی رضایی",
      doctorComment: "مراجعه جهت چکاپ سالانه",
      image: "/images/doctor-2.jpeg",
      date: "چهارشنبه ۱۴ بهمن",
      time: "۱۰:۱۵",
      visitType: "نوبت آنلاین",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-monitor-mobbile",
    },
    {
      name: "زهرا موسوی",
      doctorComment: "پیگیری نتایج آزمایش",
      image: "/images/comment-1.png",
      date: "پنجشنبه ۱۵ بهمن",
      time: "۱۶:۴۵",
      visitType: "نوبت تلفنی",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-call-calling",
    },
  ];

  const canceledTabData: DoctorCardType[] = [
    {
      name: "مهدی محمدی",
      doctorComment: "مراجعه جهت چکاپ سالانه",
      image: "/images/doctor-2.jpeg",
      date: "چهارشنبه ۱۴ بهمن",
      time: "۱۰:۱۵",
      visitType: "نوبت آنلاین",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-monitor-mobbile",
    },
    {
      name: "فاطمه حسینی",
      doctorComment: "پیگیری نتایج آزمایش",
      image: "/images/comment-1.png",
      date: "پنجشنبه ۱۵ بهمن",
      time: "۱۶:۴۵",
      visitType: "نوبت تلفنی",
      specialization: "جراح مغز و اعصاب",
      visitTypeIcon: "isax isax-call-calling",
    },
  ];

  const DoctorCard: React.FC<DoctorCardProps> = ({
    doctorData,
    isLastItem,
  }) => {
    return (
      <>
        <div className="py-6">
          <div className="flex gap-4">
            <Image
              className="size-[56px] xl:size-[72px] rounded-full"
              width={72}
              height={72}
              alt={doctorData.name}
              src={doctorData.image}
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-[16px] xl:text-xl font-medium text-black-400">
                {doctorData.name}
              </h2>
              <h3 className="text-xs text-grey-500">
                {doctorData.specialization}
              </h3>
            </div>
            <div className="flex pt-3 gap-2 flex-1 justify-end text-primary-500">
              <span className={`text-xl ${doctorData.visitTypeIcon}`}></span>
              <span className="font-medium">{doctorData.visitType}</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs lg:text-[14px]">
              <span className="text-black-400"> نظر پزشک : </span>
              <span className="text-grey-500">
                {" "}
                {doctorData.doctorComment}{" "}
              </span>
            </p>
          </div>
          <div className="mt-6 flex w-full items-center">
            <div className="text-xs flex-1 text-grey-400">
              <span>{doctorData.date}</span>
              <span> | </span>
              <span>{doctorData.time}</span>
            </div>
            <div className="flex gap-2 text-sky-750">
              <span className="font-medium">جزئیات بیشتر</span>
              <span className="isax isax-arrow-down-1 text-xl"></span>
            </div>
          </div>
        </div>
        <div
          className={`${isLastItem ? "" : "h-px bg-grey-200"} lg:block hidden`}
        ></div>
        <div className="bg-grey-200 h-px lg:hidden block"></div>
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="lg:bg-white-100 lg:border border-grey-100 lg:rounded-2xl pt-6 lg:px-6">
        <h1 className="text-[22px] text-black-400">تاریخچه نوبت ها</h1>
        <ul className="border-b border-grey-200 flex justify-between xl:justify-start gap-8 mt-6 text-[16px]">
          <li
            onClick={currentlyTab}
            className={` ${
              activeTab === "جاری"
                ? "font-bold text-primary-500 pb-1 border-b-2 border-primary-500"
                : "text-grey-500 pb-2"
            }`}
          >
            جاری
          </li>
          <li
            onClick={completedTab}
            className={` ${
              activeTab === "انجام شده"
                ? "font-bold text-primary-500 pb-1 border-b-2 border-primary-500"
                : "text-grey-500 pb-2"
            }`}
          >
            انجام شده
          </li>
          <li
            onClick={canceledTab}
            className={` ${
              activeTab === "لغو شده"
                ? "font-bold text-primary-500 pb-1 border-b-2 border-primary-500"
                : "text-grey-500 pb-2"
            }`}
          >
            لغو شده
          </li>
        </ul>
        {activeTab === "جاری" && (
          <div>
            {currentlyTabData.map((doctor, index) => {
              const isLastItem = index === currentlyTabData.length - 1;
              return (
                <DoctorCard
                  key={index}
                  doctorData={doctor}
                  isLastItem={isLastItem}
                />
              );
            })}
          </div>
        )}
        {activeTab === "انجام شده" && (
          <div>
            {completedTabData.map((doctor, index) => {
              const isLastItem = index === completedTabData.length - 1;
              return (
                <DoctorCard
                  key={index}
                  doctorData={doctor}
                  isLastItem={isLastItem}
                />
              );
            })}
          </div>
        )}
        {activeTab === "لغو شده" && (
          <div>
            {canceledTabData.map((doctor, index) => {
              const isLastItem = index === canceledTabData.length - 1;
              return (
                <DoctorCard
                  key={index}
                  doctorData={doctor}
                  isLastItem={isLastItem}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryOfTurns;

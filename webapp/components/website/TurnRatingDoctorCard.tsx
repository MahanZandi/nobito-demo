"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TurnRatingDoctorCard = () => {
  const [selectFilter, setSelectFilter] = useState<string>("");

  const handelFilterSort = (text: string) => {
    setSelectFilter(text);
  };

  const doctors = [
    {
      id: 1,
      name: "بهرام میرزایی",
      image: "/images/doctor-9.png",
      rate: "4/5",
      comment: "360 نظر",
      services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
      takeTurns: [
        {
          title: "گفتگو تلفنی",
          icon: "isax isax-call-calling",
        },
        {
          title: "جلسه آنلاین",
          icon: "isax isax-monitor-mobbile",
        },
        {
          title: "ویزیت حضوری",
          icon: "isax isax-buliding",
        },
      ],
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      successfulTurn: "1222",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
      features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
      workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },

    {
      id: 2,
      name: "بهرام میرزایی",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      comment: "360 نظر",
      services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
      takeTurns: [
        {
          title: "گفتگو تلفنی",
          icon: "isax isax-call-calling",
        },
        {
          title: "جلسه آنلاین",
          icon: "isax isax-monitor-mobbile",
        },
        {
          title: "ویزیت حضوری",
          icon: "isax isax-buliding",
        },
      ],
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      successfulTurn: "1222",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
      features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
      workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 3,
      name: "بهرام میرزایی",
      image: "/images/doctor-10.png",
      rate: "4/5",
      comment: "360 نظر",
      services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
      takeTurns: [
        {
          title: "گفتگو تلفنی",
          icon: "isax isax-call-calling",
        },
        {
          title: "جلسه آنلاین",
          icon: "isax isax-monitor-mobbile",
        },
        {
          title: "ویزیت حضوری",
          icon: "isax isax-buliding",
        },
      ],
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      successfulTurn: "1222",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
      features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
      workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 4,
      name: "بهرام میرزایی",
      image: "/images/doctor-8.png",
      rate: "4/5",
      comment: "360 نظر",
      services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
      takeTurns: [
        {
          title: "گفتگو تلفنی",
          icon: "isax isax-call-calling",
        },
        {
          title: "جلسه آنلاین",
          icon: "isax isax-monitor-mobbile",
        },
        {
          title: "ویزیت حضوری",
          icon: "isax isax-buliding",
        },
      ],
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      successfulTurn: "1222",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
      features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
      workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
  ];

  const filters = [
    { title: "محبوب ترین ها" },
    { title: "بیشترین امتیاز" },
    { title: "سریع ترین نوبت" },
    { title: "کم ترین معطلی در مطب" },
  ];

  return (
    <div className="container pb-[39px]">
      {/* sorte filter */}
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <span className="text-[32px] isax isax-sort"></span>
          <span className="text-xl font-semibold">دسته بندی :</span>
          <ul className="pr-[40px] flex gap-[24px] text-[14px] font-normal text-grey-350">
            {filters.map((item) => (
              <li
                key={item.title}
                onClick={() => handelFilterSort(item.title)}
                className={`cursor-pointer ${
                  selectFilter === item.title ? "text-primary-500" : ""
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* doctor card */}
      <div className="xl:pt-[39px] flex flex-col gap-6">
        {doctors.map((doctorCard) => (
          <div key={doctorCard.id} className="bg-white-100 rounded-2xl p-6">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Image
                  className="rounded-full xl:size-[80px] size-[56px] object-cover"
                  src={doctorCard.image}
                  alt={doctorCard.name}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-3">
                  <span className="text-[22px] text-black-400 font-medium">
                    {doctorCard.name}
                  </span>
                  <span className="text-[16px] text-grey-500 font-normal">
                    {doctorCard.specialization}
                  </span>
                </div>
              </div>
              <div>
                {/* rating */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-primary-500 text-[12px]">
                    <div className="bg-white-150 rounded-sm py-1 px-2 flex gap-2">
                      <span className="isax isax-like-1 text-lg"></span>
                      <span className="flex gap-1.5">
                        <span> {doctorCard.happyPatientsPercentage} </span>
                        <span>پیشنهاد کاربران</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex pt-[16px]">
                    <div className="flex text-[12px] text-black-350 gap-1 items-center justify-end w-full">
                      <span className="isax isax-star-15 text-lg leading-[18px] text-secondary-500"></span>
                      <span>{doctorCard.rate}</span>
                      <span> از </span>
                      <span>({doctorCard.comment})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6">
              {/* horizontal line */}
              <div className="bg-grey-200 h-px w-full"></div>
            </div>
            <div className="flex gap-1">
              <span className="font-[700] text-black-400">خدمات:</span>
              <span className="font-normal text-grey-500">
                {doctorCard.services}
              </span>
            </div>
            <div className="py-[24px] flex items-center gap-2 text-black-400">
              <span> شیوه نوبت دهی: </span>
              {doctorCard.takeTurns?.map((takeTurnItems) => (
                <div
                  className="flex items-center gap-2"
                  key={takeTurnItems.title}
                >
                  <span
                    className={`${
                      takeTurnItems.icon ? "inline-block" : "hidden"
                    } size-[34px] p-2 rounded-full bg-grey-50`}
                  >
                    <span
                      className={`text-[18px] ${takeTurnItems.icon}`}
                    ></span>
                  </span>
                  <span>{takeTurnItems.title}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-center pb-6">
              <span className="text-black-400 text-[16px]">شاخصه ها:</span>
              {doctorCard.features?.map((feature) => (
                <span
                  className="text-primary-500 border border-primary-500 px-3 py-[5px] rounded-[200px]"
                  key={feature}
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row-reverse items-center text-[12px] gap-2 text-black-400">
                <span>{doctorCard.workingHours}</span>
                <span>ساعت کاری:</span>
                <span className="isax isax-clock text-2xl"></span>
              </div>
              <div className="flex gap-1 flex-row-reverse text-[12px] items-center text-primary-500">
                <span>نوبت موفق در نوبیتو</span>
                <span>{doctorCard.successfulTurn}</span>
                <span className="isax isax-tick-circle5 text-lg"></span>
              </div>
            </div>
            <div className="py-6">
              {/* horizontal line */}
              <div className="bg-grey-200 h-px w-full"></div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-[16px] text-black-400">
                  <span className="isax isax-location text-2xl"></span>
                  <span>نشانی :</span>
                  <span>{doctorCard.location}</span>
                </div>
                <Link href="#">
                  <button className="flex gap-2 text-white-500 bg-primary-500 rounded-md px-3 py-2">
                    <span className="text-[16px] font-medium">دریافت نوبت</span>
                    <span className="isax isax-arrow-left text-2xl"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurnRatingDoctorCard;

"use client";
import { useState } from "react";

const TurnRatingDoctorCard = () => {
  const [selectFilter, setSelectFilter] = useState<string>("");

  const handelFilterSort = (text: string) => {
    setSelectFilter(text);
  };

  const doctors = [
    {
      id: 1,
      name: "بهرام میرزایی",
      image: "/images/doctor-1.png",
      rate: "4/5",
      comment: "360 نظر",
      services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
      takeTurns: [
        {
          title: "گفتگو تلفنی",
          icon: "",
        },
        {
          title: "جلسه آنلاین",
          icon: "",
        },
        {
          title: "ویزیت حضوری",
          icon: "",
        }
      ],
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: 'تهران',
      Features:[
        "سالن انتظار",
        "آسانسور",
        "پارکینگ",
        ""
      ],
      workingHours: 'شنبه تا چهارشنبه 9صبح تا 6 عصر',
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 2,
      name: "دکتر محمدی",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 3,
      name: "مهران مهام",
      image: "/images/doctor-3.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 4,
      name: "لیلا میرزایی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
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
    </div>
  );
};

export default TurnRatingDoctorCard;

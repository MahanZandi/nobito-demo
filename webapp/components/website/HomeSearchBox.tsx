"use client";
import { useState } from "react";
import Image from "next/image";

const HomeSearchBox = () => {
  const searchData = [
    {
      id: 1,
      name: "عباس میراحمدی",
      image: "/images/doctor-1.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
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
    {
      id: 5,
      name: "دکتر محمدی",
      image: "/images/doctor-5.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 6,
      name: "محمد ابراهیمی",
      image: "/images/doctor-6.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 7,
      name: "دکتر محمدی",
      image: "/images/doctor-7.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 8,
      name: "دکتر محمدی",
      image: "/images/doctor-8.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 9,
      name: "امیرحسین فربد",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
    {
      id: 10,
      name: "دکتر محمدی",
      image: "/images/doctor-10.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
    },
  ];

  // for open our clode search box
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");

  // filter search data (name, specialization)
  const filterSearchData = searchData.filter(
    (searchItem) =>
      searchItem.name.toLowerCase().includes(query.toLowerCase()) ||
      searchItem.specialization.toLowerCase().includes(query.toLowerCase())
  );

  // this function for highlighting search result
  function HighlightedText({ text, query }: { text: string; query: string }) {
    if (!query) return <>{text}</>;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-yellow-300 rounded">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  }

  return (
    <div>
      <div className="px-4 lg:px-0">
        <label
          form="search"
          className={`lg:w-[798px] h-20 bg-white-50 relative z-20 -mt-10 p-5
            flex items-center gap-2 mx-auto ${
              isFocused ? "rounded-t-2xl" : "rounded-2xl"
            }`}
        >
          <span className="isax isax-search-normal text-[32px] leading-8 text-grey-400 flex-1"></span>
          <input
            id="search"
            onFocus={() => setIsFocused(true)}
            className="absolute inset-0 outline-none flex-1 p-5 pr-[60px] text-black-400"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="p-1.5 lg:w-[141px] lg:h-10 border text-primary-600 border-primary-600
            flex items-center justify-center gap-2 relative cursor-pointer rounded-lg"
          >
            <span className="isax isax-location text-2xl leading-6 text-primary-600"></span>
            <span className="hidden lg:block">انتخاب شهر</span>
          </button>
        </label>
      </div>

      <div className="absolute w-full">
        {isFocused && (
          <div>
            <div className="container relative z-20 bg-white rounded-b-2xl shadow lg:w-[798px]">
              <div className="overflow-y-auto  max-h-[656px]">
                <div className="py-6 flex border-y border-grey-200 rounded">
                  <p className="text-[16px] text-black-400 font-medium w-[120px]">
                    جستجو های اخیر:
                  </p>

                  <ul className="flex items-center gap-3 pr-6 overflow-x-auto flex-1">
                    <li className="flex items-center gap-2 text-grey-500 bg-black-50 rounded-[200px] min-w-[90px] h-[28px] px-[12px]">
                      <p>سالن انتظار</p>
                      <span className="isax isax-close-circle text-[16px] cursor-pointer"></span>
                    </li>
                  </ul>
                </div>
                <p className="flex justify-center text-[16px] text-black-400 font-medium pt-[24px]">
                  نتایج جستجو:
                </p>
                {filterSearchData?.map((data) => (
                  <div
                    key={data.id}
                    className="flex justify-between pt-[24px] pb-[16px]"
                  >
                    <div className="flex gap-4">
                      <Image
                        className="size-[74px] object-cover rounded-full"
                        width={74}
                        height={74}
                        alt="پروفایل دکتر"
                        src={data.image}
                      />
                      <div className="flex flex-col gap-3">
                        <p className="text-black-400 text-[20px]">
                          <HighlightedText text={data.name} query={query} />
                        </p>
                        <p className="text-grey-500 text-[14px]">
                          <HighlightedText text={data.specialization} query={query} />
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end text-primary-500">
                      <div className="bg-white-150 rounded-sm py-1 px-2 flex gap-2">
                        <span className="isax isax-like-1 text-lg"></span>
                        <span>
                          <span> {data.happyPatientsPercentage} </span>
                          <span>پیشنهاد کاربران</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* overlay for close search box*/}
        {isFocused && (
          <div
            className="fixed z-10 inset-0"
            onClick={() => setIsFocused(false)}
          />
        )}
      </div>
    </div>
  );
};

export default HomeSearchBox;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import * as Select from "@radix-ui/react-select";

const MobileSearchPage = () => {
  const searchData = [
    {
      id: 1,
      name: "عباس میراحمدی",
      image: "/images/doctor-1.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "گرگان - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "گرگان",
    },
    {
      id: 2,
      name: "دکتر محمدی",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "آبادان - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "آبادان",
    },
    {
      id: 3,
      name: "مهران مهام",
      image: "/images/doctor-3.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 4,
      name: "لیلا میرزایی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 5,
      name: "دکتر محمدی",
      image: "/images/doctor-5.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 6,
      name: "محمد ابراهیمی",
      image: "/images/doctor-6.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 7,
      name: "دکتر محمدی",
      image: "/images/doctor-7.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 8,
      name: "دکتر محمدی",
      image: "/images/doctor-8.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 9,
      name: "امیرحسین فربد",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
    {
      id: 10,
      name: "دکتر محمدی",
      image: "/images/doctor-10.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      happyPatients: "2374",
      happyPatientsPercentage: "97%",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
      city: "تهران",
    },
  ];

  // city selection
  const [selectedCity, setSelectedCity] = useState("");

  const uniqueCities = [...new Set(searchData.map((item) => item.city))];

  const [query, setQuery] = useState<string>("");

  // filter search data (name, specialization, city)
  const filterSearchData = searchData.filter((searchItem) => {
    const matchesQuery =
      searchItem.name.toLowerCase().includes(query.toLowerCase()) ||
      searchItem.specialization.toLowerCase().includes(query.toLowerCase());

    const matchesCity = selectedCity
      ? searchItem.city.toLowerCase() === selectedCity.toLowerCase()
      : true;

    return matchesQuery && matchesCity;
  });

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

  // for recent search
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  // add recent search in input  by click on recent search button

  const handleAddRecentSearch = (searchResult: string) => {
    if (!recentSearches.includes(searchResult)) {
      setRecentSearches([searchResult, ...recentSearches]);
    }
  };

  const deleteRecentSearch = (index: number) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  const handleSelectSearch = (recentSearcheItem: string) => {
    setQuery(recentSearcheItem);
  };

  return (
    <>
      <div className="bg-white text-[22px] font-medium text-black py-3 flex items-center px-4">
        <p className="flex justify-center mx-auto">جستجو</p>
        <Link href="/">
          <span className="isax isax-arrow-left text-2xl flex"></span>
        </Link>
      </div>
      <div className="container pt-[30px]">
        <div>
          <div>
            <label
              form="search"
              className="h-[48px] bg-white-50 relative z-20 p-3
            flex items-center gap-2 justify-center rounded-lg"
            >
              <span className="isax isax-search-normal text-[18px] leading-8 text-grey-400 flex-1"></span>
              <input
                id="search"
                className="absolute inset-0 outline-none flex-1 p-5 pr-[38px] text-black-400 text-[14px]"
                placeholder="جستجو پزشک،درمانگر،کلینیک..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <Select.Root
                value={selectedCity || ""}
                onValueChange={(value) => {
                  if (value === "clear") {
                    setSelectedCity("");
                  } else {
                    setSelectedCity(value);
                  }
                }}
              >
                <Select.Trigger
                  className="focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none bg-primary-50 p-1.5 lg:h-10 border text-primary-600 border-primary-600 flex items-center justify-center gap-2 relative cursor-pointer rounded-sm"
                  aria-label="انتخاب شهر"
                >
                  <Select.Value />
                  <span
                    className={`isax isax-location text-lg leading-6 text-primary-600 ${
                      selectedCity === "" ? "relative right-1" : ""
                    }`}
                  ></span>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-white max-w-[120px] border border-gray-200 shadow rounded-xl z-50">
                    <Select.ScrollUpButton />
                    <Select.Viewport className="text-right">
                      <Select.Separator />

                      {/* بقیه شهرها */}
                      {uniqueCities.map((city, idx) => (
                        <Select.Item
                          key={idx}
                          value={city}
                          className="cursor-pointer select-none rounded-md px-4 py-2 text-right data-[highlighted]:bg-gray-200 data-[highlighted]:text-primary-700
                           focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none
                            transition-colors text-gray-500"
                        >
                          <Select.ItemText>{city}</Select.ItemText>
                        </Select.Item>
                      ))}
                      {/* آیتم حذف فیلتر */}
                      <Select.Item
                        value="clear"
                        className="select-none rounded-md text-right data-[highlighted]:bg-gray-200 data-[highlighted]:text-primary-700
                           focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none
                           cursor-pointer px-4 py-2 text-gray-500 transition-colors"
                      >
                        <Select.ItemText>برداشتن فیلتر</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                    <Select.Arrow />
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </label>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <div className="relative rounded-b-2xl">
            <div className="overflow-y-auto ">
              <div className="py-4 flex flex-col gap-4 ">
                <p className="text-[14px] text-black-400 font-medium px-4">
                  جستجو های اخیر:
                </p>

                <ul className="flex items-center gap-3 overflow-x-auto flex-1">
                  {recentSearches?.map((recentSearcheItem, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-grey-500 bg-white rounded-[200px] min-w-[120px] h-[28px] px-[12px]"
                    >
                      <p
                        className="cursor-pointer line-clamp-1 text-[14px]"
                        onClick={() => handleSelectSearch(recentSearcheItem)}
                      >
                        {recentSearcheItem}
                      </p>
                      <span
                        onClick={() => deleteRecentSearch(index)}
                        className="isax isax-close-circle text-[18px] cursor-pointer"
                      ></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-px bg-grey-200 mx-4"></div>

              <p className="flex justify-start text-[16px] text-black-400 font-medium pt-6 px-4">
                نتایج جستجو:
              </p>
              {filterSearchData?.map((data) => (
                <Link
                  href="#"
                  onClick={() => handleAddRecentSearch(data.name)}
                  key={data.id}
                  className="flex justify-between pt-6 pb-4 px-4"
                >
                  <div className="flex gap-4">
                    <Image
                      className="size-[56px] object-cover rounded-full"
                      width={56}
                      height={56}
                      alt="پروفایل دکتر"
                      src={data.image}
                    />
                    <div className="flex flex-col gap-3">
                      <p className="text-black-400 text-[16px]">
                        <HighlightedText text={data.name} query={query} />
                      </p>
                      <p className="text-grey-500 text-[12px]">
                        <HighlightedText
                          text={data.specialization}
                          query={query}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end text-primary-500">
                    <div className="bg-white-150 rounded-sm py-1 px-2 flex gap-2">
                      <span className="isax isax-like-1 text-lg"></span>
                      <span>
                        <span> {data.happyPatientsPercentage} </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSearchPage;

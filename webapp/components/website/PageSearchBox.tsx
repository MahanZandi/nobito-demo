"use client";
import { useState } from "react";
import { useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import * as Dialog from "@radix-ui/react-dialog";
import MobileSearchOverlay from "./MobileSearchOverlay";
import Image from "next/image";
import Link from "next/link";

interface SearchBoxProps {
  container: string;
  mobileInput: boolean;
  lableStyle: string;
}

const PageSearchBox = ({
  container,
  mobileInput,
  lableStyle,
}: SearchBoxProps) => {
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

    {
      id: 11,
      name: " ابراهیمی",
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
      id: 12,
      name: " محمدی",
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
      id: 13,
      name: " فربد",
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
      id: 14,
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

  // city selector
  const [selectedCity, setSelectedCity] = useState("");

  // This code is to prevent duplicate city names
  const uniqueCities = [...new Set(searchData.map((item) => item.city))];

  // for open our clode search box
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // query for search input
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

  // handel mobile search open and close
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  useEffect(() => {
    if (isMobileSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileSearchOpen]);

  return (
    <>
      <div className={container}>
        {/*this input for mobile becouse we have a search page in mobile view and linke worked in mobile view */}
        <div
          className={`xl:hidden ${mobileInput ? "block" : "hidden"}`}
          onClick={openMobileSearch}
        >
          <label
            form="search"
            className={`lg:w-[798px] lg:h-20 bg-white-50 relative z-20 -mt-10 p-5
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
              className="p-1.5 xl:w-[141px] xl:h-10 border text-primary-600 border-primary-600
            flex items-center justify-center gap-2 relative cursor-pointer rounded-lg"
            >
              <span className="isax isax-location text-2xl leading-6 text-primary-600"></span>
              <span className="hidden xl:block">انتخاب شهر</span>
            </button>
          </label>
        </div>
        {/* this input for desktop view becouse we have a search box in desktop */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="hidden xl:block">
              <label
                form="search"
                className={`rounded-2xl ${lableStyle}`}
              >
                <span className="isax isax-search-normal text-[32px] leading-8 text-grey-400 flex-1"></span>
                <input
                  id="search"
                  onFocus={() => setIsFocused(true)}
                  className="absolute inset-0 outline-none flex-1 p-5 pr-[60px] text-black-400"
                  placeholder="جستجو پزشک،درمانگر،کلینیک..."
                />

                <Select.Root
                >
                  <Select.Trigger
                    className="focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none p-2 px-4 xl:h-10 border text-primary-600 border-primary-600 flex items-center justify-center gap-2 relative cursor-pointer rounded-lg"
                    aria-label="انتخاب شهر"
                  >
                    <Select.Value placeholder="انتخاب شهر" />
                    <span className="isax isax-location text-2xl leading-6 text-primary-600"></span>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-white max-w-[120px] border border-gray-200 shadow rounded-xl">
                      <Select.ScrollUpButton />
                      <Select.Viewport className="text-right">
                        <Select.Separator />

                       
                      </Select.Viewport>
                      <Select.ScrollDownButton />
                      <Select.Arrow />
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </label>
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30 z-10 " />

            <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray p-[25px] focus:outline-none data-[state=open]:animate-contentShow z-20">
              <Dialog.Title></Dialog.Title>
              <div>
                <div>
                  {/* FIXME fixed the scroll  */}
                  <div className=" bg-grey-50 pt-6 overflow-y-auto scrollbar-thin z-20 rounded-2xl shadow lg:w-[900px] pb-12 px-12">
                    <div className="max-h-[606px]">
                      <div className="hidden xl:block">
                        <label
                          form="search"
                          className="lg:w-[798px] h-20 bg-white-50 relative p-5 flex items-center gap-2 rounded-2xl mb-6 mt-12"
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
                              className="focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none p-2 px-4 xl:h-10 border text-primary-600 border-primary-600 flex items-center justify-center gap-2 relative cursor-pointer rounded-lg"
                              aria-label="انتخاب شهر"
                            >
                              <Select.Value placeholder="انتخاب شهر" />
                              <span className="isax isax-location text-2xl leading-6 text-primary-600"></span>
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
                                      className="
                           cursor-pointer select-none rounded-md px-4 py-2 text-right text-gray-600
                          data-[highlighted]:bg-gray-200 data-[highlighted]:text-primary-700
                          focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none
                          transition-colors"
                                    >
                                      <Select.ItemText>{city}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                  {/* آیتم حذف فیلتر */}
                                  <Select.Item
                                    value="clear"
                                    className="cursor-pointer select-none rounded-md px-4 py-2 text-right text-gray-600
                          data-[state=checked]:bg-primary-50 data-[state=checked]:text-primary-600
                          data-[highlighted]:bg-gray-200 data-[highlighted]:text-primary-700
                          focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none
                          transition-colors"
                                  >
                                    <Select.ItemText>
                                      برداشتن فیلتر
                                    </Select.ItemText>
                                  </Select.Item>
                                </Select.Viewport>
                                <Select.ScrollDownButton />
                                <Select.Arrow />
                              </Select.Content>
                            </Select.Portal>
                          </Select.Root>
                        </label>
                      </div>
                      <div className="py-6 flex border-y border-grey-200 rounded">
                        <p className="text-[16px] text-black-400 font-medium w-[120px]">
                          جستجو های اخیر:
                        </p>
                        <ul className="flex items-center gap-3 pr-6 flex-1 overflow-x-scroll scrollbar-thin">
                          {recentSearches?.map((recentSearcheItem, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between gap-2 text-grey-500 bg-black-50 rounded-[200px] min-w-[150px] h-[28px] px-[12px]"
                            >
                              <p
                                className="cursor-pointer line-clamp-1"
                                onClick={() =>
                                  handleSelectSearch(recentSearcheItem)
                                }
                              >
                                {recentSearcheItem}
                              </p>
                              <span
                                onClick={() => deleteRecentSearch(index)}
                                className="isax isax-close-circle text-[16px] cursor-pointer"
                              ></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="flex text-[16px] text-black-400 font-medium pt-6 justify-start">
                        نتایج جستجو:
                      </p>
                      {filterSearchData?.map((data) => (
                        <Link
                          href="#"
                          onClick={() => handleAddRecentSearch(data.name)}
                          key={data.id}
                          className="flex justify-between pt-6 pb-4 border-b border-grey-200"
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
                                <HighlightedText
                                  text={data.name}
                                  query={query}
                                />
                              </p>
                              <p className="text-grey-500 text-[14px]">
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
                                <span>پیشنهاد کاربران</span>
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {/* this overlay for mobile view */}
      <MobileSearchOverlay
        isMobileSearchOpen={isMobileSearchOpen}
        setIsMobileSearchOpen={setIsMobileSearchOpen}
      />
    </>
  );
};

export default PageSearchBox;

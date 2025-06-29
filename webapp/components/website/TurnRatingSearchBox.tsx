"use client";
import { useState } from "react";
import { useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import Link from "next/link";

interface TurnRatingSearchBoxProps {
  searchData: {
    id: number;
    name: string;
    image: string;
    rate: string;
    specialization: string;
    happyPatients: string;
    happyPatientsPercentage: string;
    skills: string[];
    location: string;
    city: string;
  }[];
}

const TurnRatingSearchBox:React.FC<TurnRatingSearchBoxProps> = ({searchData}) => {

  // city selector
  const [showCities, setShowCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  // This code is to prevent duplicate city names
  const uniqueCities = [...new Set(searchData.map((item) => item.city))];

  // handle clear location filter
  const handleClearCityFilter = () => {
    setSelectedCity("");
    setShowCities(false);
  };

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

  return (
    <div className="container">
      <div className="hidden xl:block">
        <label
          form="search"
          className={`lg:w-[798px] h-20 bg-white-50 relative z-20 p-5
            flex items-center gap-2 ${
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

      <div className="absolute w-full hidden xl:block container">
        {/* modal for selected city */}
        {showCities && (
          <div className="absolute text-black-400 z-[50] left-[27rem] -top-4 mt-2 w-[200px] max-h-[150px] overflow-y-auto bg-white border border-gray-200 shadow rounded-lg text-right">
            <div
              onClick={handleClearCityFilter}
              className="px-4 py-2 flex items-center gap-2 text-grey-400"
            >
              <span>برداشتن فیلتر</span>
              <span className="isax isax-close-circle text-[18px] cursor-pointer"></span>
            </div>
            {uniqueCities.map((city, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCity(city);
                  setShowCities(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        )}
        {isFocused && (
          <div>
            <div className="relative left-4 z-20 pt-6 bg-grey-50 overflow-y-auto scrollbar-thin rounded-b-2xl shadow lg:w-[798px] pb-12">
              <div className="px-12 max-h-[656px]">
                <div className="py-6 flex border-y border-grey-200 rounded">
                  <p className="text-[16px] text-black-400 font-medium w-[180px] pr-[48px]">
                    جستجو های اخیر:
                  </p>
                  <ul className="flex items-center gap-3 pr-6 flex-1 overflow-x-scroll scrollbar-thin pl-[48px]">
                    {recentSearches?.map((recentSearcheItem, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between gap-2 text-grey-500 bg-black-50 rounded-[200px] min-w-[150px] h-[28px] px-[12px]"
                      >
                        <p
                          className="cursor-pointer line-clamp-1"
                          onClick={() => handleSelectSearch(recentSearcheItem)}
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
                <p className="flex justify-start text-[16px] text-black-400 font-medium pt-[24px] px-[48px]">
                  نتایج جستجو:
                </p>
                {filterSearchData?.map((data) => (
                  <Link
                    href="#"
                    onClick={() => handleAddRecentSearch(data.name)}
                    key={data.id}
                    className="flex justify-between pt-[24px] pb-[16px] px-[48px]"
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
        )}

        {/* overlay for close search box*/}
        {isFocused && (
          <div
            className="fixed z-10 inset-0"
            onClick={() => setIsFocused(false)}
          />
        )}
        {showCities && (
          <div
            className="fixed z-10 inset-0"
            onClick={() => setShowCities(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TurnRatingSearchBox;

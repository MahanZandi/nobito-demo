"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileTurnRatingFilterCard from "./MobileTurnRatingFilterCard";

interface TurnRatingDoctorCardProps {
  doctors: {
    id: number;
    name: string;
    image: string;
    rate: string;
    comment: string;
    services: string;
    takeTurns: {
      title: string;
      icon: string;
    }[];
    specialization: string;
    happyPatients: string;
    successfulTurn: string;
    happyPatientsPercentage: string;
    skills: string[];
    city: string;
    features: string[];
    workingHours: string;
    location: string;
    insurance: string;
  }[];

  sortOptions: {
    title: string;
  }[];
}

const TurnRatingDoctorCard: React.FC<TurnRatingDoctorCardProps> = ({
  doctors,
  sortOptions,
}) => {
  const [selectFilter, setSelectFilter] = useState<string>("");

  const [isMobileFilterCard, setIsMobileFilterCard] = useState<boolean>(false);

  const openFilterCard = () => {
    setIsMobileFilterCard(true);
  };

  const handelFilterSort = (text: string) => {
    setSelectFilter(text);
  };

  return (
    <>
      {/* sorte filter in mobile view */}
      <div className="pb-[24px] xl:hidden">
        <div className="bg-white-100 border-y border-grey-200">
          <div className="container py-4 text-[14px] text-black-400 flex gap-3">
            <div className="flex gap-2">
              <span className="isax isax-filter text-2xl"></span>
              <span onClick={openFilterCard}>فیلتر کردن</span>
            </div>
            <div className="flex gap-2">
              <span className="isax isax-sort text-2xl"></span>
              <span>دسته بندی</span>
            </div>
          </div>
        </div>
      </div>

      {/* sorte filter in desktop view*/}
      <div>
        <div className="pb-[39px] xl:min-w-[771px] ">
          <div className="hidden xl:flex items-center">
            <div className="flex gap-2 items-center">
              <span className="text-[32px] isax isax-sort"></span>
              <span className="text-xl font-semibold">دسته بندی :</span>
              <ul className="pr-[40px] flex gap-[24px] text-[14px] font-normal text-grey-350">
                {sortOptions.map((item) => (
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
          <div>
            {/* doctor card in desktop view*/}
            <div className="xl:pt-[39px] xl:w-[771px] 2xl:w-full hidden xl:flex flex-col gap-6">
              {doctors.map((doctorCard) => (
                <div
                  key={doctorCard.id}
                  className="bg-white-100 w-full rounded-2xl p-6"
                >
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex gap-4">
                      <Image
                        className="rounded-full xl:size-[80px] size-[56px] object-cover"
                        src={doctorCard.image}
                        alt={doctorCard.name}
                        width={80}
                        height={80}
                      />
                      <div className="flex flex-col gap-3">
                        <span className="text-[16px] xl:text-[22px] text-black-400 font-medium">
                          {doctorCard.name}
                        </span>
                        <span className="text-[12px] xl:text-[16px] text-grey-500 font-normal">
                          {doctorCard.specialization}
                        </span>
                      </div>
                    </div>
                    <div>
                      {/* rating */}
                      <div className="flex flex-row-reverse items-center justify-center lg:justify-start lg:items-start lg:flex-col gap-4 lg:gap-3">
                        <div className="flex items-center text-primary-500 text-[12px]">
                          <div className="bg-white-150 rounded-sm py-1 px-2 flex gap-2">
                            <span className="isax isax-like-1 text-lg"></span>
                            <span className="flex gap-1.5">
                              <span>{doctorCard.happyPatientsPercentage}</span>
                              <span>پیشنهاد کاربران</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex lg:pt-[16px]">
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
                  <div className="flex text-[12px] xl:text-[16px] gap-1">
                    <span className="font-[700] text-black-400">خدمات:</span>
                    <span className="font-normal text-grey-500">
                      {doctorCard.services}
                    </span>
                  </div>
                  <div className="py-[24px] text-[12px] xl:text-[16px] flex items-center gap-2 text-black-400">
                    <span className="xl:block hidden"> شیوه نوبت دهی: </span>
                    {doctorCard.takeTurns?.map((takeTurnItems) => (
                      <div
                        className="flex items-center gap-2"
                        key={takeTurnItems.title}
                      >
                        <span
                          className={`${
                            takeTurnItems.icon ? "inline-block" : "hidden"
                          } size-[28px] xl:size-[34px] p-2 rounded-full bg-grey-50`}
                        >
                          <span
                            className={`text-[16px] xl:text-[18px] ${takeTurnItems.icon}`}
                          ></span>
                        </span>
                        <span>{takeTurnItems.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center pb-6">
                    <span className="text-black-400 text-[12px] xl:text-[16px] hidden xl:inline-block">
                      شاخصه ها:
                    </span>
                    {doctorCard.features?.map((feature) => (
                      <span
                        className="text-primary-500 border border-primary-500 px-3 py-[5px] rounded-[200px] text-[12px]"
                        key={feature}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-[16px] flex-col xl:flex-row xl:justify-between items-start xl:items-center">
                    <div className="flex flex-row-reverse items-center text-[12px] gap-2 text-black-400">
                      <span>{doctorCard.workingHours}</span>
                      <span>ساعت کاری:</span>
                      <span className="isax isax-clock text-[16px] xl:text-2xl"></span>
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
                      <div className="flex gap-2 text-[12px] xl:text-[16px] text-black-400">
                        <span className="isax isax-location text-[18px] xl:text-2xl"></span>
                        <span>نشانی :</span>
                        <span className="line-clamp-1">
                          {doctorCard.location}
                        </span>
                      </div>
                      <Link
                        href="#"
                        className="cursor-pointer hidden xl:block text-white-500 bg-primary-500 rounded-md px-3 py-2"
                      >
                        <button className="flex cursor-pointer gap-2">
                          <span className="text-[16px] font-medium">
                            دریافت نوبت
                          </span>
                          <span className="isax isax-arrow-left text-2xl"></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* doctor card in mobile view*/}
            <div className="xl:pt-[39px] flex container flex-col gap-6">
              {doctors.map((doctorCard) => (
                <Link
                  href="#"
                  key={doctorCard.id}
                  className="bg-white-100 rounded-2xl p-3"
                >
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex gap-4">
                      <Image
                        className="rounded-full xl:size-[80px] size-[56px] object-cover"
                        src={doctorCard.image}
                        alt={doctorCard.name}
                        width={80}
                        height={80}
                      />
                      <div className="flex flex-col gap-3">
                        <span className="text-[16px] xl:text-[22px] text-black-400 font-medium">
                          {doctorCard.name}
                        </span>
                        <span className="text-[12px] xl:text-[16px] text-grey-500 font-normal">
                          {doctorCard.specialization}
                        </span>
                      </div>
                    </div>
                    <div>
                      {/* rating */}
                      <div className="flex pt-[12px] xl:pt-0 flex-row-reverse items-center justify-center lg:justify-start lg:items-start lg:flex-col gap-4 lg:gap-3">
                        <div className="flex items-center text-primary-500 text-[12px]">
                          <div className="bg-white-150 rounded-sm py-1 px-2 flex gap-2">
                            <span className="isax isax-like-1 text-lg"></span>
                            <span className="flex gap-1.5">
                              <span>{doctorCard.happyPatientsPercentage}</span>
                              <span>پیشنهاد کاربران</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex xl:pt-[16px]">
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
                  <div className="py-3 xl:py-6">
                    {/* horizontal line */}
                    <div className="bg-grey-200 h-px w-full"></div>
                  </div>
                  <div className="text-[12px] xl:text-[16px]">
                    <span className="font-normal text-grey-500">
                      <span className="font-[700] text-black-400">خدمات :</span>
                      {doctorCard.services}
                    </span>
                  </div>
                  <div className="py-[24px] text-[12px] xl:text-[16px] flex items-center gap-2 text-black-400">
                    <span className="xl:block hidden"> شیوه نوبت دهی: </span>
                    {doctorCard.takeTurns?.map((takeTurnItems) => (
                      <div
                        className="flex items-center gap-2"
                        key={takeTurnItems.title}
                      >
                        <span
                          className={`${
                            takeTurnItems.icon ? "inline-block" : "hidden"
                          } size-[28px] xl:size-[34px] p-2 rounded-full bg-grey-50`}
                        >
                          <span
                            className={`text-[16px] xl:text-[18px] ${takeTurnItems.icon}`}
                          ></span>
                        </span>
                        <span>{takeTurnItems.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 sm:gap-3 items-center pb-6">
                    <span className="text-black-400 text-[12px] xl:text-[16px] hidden xl:inline-block">
                      شاخصه ها:
                    </span>
                    {doctorCard.features?.slice(0, 3).map((feature) => (
                      <span
                        className="text-primary-500 border justify-center min-w-[88px] h-[28px] items-center flex border-primary-500 px-3 rounded-[200px] text-[12px]"
                        key={feature}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-[16px] flex-col xl:flex-row xl:justify-between items-start xl:items-center">
                    <div className="flex flex-row-reverse items-center text-[12px] gap-2 text-black-400">
                      <span>{doctorCard.workingHours}</span>
                      <span>ساعت کاری:</span>
                      <span className="isax isax-clock text-[16px] xl:text-2xl"></span>
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
                      <div className="flex gap-2 text-[12px] xl:text-[16px] text-black-400">
                        <span className="isax isax-location text-[18px] xl:text-2xl"></span>
                        <span>نشانی :</span>
                        <span className="line-clamp-1">
                          {doctorCard.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MobileTurnRatingFilterCard
        doctors={doctors}
        isMobileFilterCard={isMobileFilterCard}
        setIsMobileFilterCard={setIsMobileFilterCard}
      />
    </>
  );
};

export default TurnRatingDoctorCard;

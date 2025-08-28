"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const sensoryServicesData = [
  {
    title: "فیزیوتراپی",
    image: "/images/sensoryServices-1.png",
    link: "#",
  },
  {
    title: "تزریقات",
    image: "/images/sensoryServices-2.png",
    link: "#",
  },
  {
    title: "پرستاری",
    image: "/images/sensoryServices-3.png",
    link: "#",
  },
  {
    title: "ویزیت پزشک",
    image: "/images/sensoryServices-4.png",
    link: "#",
  },
  {
    title: "فیزیوتراپی",
    image: "/images/sensoryServices-1.png",
    link: "#",
  },
  {
    title: "تزریقات",
    image: "/images/sensoryServices-2.png",
    link: "#",
  },
  {
    title: "پرستاری",
    image: "/images/sensoryServices-3.png",
    link: "#",
  },
  {
    title: "ویزیت پزشک",
    image: "/images/sensoryServices-4.png",
    link: "#",
  },
  {
    title: "کاردرمانی",
    image: "/images/sensoryServices-1.png",
    link: "#",
  },
];

const SensoryServices = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      // Update selected index when slide changes
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      // Set initial selected index
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-[16px] sm:text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">خدمات مورد نیاز</span>
          <span>کم توان حسی حرکتی</span>
        </h2>
        <div className="h-px lg:bg-grey-200 flex-1"></div>

        <Link
          href="#"
          className="flex items-center gap-2 text-xs lg:text-[16px] text-grey-500"
        >
          مشاهده همه
          <span className="isax isax-arrow-left-3 text-grey-500 text-2xl leading-6 lg:block hidden"></span>
        </Link>
      </div>
      <div className="mt-10 xl:mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-6">
            {sensoryServicesData?.map((item, index) => (
              <div key={index}>
                <div className="w-[306px] bg-white-100 border border-grey-200 rounded-2xl">
                  <div className="p-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={256}
                      height={172}
                      className="w-full h-[172px] object-cover  rounded-lg"
                    />
                  </div>
                  <div className="h-px mb-6 bg-grey-200"></div>
                  <div className="flex justify-center items-center pb-6">
                    <span className="text-black-400 text-[22px] font-medium">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-4 mt-14">
        <button
          className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <i className="isax isax-arrow-right-2 text-black-400 text-2xl leading-6"></i>
        </button>

        <div className="flex items-center gap-2">
          {emblaApi?.scrollSnapList()?.map((scrollSnap, index) => (
            <button
              key={index}
              className={`w-3 h-3 bg-gray-50 cursor-pointer border border-black-400 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "border-0 bg-primary-500 w-12 h-2"
                  : ""
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <button
          className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollNext()}
        >
          <i className="isax isax-arrow-left-3 text-black-400 text-2xl leading-6"></i>
        </button>
      </div>
    </>
  );
};

export default SensoryServices;

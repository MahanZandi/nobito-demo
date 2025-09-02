"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Clinic {
  title: string;
  image: string;
  clinicName: string;
  previousPrice: number;
  price: number;
  discount: number;
  location: string;
}

interface ClinicsListsProps {
  clinics: Clinic[];
  normalTitle: string;
  highlightTitle: string;
}

const ClinicsLists: React.FC<ClinicsListsProps> = ({
  clinics,
  highlightTitle,
  normalTitle,
}) => {
  const formatNumber = (num: number): string => {
    return num.toLocaleString("fa-IR");
  };

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
      <div className="flex container items-center gap-3">
        <div className="xl:text-[32px] flex gap-1">
          <span className="text-[#848484] font-semibold xl:font-medium">
            {normalTitle}
          </span>
          <span className="text-primary-500 font-semibold xl:font-bold">
            {highlightTitle}
          </span>
        </div>
        <div className="flex-1 md:bg-grey-200 h-px"></div>
        <Link
          href="#"
          className="flex items-center gap-2 text-xs lg:text-[16px] text-grey-500"
        >
          مشاهده همه
          <span className="isax isax-arrow-left-3 text-grey-500 text-2xl leading-6 lg:block hidden"></span>
        </Link>
      </div>
      <div className="overflow-hidden mt-[40px] xl:mt-[56px]" ref={emblaRef}>
        <div className="flex gap-6">
          {clinics.map((clinic, index) => (
            <div
              className="w-[282px] bg-white-100 shrink-0 p-4 rounded-2xl flex flex-col"
              key={index}
            >
              <div>
                <Image
                  className="w-full h-[152px] object-cover rounded-xl"
                  alt={clinic.title}
                  width={260}
                  height={152}
                  src={clinic.image}
                />
              </div>
              <div className="mt-4 gap-4 flex flex-col">
                <p className="line-clamp-2 font-bold text-[16px] text-black-500">
                  {clinic.title}
                </p>
                <span className="text-grey-400">{clinic.clinicName}</span>
              </div>
              <div className="flex justify-between">
                <div className="mt-4 flex flex-col gap-2">
                  <span className="text-sm text-grey-400 line-through">
                    {formatNumber(clinic.previousPrice)} تومان
                  </span>
                  <span className="text-[16px] text-black-400">
                    {formatNumber(clinic.price)} تومان
                  </span>
                </div>
                <div className="h-[36px] w-[67px] text-xl pr-4 rounded-r-[32px] relative -left-4 bg-error-500 text-white-500 flex items-center">
                  {clinic.discount} %
                </div>
              </div>
              <div className="w-full my-4 h-px bg-grey-200"></div>
              <div className="flex text-grey-400 gap-2">
                <span className="isax isax-location text-2xl"></span>
                <span className="line-clamp-1">{clinic.location}</span>
              </div>
            </div>
          ))}
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

export default ClinicsLists;

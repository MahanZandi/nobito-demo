"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const doctors = [
  {
    image: "/images/doctor-1.png",
    name: "دکتر علی رضوی",
    speciality: "فیزیوتراپیست",
    stars: "۴/۵",
    location: "تهران - میدان امام",
    link: "#",
  },
  {
    image: "/images/doctor-2.jpeg",
    name: "دکتر مریم حسینی",
    speciality: "کاردرمانگر",
    stars: "۳.۵/۵",
    location: "تهران - میدان انقلاب",
    link: "#",
  },
  {
    image: "/images/doctor-3.jpeg",
    name: "دکتر محمد کریمی",
    speciality: "نورولوژیست",
    stars: "۴/۵",
    location: "تهران - تجریش",
    link: "#",
  },
  {
    image: "/images/doctor-4.jpeg",
    name: "دکتر بهاره موسوی",
    speciality: "گفتار درمانگر",
    stars: "۳/۵",
    location: "تهران - میدان ولیعصر",
    link: "#",
  },
  {
    image: "/images/doctor-5.jpeg",
    name: "دکتر سجاد مرادی",
    speciality: "اورتوپد",
    stars: "۴/۵",
    location: "تهران - میدان امام",
    link: "#",
  },
  {
    image: "/images/doctor-6.jpeg",
    name: "دکتر نرگس طباطبایی",
    speciality: "روانپزشک",
    stars: "۳.۵/۵",
    location: "تهران - شهرک غرب",
    link: "#",
  },
  {
    image: "/images/doctor-7.jpeg",
    name: "دکتر پژمان فتاحی",
    speciality: "کاردرمانگر",
    stars: "۴/۵",
    location: "تهران - میدان امام",
    link: "#",
  },
  {
    image: "/images/doctor-8.png",
    name: "دکتر سارا رجبی",
    speciality: "فیزیوتراپیست",
    stars: "۳/۵",
    location: "تهران - میدان امام",
    link: "#",
  },
  {
    image: "/images/doctor-9.png",
    name: "دکتر کیوان شایان",
    speciality: "قلب و عروق",
    stars: "۴.۵/۵",
    location: "تهران - میدان ولیعصر",
    link: "#",
  },
  {
    image: "/images/doctor-10.png",
    name: "دکتر نگین فرهادی",
    speciality: "پوست و مو",
    stars: "۵/۵",
    location: "تهران - سعادت‌آباد",
    link: "#",
  },
];

const BestDoctors = () => {
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
        <h2 className="text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">برترین درمانگران</span>
          <span>نوبیتو</span>
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
            {doctors?.map((item, index) => (
              <div key={index}>
                <div className="w-[290px] p-4 bg-white-100 border border-grey-200 rounded-2xl">
                  <div className="flex justify-center">
                    <div className="border border-grey-300 rounded-full p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={104}
                        height={104}
                        className="size-[104px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-col flex gap-1.5 items-center mt-3">
                    <span className="text-black-400 text-xl font-medium">
                      {item.name}
                    </span>
                    <span className="text-grey-500 ">{item.speciality}</span>
                  </div>
                  <div className="mt-6 flex gap-3 items-center justify-center">
                    <span className="text-grey-500">امتیاز</span>
                    <div className="flex gap-1">
                      <span className="text-black-400">{item.stars}</span>
                      <span className="isax isax-star-15 text-yellow-500 text-[18px]"></span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-2 text-grey-500">
                    <span className="isax isax-location text-2xl"></span>
                    <span>{item.location}</span>
                  </div>
                  <div className="h-px my-6 bg-grey-200"></div>
                  <Link href={item.link}>
                    <button className="w-full border h-10 rounded-lg text-black-500 border-black-500 flex items-center justify-center text-[16px] font-medium">دعوت به منزل</button>
                  </Link>
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

export default BestDoctors;

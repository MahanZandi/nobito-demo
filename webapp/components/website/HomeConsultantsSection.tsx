"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HomePopularSection = () => {
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

  const items = [
    {
      id: 1,
      name: "عباس میراحمدی",
      image: "/images/doctor-1.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 2,
      name: "دکتر محمدی",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 3,
      name: "مهران مهام",
      image: "/images/doctor-3.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 4,
      name: "لیلا میرزایی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 5,
      name: "دکتر محمدی",
      image: "/images/doctor-5.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 6,
      name: "محمد ابراهیمی",
      image: "/images/doctor-6.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 7,
      name: "دکتر محمدی",
      image: "/images/doctor-7.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 8,
      name: "دکتر محمدی",
      image: "/images/doctor-8.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 9,
      name: "امیرحسین فربد",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
    {
      id: 10,
      name: "دکتر محمدی",
      image: "/images/doctor-10.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    },
  ];

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-xl lg:text-[32px] leading-[155%] lg:font-medium font-[700] text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">مشاورین</span>
          <span>در دسترس</span>
        </h2>
        <div className="h-px bg-grey-200 flex-1 hidden lg:block"></div>
        <div className="flex flex-1 lg:hidden"></div>

        <Link
          href="/turn-rating"
          className="flex items-center gap-2 font-t2-regular text-grey-500"
        >
          مشاهده همه
          <span className="isax isax-arrow-left-3 text-grey-500 text-2xl leading-6"></span>
        </Link>
      </div>
      <div className="mt-6 xl:mt-14">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-2">
            {items?.map((item, index) => (
              <div key={index}>
                <div
                  className=" bg-white-100 border
                                    border-grey-200 rounded-2xl p-4"
                >
                  <div className="flex justify-center items-center">
                    <div className="size-[120px] rounded-full border border-grey-300 grid place-items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={250}
                        height={152}
                        className="size-[104px] object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="font-b2-bold">{item.name}</div>

                    <div className="text-black-400 font-t3-regular flex items-center gap-1 font-vazir-farsi">
                      {item.rate}
                      <span className="isax isax-star-15 text-lg leading-[18px] text-secondary-500"></span>
                    </div>
                  </div>

                  <p className="text-grey-400 font-t3-regular mt-3">
                    {item.specialization}
                  </p>

                  <div className="flex items-center gap-2 mt-6">
                    {item.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="text-grey-500 font-l2-regular flex items-center gap-1 font-vazir-farsi
                                                    py-0.5 px-3 bg-grey-50 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="h-px my-4 bg-grey-200"></div>

                  <div className="flex w-[250px] h-[40px] justify-center items-center text-black-500 border border-black-500 rounded-3xl">
                    <Link href="#">
                      <button>دریافت نوبت</button>
                    </Link>
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

        {emblaApi?.scrollSnapList()?.map((scrollSnap, index) => (
          <button
            key={index}
            className={`w-3 h-3 bg-gray-50 cursor-pointer border border-black-400 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "border-0 bg-primary-500 w-12 h-2" : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}

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

export default HomePopularSection;

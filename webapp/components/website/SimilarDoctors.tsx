"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const SimilarDoctors = () => {
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

  const similarDoctors = [
    {
      id: 1,
      name: "محمد میرزایی",
      image: "/images/doctor-10.png",
      slug: "ali-rezaei",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 2,
      name: "علی رضایی",
      slug: "ali-rezaei",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 3,
      name: "سارا احمدی",
      slug: "sara-ahmadi",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 4,
      slug: "mina-karimi",
      name: "مینا کریمی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 5,
      name: "محمد میرزایی",
      image: "/images/doctor-10.png",
      slug: "ali-rezaei",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 6,
      name: "علی رضایی",
      slug: "ali-rezaei",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 7,
      name: "سارا احمدی",
      slug: "sara-ahmadi",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 8,
      slug: "mina-karimi",
      name: "مینا کریمی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 9,
      name: "محمد میرزایی",
      image: "/images/doctor-10.png",
      slug: "ali-rezaei",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 10,
      name: "علی رضایی",
      slug: "ali-rezaei",
      image: "/images/doctor-2.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 11,
      name: "سارا احمدی",
      slug: "sara-ahmadi",
      image: "/images/doctor-9.png",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
    {
      id: 12,
      slug: "mina-karimi",
      name: "مینا کریمی",
      image: "/images/doctor-4.jpeg",
      rate: "4/5",
      specialization: "متخصص قلب و عروق",
      skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
      city: "تهران",
    },
  ];

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-xl lg:text-[32px] leading-[155%] lg:font-medium font-[700] text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">با تخصص مشابه</span>
          <span>پزشکانی</span>
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
            {similarDoctors?.map((doctor, index) => (
              <div key={index}>
                <div
                  className=" bg-white-100 border
                                    border-grey-200 rounded-2xl p-4"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={258}
                      height={168}
                      className="w-[258px] h-[168px] object-cover rounded-2xl"
                    />
                  </div>

                  <div className="py-6 flex flex-col gap-4 items-center text-black-400">
                      <p className="text-[22px] font-medium">{doctor.name}</p>
                      <p className="text-[16px]">
                        {doctor.specialization}
                      </p>
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                          <span className="isax isax-star-15 text-yellow-500 text-2xl "></span>
                          <span>{doctor.rate}</span>
                        </div>
                        <div className="w-px bg-grey-200 h-6"></div>
                        <div className="flex items-center gap-2">
                          <span className="isax isax-location text-2xl"></span>
                          <span>{doctor.city}</span>
                        </div>
                      </div>
                  </div>

                  <Link
                    href={doctor.slug}
                    className="flex w-[250px] h-[40px] justify-center items-center text-black-500 border border-black-500 rounded-3xl"
                  >
                    <button>دریافت نوبت</button>
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
          className="w-10 h-10  bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollNext()}
        >
          <i className="isax isax-arrow-left-3 text-black-400 text-2xl leading-6"></i>
        </button>
      </div>
    </>
  );
};

export default SimilarDoctors;

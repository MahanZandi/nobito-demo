"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const careServicesData = [
  {
    title: "پرستاری در منزل",
    image: "/images/CareServices-1.png",
    link: "#",
  },
  {
    title: "آزمایش در منزل",
    image: "/images/CareServices-2.png",
    link: "#",
  },
  {
    title: "ویزیت پزشک در منزل",
    image: "/images/CareServices-3.png",
    link: "#",
  },
  {
    title: "تست کرونا در منزل",
    image: "/images/CareServices-1.png",
    link: "#",
  },
  {
    title: "آزمایش در منزل",
    image: "/images/CareServices-2.png",
    link: "#",
  },
  {
    title: "پرستاری در منزل",
    image: "/images/CareServices-1.png",
    link: "#",
  },
  {
    title: "آزمایش در منزل",
    image: "/images/CareServices-2.png",
    link: "#",
  },
  {
    title: "ویزیت پزشک در منزل",
    image: "/images/CareServices-3.png",
    link: "#",
  },
  {
    title: "تست کرونا در منزل",
    image: "/images/CareServices-1.png",
    link: "#",
  },
  {
    title: "آزمایش در منزل",
    image: "/images/CareServices-2.png",
    link: "#",
  },
];

const CareServices = () => {
  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
  });

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-[16px] sm:text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">دسته بندی خدمات</span>
          <span>مناسب کم توانان حسی حرکتی و سالمندان</span>
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
            {careServicesData?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="w-[352px] block bg-white-100 border border-grey-200 rounded-2xl p-6"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={352}
                    height={268}
                    className="h-[268px] w-[352px] object-cover rounded-full"
                  />
                  <div className="flex justify-center items-center mt-6">
                    <span className="text-black-400 text-2xl font-medium">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareServices;

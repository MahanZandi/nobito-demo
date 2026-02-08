"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const disabilityClinicsData = [
  {
    title: "بیمارستان کوثر شیراز",
    image: "/images/disability-clinics-1.png",
    speciality: "تخصص قلب و عروق",
    rate: "4/5",
    features: ["ویلچر", "پارکینگ", "سالن انتظار"],
    offers: 35,
    location: "شیراز، خیابان زند، روبه‌روی پارک",
    link: "#",
  },
  {
    title: "کلینیک امید تهران",
    image: "/images/disability-clinics-2.png",
    speciality: "تخصص مغز و اعصاب",
    rate: "4.2/5",
    features: ["آسانسور", "ویلچر", "پارکینگ"],
    offers: 20,
    location: "تهران، خیابان ولیعصر، نرسیده به پارک",
    link: "#",
  },
  {
    title: "مرکز توانبخشی اصفهان",
    image: "/images/disability-clinics-3.png",
    speciality: "توانبخشی و ارتوپدی",
    rate: "4.5/5",
    features: ["دسترسی مناسب", "سالن انتظار"],
    offers: 50,
    location: "اصفهان، پل خواجو، جنب مرکز فرهنگی",
    link: "#",
  },
  {
    title: "بیمارستان مهر مشهد",
    image: "/images/disability-clinics-4.png",
    speciality: "تخصص ارتوپدی",
    rate: "3.9/5",
    features: ["پارکینگ", "آسانسور", "ویلچر"],
    offers: 15,
    location: "مشهد، خیابان جانباز، نزدیک ایستگاه مترو",
    link: "#",
  },
  {
    title: "کلینیک توان‌بخش تبریز",
    image: "/images/disability-clinics-5.png",
    speciality: "گفتاردرمانی و توانبخشی",
    rate: "4/5",
    features: ["پارکینگ", "دسترسی مناسب"],
    offers: 40,
    location: "تبریز، بلوار مدرس، ساختمان شماره ۱۲",
    link: "#",
  },
  {
    title: "بیمارستان کوثر شیراز",
    image: "/images/disability-clinics-1.png",
    speciality: "تخصص قلب و عروق",
    rate: "4/5",
    features: ["ویلچر", "پارکینگ", "سالن انتظار"],
    offers: 35,
    location: "شیراز، خیابان زند، روبه‌روی پارک",
    link: "#",
  },
  {
    title: "کلینیک امید تهران",
    image: "/images/disability-clinics-2.png",
    speciality: "تخصص مغز و اعصاب",
    rate: "4.2/5",
    features: ["آسانسور", "ویلچر", "پارکینگ"],
    offers: 20,
    location: "تهران، خیابان ولیعصر، نرسیده به پارک",
    link: "#",
  },
  {
    title: "مرکز توانبخشی اصفهان",
    image: "/images/disability-clinics-3.png",
    speciality: "توانبخشی و ارتوپدی",
    rate: "4.5/5",
    features: ["دسترسی مناسب", "سالن انتظار"],
    offers: 50,
    location: "اصفهان، پل خواجو، جنب مرکز فرهنگی",
    link: "#",
  },
  {
    title: "بیمارستان مهر مشهد",
    image: "/images/disability-clinics-4.png",
    speciality: "تخصص ارتوپدی",
    rate: "3.9/5",
    features: ["پارکینگ", "آسانسور", "ویلچر"],
    offers: 15,
    location: "مشهد، خیابان جانباز، نزدیک ایستگاه مترو",
    link: "#",
  },
  {
    title: "کلینیک توان‌بخش تبریز",
    image: "/images/disability-clinics-5.png",
    speciality: "گفتاردرمانی و توانبخشی",
    rate: "4/5",
    features: ["پارکینگ", "دسترسی مناسب"],
    offers: 40,
    location: "تبریز، بلوار مدرس، ساختمان شماره ۱۲",
    link: "#",
  },
];

const DisabilityClinics = () => {
  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
  });
  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-[16px] sm:text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">کلینیک های</span>
          <span>یاری دهنده معلولین</span>
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
            {disabilityClinicsData?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="w-[286px] block bg-white-100 border border-grey-200 rounded-2xl p-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={352}
                    height={268}
                    className="h-[168px] w-[250px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex justify-between">
                      <p className="text-black-500 font-semibold line-clamp-1">
                        {item.title}
                      </p>
                      <div className="flex gap-0.5">
                        <span>{item.rate}</span>
                        <span className="isax isax-star-15 text-[18px] text-yellow-500"></span>
                      </div>
                    </div>
                    <p className="text-grey-400 line-clamp-1">{item.speciality}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.features?.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs text-grey-500 h-[22px] flex items-center px-3 bg-grey-50 rounded-2xl"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6 items-center">
                    <span className="text-grey-400 text-xs">
                      تخفیف ویژه معلولین :
                    </span>
                    <span className="h-[21px] px-3 flex items-center text-error-500 bg-error-50 rounded-xl">
                      {item.offers} درصد
                    </span>
                  </div>
                  <div className="w-full bg-grey-200 h-px my-6"></div>
                  <div className="flex gap-2 items-center">
                    <span className="isax isax-location text-2xl text-grey-400"></span>
                    <p className="text-grey-400 line-clamp-1">{item.location}</p>
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

export default DisabilityClinics;

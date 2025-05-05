"use client";
import Image, { StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import doctorBanner1 from "@/public/images/doctor-banner-1.png";
import doctorBanner2 from "@/public/images/doctor-banner-2.png";
import Link from "next/link";

const HomeDoctorsBanner = () => {
  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
  });

  const banner: Banner[] = [
    {
      id: 1,
      title: "خدمات پزشکی رو برای شما در دسترستر کردیم",
      info: "فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی(حرکتی)دسترسی پیدا میکنید.",
      background: "bg-doctor-first-banner",
      image: doctorBanner1,
      bannerLink: {
        title: "مشاهده خدمات",
        url: "#",
      },
    },
    {
      id: 2,
      title: "مشغله زندگی نمیزاره بیایی دکتر؟ مشاوره غیر حضوری بگیر",
      info: "اگر زمان کافی برای مراجعه به پزشک رو ندارید میتونید از طریق مشاوره غیرحضوری با پزشک صحبت کنید.",
      background: "bg-doctor-second-banner",
      image: doctorBanner2,
      bannerLink: {
        title: "نوبت بگیر",
        url: "#",
      },
    },
  ];

  interface Banner {
    id: number;
    title: string;
    info: string;
    image: string | StaticImageData;
    background: string;
    bannerLink: {
      title: string;
      url: string;
    };
  }

  const BannerBox: React.FC<{ banner: Banner }> = ({ banner }) => {
    return (
      <div className={`${banner.background} rounded-3xl w-[294px] h-[160px] lg:w-[588px] lg:h-[266px]`}>
        <div className="px-4 lg:px-10 flex ">
          <div className="flex">
            <div>
              <div className="pb-8 py-8 flex flex-col gap-4">
                <div className="lg:text-[22px] leading-normal font-medium text-sm line-clamp-2">
                  {banner.title}
                </div>
                <div className="lg:text-sm leading-normal font-medium text-xs line-clamp-3">
                  {banner.info}
                </div>
                <div className="font-b3-medium hidden lg:grid place-items-end h-18 text-white-button-text pl-2">
                  <Link
                    className="bg-white py-2 px-3 rounded-xl flex gap-1.5 "
                    href={banner.bannerLink.url}
                  >
                    <button>{banner.bannerLink.title}</button>
                    <span className="isax isax-arrow-left-3 text-white-button-text text-2xl"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid place-items-end ">
            <Image
              className="w-[300px] h-full lg:size-[278px]"
              src={banner.image}
              alt="تصویر دکتر در سکشن"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="text-white">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex justify-center gap-6">
          {banner.map((banner: Banner) => {
            return (
              <div className="w-[294px] h-[160px] lg:w-[588px] lg:h-[266px]" key={banner.id}>
                <BannerBox banner={banner} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeDoctorsBanner;

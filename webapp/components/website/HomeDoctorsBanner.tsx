"use client";
import Image, { StaticImageData } from "next/image";
import doctorBanner2 from "@/public/images/doctor-banner-2.png";
import Link from "next/link";

const HomeDoctorsBanner = () => {

  const banner: Banner[] = [
    {
      id: 1,
      title: "خدمات پزشکی در دسترس",
      info: "فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی(حرکتی)دسترسی پیدا میکنید.",
      background: "bg-doctor-first-banner",
      image: doctorBanner2,
      bannerLink: {
        title: "مشاهده خدمات",
        url: "#",
      },
    },
    {
      id: 2,
      title: "مشاوره غیر حضوری بگیر",
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
      <div className={`${banner.background} rounded-3xl w-[310px] h-[160px] lg:w-[588px] lg:h-[266px]`}>
        <div className="px-4 lg:px-10 flex">
          <div className="flex">
            <div>
              <div className="pb-8 py-8 flex flex-col gap-4 w-[172px] lg:w-[335px]">
                <div className="lg:text-[22px] leading-normal font-medium text-sm">
                  {banner.title}
                </div>
                <div className="lg:text-sm leading-normal font-medium text-xs">
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
          <div className="grid place-items-end mt-auto">
            <Image
              className="w-[153px] lg:w-[300px] h-full object-contain"
              src={banner.image}
              alt="تصویر دکتر در سکشن"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="text-white mx-2">
      <div className="overflow-x-auto hide-scrollbar overflow-y-hidden container">
        <div className="flex gap-6">
          {banner?.map((banner: Banner) => {
            return (
              <div key={banner.id}>
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

"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type WeblogCategory =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";
interface WeblogsData {
  id: number;
  title: string;
  description: string;
  spendTime: number;
  view: number;
  image: string;
  slug: string;
  category: WeblogCategory;
  author: string;
}

interface TopWeblogsProps {
  topWeblogs: WeblogsData[];
}

const TopWeblogs = ({ topWeblogs }: TopWeblogsProps) => {
  const DesktopTopWeblogs = () => {
    return (
      <div className="w-[384px] bg-white-100 p-6 rounded-3xl hidden xl:block">
        <div className="flex gap-2">
          <span className="w-1.5 h-[37px] rounded-3xl bg-primary-500"></span>
          <span className="text-2xl text-black-400 font-medium">
            پر بازدید ترین ها
          </span>
        </div>
        <div className="w-full h-px bg-grey-200 mt-3 mb-6"></div>
        <div className="bg-primary-500 p-4 rounded-2xl flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-accent-500 text-center">
            سکته مغزی و فلج شدن سمت چپ بدن، علل و راه های درمان
          </h3>
          <p className="text-xs text-white-500">
            فلج شدن سمت چپ بدن یک عارضه معمول است که افراد زیادی پس از سکته مغزی
            آن را تجربه می‌کنند. این آسیب ممک است بر عملکرد روزانه فرد تاثیر
            گذارد و در دراز مدت
          </p>
        </div>
        <div>
          {topWeblogs.map((weblog) => (
            <div className="mt-6" key={weblog.id}>
              <Link
                href={`weblog/${weblog.slug}`}
                className="pb-4 flex gap-[14px]"
              >
                <Image
                  className="object-cover size-[82px] rounded-lg"
                  src={weblog.image}
                  alt={weblog.title}
                  width={82}
                  height={82}
                />
                <div className="flex flex-col w-full justify-between">
                  <h2 className="text-[16px] font-medium text-black-400 line-clamp-2">
                    {weblog.title}
                  </h2>
                  <div className="flex gap-4 text-grey-500 justify-end w-full">
                    <div className="flex gap-2 items-center">
                      <span className="isax isax-clock text-[18px]"></span>
                      <span>{weblog.spendTime}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="isax isax-eye text-[18px]"></span>
                      <span>{weblog.view}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-full h-px bg-grey-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MobileTopWeblogs = () => {
    const [emblaRef] = useEmblaCarousel({
      direction: "rtl",
    });

    return (
      <div className="xl:hidden">
        <div>
          <div className="flex items-center xl:gap-3">
            <h2 className="text-xl xl:text-[32px] leading-[155%] font-semibold xl:font-bold text-grey-500 flex items-center gap-1 xl:gap-2">
              <span className="text-primary-500"> پر بازدید ترین </span>
              <span className="xl:font-medium"> مقالات </span>
            </h2>
            <div className="h-px xl:bg-grey-200 flex-1 block"></div>
            <Link className="text-grey-500 text-xs cursor-pointer" href="#">
              مشاهده همه
            </Link>
          </div>
          <div className="overflow-hidden mt-10" ref={emblaRef}>
            <div className="flex items-center gap-4 ">
              {topWeblogs?.map((weblog: WeblogsData) => (
                <div key={weblog.id}>
                  <div className="xl:hidden ">
                    <div className="bg-white-100 rounded-2xl p-4 w-[288px] flex flex-col gap-4">
                      <Image
                        className="w-[256px] h-[160px] rounded-xl object-cover"
                        alt={weblog.title}
                        src={weblog.image}
                        width={256}
                        height={160}
                      />
                      <h2 className="text-[16px] font-medium text-black-400">
                        {weblog.title}
                      </h2>
                      <p className="text-xs text-grey-500 leading-[144%] line-clamp-6">
                        {weblog.description}
                      </p>
                      <div className="flex gap-4 text-grey-500 items-center justify-end">
                        <div className="flex gap-2 items-center">
                          <span className="isax isax-clock text-[18px]"></span>
                          <span>{weblog.spendTime}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <span className="isax isax-eye text-[18px]"></span>
                          <span>{weblog.view}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="xl:hidden">
        <MobileTopWeblogs />
      </div>
      <div className="hidden xl:block">
        <DesktopTopWeblogs />
      </div>
    </>
  );
};

export default TopWeblogs;

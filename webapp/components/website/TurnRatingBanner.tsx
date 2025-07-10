import TurnRaingBanner from "@/public/images/turn-rating-banner.png";
import TurnRatingBannerMbile from "@/public/images/turn-rating-banner-mobile.png";
import Image from "next/image";
import Link from "next/link";

const TurnRatingBanner = () => {
  return (
    <div className="xl:w-[405px] rounded-2xl xl:rounded-3xl bg-primary-500">
      <div className="p-4">
        <div className="border border-white-500 p-3 xl:p-4 rounded-2xl xl:rounded-3xl flex xl:flex-col flex-row-reverse gap-4 xl:gap-6">
          <Image className="xl:block hidden" src={TurnRaingBanner} alt="Turn Rating Banner" />
          <Image className="xl:hidden block" src={TurnRatingBannerMbile} alt="Turn Rating Banner"/>
          <div className="flex gap-[24px] flex-col ">
           <p className="text-accent-500 text-sm xl:text-2xl font-semibold w-[143px] xl:w-auto"> بیمیتو،در روزهای سخت و بیماری همراه شماست...</p>
          <div className="font-b3-medium grid place-items-start xl:place-items-end xl:h-10 text-dark-gray pl-2">
            <Link className="bg-white py-1 xl:py-2 px-3 flex rounded-[4px] xl:rounded-[7px]" href="/">
              <button className="cursor-pointer flex items-center gap-1.5 text-sm xl:text-[16px]">
                دریافت بیمه
                <span className="isax isax-arrow-left-2 text-dark-gray text-lg xl:text-2xl"></span>
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnRatingBanner;

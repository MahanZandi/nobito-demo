import Image from "next/image";

const BeautyServicesHero = () => {
  return (
    <section className="relative lg:h-[382px]">
      <Image
        src="/banner.png"
        className="absolute inset-0 object-cover w-full h-full xl:h-[382px]"
        width={1440}
        height={382}
        alt="Medical services banner"
        priority
      />
      <div className="flex justify-center relative">
        <div className="flex flex-col items-center xl:items-start md:flex-row md:justify-between container md:w-[840px]">
          <div className="sm:w-[446px] flex flex-col gap-4 mt-[60px]">
            <div className="absolute">
              <span className="icon-quote-up text-secondary-500  absolute top-0 right-0 md:hidden rotate-180"></span>
            </div>
            <blockquote className="text-center md:text-start md:font-bold text-white-500 text-[28px] relative font-medium md:text-[45px]">
              تا{" "}
              <span className="text-primary-500 bg-accent-500 rounded-xl px-2">
                {" "}
                ۵۰٪ تخفیف{" "}
              </span>
              <br />
              <span>خدمات دندان پزشکی</span>
            </blockquote>
            <p className="text-[16px] text-center md:text-start md:text-xl text-white-500 relative font-medium">
              برای دسترسی به این خدمات نیاز به هیچ بیمه ای ندارید بلکه این مراکز
              طرف قرارداد مستقیم نوبیتو هستند.
            </p>
            <div className="relative">
              <span className="icon-quote-up text-secondary-500 absolute top-0 left-0 md:hidden"></span>
            </div>
          </div>
          <Image
            className="size-[260px] object-contain md:size-[340px] md:object-cover"
            src="/images/teeth.png"
            alt="teeth"
            width={340}
            height={340}
          />
        </div>
      </div>
    </section>
  );
};

export default BeautyServicesHero;

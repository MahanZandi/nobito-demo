import Image from "next/image";

const MedServicesHero = () => {
  return (
    <section className="relative lg:h-[382px]">
      {/* Background Image */}
      <Image
        src="/banner.png"
        className="absolute inset-0 object-cover w-full h-full xl:h-[382px]"
        width={1440}
        height={382}
        alt="Medical services banner"
        priority
      />
      {/* Hero Content */}
      <div className="flex relative justify-between">
        <Image
          className="object-cover xl:block hidden xl:w-[300px] 2xl:w-[500px] h-[382px]"
          src="/images/Hotpot(2).png"
          alt="Hotpot image"
          width={500}
          height={383}
        />
        <div className="xl:relative flex flex-col items-center justify-center pt-[30px] lg:pt-0 lg:h-[382px] mx-auto text-center xl:w-[300px] 2xl:w-[500px] xl:grow">
          {/* Main Heading with Quote */}
          <blockquote className="relative leading-normal text-[28px] lg:text-[45px] font-bold text-white text-lg lg:leading-relaxed">
            <span className="icon-quote-up text-secondary-500 text-lg lg:text-2xl absolute top-0 -right-8 lg:hidden rotate-180"></span>
            خدمات پزشکی
            <span className="text-primary-500 bg-accent-500 px-2 rounded-xl inline-block mr-1 lg:mr-2">
              در منزل
            </span>
          </blockquote>

          {/* Supporting Paragraph */}
          <p className="mt-4 lg:mt-8 text-grey-50 lg:text-xl leading-normal font-normal">
            این سرویس برای موارد اورژانسی در نظر گرفته نشده است. لطفا در موارد
            اورژانسی با شماره تلفن (۱۱۵) تماس بگیرید. تزریق پنی سیلین، ترکیبات
            آهن و فاکتورهای انعقادی در منزل امکان‌پذیر نیست.
          </p>
          <div className="flex container justify-end">
            <span className="icon-quote-down text-secondary-500 text-lg lg:text-2xl lg:hidden rotate-180"></span>
          </div>
          <Image
            className="object-contain lg:hidden block w-[446px] h-[256px] "
            src="/images/Hotpot(1).png"
            alt="Hotpot image"
            width={446}
            height={256}
          />
        </div>
        <Image
          className="object-cover xl:block hidden xl:w-[300px] 2xl:w-[500px] h-[382px]"
          src="/images/Hotpot(1).png"
          alt="Hotpot image"
          width={500}
          height={334}
        />
      </div>
    </section>
  );
};

export default MedServicesHero;

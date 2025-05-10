import Image from "next/image";
import cecutomerImage from "@/public/images/insuran-cecustomer.png";
import alborz from "@/public/images/alborz.png";
import asia from "@/public/images/asia.png";
import dana from "@/public/images/dana.png";
import iran from "@/public/images/iran.png";
import saman from "@/public/images/saman.png";

const HomeInsuranceBanner = () => {
  return (
    <div>
      <div className="bg-primary-500">
        <div className="container flex flex-col-reverse items-center xl:flex-row xl:relative py-[32px] xl:py-0">
          <div className="xl:w-[303px]">
            <Image
              alt="تصویر مشتری از رضایت بیمه"
              className="w-[234px] h-[340px] xl:w-[303px] xl:h-[439px] xl:absolute bottom-0"
              src={cecutomerImage}
            />
          </div>
          <div className="flex flex-col items-center justify-center xl:flex-row gap-6 xl:py-[36px]">
            <div className="text-accent-500 font-bold text-[28px] xl:text-[32px] xl:pr-[60px]">
              بیمه های طرف قرارداد نوبیتو
            </div>
            {/* logos for desktop devices */}
            <Image
              alt="لوگوی شرکت بیمه"
              className="size-[88px] xl:size-[112px]"
              src={asia}
            />
            <Image
              alt="لوگوی شرکت بیمه"
              className="size-[88px] xl:size-[112px]"
              src={saman}
            />
            <Image
              alt="لوگوی شرکت بیمه"
              className="size-[88px] xl:size-[112px]"
              src={iran}
            />
            <Image
              alt="لوگوی شرکت بیمه"
              className="size-[88px] xl:size-[112px]"
              src={dana}
            />
            <Image
              alt="لوگوی شرکت بیمه"
              className="size-[88px] xl:size-[112px]"
              src={alborz}
            />
            {/* logos for mobile & tablet devices */}
            <div className="flex gap-6 justify-center xl:hidden">
              <Image
                alt="لوگوی شرکت بیمه"
                className="size-[88px] xl:size-[112px]"
                src={asia}
              />
              <Image
                alt="لوگوی شرکت بیمه"
                className="size-[88px] xl:size-[112px]"
                src={saman}
              />
              <Image
                alt="لوگوی شرکت بیمه"
                className="size-[88px] xl:size-[112px]"
                src={iran}
              />
            </div>
            <div className="flex gap-6 justify-center xl:hidden">
              <Image
                alt="لوگوی شرکت بیمه"
                className="size-[88px] xl:size-[112px]"
                src={dana}
              />
              <Image
                alt="لوگوی شرکت بیمه"
                className="size-[88px] xl:size-[112px]"
                src={alborz}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInsuranceBanner;

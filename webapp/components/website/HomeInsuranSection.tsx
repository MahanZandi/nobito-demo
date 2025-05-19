import Image from "next/image";
import insuranImage from "@/public/images/Insuran-section-image.png";
import Link from "next/link";

const HomeInsuranSection: React.FC = () => {
  return (
    <section className="container py-[32px] px-[16px] lg:py-[46px] lg:px-[47px] bg-white lg:shadow lg:rounded-3xl">
      <div className="flex flex-col gap-[32px] lg:flex-row lg:gap-[48px]">
        <div className="flex flex-col">
          <div className="flex justify-center pb-[32px]">
            {/* Image for mobile & tablet size */}
            <Image
              className="w-[328px] h-[200px] lg:hidden rounded-xl"
              alt="تصویر سکشن بیمه"
              src={insuranImage}
            />
          </div>
          {/* title */}
          <h2 className="text-[20px] lg:text-[32px] pb-[32px] font-bold text-black-title-color text-center lg:text-start">
            بیمه دکترتو در روزهای سخت همراه شماست
          </h2>
          {/* info */}
          <p className="text-grey-500 text-[16px] leading-normal lg:leading-[155%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد،
          </p>
          <div className="flex lg:justify-end pt-[32px] lg:pt-[40px]">
            <button className="w-full lg:w-auto">
              <Link
                className="text-black-500 lg:text-grey-500 border-black-500 lg:border-grey-500 text-[16px] rounded-lg border lg:w-[120px] h-[40px] flex justify-center items-center"
                href="#"
              >
                مطالعه بیشتر
              </Link>
            </button>
          </div>
        </div>
        {/* desktop image */}
        <Image
          className="w-[362px] h-[256px] rounded-xl hidden lg:block"
          src={insuranImage}
          alt="تصویر سکشن بیمه"
        />
      </div>
      {/* features items*/}
      <div className="grid lg:grid-cols-3 gap-[32px] lg:gap-[76px] pt-[48px]">
        <div className="flex flex-col items-center">
          <div className="size-[56px] bg-primary-500 rounded-lg flex justify-center items-center">
            <span className="isax isax-note-21 text-[32px] text-white"></span>
          </div>
          <h4 className="pt-[16px] pb-[12px] text-base font-semibold lg:font-bold text-black-title-color">
            بیمه دکترتو در روزهای سخت همراه
          </h4>
          <p className="text-[12px] text-grey-500 leading-normal text-center lg:text-start">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ پس ای
            انسان! در کدام یک از نعمت های پروردگارت تردید می کنی که آیا ،
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[56px] bg-primary-500 rounded-lg flex justify-center items-center">
            <span className="isax isax-cup5 text-[32px] text-white"></span>
          </div>
          <h4 className="pt-[16px] pb-[12px] text-base font-semibold lg:font-bold text-black-title-color">
            بیمه دکترتو در روزهای سخت همراه
          </h4>
          <p className="text-[12px] text-grey-500 leading-normal text-center lg:text-start">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ پس ای
            انسان! در کدام یک از نعمت های پروردگارت تردید می کنی که آیا ،
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[56px] bg-primary-500 rounded-lg flex justify-center items-center">
            <span className="isax isax-wallet-minus text-[32px] text-white"></span>
          </div>
          <h4 className="pt-[16px] pb-[12px] text-base font-semibold lg:font-bold text-black-title-color">
            بیمه دکترتو در روزهای سخت همراه
          </h4>
          <p className="text-[12px] text-grey-500 leading-normal text-center lg:text-start">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ پس ای
            انسان! در کدام یک از نعمت های پروردگارت تردید می کنی که آیا ،
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeInsuranSection;

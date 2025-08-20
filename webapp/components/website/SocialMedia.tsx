import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center container">
      <h3 className="lg:font-medium font-bold text-black-400 text-[22px] lg:text-[32px] text-center">
        <span className="lg:hidden block">
          ما را در شبکه های اجتماعی دنبال کنید
        </span>
        <span className="lg:block hidden">
          ما را در شبکه های اجتماعی دنبال کنید...
        </span>
      </h3>
      <div className="md:w-[616px] w-full flex justify-between mt-12 ">
        <Link href="#" className="bg-primary-500 cursor-pointer lg:text-primary-500 text-white-500 lg:bg-transparent rounded-full size-12 flex items-center justify-center lg:p-3">
          <span className="isax isax-instagram text-[32px] lg:text-[40px]"></span>
        </Link>
        <Link href="#" className="bg-primary-500 cursor-pointer lg:text-primary-500 text-white-500 lg:bg-transparent rounded-full size-12 flex items-center justify-center lg:p-3">
          <span className="isax isax-call-calling text-[32px] lg:text-[40px]"></span>
        </Link>
        <Link href="#" className="bg-primary-500 cursor-pointer lg:text-primary-500 text-white-500 lg:bg-transparent rounded-full size-12 flex items-center justify-center lg:p-3">
          <span className="isax isax-send-2 text-[32px] lg:text-[40px]"></span>
        </Link>
        <Link href="#" className="bg-primary-500 cursor-pointer lg:text-primary-500 text-white-500 lg:bg-transparent rounded-full size-12 flex items-center justify-center lg:p-3">
          {/* آیکون یوتوب را در ایسکس پیدا نکردم و موقتا ایکون مسیج را گذاشتم */}
          <span className="isax isax-sms text-[32px] lg:text-[40px]"></span>
        </Link>
      </div>
      <div className="grid gap-6 lg:gap-[42px] lg:grid-cols-3 w-full lg:mt-12 mt-10">
        <Link href="#" className="rounded-2xl lg:px-1 cursor-pointer border h-[152px] flex flex-col items-center justify-center w-full gap-4">
          <Image
            src="/images/png-icons/building-4.png"
            width={48}
            height={48}
            alt="building icon"
            className="text-primary-500 size-[48px] xl:size-[40px]"
          />
          <div className="text-center xl:text-[16px] leading-[140%] xl:leading-[155%] text-black-400">
            <span>نشانی : تهران _ میدان</span> <br />
            <span>آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18</span>
          </div>
        </Link>
        <Link href="#" className="rounded-2xl lg:px-1 cursor-pointer border h-[152px] flex flex-col items-center justify-center w-full gap-4">
          <Image
            src="/images/png-icons/sms.png"
            width={48}
            height={48}
            alt="email icon"
            className="text-primary-500 size-[48px] xl:size-[40px]"
          />
          <div className="text-center xl:text-[16px] leading-[140%] xl:leading-[155%] text-black-400">
            <span>نشانی پست الکترونیک : smartix@yahoo.com</span>
          </div>
        </Link>
        <Link href="#" className="rounded-2xl lg:px-1 cursor-pointer border h-[152px] flex flex-col items-center justify-center w-full gap-4">
          <Image
            src="/images/png-icons/call-calling.png"
            width={48}
            height={48}
            alt="building icon"
            className="text-primary-500 size-[48px] xl:size-[40px]"
          />
          <div className="text-center xl:text-[16px] leading-[140%] xl:leading-[155%] text-black-400">
            <span>تماس با پشتیبانی :</span> <br />
            <span>۱۲۳۴۵۶۷۸-۰۲۱ |  ۱۲۳۴۵۶۷۸-۰۲۱</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;

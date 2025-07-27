import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-4 xl:mx-0">
      <Image
        className="w-full h-[242px] absolute -z-10 xl:block hidden"
        src="/banner.png"
        alt="Banner"
        width={1140}
        height={242}
      />
      <div className="xl:w-[528px] rounded-3xl mx-auto bg-white-100 border border-grey-100 xl:p-10 px-4 py-6">
        <div className="flex flex-col items-center">
          <Image src="/favicon.ico" alt="Favicon" width={144} height={144} />
          <div className="mt-6 flex-col items-center flex">
            <p className="text-[22px] xl:text-[32px] font-medium text-black-400">
              ورود/ثبت نام
            </p>
            <p className="text-grey-500 xl:text-[22px] mt-3">
              لطفا شماره موبایل خود را وارد کنید
            </p>
          </div>
          <input
            type="number"
            name="sign-in"
            className="bg-body xl:mt-12 mt-6 w-full h-14 rounded-lg"
          />
        </div>
        <div className="text-primary-500 text-[14px] mt-2">
          لطفا این بخش را خالی نگذارید
        </div>
        <div className="w-full mt-6">
          <Link href="/user-dashboard">
            <button className="bg-primary-500 py-3 w-full rounded-[10px] cursor-pointer text-white-500">
              ورود/ثبت نام
            </button>
          </Link>
        </div>
        <p className="mt-6 text-[14px] text-grey-400 text-center">
          ورود شما به معنای پذیرش شرایط و{" "}
          <span className="text-primary-500">قوانین نوبیتو</span> و{" "}
          <span className="text-primary-500">حریم خصوصی</span> است
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

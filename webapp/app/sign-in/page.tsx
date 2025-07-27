"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface FormValues {
  number: string;
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("ایمیل معتبره:", data.number);
  };

  return (
    <div className="h-screen flex flex-col justify-center mx-4 xl:mx-0">
      <Image
        className="w-full h-[242px] absolute -z-10 xl:block hidden"
        src="/banner.png"
        alt="Banner"
        width={1140}
        height={242}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:w-[528px] rounded-3xl mx-auto bg-white-100 border border-grey-100 xl:p-10 px-4 py-6"
      >
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
            className={`${
              errors.number ? "outline-red-500 outline-1" : ""
            } bg-body xl:mt-12 mt-6 w-full h-14 px-4 rounded-lg`}
            {...register("number", {
              required: "شماره موبایل الزامی است",
              pattern: {
                value: /^09\d{9}$/,
                message: "فرمت شماره موبایل معتبر نیست",
              },
            })}
          />
        </div>
        <div
          className={`${
            errors.number ? "text-red-500" : "text-primary-500"
          } text-[14px] mt-2`}
        >
          لطفا این بخش را خالی نگذارید
        </div>
        <div className="w-full mt-6">
          <button
            type="submit"
            className="bg-primary-500 py-3 w-full rounded-[10px] cursor-pointer text-white-500"
            
          >
            ورود/ثبت نام
          </button>
        </div>
        <p className="mt-6 text-[14px] text-grey-400 text-center">
          ورود شما به معنای پذیرش شرایط و{" "}
          <span className="text-primary-500">قوانین نوبیتو</span> و{" "}
          <span className="text-primary-500">حریم خصوصی</span> است
        </p>
      </form>
    </div>
  );
};

export default SignInPage;

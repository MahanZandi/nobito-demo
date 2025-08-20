"use client";
import { useForm } from "react-hook-form";
import { isValidIranianNationalCode } from "@/utils/isValidIranianNationalCode";

type FormValues = {
  fName: string;
  lName: string;
  nationalCode: string;
  phone: string;
  textarea: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("ایمیل معتبره:", data.fName);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white-100 xl:border border-grey-200 rounded-2xl xl:rounded-3xl py-8 px-4 xl:p-6 xl:mt-12 xl:z-10 xl:relative xl:w-[calc(100%+50px)]"
    >
      <div>
        <div className="grid lg:grid-cols-2 gap-4 xl:gap-6">
          <div className="flex-col flex gap-2">
            <label
              htmlFor="fName"
              className={`${errors.fName ? "text-red-500" : "text-grey-400"} `}
            >
              نام
            </label>
            <input
              id="fName"
              type="text"
              className={`rounded-lg  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                errors.fName ? "outline-red-500 outline-1" : ""
              }`}
              {...register("fName", {
                required: "فرم نباید خالی باشد",
              })}
            />
            <p className="text-red-500 pt-2 text-[14px]">
              {errors.fName?.message}
            </p>
          </div>
          <div className="flex-col flex gap-2">
            <label
              htmlFor="lName"
              className={`${errors.lName ? "text-red-500" : "text-grey-400"} `}
            >
              نام خانوادگی
            </label>
            <input
              id="lName"
              type="text"
              className={`rounded-lg  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                errors.lName ? "outline-red-500 outline-1" : ""
              }`}
              {...register("lName", {
                required: "فرم نباید خالی باشد",
              })}
            />
            <p className="text-red-500  text-[14px]">{errors.lName?.message}</p>
          </div>
          <div className="flex-col flex gap-2">
            <label
              htmlFor="nationalCode"
              className={`${
                errors.nationalCode ? "text-red-500" : "text-grey-400"
              } `}
            >
              کد ملی
            </label>
            <input
              id="nationalCode"
              type="text"
              className={`rounded-lg  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                errors.nationalCode ? "outline-red-500 outline-1" : ""
              }`}
              {...register("nationalCode", {
                required: "فرم نباید خالی باشد",
                validate: (value) =>
                  isValidIranianNationalCode(value) || "کد ملی معتبر نیست",
              })}
            />
            <p className="text-red-500 text-[14px]">
              {errors.nationalCode?.message}
            </p>
          </div>
          <div className="flex-col flex gap-2">
            <label
              htmlFor="phone"
              className={`${errors.phone ? "text-red-500" : "text-grey-400"} `}
            >
              شماره تلفن
            </label>
            <input
              id="phone"
              className={`rounded-lg  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                errors.phone ? "outline-red-500 outline-1" : ""
              }`}
              {...register("phone", {
                required: "فرم نباید خالی باشد",
                validate: (value) =>
                  (value.length >= 11 && value.length <= 11) ||
                  "شماره تلفن معتبر نیست",
              })}
            />
            <p className="text-red-500 text-[14px]">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 xl:mt-6">
          <label
            htmlFor="textarea"
            className={`${errors.textarea ? "text-red-500" : "text-grey-400"} `}
          >
            توضیحات
          </label>
          <input
            id="textarea"
            type="text"
            className={`rounded-lg h-[116px] xl:h-[160px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
              errors.textarea ? "outline-red-500 outline-1" : ""
            }`}
            {...register("textarea", {
              required: "فرم توضیحات نباید خالی باشد",
            })}
          />
        </div>
        <div className="flex xl:flex-row flex-col xl:justify-between items-center mt-4 xl:mt-6 gap-4">
          <span className="text-grey-400">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          </span>
          <button className="rounded-lg flex items-center px-8 xl:w-auto justify-center w-full h-10 xl:h-12 bg-primary-500 text-white-500 text-[16px] font-medium" type="submit">ارسال پیغام</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

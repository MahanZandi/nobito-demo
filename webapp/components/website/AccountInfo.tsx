"use client";
import { useForm } from "react-hook-form";
import AccordionFilter from "./AccordionFilter";
import { useState } from "react";

type FormValues = {
  fName: string;
  lName: string;
  nationalCode: string;
  phone: string;
};

interface CitysType {
  id: number;
  name: string;
}

const AccountInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("ایمیل معتبره:", data.fName);
  };

  function isValidIranianNationalCode(input: string): boolean {
    if (!/^\d{10}$/.test(input)) return false;

    const invalidCodes = [
      "0000000000",
      "1111111111",
      "2222222222",
      "3333333333",
      "4444444444",
      "5555555555",
      "6666666666",
      "7777777777",
      "8888888888",
      "9999999999",
    ];
    if (invalidCodes.includes(input)) return false;

    const check = +input[9];
    const sum = [...input].slice(0, 9).reduce((acc, digit, i) => {
      return acc + +digit * (10 - i);
    }, 0);

    const remainder = sum % 11;

    return (
      (remainder < 2 && check === remainder) ||
      (remainder >= 2 && check === 11 - remainder)
    );
  }

  const cityData: CitysType[] = [
    { id: 1, name: "تهران" },
    { id: 2, name: "کرج" },
    { id: 3, name: "مشهد" },
    { id: 4, name: "تبریز" },
    { id: 5, name: "ارومیه" },
    { id: 6, name: "اردبیل" },
    { id: 7, name: "اصفهان" },
    { id: 8, name: "اهواز" },
    { id: 9, name: "ایلام" },
    { id: 10, name: "بندرعباس" },
    { id: 11, name: "بوشهر" },
    { id: 12, name: "بیرجند" },
    { id: 13, name: "خرم‌آباد" },
    { id: 14, name: "رشت" },
    { id: 15, name: "زاهدان" },
    { id: 16, name: "زنجان" },
    { id: 17, name: "ساری" },
    { id: 18, name: "سمنان" },
    { id: 19, name: "سنندج" },
    { id: 20, name: "شهرکرد" },
    { id: 21, name: "شیراز" },
    { id: 22, name: "قزوین" },
    { id: 23, name: "قم" },
    { id: 24, name: "کرمان" },
    { id: 25, name: "کرمانشاه" },
    { id: 26, name: "گرگان" },
    { id: 27, name: "یاسوج" },
    { id: 28, name: "یزد" },
    { id: 29, name: "همدان" },
    { id: 30, name: "اراک" },
  ];

  const provinceData: CitysType[] = [
    { id: 1, name: "آذربایجان شرقی" },
    { id: 2, name: "آذربایجان غربی" },
    { id: 3, name: "اردبیل" },
    { id: 4, name: "اصفهان" },
    { id: 5, name: "البرز" },
    { id: 6, name: "ایلام" },
    { id: 7, name: "بوشهر" },
    { id: 8, name: "تهران" },
    { id: 9, name: "چهارمحال و بختیاری" },
    { id: 10, name: "خراسان جنوبی" },
    { id: 11, name: "خراسان رضوی" },
    { id: 12, name: "خراسان شمالی" },
    { id: 13, name: "خوزستان" },
    { id: 14, name: "زنجان" },
    { id: 15, name: "سمنان" },
    { id: 16, name: "سیستان و بلوچستان" },
    { id: 17, name: "فارس" },
    { id: 18, name: "قزوین" },
    { id: 19, name: "قم" },
    { id: 20, name: "کردستان" },
    { id: 21, name: "کرمان" },
    { id: 22, name: "کرمانشاه" },
    { id: 23, name: "کهگیلویه و بویراحمد" },
    { id: 24, name: "گلستان" },
    { id: 25, name: "گیلان" },
    { id: 26, name: "لرستان" },
    { id: 27, name: "مازندران" },
    { id: 28, name: "مرکزی" },
    { id: 29, name: "هرمزگان" },
    { id: 30, name: "همدان" },
    { id: 31, name: "یزد" },
  ];

  const [selectedCity, setSelectedCity] = useState<string[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<string[]>([]);

  return (
    <div className="w-full">
      <div className="border border-sky-550 p-4 flex gap-2 xl:gap-4 bg-sky-250 rounded-[10px] text-sky-850 ">
        <span className="isax isax-info-circle text-2xl"></span>
        <p className="text-xs xl:text-[16px] leading-[144%]">
          با تکمیل اطلاعات هویتی خود می توانید از امکاناتی مثل فروشگاه استفاده
          کنید
        </p>
      </div>
      <div className="bg-white-100 boder border-grey-100 p-6 rounded-[16px] mt-6">
        <p className="text-black-400 text-[20px] xl:text-[22px] font-medium">
          اطلاعات حساب کاربری
        </p>
        <div className="bg-grey-200 my-6 h-px"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 xl:gap-10"
        >
          <div className="grid xl:grid-cols-2 gap-3 xl:gap-6">
            <div className="flex-col flex gap-2">
              <label
                htmlFor="fName"
                className={`${
                  errors.fName ? "text-red-500" : "text-grey-400"
                } `}
              >
                نام
              </label>
              <input
                id="fName"
                type="text"
                className={`rounded-xl  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
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
                className={`${
                  errors.lName ? "text-red-500" : "text-grey-400"
                } `}
              >
                نام خانوادگی
              </label>
              <input
                id="lName"
                type="text"
                className={`rounded-xl  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                  errors.lName ? "outline-red-500 outline-1" : ""
                }`}
                {...register("lName", {
                  required: "فرم نباید خالی باشد",
                })}
              />
              <p className="text-red-500  text-[14px]">
                {errors.lName?.message}
              </p>
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
                className={`rounded-xl  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
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
                className={`${
                  errors.phone ? "text-red-500" : "text-grey-400"
                } `}
              >
                شماره تلفن
              </label>
              <input
                id="phone"
                type="number"
                className={`rounded-xl  h-[48px] text-xs px-3 bg-grey-50 focus:outline-1 outline-primary-500 ${
                  errors.phone ? "outline-red-500 outline-1" : ""
                }`}
                {...register("phone", {
                  required: "فرم نباید خالی باشد",
                  validate: (value) =>
                    (value.length >= 11 && value.length <= 11) ||
                    "شماره تلفن معتبر نیست",
                })}
              />
              <p className="text-red-500 text-[14px]">
                {errors.phone?.message}
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <p className="text-grey-400">شهر</p>
              <AccordionFilter
                style="dashboard"
                searchBox={true}
                filterTypeData="city"
                filterState={selectedCity}
                setFilterState={setSelectedCity}
                data={cityData}
              />
            </div>
            <div className="flex-col flex gap-2">
              <p className="text-grey-400">استان</p>
              <AccordionFilter
                style="dashboard"
                searchBox={true}
                filterTypeData="city"
                filterState={selectedProvince}
                setFilterState={setSelectedProvince}
                data={provinceData}
              />
            </div>
          </div>
          <div className="flex xl:flex-row flex-col items-center justify-between">
            <p className="text-primary-500 text-xs">
              برای تغییر هر بخش از اطلاعات کافی است به روی آن کلیک کنید و پس از
              اعمال تغییرات بر روی دکمه ذخیره کلیک کنید
            </p>
            <div className="xl:w-auto w-full xl:mt-0 mt-4">
              <button
                type="submit"
                className="cursor-pointer w-full px-4 py-2 bg-primary-500 text-white rounded-[7px]"
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;

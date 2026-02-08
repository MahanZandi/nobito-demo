"use client";
import { useForm } from "react-hook-form";
import { isValidIranianNationalCode } from "@/utils/isValidIranianNationalCode";
import SelectBox from "./SelectBox";
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

  // داده شهرهای مهم ایران
  const cityData: CitysType[] = [
    { id: 1, name: "تهران" },
    { id: 2, name: "مشهد" },
    { id: 3, name: "اصفهان" },
    { id: 4, name: "تبریز" },
    { id: 5, name: "شیراز" },
    { id: 6, name: "کرج" },
    { id: 7, name: "قم" },
    { id: 8, name: "اهواز" },
    { id: 9, name: "رشت" },
    { id: 10, name: "ارومیه" },
    { id: 11, name: "کرمانشاه" },
    { id: 12, name: "زاهدان" },
    { id: 13, name: "اراک" },
    { id: 14, name: "همدان" },
    { id: 15, name: "یاسوج" },
    { id: 16, name: "گرگان" },
    { id: 17, name: "ساری" },
    { id: 18, name: "خرم‌آباد" },
    { id: 19, name: "بندرعباس" },
    { id: 20, name: "بوشهر" },
    { id: 21, name: "سنندج" },
    { id: 22, name: "قزوین" },
    { id: 23, name: "ایلام" },
    { id: 24, name: "اردبیل" },
    { id: 25, name: "بیرجند" },
    { id: 26, name: "زنجان" },
    { id: 27, name: "سمنان" },
    { id: 28, name: "شهرکرد" },
    { id: 29, name: "مراغه" },
    { id: 30, name: "بجنورد" },
    { id: 31, name: "سبزوار" },
    { id: 32, name: "کاشان" },
    { id: 33, name: "قشم" },
    { id: 34, name: "آمل" },
    { id: 35, name: "بابل" },
    { id: 36, name: "شاهرود" },
    { id: 37, name: "دزفول" },
    { id: 38, name: "شوشتر" },
    { id: 39, name: "کیش" },
    { id: 40, name: "ملایر" },
    { id: 41, name: "بروجرد" },
    { id: 42, name: "ساوه" },
    { id: 43, name: "قوچان" },
    { id: 44, name: "مرودشت" },
    { id: 45, name: "بندر انزلی" },
    { id: 46, name: "کازرون" },
    { id: 47, name: "آبادان" },
    { id: 48, name: "شوش" },
    { id: 49, name: "ایرانشهر" },
    { id: 50, name: "مهاباد" },
    // ... شهرهای مهم دیگر را می‌توانید اضافه کنید ...
  ];

  // داده استان‌های ایران
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

  const provinceToCities: { [province: string]: string[] } = {
    تهران: ["تهران", "کرج", "ری", "شمیرانات"],
    "آذربایجان شرقی": ["تبریز", "مراغه", "مرند"],
    "آذربایجان غربی": ["ارومیه", "مهاباد"],
    "خراسان رضوی": ["مشهد", "سبزوار"],
    فارس: ["شیراز", "مرودشت", "کازرون"],
    اصفهان: ["اصفهان", "کاشان"],
    هرمزگان: ["بندرعباس", "قشم", "کیش"],
    بوشهر: ["بوشهر", "آبادان"],
    یزد: ["یزد"],
    کرمان: ["کرمان"],
    کرمانشاه: ["کرمانشاه", "سنندج"],
    لرستان: ["خرم‌آباد", "بروجرد"],
    گیلان: ["رشت", "بندر انزلی"],
    مازندران: ["ساری", "آمل", "بابل"],
    زنجان: ["زنجان"],
    سمنان: ["سمنان", "شاهرود"],
    قم: ["قم"],
    قزوین: ["قزوین"],
    ایلام: ["ایلام"],
    "کهگیلویه و بویراحمد": ["یاسوج"],
    مرکزی: ["اراک", "ساوه"],
    "خراسان شمالی": ["بجنورد"],
    "خراسان جنوبی": ["بیرجند"],
    گلستان: ["گرگان"],
    همدان: ["همدان", "ملایر"],
    "سیستان و بلوچستان": ["زاهدان", "ایرانشهر"],
    اردبیل: ["اردبیل"],
    "چهارمحال و بختیاری": ["شهرکرد"],
    البرز: ["کرج"],
    اهواز: ["اهواز", "دزفول", "شوشتر", "شوش"],
    // سایر استان‌ها را می‌توانید اضافه کنید
  };

  const getCitiesForProvince = (province: string): CitysType[] => {
    const cities = provinceToCities[province] || [];
    return cityData.filter((city) => cities.includes(city.name));
  };

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
                className={`${
                  errors.lName ? "text-red-500" : "text-grey-400"
                } `}
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
                className={`${
                  errors.phone ? "text-red-500" : "text-grey-400"
                } `}
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
              <p className="text-red-500 text-[14px]">
                {errors.phone?.message}
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <p className="text-grey-400">استان</p>
              <SelectBox
                styleType="user-dashboard"
                options={provinceData.map((province) => province.name)}
                onChange={(value) =>
                  setSelectedProvince(Array.isArray(value) ? value : [value])
                }
                value={selectedProvince}
                triggerTitle="استان"
                placeholder="استان"
                multiple={false}
              />
            </div>
            <div className="flex-col flex gap-2">
              <p className="text-grey-400">شهر</p>
              <SelectBox
                styleType="user-dashboard"
                options={getCitiesForProvince(selectedProvince[0] || "").map(
                  (city) => city.name
                )}
                onChange={(value) =>
                  setSelectedCity(Array.isArray(value) ? value : [value])
                }
                value={selectedCity}
                triggerTitle="شهر"
                placeholder="شهر"
                multiple={false}
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

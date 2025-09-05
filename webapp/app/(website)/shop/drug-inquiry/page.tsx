"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import SelectBox from "@/components/website/SelectBox";
import PageSearchBox from "@/components/website/PageSearchBox";
import { useState } from "react";

const ShopDruginquiry = () => {
  type MedicineType = "over-the-counter" | "by-prescription";

  const [selectedMedicine, setSelectedMedicine] = useState<MedicineType>();

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const medicineCategories = [
    { id: 1, name: "آنتی‌بیوتیک‌ها" },
    { id: 2, name: "مسکن‌ها و ضد درد" },
    { id: 3, name: "داروهای قلبی و عروقی" },
    { id: 4, name: "داروهای دیابت" },
    { id: 5, name: "داروهای ضد افسردگی و اعصاب" },
    { id: 6, name: "داروهای گوارشی" },
    { id: 7, name: "داروهای ضد التهاب" },
    { id: 8, name: "ویتامین‌ها و مکمل‌ها" },
    { id: 9, name: "داروهای سرماخوردگی و آلرژی" },
    { id: 10, name: "داروهای هورمونی و غدد" },
  ];

  return (
    <div>
      <div className="flex container xl:flex-row flex-col gap-6 items-center xl:justify-between my-10">
        <span className="text-xl text-black-400">
          آدرس محل تحویل خود را انتخاب کنید
        </span>

        <div className="flex gap-2 text-primary-500 items-center">
          <span className="isax isax-location-add text-2xl xl:text-[32px]"></span>
          <span className="xl:text-xl text-[16px]">اضافه کردن آدرس</span>
        </div>
      </div>
      <div className="bg-white-100 xl:rounded-3xl border border-grey-200 py-8 xl:p-8 xl:container ">
        <div className="container xl:container-none flex flex-col">
          <div className="flex xl:flex-row justify-between flex-col gap-6">
            <div className="flex flex-wrap justify-between md:justify-start gap-6">
              <span className="text-lg xl:text-2xl font-medium text-black-400">
                سفارش دارو :
              </span>
              <RadioGroup.Root
                className="flex gap-6 flex-row-reverse"
                value={selectedMedicine}
                onValueChange={(value: MedicineType) =>
                  setSelectedMedicine(value)
                }
              >
                <div
                  onClick={() => setSelectedMedicine("by-prescription")}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <span
                    className={`${
                      selectedMedicine === "by-prescription"
                        ? "text-primary-500"
                        : "text-grey-400"
                    } xl:text-[22px]`}
                  >
                    دارو با نسخه
                  </span>
                  <RadioGroup.Item
                    value="by-prescription"
                    className={`${
                      selectedMedicine === "by-prescription"
                        ? ""
                        : "border-2 border-gray-400"
                    } size-[18px] xl:size-6 rounded-full cursor-pointer data-[state=checked]:bg-primary-500`}
                  >
                    <RadioGroup.Indicator className="flex justify-center items-center">
                      <span className="bg-white-100 size-1.5 xl:size-2 rounded-full" />
                    </RadioGroup.Indicator>
                  </RadioGroup.Item>
                </div>

                <div
                  onClick={() => setSelectedMedicine("over-the-counter")}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <span
                    className={`${
                      selectedMedicine === "over-the-counter"
                        ? "text-primary-500"
                        : "text-grey-400"
                    } xl:text-[22px]`}
                  >
                    دارو بدون نسخه
                  </span>
                  <RadioGroup.Item
                    value="over-the-counter"
                    className={`${
                      selectedMedicine === "over-the-counter"
                        ? ""
                        : "border-2 border-gray-400"
                    } size-[18px] xl:size-6 rounded-full cursor-pointer data-[state=checked]:bg-primary-500`}
                  >
                    <RadioGroup.Indicator className="flex justify-center items-center">
                      <span className="bg-white-100 size-1.5 xl:size-2 rounded-full" />
                    </RadioGroup.Indicator>
                  </RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            </div>
            <div className="flex items-center text-black-400 gap-2 cursor-pointer">
              <span className="isax isax-gallery xl:text-[32px]"></span>
              <span className="text-[16px] xl:text-xl">بارگذاری تصویر نسخه</span>
            </div>
          </div>
          <div className="mt-10 xl:mt-16">
            <div className="flex flex-col gap-6">
              <SelectBox
                styleType="shop"
                triggerTitle="دسته بندی دارو ها"
                placeholder="دسته بندی دارو ها"
                multiple={false}
                value={selectedCategory}
                onChange={(value) =>
                  setSelectedCategory(Array.isArray(value) ? value : [value])
                }
                options={medicineCategories.map(
                  (medicineCategories) => medicineCategories.name
                )}
              />
              <PageSearchBox
                trigerWidth="mx-auto"
                lableStyle="xl:h-[88px] bg-white-100 relative py-[14.5px] px-[15.5px] xl:p-6 flex items-center gap-2 mx-auto border border-grey-200"
                mobileInput={true}
                placeholder="جستجو دارو،کالای پزشکی و ..."
                type="for-shop"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-10 xl:mt-16">
            <span className="font-medium text-xl xl:text-2xl text-black-400">
              توضیحات سفارش
            </span>
            <textarea
              className="w-full h-[216px] focus:outline-none scrollbar-thin rounded-2xl border border-grey-200 p-4 xl:p-6 placeholder:text-[16px] xl:placeholder:text-xl placeholder:text-grey-500 text-black-400"
              placeholder="توضیح برای داروخانه"
              name="order-description"
              id="order-description"
            ></textarea>
          </div>
          <div className="flex justify-end items-center w-full mt-6 xl:mt-10">
            <button className="flex items-center text-white-500 h-[48px] xl:h-[56px] px-4 rounded-[10px] cursor-pointer bg-primary-500 gap-2">
              <span className="text-[16px] xl:text-xl">مشاهده استعلام</span>
              <span className="isax isax-arrow-left text-2xl xl:text-[32px]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDruginquiry;

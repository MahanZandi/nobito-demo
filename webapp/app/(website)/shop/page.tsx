"use client";
import PageSearchBox from "@/components/website/PageSearchBox";
import Link from "next/link";
import Image from "next/image";

const shopCategory = [
  {
    title: "سفارش دارو",
    description: "تصویر نسخه یا نام دارو",
    image: "/images/medic-shop.png",
    url: "#",
  },
  {
    title: "کالای پزشکی",
    description: "لوازمی که برای آسایش بیشتر بیماران نیاز است",
    image: "/images/wheelchair-shop.png",
    url: "#",
  },
];

const Shop = () => {
  return (
    <div className="xl:mt-10 mt-6 container">
      <PageSearchBox
        trigerWidth="mx-auto"
        lableStyle="xl:h-[88px] bg-white-100 relative py-[14.5px] px-[15.5px] xl:p-6 flex items-center gap-2 mx-auto border border-grey-200"
        mobileInput={true}
        placeholder="جستجو دارو،کالای پزشکی و ..."
        type="for-shop"
      />
      <div className="flex container items-center justify-end xl:justify-between xl:mt-8 mt-4">
        <span className="text-xl text-grey-500 lg:block hidden">
          آدرس محل تحویل خود را انتخاب کنید
        </span>

        <div className="flex gap-2 text-primary-500 items-center">
          <span className="isax isax-location-add text-2xl xl:text-[32px]"></span>
          <span className="xl:text-xl text-[16px]">اضافه کردن آدرس</span>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-8 mt-8 xl:mt-10">
        {shopCategory.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="px-3.5 py-4 xl:p-6 bg-white-100 rounded-2xl xl:rounded-[32px] border border-grey-200 flex flex-col gap-6"
          >
            <Image
              className="rounded-2xl xl:rounded-3xl w-full h-[232px] xl:h-[404px] object-cover"
              alt={item.title}
              src={item.image}
              width={536}
              height={404}
            />

            <span className="text-[22px] xl:text-[32px] text-black-400 font-medium">{item.title}</span>
            <span className="text-[16px] xl:text-[22px] text-grey-400">{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const itemShopOffers = [
  {
    id: 1,
    title: "ویلچر دستی",
    image: "/images/wheelchair-shop.png",
    rate: "4/5",
    previousPrice: 3100000,
    price: 2980000,
    offers: 20,
  },
  {
    id: 2,
    title: "قرص ایبوپروفن 400 میلی گرم",
    image: "/images/itemshop-2.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
  {
    id: 3,
    title: "عصا دستی",
    image: "/images/itemshop-3.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
  {
    id: 4,
    title: "نوار تست قند خون اکتیو",
    image: "/images/itemshop-4.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
  {
    id: 5,
    title: "ویلچر دستی",
    image: "/images/wheelchair-shop.png",
    rate: "4/5",
    previousPrice: 3100000,
    price: 2980000,
    offers: 20,
  },
  {
    id: 6,
    title: "قرص ایبوپروفن 400 میلی گرم",
    image: "/images/itemshop-2.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
  {
    id: 7,
    title: "عصا دستی",
    image: "/images/itemshop-3.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
  {
    id: 8,
    title: "نوار تست قند خون اکتیو",
    image: "/images/itemshop-4.png",
    rate: "4/5",
    previousPrice: 1750000,
    price: 1500000,
    offers: 20,
  },
];

const ItemShopOffers = () => {
  const formatNumber = (num: number): string => {
    return num.toLocaleString("fa-IR");
  };

  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
  });

  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex justify-end">
      <div className="bg-primary-500 lg:rounded-r-[32px] pt-6 lg:p-6 flex lg:flex-row flex-col-reverse gap-6 w-full lg:w-11/12">
        <div className="w-[246px] shrink-0 lg:block hidden">
          <Image
            className="w-[246px] h-[350px] object-contain"
            alt="offers"
            width={246}
            height={300}
            src="/images/offers.png"
          />
          <div className="flex justify-center">
            <button className="cursor-pointer">
              <Link
                href="#"
                className="w-[150px] h-10 bg-white-500 text-black-500 flex justify-center items-center gap-2 rounded-[7px] text-[16px] font-medium"
              >
                <span>مشاهده همه</span>
                <span className="isax isax-arrow-left text-2xl"></span>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full pb-6 shrink-0 lg:hidden items-center flex flex-col ">
          <Image
            className="w-[326px] h-[100px] object-contain"
            alt="offers"
            width={326}
            height={100}
            src="/images/offers-mobile.png"
          />
          <div className="w-full container flex justify-center">
            <button className="cursor-pointer w-full">
              <Link
                href="#"
                className="h-8 lg:h-10 w-full bg-white-500 text-black-500 flex justify-center items-center gap-2 rounded-[5px] lg:rounded-[7px] lg:text-[16px] font-medium"
              >
                <span>مشاهده همه</span>
                <span className="isax isax-arrow-left lg:text-2xl"></span>
              </Link>
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center h-full gap-6">
            {itemShopOffers.map((item, index) => (
              <div
                className="w-[288px] bg-white-100 shrink-0 py-4 px-3.5 rounded-2xl flex flex-col gap-6"
                key={index}
              >
                <div>
                  <Image
                    className="w-full h-[200px] object-contain"
                    alt={item.title}
                    width={260}
                    height={200}
                    src={item.image}
                  />
                </div>
                <div>
                  <div className="flex w-full justify-center text-[16px] font-medium text-black-400">
                    {item.title}
                  </div>
                  <div className="lg:mt-6 mt-4 flex justify-between items-center">
                    <span className="font font-medium lg:font-normal text-black-400 lg:text-[16px]">
                      {formatNumber(item.price)} تومان
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-grey-300 text-xs line-through decoration-grey-300">
                        {formatNumber(item.previousPrice)} تومان
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-error-50 text-error-500">
                        %{item.offers}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 lg:mt-4 flex justify-between items-center">
                    <div
                      onClick={() => toggleLike(item.id)}
                      className="flex gap-1.5 cursor-pointer"
                    >
                      {likes[item.id] ? (
                        <div>
                          <Image
                            className="size-[16px] object-contain"
                            alt="like icon"
                            width={16}
                            height={16}
                            src="/images/png-icons/heart.png"
                          />
                        </div>
                      ) : (
                        <span className="isax isax-heart text-[16px] text-grey-300"></span>
                      )}
                      <span className="text-grey-300 text-xs">
                        افزودن به علاقمندی‌ها
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-black-400">{item.rate}</span>
                      <span className="isax isax-star-15 text-[18px] text-yellow-500"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemShopOffers;

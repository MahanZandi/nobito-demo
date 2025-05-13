"use client";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const HomePatientFeedBack = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", onSelect);
      onSelect(); // مقدار اولیه
    }
  }, [emblaApi]);

  const feedbacks = [
    {
      id: 1,
      name: "علیرضا حسابی",
      rate: "4/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و متون بلکه روزنامه و مجله در ستون",
      suggest: true,
      image: "/images/comment-1.png",
    },
    {
      id: 2,
      name: "دکتر محمدی",
      rate: "4/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در ستون",
      suggest: true,
      image: "/images/comment-2.png",
    },
    {
      id: 3,
      name: "زهرا احمدی",
      rate: "5/5",
      date: "۱۵/۸/۱۴۰۲",
      comment:
        "ای داشتم. پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران ",
      suggest: true,
      image: "/images/comment-1.png",
    },
    {
      id: 4,
      name: "حسین رضایی",
      rate: "3.5/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "خدمات نوبیتو خوب بود اما زمان‌بندی پزشک کمی مشکل داشت و . امیدوارم این مشکل در آینده برطرف شود.",
      suggest: false,
      image: "/images/comment-2.png",
    },
    {
      id: 5,
      name: "مریم کاظمی",
      rate: "4.5/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "پیدا کردن پزشک از طریق نوبیتو بسیار راحت بود و توانستم به سرعت وقت و از خدمات ارائه شده راضی هستم.",
      suggest: true,
      image: "/images/comment-1.png",
    },
  ];

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-xl lg:text-[32px] leading-[155%] lg:font-medium font-[700] text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">بازخورد بیماران</span>
          <span>این ماه</span>
        </h2>
        <div className="h-px bg-grey-200 flex-1 hidden lg:block"></div>
        <div className="flex flex-1 lg:hidden"></div>

        <Link
          href="/"
          className="flex items-center gap-2 font-t2-regular text-grey-500"
        >
          مشاهده همه
          <span className="isax isax-arrow-left-3 text-grey-500 text-2xl leading-6"></span>
        </Link>
      </div>

      <div className="mt-14">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-2">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="flex-none w-[283px] h-[220px] bg-white border border-grey-200 rounded-xl"
              >
                <div className="p-4">
                  <div>
                    {/* profile , name , date , rate */}
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Image
                          className="rounded-sm"
                          src={feedback.image}
                          alt={feedback.name}
                          width={47}
                          height={47}
                        />
                        <div className="flex-col flex gap-2">
                          <span className="text-text-black-title-color font-semibold">
                            {feedback.name}
                          </span>
                          <span className="text-grey-500">{feedback.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-black-400">{feedback.rate}</span>
                        <span className="isax isax-star-15 text-lg leading-[18px] text-secondary-500"></span>
                      </div>
                    </div>

                    {/* comment */}
                    <div className="pt-[16px] h-[90px] overflow-y-auto">
                      <span className="text-[12px] text-grey-500 font-normal leading-[170%]">
                        {feedback.comment}
                      </span>
                    </div>
                    {/* suggest */}
                    <div className="pt-[13px] flex items-end">
                      <div className="flex gap-1 w-full">
                        {feedback.suggest ? (
                          <div className="pb-[16px] flex items-center text-primary-500 gap-1 w-full justify-end">
                            <span className="isax isax-like-1 text-lg"></span>
                            <span>پیشنهاد میکنم</span>
                          </div>
                        ) : (
                          <div className="pb-[16px] flex items-center text-red-600 gap-1 w-full justify-end">
                            <span className="isax isax-dislike text-lg"></span>
                            <span>پیشنهاد نمیکنم</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden xl:flex items-center justify-center gap-4 mt-14">
        <button
          className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <i className="isax isax-arrow-right-2 text-black-400 text-2xl leading-6"></i>
        </button>

        <div className="flex items-center gap-2">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 bg-gray-50 cursor-pointer border border-black-400 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "border-0 bg-primary-500 w-12 h-2"
                  : ""
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <button
          className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollNext()}
        >
          <i className="isax isax-arrow-left-3 text-black-400 text-2xl leading-6"></i>
        </button>
      </div>
    </>
  );
};

export default HomePatientFeedBack;

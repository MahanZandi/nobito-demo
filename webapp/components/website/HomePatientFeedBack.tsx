"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import Link from "next/link";
import Image from "next/image";

interface HomePatientFeedBackProps {
  title: React.ReactNode;
}

const HomePatientFeedBack: React.FC<HomePatientFeedBackProps> = ({ title }) => {
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
      name: "علی محمدی",
      rate: "4/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در ستونورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در سورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در س ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در س ورم ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در س ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در س ",
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
      image: "/images/doctor-4.jpeg",
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
      image: "/images/doctor-4.jpeg",
    },
    {
      id: 6,
      name: "علیرضا حسابی",
      rate: "4/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و متون بلکه روزنامه و مجله در ستون",
      suggest: true,
      image: "/images/comment-1.png",
    },
    {
      id: 7,
      name: "دکتر محمدی",
      rate: "4/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ها و متون بلکه روزنامه و مجله در ستون",
      suggest: true,
      image: "/images/comment-2.png",
    },
    {
      id: 8,
      name: "زهرا احمدی",
      rate: "5/5",
      date: "۱۵/۸/۱۴۰۲",
      comment:
        "ای داشتم. پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران ",
      suggest: true,
      image: "/images/doctor-4.jpeg",
    },
    {
      id: 9,
      name: "حسین رضایی",
      rate: "3.5/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "خدمات نوبیتو خوب بود اما زمان‌بندی پزشک کمی مشکل داشت و . امیدوارم این مشکل در آینده برطرف شود.",
      suggest: false,
      image: "/images/comment-2.png",
    },
    {
      id: 10,
      name: "مریم کاظمی",
      rate: "4.5/5",
      date: "۱۴۰۲/۲/۱۲",
      comment:
        "پیدا کردن پزشک از طریق نوبیتو بسیار راحت بود و توانستم به سرعت وقت و از خدمات ارائه شده راضی هستم.",
      suggest: true,
      image: "/images/doctor-4.jpeg",
    },
  ];

  const DesktopSlider = () => {
    const TWEEN_FACTOR_BASE = 0.15;

    const numberWithinRange = (
      number: number,
      min: number,
      max: number
    ): number => Math.min(Math.max(number, min), max);

    const options: EmblaOptionsType = {
      direction: "rtl",
      align: "center",
      skipSnaps: false,
      loop: true,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
        return slideNode.querySelector(".embla__slide__number") as HTMLElement;
      });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
      tweenFactor.current =
        TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
          let diffToTarget = scrollSnap - scrollProgress;
          const slidesInSnap = engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
                const target = loopItem.target();

                if (slideIndex === loopItem.index && target !== 0) {
                  const sign = Math.sign(target);

                  if (sign === -1) {
                    diffToTarget = scrollSnap - (1 + scrollProgress);
                  }
                  if (sign === 1) {
                    diffToTarget = scrollSnap + (1 - scrollProgress);
                  }
                }
              });
            }

            const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
            const scale = numberWithinRange(tweenValue, 0, 1).toString();
            const tweenNode = tweenNodes.current[slideIndex];
            tweenNode.style.transform = `scale(${scale})`;
          });
        });
      },
      []
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      if (!emblaApi) return;

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);
      onSelect();

      emblaApi
        .on("select", onSelect)
        .on("reInit", setTweenNodes)
        .on("reInit", setTweenFactor)
        .on("reInit", tweenScale)
        .on("scroll", tweenScale)
        .on("slideFocus", tweenScale);

      return () => {
        emblaApi
          .off("select", onSelect)
          .off("reInit", setTweenNodes)
          .off("reInit", setTweenFactor)
          .off("reInit", tweenScale)
          .off("scroll", tweenScale)
          .off("slideFocus", tweenScale);
      };
    }, [emblaApi, setSelectedIndex, setTweenNodes, setTweenFactor, tweenScale]);
    return (
      <>
        <div className="embla" dir="rtl">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {feedbacks.map((feedback, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
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
                              <span className="text-grey-500">
                                {feedback.date}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-black-400">
                              {feedback.rate}
                            </span>
                            <span className="isax isax-star-15 text-lg leading-[18px] text-secondary-500"></span>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          {/* comment */}
                          <div className="pt-[16px] h-[60px] xl:h-[130px]">
                            <span className="embla__slide__comment">
                              {feedback.comment}
                            </span>
                          </div>
                          {/* suggest */}
                          <div className="pt-[13px] flex items-end">
                            <div className="flex gap-1 w-full">
                              {feedback.suggest ? (
                                <div className="flex items-center text-primary-500 gap-1 w-full justify-end">
                                  <span className="isax isax-like-1 text-lg"></span>
                                  <span>پیشنهاد میکنم</span>
                                </div>
                              ) : (
                                <div className="flex items-center text-red-600 gap-1 w-full justify-end">
                                  <span className="isax isax-dislike text-lg"></span>
                                  <span>پیشنهاد نمیکنم</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* select && arrow buttons */}
        <div className="flex items-center justify-center gap-4 mt-14">
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
        {/* chat icon */}‍
        <div className="flex justify-between container">
          <div></div> {/* for space */}
          <div>
            <div>
              <Link
                href="#"
                className="w-[120px] bg-primary-600 rounded-full grid place-items-center"
              >
                <span className="isax z-50 isax-message-text text-[64px] text-white"></span>
                <div className="absolute">
                  <Image
                    width={120}
                    height={124}
                    className="-z-10"
                    src="/images/outline-chat-icon.png"
                    alt="chat logo"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const MobileSlider = () => {
    const [emblaRef] = useEmblaCarousel({
      direction: "rtl",
    });

    return (
      <div className="mt-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-4 xl:h-[260px]">
            {feedbacks.map((feedback, index) => {
              return (
                <div
                  key={index}
                  className={`
                    flex-none
                    w-[283px] h-[190px]
                    transition-all duration-300 ease-in-out
                    bg-white border border-grey-200 rounded-xl
                    
                  `}
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
                            <span className="text-grey-500">
                              {feedback.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <span className="text-black-400">
                            {feedback.rate}
                          </span>
                          <span className="isax isax-star-15 text-lg leading-[18px] text-secondary-500"></span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        {/* comment */}
                        <div className="pt-[16px] h-[60px] xl:h-[130px]">
                          <span className="text-[12px] text-grey-500 font-normal line-clamp-2 leading-[170%]">
                            {feedback.comment}
                          </span>
                        </div>
                        {/* suggest */}
                        <div className="pt-[13px] flex items-end">
                          <div className="flex gap-1 w-full text-[12px]">
                            {feedback.suggest ? (
                              <div className="flex items-center text-primary-500 gap-1 w-full justify-end">
                                <span className="isax isax-like-1 text-lg"></span>
                                <span>پیشنهاد میکنم</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-red-600 gap-1 w-full justify-end">
                                <span className="isax isax-dislike text-lg"></span>
                                <span>پیشنهاد نمیکنم</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1220px)");
    const handelChange = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handelChange);
    handelChange();
    return () => {
      mediaQuery.removeEventListener("change", handelChange);
    };
  }, []);

  return (
    <>
      {title}
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
    </>
  );
};

export default HomePatientFeedBack;

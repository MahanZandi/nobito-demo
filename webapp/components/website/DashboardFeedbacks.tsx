"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type Tab = "accepted" | "awaiting-accepted" | "rejected";

interface MyComments {
  doctorName: string;
  image: string;
  specialization: string;
  suggestion: boolean;
  starRate: number;
  status: Tab;
  comment: string;
  features?: string[];
  likes: number;
  date: string;
  visitType: string;
}

const myComments: MyComments[] = [
  {
    doctorName: "بهرام میرزایی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص مغز و اعصاب",
    suggestion: true,
    starRate: 5,
    status: "accepted",
    comment:
      "دکتر بسیار حرفه‌ای و خوش‌برخورد بودند. تشخیص دقیق و راهنمایی‌های عالی داشتند. حتماً پیشنهاد می‌کنم.",
    features: ["رفتار محترمانه", "تشخیص دقیق", "پرسنل خوب", "کمترین معطلی"],
    likes: 10,
    date: "12 بهمن 1403",
    visitType: "مراجعه حضوری",
  },
  {
    doctorName: "سارا احمدی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص قلب و عروق",
    suggestion: false,
    starRate: 3,
    status: "awaiting-accepted",
    comment:
      "تشخیص خوبی داشتند، اما معطلی در مطب زیاد بود و پرسنل کمی بی‌نظم بودند.",
    features: ["تشخیص دقیق"],
    likes: 3,
    date: "15 بهمن 1403",
    visitType: "آنلاین",
  },
  {
    doctorName: "علی رضایی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص ارتوپدی",
    suggestion: true,
    starRate: 4,
    status: "accepted",
    comment:
      "دکتر رضایی بسیار با حوصله توضیح دادند و روند درمان را به‌خوبی مدیریت کردند. تجربه خوبی بود.",
    features: ["رفتار محترمانه", "تشخیص دقیق", "توضیح کامل"],
    likes: 8,
    date: "20 دی 1403",
    visitType: "مراجعه حضوری",
  },
  {
    doctorName: "مریم کاظمی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص پوست و مو",
    suggestion: true,
    starRate: 5,
    status: "awaiting-accepted",
    comment:
      "واقعاً از نتیجه درمان راضی بودم. دکتر کاظمی با دقت و حرفه‌ای عمل کردند.",
    features: ["تشخیص دقیق", "نتایج عالی", "رفتار محترمانه"],
    likes: 12,
    date: "25 دی 1403",
    visitType: "مراجعه حضوری",
  },
  {
    doctorName: "حسین محمدی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص گوش، حلق و بینی",
    suggestion: false,
    starRate: 2,
    status: "accepted",
    comment:
      "تشخیص درست بود، ولی وقت‌دهی مطب خیلی طول کشید و پرسنل پاسخگویی خوبی نداشتند.",
    features: ["تشخیص دقیق"],
    likes: 1,
    date: "10 آذر 1403",
    visitType: "مراجعه حضوری",
  },
  {
    doctorName: "فاطمه حسینی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص زنان و زایمان",
    suggestion: true,
    starRate: 4,
    status: "awaiting-accepted",
    comment:
      "دکتر حسینی بسیار مهربان و حرفه‌ای بودند. احساس راحتی کردم و توضیحاتشون کامل بود.",
    features: ["رفتار محترمانه", "توضیح کامل", "محیط آرام"],
    likes: 7,
    date: "5 بهمن 1403",
    visitType: "آنلاین",
  },
  {
    doctorName: "رضا نجفی",
    image: "/images/doctor-7.jpeg",
    specialization: "متخصص داخلی",
    suggestion: true,
    starRate: 5,
    status: "accepted",
    comment:
      "دکتر نجفی فوق‌العاده بودند. هم تشخیص دقیق داشتند و هم با صبر و حوصله به سؤالم پاسخ دادند.",
    features: ["تشخیص دقیق", "رفتار محترمانه", "توضیح کامل", "کمترین معطلی"],
    likes: 15,
    date: "1 اسفند 1403",
    visitType: "مراجعه حضوری",
  },
];

const pendingComments = myComments.filter(
  (comments) => comments.status === "awaiting-accepted"
);

const verifiedComments = myComments.filter(
  (comments) => comments.status === "accepted"
);

const DashboardFeedbacks = () => {
  const [activeTab, setActiveTab] = useState<Tab>("accepted");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabFromQuery = searchParams.get("status") as Tab | null;
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams]);

  const onChangeTab = (tab: Tab) => {
    setActiveTab(tab);

    const newUrl = `/user-dashboard?section=feedbacks&status=${tab}`;
    router.push(newUrl, { scroll: false });
  };

  const verifiedCommentsTab = () => onChangeTab("accepted");
  const pendingCommentsTab = () => onChangeTab("awaiting-accepted");

  interface CommentProps {
    comment: MyComments;
  }

  const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Image
              src={comment.image}
              width={72}
              height={72}
              alt={comment.doctorName}
              className="rounded-full object-cover size-14 xl:size-[72px]"
            />
            <div className="flex flex-col gap-3">
              <span className="text-[16px] xl:text-xl text-black-400 font-medium">
                {comment.doctorName}
              </span>
              <span className="text-xs text-grey-500">
                {comment.specialization}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-primary-500 border text-xs border-primary-500 rounded-[200px] px-3 py-1">
              {comment.status}
            </div>
            <span className="isax isax-more text-[18px] xl:text-2xl text-black-400 rotate-90 cursor-pointer"></span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mt-6">
            <div className="hidden xl:flex gap-2 items-center">
              <span
                className={`${
                  comment.suggestion
                    ? "isax-like-1 text-primary-500"
                    : "isax-dislike text-error-500"
                } isax text-[16px]`}
              ></span>
              <span
                className={`${
                  comment.suggestion ? "text-primary-500" : "text-error-500"
                } text-xs`}
              >
                {comment.suggestion
                  ? "مراجعه به این پزشک را پیشنهاد میکنم"
                  : "مراجعه به این پزشک را پیشنهاد نمی کنم"}
              </span>
            </div>
            <div className="xl:block hidden">
              <span> {comment.starRate} </span>
              <span className="isax isax-star-15 text-yellow-500 text-[16px]"></span>
            </div>
          </div>
          <div className="flex mt-6 gap-1">
            <span className="text-grey-500">
              {" "}
              <span className="text-black-400">نظر پزشک : </span>{" "}
              {comment.comment}{" "}
            </span>
          </div>
          {comment.features && (
            <div className="flex flex-wrap gap-4 items-center mt-6">
              {comment.features?.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <span className="isax isax-tick-circle text-[18px] text-primary-500"></span>
                  <span className="text-black-400">{feature}</span>
                </div>
              ))}
            </div>
          )}
          <div className="w-full h-px bg-grey-200 mt-6"></div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-3 items-center">
              <span className="text-xs font-medium text-black-400">
                {comment.date}
              </span>
              <div className="flex items-center text-primary-500 font-medium gap-2">
                <span className="isax isax-frame-1 text-[18px]"></span>
                <span>{comment.visitType}</span>
              </div>
            </div>
            <div className="text-black-400 items-center gap-1 xl:flex hidden">
              <span className="isax-like-1 isax text-[16px]"></span>
              <span>این نظر برای {comment.likes} نفر مفید بوده</span>
            </div>
            <div className="text-black-400 items-center gap-1 flex xl:hidden">
              <span className="isax-like-1 isax text-[16px]"></span>
              <span className="text-xs">{comment.likes}</span>
            </div>
          </div>
          <div className="w-full h-px bg-grey-200 mt-6"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="lg:bg-white-100 lg:border border-grey-100 lg:rounded-4xl lg:p-6 py-6">
        <span className="text-black-400 text-[22px] font-medium">
          بازخورد ها
        </span>
        <ul className="border-b border-grey-200 flex gap-8 mt-6 text-[16px] mb-6">
          <li
            onClick={verifiedCommentsTab}
            className={` ${
              activeTab === "accepted"
                ? "font-bold text-primary-500 pb-1 border-b-2 border-primary-500"
                : "text-grey-500 pb-2"
            } cursor-pointer`}
          >
            <span> بازخورد های من </span>
            <span>({verifiedComments.length})</span>
          </li>
          <li
            onClick={pendingCommentsTab}
            className={` ${
              activeTab === "awaiting-accepted"
                ? "font-bold text-primary-500 pb-1 border-b-2 border-primary-500"
                : "text-grey-500 pb-2"
            } cursor-pointer`}
          >
            <span> در انتظار ثبت نظر </span>
            <span>({pendingComments.length})</span>
          </li>
        </ul>
        {activeTab === "accepted" && (
          <div className="flex flex-col gap-6">
            {verifiedComments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
        )}
        {activeTab === "awaiting-accepted" && (
          <div className="flex flex-col gap-6">
            {pendingComments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardFeedbacks;

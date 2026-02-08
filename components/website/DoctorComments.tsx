"use client";
import { useState } from "react";
import Image from "next/image";

interface DoctorCommentProps {
  comments: {
    id: number;
    name: string;
    star: number;
    date: string;
    comment: string;
    suggest: boolean;
    image: string;
    waitingTime: string;
    takeTurns: {
      title: string;
      icon: string;
    };
  }[];
}

const INITIAL_VISIBLE_COMMENTS = 4;

const DoctorComments: React.FC<DoctorCommentProps> = ({ comments }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COMMENTS);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + INITIAL_VISIBLE_COMMENTS, comments.length)
    );
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-6">
        {comments.slice(0, visibleCount).map((comment) => (
          <div
            key={comment.id}
            className="bg-white-100 border-grey-200 border rounded-2xl p-6"
          >
            <div className="flex justify-between">
              <div className="flex gap-4 ">
                <Image
                  src={comment.image}
                  alt={comment.name}
                  width={80}
                  height={80}
                  className="rounded-full xl:size-20 size-14"
                />
                <div className="flex flex-col gap-3">
                  <p className="xl:text-[22px] text-[16px] text-black-400">
                    {comment.name}
                  </p>
                  <span className="text-grey-500 text-[12px] xl:text-[14px]">{comment.date}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="border min-w-[107px] xl:min-w-[122px] h-[28px] xl:h-[34px] px-3 gap-2 text-primary-500 py-[6.5px] flex justify-center items-center border-primary-500 rounded-[200px]">
                  <span className={`${comment.takeTurns.icon} text-[18px] xl:text-2xl`}></span>
                  <span className="text-[12px] xl:text-[16px]">{comment.takeTurns.title}</span>
                </div>
                <div className="pt-4 flex gap-1 justify-end items-center">
                  <span className="font-medium text-[16px] xl:text-[22px] text-black-400">
                    {comment.star}
                  </span>
                  <span className="isax isax-star-15 text-yellow-500 text-2xl"></span>
                </div>
              </div>
            </div>
            <div className="py-6">
              <p className="leading-[155%] text-grey-500 xl:text-[16px] text-[14px]">{comment.comment}</p>
            </div>
            <div className="h-px bg-grey-200 w-full mb-6"></div>

            <div>
              <div className="flex flex-col-reverse gap-4 xl:flex-row xl:justify-between">
                <div className="flex gap-3 items-center">
                  <Image
                    src={
                      comment.suggest
                        ? "/images/png-icons/happy.png"
                        : "/images/png-icons/sad.png"
                    }
                    alt="suggest"
                    width={24}
                    height={24}
                  />
                  <p
                    className={`${
                      comment.suggest ? "text-primary-500" : "text-error-500"
                    } text-[14px] xl:text-[16px] flex-1`}
                  >
                    {comment.suggest
                      ? "این پزشک را پیشنهاد می‌کنم"
                      : "این پزشک را پیشنهاد نمی‌کنم"}
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="isax isax-clock text-2xl text-grey-500"></span>
                  <p className="text-grey-500 text-[14px] xl:text-[16px] ">
                    زمان انتظار : {comment.waitingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {comments.length > visibleCount && (
          <button
            onClick={handleShowMore}
            className="flex justify-center items-center gap-2 w-full mt-4 border border-black-500 h-12 text-black-500 rounded-lg "
          >
            <span className="text-[16px]">مشاهده بیشتر</span>
            <span className="isax isax-arrow-down-1 text-2xl"></span>
          </button>
        )}
      </div>
    </>
  );
};

export default DoctorComments;



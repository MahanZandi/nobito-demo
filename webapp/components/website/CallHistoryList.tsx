import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CallHistoryItem {
  id: number;
  name: string;
  image: string;
  speciality: string;
  rate: string;
  link: string;
  description: string;
  date: string;
  day: string;
}

interface CallHistoryListProps {
  callHistoryData: CallHistoryItem[];
}

const CallHistoryList: React.FC<CallHistoryListProps> = ({
  callHistoryData,
}) => {
  return (
    <div className="xl:mt-[64px] mt-[48px] grid xl:grid-cols-2 gap-6">
      {callHistoryData.map((item) => (
        <div
          key={item.id}
          className="bg-white-100 border border-grey-200 rounded-xl p-4"
        >
          <div className="flex sm:flex-row gap-4 flex-col justify-between">
            <div className="flex sm:flex-row flex-col items-center sm:items-start gap-[17px]">
              <div className="size-[104px] sm:size-auto p-1.5 border-2 border-grey-300 rounded-full">
                <Image
                  className="size-[90px] sm:size-[76.27px] rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                  width={76.27}
                  height={76.27}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center sm:justify-start gap-2">
                    <span className="text-xl font-medium text-black-400">
                      {item.name}
                    </span>
                    <div className="flex gap-2 text-black-400">
                      <span>{item.rate}</span>
                      <span className="isax isax-star-15 text-[18px] text-yellow-500"></span>
                    </div>
                  </div>
                  <span className="text-grey-400 text-center sm:text-start">{item.speciality}</span>
                </div>
              </div>
            </div>
            {/* TODO create date */}
            <div className="flex justify-center sm:justify-start sm:items-center text-black-500">
              {item.day} | {item.date}
            </div>
          </div>
          <div className="w-full h-px bg-grey-200 my-4"></div>
          <div className="text-grey-400 text-[14px] sm:text-[16px] leading-[155%] line-clamp-5 sm:line-clamp-3">
            {item.description}
          </div>
          <Link href={item.link}>
            <button className="mt-4 w-full border text-[16px] font-medium border-primary-500 rounded-3xl h-12 flex items-center justify-center cursor-pointer text-primary-500">
              مشاهده نتیجه
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CallHistoryList;

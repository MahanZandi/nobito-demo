import React from "react";
import Image from "next/image";

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
          <div className="flex justify-between">
            <div className="flex gap-[17px]">
              <div className="p-1.5 border-2 border-grey-300 rounded-full">
                <Image
                  className="size-[76.27px] rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                  width={76.27}
                  height={76.27}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <span className="text-xl font-medium text-black-400">{item.name}</span>
                    <div className="flex gap-2 text-black-400">
                      <span>{item.rate}</span>
                      <span className="isax isax-star-15 text-[18px] text-yellow-500"></span>
                    </div>
                  </div>
                  <span className="text-grey-400">{item.speciality}</span>
                </div>
              </div>
            </div>
            {/* TODO create date */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallHistoryList;

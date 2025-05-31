"use client";
import { useState } from "react";

const TurnRatingFilterCard = () => {

  const [ConsultationMethod, useConsultationMethod] = useState<string>("");


  return (
    <div className="w-[405px] rounded-2xl bg-white-100 hidden xl:block">
      <div className="py-10 px-6">
        <div className="flex items-center">
          <div className="flex text-black-400 gap-2 items-center flex-1">
            <span className="isax-filter isax text-[32px]"></span>
            <span className="text-[22px] font-medium">فیلتر کردن</span>
          </div>
          <div className="text-grey-400 text-sm cursor-pointer">
            <span>حذف فیلتر</span>
          </div>
        </div>
      </div>
      {/* Medical consultation method */}
      <div className="pt-10 pb-6">
        <div className="pb-8">
          <span className="text-black-400 text-[16px]">
            شیوه مشاوره پزشکی خود را انتخاب کنید
          </span>
        </div>
      </div>
    </div>
  );
};

export default TurnRatingFilterCard;

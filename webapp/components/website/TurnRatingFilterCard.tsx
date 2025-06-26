"use client";
import { useState } from "react";

const TurnRatingFilterCard = () => {
  type ConsultationMethod = "calling" | "online" | "in-person" | "";

  const [consultationMethod, setConsultationMethod] =
    useState<ConsultationMethod>("");

  const handelDeleteFilter = () => {
    setConsultationMethod("");
  };

  const calling = () => setConsultationMethod("calling");
  const online = () => setConsultationMethod("online");
  const inPerson = () => setConsultationMethod("in-person");

  return (
    <div className="w-[505px] rounded-2xl bg-white-100 hidden xl:block">
      <div className="py-10 px-6">
        <div className="flex items-center">
          <div className="flex text-black-400 gap-2 items-center flex-1">
            <span className="isax-filter isax text-[32px]"></span>
            <span className="text-[22px] font-medium">فیلتر کردن</span>
          </div>
          <div>
            <span
              className="text-grey-400 text-sm cursor-pointer"
              onClick={handelDeleteFilter}
            >
              حذف فیلتر
            </span>
          </div>
        </div>
      </div>
      {/* Medical consultation method */}
      <div className=" pb-6 px-6">
        <div className="pb-8">
          <p className="text-black-400 text-[16px]">
            شیوه مشاوره پزشکی خود را انتخاب کنید
          </p>
        </div>
        <div className="flex justify-between">
          {/* calling */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${
                consultationMethod === "calling"
                  ? "bg-primary-500"
                  : "bg-grey-50"
              }`}
              onClick={calling}
            >
              <span
                className={`text-[40px] isax isax-call-calling ${
                  consultationMethod === "calling"
                    ? "text-body"
                    : "text-black-500"
                }`}
              ></span>
            </div>
            <p
              className={`text-black-500 text-[20px] cursor-pointer ${
                consultationMethod === "calling"
                  ? "text-primary-500"
                  : "text-black-500"
              }`}
              onClick={calling}
            >
              تلفنی
            </p>
          </div>
          {/* online */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${
                consultationMethod === "online"
                  ? "bg-primary-500"
                  : "bg-grey-50"
              }`}
              onClick={online}
            >
              <span
                className={`text-[40px] isax isax-monitor-mobbile ${
                  consultationMethod === "online"
                    ? "text-body"
                    : "text-black-500"
                }`}
              ></span>
            </div>
            <p
              className={`text-black-500 text-[20px] cursor-pointer ${
                consultationMethod === "online"
                  ? "text-primary-500"
                  : "text-black-500"
              }`}
              onClick={online}
            >
              آنلاین
            </p>
          </div>
          {/* in-person */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${
                consultationMethod === "in-person"
                  ? "bg-primary-500"
                  : "bg-grey-50"
              }`}
              onClick={inPerson}
            >
              <span
                className={`text-[40px] isax isax-hospital ${
                  consultationMethod === "in-person"
                    ? "text-body"
                    : "text-black-500"
                }`}
              ></span>
            </div>
            <p
              className={`text-black-500 text-[20px] cursor-pointer ${
                consultationMethod === "in-person"
                  ? "text-primary-500"
                  : "text-black-500"
              }`}
              onClick={inPerson}
            >
              حضوری
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnRatingFilterCard;

"use client";
import { useState } from "react";

type VisitMethodType = "calling" | "in-person" | "text" | "online" | "";

const DoctorVisitType = () => {
  const [visitMethod, setVisitMethod] = useState<VisitMethodType>("");

  const calling = () => setVisitMethod("calling");
  const inPerson = () => setVisitMethod("in-person");
  const online = () => setVisitMethod("online");
  const text = () => setVisitMethod("text");

  return (
    <div className="py-8 px-4 gap-8 flex flex-col items-center border border-grey-200 rounded-3xl">
      <p className="text-[32px] text-black-400">ملاقات با پزشک</p>
      <div className="flex gap-6">
        <div className="text-grey-400 flex flex-col gap-4">
          <div
            onClick={calling}
            className={`${
              visitMethod === "calling" ? "bg-primary-500 text-body" : ""
            } transition-all cursor-pointer size-[104px] rounded-[10px] p-5 border border-grey-400`}
          >
            <span className="isax isax-call-calling text-[64px] "></span>
          </div>
          <p
            onClick={calling}
            className={`cursor-pointer text-2xl text-center ${
              visitMethod === "calling" ? "text-primary-500" : "text-grey-400"
            }`}
          >
            تلفنی
          </p>
        </div>
        <div className="text-grey-400 flex flex-col gap-4">
          <div
            onClick={inPerson}
            className={`${
              visitMethod === "in-person" ? "bg-primary-500 text-body" : ""
            } transition-all cursor-pointer size-[104px] rounded-[10px] p-5 border border-grey-400`}
          >
            <span className="isax isax-frame-1 text-[64px] "></span>
          </div>
          <p
            onClick={inPerson}
            className={`cursor-pointer text-2xl text-center ${
              visitMethod === "in-person" ? "text-primary-500" : "text-grey-400"
            }`}
          >
            حضوری
          </p>
        </div>
        <div className="text-grey-400 flex flex-col gap-4">
          <div
            onClick={online}
            className={`${
              visitMethod === "online" ? "bg-primary-500 text-body" : ""
            } transition-all cursor-pointer size-[104px] rounded-[10px] p-5 border border-grey-400`}
          >
            <span className="isax isax-monitor-mobbile text-[64px] "></span>
          </div>
          <p
            onClick={online}
            className={`cursor-pointer text-2xl text-center ${
              visitMethod === "online" ? "text-primary-500" : "text-grey-400"
            }`}
          >
            آنلاین
          </p>
        </div>
        <div className="text-grey-400 flex flex-col gap-4">
          <div
            onClick={text}
            className={`${
              visitMethod === "text" ? "bg-primary-500 text-body" : ""
            } transition-all cursor-pointer size-[104px] rounded-[10px] p-5 border border-grey-400`}
          >
            <span className="isax isax-messages text-[64px] "></span>
          </div>
          <p
            onClick={text}
            className={`cursor-pointer text-2xl text-center ${
              visitMethod === "text" ? "text-primary-500" : "text-grey-400"
            }`}
          >
            متنی
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorVisitType;

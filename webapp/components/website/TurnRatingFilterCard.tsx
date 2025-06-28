"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

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
        <div className="h-px bg-grey-250 my-6"></div>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1" className="border border-grey-200 rounded-lg w-full p-3 bg-white-100">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full group">
                <div className="flex-1 flex">
                  <p className="text-black-400 font-medium text-[16px]">تخصص</p>
                  <span></span> {/* TODO create ping with animation when we have a Expertise*/}
                </div>
                <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span> 
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-4">
              <p> {/* TODO create the contents */}
                و فرعون گفت: برای درهم کوبیدن این دو نفر هر جادوگر دانا و زبردستی را نزد من آورید.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default TurnRatingFilterCard;

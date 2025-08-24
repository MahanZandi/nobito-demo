"use client";
import { useState } from "react";
import CalendarDate from "./CalendarDate";
import SelectBox from "./SelectBox";

interface DoctorSpecialty {
  title: string;
}

interface DiseaseType {
  title: string;
}

const doctorSpecialties: DoctorSpecialty[] = [
  { title: "داخلی" },
  { title: "جراحی" },
  { title: "اطفال" },
  { title: "زنان و زایمان" },
  { title: "پوست و مو" },
  { title: "چشم" },
  { title: "گوش، حلق و بینی" },
  { title: "قلب و عروق" },
  { title: "ارتوپدی" },
  { title: "نورولوژی" },
  { title: "روانپزشکی" },
  { title: "اورولوژی" },
  { title: "اورژانس" },
  { title: "طب فیزیکی و توانبخشی" },
];

const diseaseTypes: DiseaseType[] = [
  { title: "سرماخوردگی" },
  { title: "آنفلوآنزا" },
  { title: "دیابت" },
  { title: "فشار خون بالا" },
  { title: "آسم" },
  { title: "سکته قلبی" },
  { title: "سکته مغزی" },
  { title: "آپاندیسیت" },
  { title: "برونشیت" },
  { title: "ذات‌الریه" },
  { title: "گاستریت" },
  { title: "درماتیت" },
  { title: "سرطان" },
  { title: "آلرژی" },
  { title: "نارسایی کلیه" },
];

const SelectDoctor = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<string[]>([]);

  // eslint-disable-next-line
  const [date, setDate] = useState<any>(null);

  return (
    <>
      <div className="container flex items-center gap-3">
        <h2 className="text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">انتخاب</span>
          <span>درمانگر</span>
        </h2>
        <div className="h-px lg:bg-grey-200 flex-1"></div>
      </div>
      <div className="container">
        <div className="flex flex-col gap-6 bg-white-100 rounded-2xl mt-10 xl:mt-12 p-6 xl:px-6 xl:py-8">
          <div className="flex flex-wrap justify-between items-center text-black-400">
            <span className="text-[16px] xl:text-xl">
              آدرس محل حضور درمانگر را وارد نمایید
            </span>
            <div className="flex gap-2 items-center">
              <span>انتخاب آدرس</span>
              <span className="isax isax-arrow-down-1 text-[18px] xl:text-xl"></span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:pt-6 pt-[36px] gap-6">
            <SelectBox
              styleType="select-doctor"
              options={doctorSpecialties.map((item) => item.title)}
              onChange={(value) =>
                setSelectedSpecialty(Array.isArray(value) ? value : [value])
              }
              value={selectedSpecialty}
              triggerTitle="تخصص"
              placeholder="تخصص"
              multiple={false}
            />
            <SelectBox
              styleType="select-doctor"
              options={diseaseTypes.map((item) => item.title)}
              onChange={(value) =>
                setSelectedDisease(Array.isArray(value) ? value : [value])
              }
              value={selectedDisease}
              triggerTitle="نوع بیماری"
              placeholder="نوع بیماری"
              multiple={false}
            />
            <CalendarDate
              placeholder="انتخاب تاریخ"
              inputStyle="cursor-pointer text-grey-400 border border-grey-200 p-3 flex rounded-lg xl:w-[380px] 2xl:w-[500px]"
              value={date}
              onChange={setDate}
              inputCalender={true}
            />
          </div>
          {/* TODO create button */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SelectDoctor;

"use client";
import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import AccordionFilter from "@/components/website/AccordionFilter";
import Calendar from "@/components/website/Calendar";

type ConsultationMethod = "calling" | "online" | "in-person" | "";

interface DoctorType {
  id?: number;
  name?: string;
  image?: string;
  rate?: string;
  comment?: string;
  services: string;
  takeTurns?: {
    title: string;
    icon: string;
  }[];
  specialization: string;
  happyPatients?: string;
  successfulTurn?: string;
  happyPatientsPercentage?: string;
  skills?: string[];
  city: string;
  features?: string[];
  workingHours?: string;
  location: string;
  insurance: string;
  gender: string;
}

interface TurnRatingFilterCardProps {
  doctors: DoctorType[];
}

const TurnRatingFilterCard: React.FC<TurnRatingFilterCardProps> = ({
  doctors,
}) => {
  const [consultationMethod, setConsultationMethod] =
    useState<ConsultationMethod>("");

  const handelDeleteFilter = () => {
    setConsultationMethod("");
    setSelectedSpecialization([]);
    setSelectedServices([]);
    setSelectedCitys([]);
    setSelectedLocation([]);
    setSelectedInsurance([]);
    setStartDate([]);
    setEndDate([]);
  };

  const calling = () => setConsultationMethod("calling");
  const online = () => setConsultationMethod("online");
  const inPerson = () => setConsultationMethod("in-person");

  // state for accordions
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string[]
  >([]);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [selectedCitys, setSelectedCitys] = useState<string[]>([]);

  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);

  // eslint-disable-next-line
  const [startDate, setStartDate] = useState<any>(null);
  // eslint-disable-next-line
  const [endDate, setEndDate] = useState<any>(null);

  // state for genders selection
  const [selectedGender, setSelectedGender] = useState<
    "both" | "male" | "female"
  >("both");

  return (
    <div className="w-[405px] rounded-2xl bg-white-100 hidden xl:block">
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
      <div className=" pb-6 px-6">
        {/* Medical consultation method */}
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
        {/* specialization accordion */}
        <div className="h-px bg-grey-250 my-6"></div>
        <AccordionFilter
          triggerTitle="تخصص"
          searchBox={true}
          filterTypeData="specialization"
          data={doctors}
          filterState={selectedSpecialization}
          setFilterState={setSelectedSpecialization}
        />

        {/* services accordion */}
        <div className="h-px bg-grey-250 my-6"></div>
        <AccordionFilter
          triggerTitle="خدمات"
          searchBox={true}
          filterTypeData="services"
          data={doctors}
          filterState={selectedServices}
          setFilterState={setSelectedServices}
        />

        <div className="h-px bg-grey-250 my-6"></div>
        <div className="grid grid-cols-2 gap-[17px]">
          {/* citys accordion */}
          <AccordionFilter
            triggerTitle="شهر"
            searchBox={true}
            filterTypeData="city"
            data={doctors}
            filterState={selectedCitys}
            setFilterState={setSelectedCitys}
          />
          {/* insurance accordion */}
          <AccordionFilter
            triggerTitle="بیمه"
            searchBox={true}
            filterTypeData="insurance"
            data={doctors}
            filterState={selectedInsurance}
            setFilterState={setSelectedInsurance}
          />
        </div>
        <div className="h-px bg-grey-250 my-6"></div>
        {/* location accordion */}
        <AccordionFilter
          triggerTitle="محله"
          searchBox={true}
          filterTypeData="location"
          data={doctors}
          filterState={selectedLocation}
          setFilterState={setSelectedLocation}
        />
        <div className="h-px bg-grey-250 my-6"></div>
        {/* gender selection */}
        <div className="flex">
          <div className="flex flex-1">
            <p className="text-black-400">جنسیت پزشک:</p>
          </div>
          <RadioGroup.Root
            className="flex gap-6 flex-row-reverse"
            value={selectedGender}
            onValueChange={(value) =>
              setSelectedGender(value as "both" | "male" | "female")
            }
          >
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item
                value="both"
                className="size-[18px] rounded-full border cursor-pointer border-gray-500 data-[state=checked]:bg-primary-500"
              >
                <RadioGroup.Indicator className="flex justify-center items-center">
                  <span className="bg-white-100 size-1.5 rounded-full" />
                </RadioGroup.Indicator>
              </RadioGroup.Item>
              <p className="text-black-400 text-[16px]">هردو</p>
            </div>

            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item
                value="male"
                className="size-[18px] rounded-full border cursor-pointer border-gray-500 data-[state=checked]:bg-primary-500"
              >
                <RadioGroup.Indicator className="flex justify-center items-center">
                  <span className="bg-white-100 size-1.5 rounded-full" />
                </RadioGroup.Indicator>
              </RadioGroup.Item>
              <p className="text-black-400 text-[16px]">مرد</p>
            </div>

            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item
                value="female"
                className="size-[18px] rounded-full border cursor-pointer border-gray-500 data-[state=checked]:bg-primary-500"
              >
                <RadioGroup.Indicator className="flex justify-center items-center">
                  <span className="bg-white-100 size-1.5 rounded-full" />
                </RadioGroup.Indicator>
              </RadioGroup.Item>
              <p className="text-black-400 text-[16px]">زن</p>
            </div>
          </RadioGroup.Root>
        </div>
        <div className="h-px bg-grey-250 my-6"></div>
        <p className="text-[16px] font-medium text-black-400 mb-3">
          تعیین روز :
        </p>
        <div className="flex gap-4">
          <Calendar
            text="از تاریخ"
            value={startDate}
            onChange={setStartDate}
          />
          <Calendar text="تا تاریخ" value={endDate} onChange={setEndDate} />
        </div>
      </div>
    </div>
  );
};

export default TurnRatingFilterCard;

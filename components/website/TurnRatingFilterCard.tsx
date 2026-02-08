"use client";
import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import CalendarDate from "@/components/website/CalendarDate";
import TurnRatingBanner from "./TurnRatingBanner";
import SelectBox from "./SelectBox";

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

type FacilityItem =
  | "کمترین معطلی"
  | "نیروی خدماتی"
  | "ویلچر"
  | "تخت بیماران"
  | "پارکینگ"
  | "آسانسور"
  | "سالن انتظار";

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
    setSelectedFacilities([]);
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

  const [selectedFacilities, setSelectedFacilities] = useState<FacilityItem[]>(
    []
  );

  const toggleFacilitiesItem = (item: FacilityItem) => {
    setSelectedFacilities((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const onFacilityClick = (item: FacilityItem) => () => {
    toggleFacilitiesItem(item);
  };

  return (
    <>
      {/* filter component */}
      <div className="flex flex-col gap-6">
        <div className="w-[405px] rounded-2xl max-h-[1140px] bg-white-100 hidden xl:block">
          <div className="py-10 px-6 w-[405px] ">
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
            <SelectBox
              styleType="filter-card"
              options={doctors.map((doctor) => doctor.specialization)}
              multiple={true}
              value={selectedSpecialization}
              onChange={(value) =>
                setSelectedSpecialization(
                  Array.isArray(value) ? value : [value]
                )
              }
              placeholder="تخصص"
              triggerTitle="تخصص"
            />
            {/* services accordion */}
            <div className="h-px bg-grey-250 my-6"></div>
            <SelectBox
              styleType="filter-card"
              options={doctors.map((doctor) => doctor.services)}
              multiple={true}
              value={selectedServices}
              onChange={(value) =>
                setSelectedServices(Array.isArray(value) ? value : [value])
              }
              placeholder="خدمات"
              triggerTitle="خدمات"
            />
            <div className="h-px bg-grey-250 my-6"></div>
            <div className="grid grid-cols-2 gap-[17px]">
              {/* citys selection */}
              <SelectBox
                styleType="filter-card"
                options={doctors.map((doctor) => doctor.city)}
                multiple={true}
                value={selectedCitys}
                onChange={(value) =>
                  setSelectedCitys(Array.isArray(value) ? value : [value])
                }
                placeholder="شهر"
                triggerTitle="شهر"
              />
              {/* insurance selection */}
              <SelectBox
                styleType="filter-card"
                options={doctors.map((doctor) => doctor.insurance)}
                multiple={true}
                value={selectedInsurance}
                onChange={(value) =>
                  setSelectedInsurance(Array.isArray(value) ? value : [value])
                }
                placeholder="بیمه"
                triggerTitle="بیمه"
              />
            </div>
            <div className="h-px bg-grey-250 my-6"></div>
            {/* location accordion */}
            <SelectBox
              styleType="filter-card"
              options={doctors.map((doctor) => doctor.location)}
              multiple={true}
              value={selectedLocation}
              onChange={(value) =>
                setSelectedLocation(Array.isArray(value) ? value : [value])
              }
              placeholder="محله"
              triggerTitle="محله"
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
            <p className="text-[16px] font-medium text-black-400 mb-4">
              تعیین روز نوبت :
            </p>
            <div className="flex gap-4">
            <CalendarDate
              inputCalender={true}
              placeholder="از تاریخ"
              value={startDate}
              onChange={setStartDate}
              inputStyle="cursor-pointer text-grey-500 border border-grey-200 p-3 flex rounded-lg w-[160px] xl:w-[170px]"
            />
            <CalendarDate
              inputCalender={true}
              placeholder="تا تاریخ"
              value={endDate}
              onChange={setEndDate}
              inputStyle="cursor-pointer text-grey-500 border border-grey-200 p-3 flex rounded-lg w-[160px] xl:w-[170px]"
            />
            </div>
            <div className="h-px bg-grey-250 my-6"></div>
            <p className="text-[16px] font-medium text-black-400 mb-4">
              امکانات مطب :
            </p>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("سالن انتظار")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("سالن انتظار")}
              >
                سالن انتظار
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("آسانسور")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("آسانسور")}
              >
                آسانسور
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("پارکینگ")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("پارکینگ")}
              >
                پارکینگ
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("تخت بیماران")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("تخت بیماران")}
              >
                تخت بیماران
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("ویلچر")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("ویلچر")}
              >
                ویلچر
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("نیروی خدماتی")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("نیروی خدماتی")}
              >
                نیروی خدماتی
              </div>
              <div
                className={`cursor-pointer rounded-[48px] h-8 px-4 flex justify-center items-center ${
                  selectedFacilities.includes("کمترین معطلی")
                    ? "bg-white text-primary-500 border border-primary-500"
                    : "bg-body text-black-400"
                }`}
                onClick={onFacilityClick("کمترین معطلی")}
              >
                کمترین معطلی
              </div>
            </div>
          </div>
        </div>
        {/* Bimito Banner */}
        <div className="xl:block hidden">
          <TurnRatingBanner />
        </div>
      </div>
    </>
  );
};

export default TurnRatingFilterCard;

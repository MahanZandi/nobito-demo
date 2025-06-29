"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Checkbox from "@radix-ui/react-checkbox";

type ConsultationMethod = "calling" | "online" | "in-person" | "";

interface DoctorType {
  id?: number;
  name?: string;
  image?: string;
  rate?: string;
  comment?: string;
  services?: string;
  takeTurns?: {
    title: string;
    icon: string;
  }[];
  specialization?: string;
  happyPatients?: string;
  successfulTurn?: string;
  happyPatientsPercentage?: string;
  skills?: string[];
  city?: string;
  features?: string[];
  workingHours?: string;
  location?: string;
}

interface TurnRatingFilterCardProps {
  filterExpertise: {
    title: string;
  }[];
  servises: {
    title: string;
  }[];
  doctors: DoctorType[];
}

const TurnRatingFilterCard: React.FC<TurnRatingFilterCardProps> = ({
  filterExpertise,
  servises,
  doctors,
}) => {
  const [consultationMethod, setConsultationMethod] =
    useState<ConsultationMethod>("");

  const handelDeleteFilter = () => {
    setConsultationMethod("");
    setSelectedExpertise([]);
  };

  const calling = () => setConsultationMethod("calling");
  const online = () => setConsultationMethod("online");
  const inPerson = () => setConsultationMethod("in-person");

  // query for search input
  const [query, setQuery] = useState<string>("");

  const filterExpertiseData = filterExpertise.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const filterServicesData = servises.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // const filterCityData = Array.from(
  //   new Set(
  //     doctors
  //       .filter((item) =>
  //         item.city?.toLowerCase().includes(query.toLowerCase())
  //       )
  //       .map((item) => item.city)
  //   )
  // );

  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [selectedCitys, setSelectedCitys] = useState<string[]>([]);

  const handleFilterChange = (
    title: string,
    checked: boolean | "indeterminate",
    type: "expertise" | "services" | "city"
  ) => {
    if (type === "expertise") {
      if (checked === true) {
        setSelectedExpertise((prev) => [...prev, title]);
      } else {
        setSelectedExpertise((prev) => prev.filter((item) => item !== title));
      }
    } else if (type === "services") {
      if (checked === true) {
        setSelectedServices((prev) => [...prev, title]);
      } else {
        setSelectedServices((prev) => prev.filter((item) => item !== title));
      }
    }
  };

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
        {/* expertise accordion */}
        <div className="h-px bg-grey-250 my-6"></div>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item
            value="item-1"
            className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full group">
                <div className="flex-1 flex items-center">
                  <p className="text-black-400 font-medium text-[16px] pl-2">
                    تخصص
                  </p>
                  {/* blue circle */}
                  {selectedExpertise.length > 0 && (
                    <span className="size-1.5 bg-sky-600 rounded-full"></span>
                  )}
                </div>
                <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
              </Accordion.Trigger>
              {/* selected expertise */}
              {selectedExpertise.length > 0 && (
                <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                  {selectedExpertise.join(", ")}
                </p>
              )}
            </Accordion.Header>
            <Accordion.Content className="flex flex-col">
              <label
                form="search"
                className="bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-md"
              >
                <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
                <input
                  id="search"
                  className="outline-none text-black-400"
                  placeholder="جستجو"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>

              <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
                {filterExpertiseData.map((item) => (
                  <div
                    key={item.title}
                    className="text-black-400 flex flex-col pt-4"
                  >
                    <div className="flex">
                      {/* check box radix ui */}
                      <Checkbox.Root
                        checked={selectedExpertise.includes(item.title)}
                        onCheckedChange={(checked) =>
                          handleFilterChange(item.title, checked, "expertise")
                        }
                        className="size-6 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                      >
                        <Checkbox.Indicator className="flex items-center justify-center">
                          {/* svg for check icon font awesome */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14"
                            width="12.25"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="#ffffff"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            />
                          </svg>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <p
                        className={`flex pr-2 ${
                          selectedExpertise.includes(item.title)
                            ? "text-primary-500"
                            : ""
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="h-px bg-grey-50 w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        {/* services accordion */}
        <div className="h-px bg-grey-250 my-6"></div>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item
            value="item-1"
            className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full group">
                <div className="flex-1 flex items-center">
                  <p className="text-black-400 font-medium text-[16px] pl-2">
                    خدمات
                  </p>
                  {/* blue circle */}
                  {selectedServices.length > 0 && (
                    <span className="size-1.5 bg-sky-600 rounded-full"></span>
                  )}
                </div>
                <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
              </Accordion.Trigger>
              {/* selected services */}
              {selectedServices.length > 0 && (
                <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                  {selectedServices.join(", ")}
                </p>
              )}
            </Accordion.Header>
            <Accordion.Content className="flex flex-col">
              <label
                form="search"
                className="bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-lg"
              >
                <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
                <input
                  id="search"
                  className="outline-none text-black-400"
                  placeholder="جستجو"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>

              <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
                {filterServicesData.map((item) => (
                  <div
                    key={item.title}
                    className="text-black-400 flex flex-col pt-4"
                  >
                    <div className="flex">
                      {/* check box radix ui */}
                      <Checkbox.Root
                        checked={selectedServices.includes(item.title)}
                        onCheckedChange={(checked) =>
                          handleFilterChange(item.title, checked, "services")
                        }
                        className="size-6 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                      >
                        <Checkbox.Indicator className="flex items-center justify-center">
                          {/* svg for check icon font awesome */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14"
                            width="12.25"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="#ffffff"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            />
                          </svg>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <p
                        className={`flex pr-2 ${
                          selectedExpertise.includes(item.title)
                            ? "text-primary-500"
                            : ""
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="h-px bg-grey-50 w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        {/* TODO  */}
        <div className="h-px bg-grey-250 my-6"></div>
        <div className="grid grid-cols-2 gap-[17px]">
          {/* citys accordion */}
          <Accordion.Root type="single" collapsible>
            <Accordion.Item
              value="item-1"
              className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full group">
                  <div className="flex-1 flex items-center">
                    <p className="text-black-400 font-medium text-[16px] pl-2">
                      خدمات
                    </p>
                    {/* blue circle */}
                    {selectedServices.length > 0 && (
                      <span className="size-1.5 bg-sky-600 rounded-full"></span>
                    )}
                  </div>
                  <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
                </Accordion.Trigger>
                {/* selected citys */}
                {selectedServices.length > 0 && (
                  <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                    {selectedServices.join(", ")}
                  </p>
                )}
              </Accordion.Header>
              <Accordion.Content className="flex flex-col">
                <label
                  form="search"
                  className="bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-lg"
                >
                  <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
                  <input
                    id="search"
                    className="outline-none text-black-400"
                    placeholder="جستجو"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>

                <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
                  {filterServicesData.map((item) => (
                    <div
                      key={item.title}
                      className="text-black-400 flex flex-col pt-4"
                    >
                      <div className="flex">
                        {/* check box radix ui */}
                        <Checkbox.Root
                          checked={selectedServices.includes(item.title)}
                          onCheckedChange={(checked) =>
                            handleFilterChange(item.title, checked, "services")
                          }
                          className="size-6 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                        >
                          <Checkbox.Indicator className="flex items-center justify-center">
                            {/* svg for check icon font awesome */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="14"
                              width="12.25"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="#ffffff"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                              />
                            </svg>
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <p
                          className={`flex pr-2 ${
                            selectedExpertise.includes(item.title)
                              ? "text-primary-500"
                              : ""
                          }`}
                        >
                          {item.title}
                        </p>
                      </div>
                      <div className="pt-4">
                        <div className="h-px bg-grey-50 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <Accordion.Root type="single" collapsible>
            <Accordion.Item
              value="item-1"
              className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full group">
                  <div className="flex-1 flex items-center">
                    <p className="text-black-400 font-medium text-[16px] pl-2">
                      خدمات
                    </p>
                    {/* blue circle */}
                    {selectedServices.length > 0 && (
                      <span className="size-1.5 bg-sky-600 rounded-full"></span>
                    )}
                  </div>
                  <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
                </Accordion.Trigger>
                {/* selected services */}
                {selectedServices.length > 0 && (
                  <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                    {selectedServices.join(", ")}
                  </p>
                )}
              </Accordion.Header>
              <Accordion.Content className="flex flex-col">
                <label
                  form="search"
                  className="bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-lg"
                >
                  <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
                  <input
                    id="search"
                    className="outline-none text-black-400"
                    placeholder="جستجو"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>

                <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
                  {filterServicesData.map((item) => (
                    <div
                      key={item.title}
                      className="text-black-400 flex flex-col pt-4"
                    >
                      <div className="flex">
                        {/* check box radix ui */}
                        <Checkbox.Root
                          checked={selectedServices.includes(item.title)}
                          onCheckedChange={(checked) =>
                            handleFilterChange(item.title, checked, "services")
                          }
                          className="size-6 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                        >
                          <Checkbox.Indicator className="flex items-center justify-center">
                            {/* svg for check icon font awesome */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="14"
                              width="12.25"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="#ffffff"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                              />
                            </svg>
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <p
                          className={`flex pr-2 ${
                            selectedExpertise.includes(item.title)
                              ? "text-primary-500"
                              : ""
                          }`}
                        >
                          {item.title}
                        </p>
                      </div>
                      <div className="pt-4">
                        <div className="h-px bg-grey-50 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className="h-px bg-grey-250 my-6"></div>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item
            value="item-1"
            className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full group">
                <div className="flex-1 flex items-center">
                  <p className="text-black-400 font-medium text-[16px] pl-2">
                    خدمات
                  </p>
                  {/* blue circle */}
                  {selectedServices.length > 0 && (
                    <span className="size-1.5 bg-sky-600 rounded-full"></span>
                  )}
                </div>
                <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
              </Accordion.Trigger>
              {/* selected services */}
              {selectedServices.length > 0 && (
                <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                  {selectedServices.join(", ")}
                </p>
              )}
            </Accordion.Header>
            <Accordion.Content className="flex flex-col">
              <label
                form="search"
                className="bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-lg"
              >
                <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
                <input
                  id="search"
                  className="outline-none text-black-400"
                  placeholder="جستجو"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>

              <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
                {filterServicesData.map((item) => (
                  <div
                    key={item.title}
                    className="text-black-400 flex flex-col pt-4"
                  >
                    <div className="flex">
                      {/* check box radix ui */}
                      <Checkbox.Root
                        checked={selectedServices.includes(item.title)}
                        onCheckedChange={(checked) =>
                          handleFilterChange(item.title, checked, "services")
                        }
                        className="size-6 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                      >
                        <Checkbox.Indicator className="flex items-center justify-center">
                          {/* svg for check icon font awesome */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14"
                            width="12.25"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="#ffffff"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            />
                          </svg>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <p
                        className={`flex pr-2 ${
                          selectedExpertise.includes(item.title)
                            ? "text-primary-500"
                            : ""
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="h-px bg-grey-50 w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default TurnRatingFilterCard;

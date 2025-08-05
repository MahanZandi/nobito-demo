import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";

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
}

interface CitysType {
  id: number;
  name: string;
}

type filterType =
  | "specialization"
  | "services"
  | "city"
  | "location"
  | "insurance";

type AccordionFilterProps =
  | {
      type: "single";
      searchBox?: false; // یا undefined
      filterState: string[];
      setFilterState: React.Dispatch<React.SetStateAction<string[]>>;
      filterTypeData: filterType;
      data: DoctorType[] | CitysType[];
      triggerTitle?: string;
    }
  | {
      type: "multiple";
      searchBox?: boolean;
      filterState: string[];
      setFilterState: React.Dispatch<React.SetStateAction<string[]>>;
      filterTypeData: filterType;
      data: DoctorType[] | CitysType[];
      triggerTitle: string;
    };

const AccordionFilter: React.FC<AccordionFilterProps> = ({
  filterState,
  setFilterState,
  filterTypeData,
  data,
  triggerTitle,
  searchBox,
  type,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleFilterChange = (
    title: string,
    checked: boolean | "indeterminate",
    type: filterType
  ) => {
    if (type === filterTypeData) {
      if (checked === true) {
        setFilterState((prev) => [...prev, title]);
      } else {
        setFilterState((prev) => prev.filter((item) => item !== title));
      }
    }
  };

  const filterData =
    filterTypeData === "city"
      ? Array.from(
          new Set(
            (data as CitysType[])
              .filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => item.name)
          )
        )
      : Array.from(
          new Set(
            (data as DoctorType[])
              .filter((item) =>
                (item[filterTypeData] as string)
                  ?.toLowerCase()
                  .includes(query.toLowerCase())
              )
              .map((item) => item[filterTypeData] as string)
          )
        );

  const MultipleAccordion = () => {
    return (
      <Accordion.Root type="single">
        <Accordion.Item
          value="item-1"
          className="border border-grey-200 rounded-lg w-full p-3 bg-white-100"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full group">
              <div className="flex-1 flex items-center">
                <p className="text-black-400 font-medium text-[16px] pl-2">
                  {triggerTitle}
                </p>
                {/* blue circle */}
                {filterState.length > 0 && (
                  <span className="size-1.5 bg-sky-600 rounded-full"></span>
                )}
              </div>
              <span className="isax isax-arrow-down-1 text-2xl text-black-400 transition-all group-data-[state=open]:rotate-180"></span>
            </Accordion.Trigger>
            {/* selected filter */}
            {filterState.length > 0 && (
              <p className="text-grey-400 text-[12px] pt-2 line-clamp-1">
                {filterState.join(", ")}
              </p>
            )}
          </Accordion.Header>
          <Accordion.Content className="flex flex-col">
            <label
              form="search"
              className={`${
                searchBox ? "" : "hidden"
              } bg-grey-50 flex items-center gap-3 h-10 mt-3 mb-2 p-2 rounded-md`}
            >
              <span className="isax isax-search-normal text-2xl leading-8 text-grey-400"></span>
              <input
                id="search"
                autoComplete="off"
                className="outline-none text-black-400"
                placeholder="جستجو"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>

            <div className="flex flex-col  max-h-[304px] overflow-auto scrollbar-thin">
              {filterData.map((item) => (
                <div key={item} className="text-black-400 flex flex-col pt-4">
                  <div className="flex">
                    {/* check box radix ui */}
                    <Checkbox.Root
                      checked={filterState.includes(item)}
                      onCheckedChange={(checked) =>
                        handleFilterChange(item, checked, filterTypeData)
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
                    <div
                      className={`flex pr-2 ${
                        filterState.includes(item) ? "text-primary-500" : ""
                      }`}
                    >
                      <p className="line-clamp-2">{item}</p>
                    </div>
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
    );
  };

  const SingleAccordion = () => {
    const selectedValue = filterState[0] || "";

    const handleSelectChange = (value: string) => {
      setFilterState([value]); // چون single هست، فقط یک گزینه رو نگه می‌داریم
    };

    const filteredData = filterData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <>
        <Select.Root value={selectedValue} onValueChange={handleSelectChange}>
          <Select.Trigger className="h-10 focus:outline-none">
            <div className="flex items-center justify-between w-full p-3 rounded-lg text-black-400 border-gray-200 bg-grey-50">
              <Select.Value />
              <Select.Icon className="text-xl text-black-400">
                <span className="isax isax-arrow-down-1"></span>
              </Select.Icon>
            </div>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              position="popper"
              sideOffset={4}
              dir="rtl"
              className="z-50 overflow-hidden bg-white border border-gray-200 rounded-md shadow-md min-w-[100px]  text-center"
            >
              {/* <div
                className={`${
                  searchBox ? "" : "hidden"
                } bg-grey-50 flex items-center gap-3 h-10 px-3 py-2 mx-3 my-2 rounded-md`}
              >
                <span className="isax isax-search-normal text-2xl text-grey-400" />
                <input
                  placeholder="جستجو"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.stopPropagation()} 
                  onPointerDown={(e) => e.stopPropagation()}
                  className="w-full outline-none text-black-400 bg-transparent"
                />
              </div> */}

              <Select.Viewport className="max-h-[200px] overflow-auto scrollbar-thin">
                {filteredData.map((item) => (
                  <Select.Item
                    key={item}
                    value={item}
                    className="cursor-pointer focus:outline-none focus:bg-primary-50 px-4 py-2 text-black-400 data-[state=checked]:text-primary-500"
                  >
                    <Select.ItemText>{item}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </>
    );
  };

  return (
    <>{type === "multiple" ? <MultipleAccordion /> : <SingleAccordion />}</>
  );
};

export default AccordionFilter;

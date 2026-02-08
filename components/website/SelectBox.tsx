import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";

type StyleType = "filter-card" | "user-dashboard" | "shop" | "select-doctor";

interface MultiSelectProps {
  options: string[];
  multiple?: boolean;
  value: string[] | string;
  onChange: (value: string[] | string) => void;
  placeholder?: string;
  triggerTitle: string;
  styleType: StyleType;
}

const SelectBox: React.FC<MultiSelectProps> = ({
  options,
  multiple,
  value,
  onChange,
  placeholder,
  triggerTitle,
  styleType,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: string) => {
    if (multiple) {
      const arr = value as string[];
      if (arr.includes(item)) {
        onChange(arr.filter((v) => v !== item));
      } else {
        onChange([...arr, item]);
      }
    } else {
      onChange(item);
      setOpen(false);
    }
  };

  const isSelected = (item: string) =>
    multiple ? (value as string[]).includes(item) : value === item;

  const renderLabel = () => {
    if (multiple) {
      const arr = value as string[];
      return arr.length > 0 ? arr.join(", ") : placeholder;
    }
    return value ? (value as string) : placeholder;
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className={clsx(
          "flex flex-col gap-1.5 focus:outline-none  p-3 justify-center w-full",
          styleType === "filter-card" &&
            "border border-grey-200 bg-white-100 rounded-lg",
          styleType === "user-dashboard" && "bg-grey-50 rounded-lg",
          styleType === "shop" &&
            "border border-grey-200 bg-white-100 h-[48px] xl:h-[88px] rounded-lg xl:rounded-xl",
          styleType === "select-doctor" &&
            "border border-grey-200 bg-white-100 rounded-lg h-[48px]"
        )}
      >
        <div className="flex w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              {styleType === "filter-card" && (
                <span className={clsx("text-black-400 font-medium truncate")}>
                  {triggerTitle}
                </span>
              )}

              {styleType === "select-doctor" && (
                <span className={clsx("text-grey-400 font-medium truncate")}>
                  {value.length > 0 ? renderLabel() : triggerTitle}
                </span>
              )}

              {value.length > 0 && (
                <span
                  className={`${
                    styleType === "filter-card" ? "" : "hidden"
                  } size-1.5 bg-sky-600 rounded-full`}
                ></span>
              )}

              {(styleType === "user-dashboard" ||
                styleType === "shop") && (
                <span
                  className={clsx(
                    "",
                    styleType === "user-dashboard" && "text-black-400",
                    styleType === "shop" &&
                      "text-grey-400 text-[16px] xl:text-[22px]"
                  )}
                >
                  {styleType === "shop" ? value.length > 0 ? renderLabel(): "دسته بندی دارو ها" : renderLabel()}
                </span>
              )}
            </div>

            <span
              className={`${open ? "rotate-180" : ""} 
              ${clsx(
                "isax isax-arrow-down-1  transition-transform",
                styleType === "shop" &&
                  "text-2xl xl:text-[32px] text-black-400",
                styleType === "user-dashboard" && "text-2xl text-black-400",
                styleType === "select-doctor" && "text-2xl text-grey-400",
                styleType === "filter-card" && "text-2xl text-black-400"
              )} `}
            ></span>
          </div>
        </div>
        {value.length > 0 && (
          <p
            className={`${
              styleType === "filter-card" ? "" : "hidden"
            } text-grey-400 text-[12px] pt-2 line-clamp-1 flex`}
          >
            {renderLabel()}
          </p>
        )}
      </Popover.Trigger>

      <Popover.Content
        align="start"
        sideOffset={4}
        className="bg-white-100 border z-[9999] absolute text-black-400 border-grey-200 rounded-lg shadow-md py-2 min-w-[170px] overflow-auto max-h-[300px] scrollbar-thin"
      >
        {options.length === 0 && (
          <span className="px-2">هیچ گزینه‌ای وجود ندارد</span>
        )}
        {options.map((item) => (
          <div
            key={item}
            className="flex items-center py-2 cursor-pointer hover:bg-primary-50 px-2"
            onClick={() => handleSelect(item)}
          >
            {multiple ? (
              <>
                <Checkbox.Root
                  checked={isSelected(item)}
                  onCheckedChange={() => handleSelect(item)}
                  className="size-5 rounded-md border cursor-pointer border-gray-300 data-[state=checked]:bg-primary-500"
                >
                  <Checkbox.Indicator className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
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
                <span
                  className={`pr-2 text-black-400 ${
                    isSelected(item) ? "text-primary-500" : ""
                  }`}
                >
                  {item}
                </span>
              </>
            ) : (
              <span
                className={`pr-2 text-black-400 ${
                  isSelected(item) ? "text-primary-500" : ""
                }`}
              >
                {item}
              </span>
            )}
          </div>
        ))}
      </Popover.Content>
    </Popover.Root>
  );
};

export default SelectBox;

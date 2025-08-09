import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";

interface MultiSelectProps {
  options: string[];
  multiple?: boolean;
  value: string[] | string;
  onChange: (value: string[] | string) => void;
  placeholder?: string;
  triggerTitle: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  multiple = false,
  value,
  onChange,
  placeholder,
  triggerTitle,
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
      <Popover.Trigger className="flex flex-col gap-1.5 border focus:outline-none border-grey-200 rounded-lg p-3 justify-center w-full bg-white-100">
        <div className="flex w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              <span className="text-black-400 font-medium truncate">
                {triggerTitle}
              </span>
              {value.length > 0 && (
                <span className="size-1.5 bg-sky-600 rounded-full"></span>
              )}
            </div>
            <span
              className={`${
                open ? "rotate-180" : ""
              } isax isax-arrow-down-1 text-2xl text-black-400 transition-transform`}
            ></span>
          </div>
        </div>
        {value.length > 0 && (
          <p className="text-grey-400 text-[12px] pt-2 line-clamp-1 flex">
            {renderLabel()}
          </p>
        )}
      </Popover.Trigger>

      <Popover.Content
        align="start"
        sideOffset={4}
        className="bg-white-100 border border-grey-200 rounded-lg shadow-md p-2 min-w-[170px] overflow-auto scrollbar-thin"
      >
        {options.map((item) => (
          <div
            key={item}
            className="flex items-center py-2 cursor-pointer"
            onClick={() => handleSelect(item)}
          >
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
          </div>
        ))}
      </Popover.Content>
    </Popover.Root>
  );
};

export default MultiSelect;

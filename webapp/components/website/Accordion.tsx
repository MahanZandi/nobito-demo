"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className="w-full space-y-4"
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
        >
          {/* Header */}
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group cursor-pointer flex w-full items-center justify-between p-4 text-right text-black-400 text-[14px] xl:text-[16px]">
              {item.question}
              <span className="isax isax-arrow-down-1 text-2xl text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"></span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* Content */}
          <AccordionPrimitive.Content className="px-4 pb-4 text-grey-400 text-[14px] xl:text-[16px] xl:leading-[155%] leading-[144%] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {item.answer}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;

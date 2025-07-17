"use client";
import { useRef } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

interface TurnRatingCalendarProps {
  text: string;
  value: DateObject | null;
  onChange: (date: DateObject | null) => void;
}

const TurnRatingCalendar: React.FC<TurnRatingCalendarProps> = ({ text, value, onChange }) => {
  const datePickerRef = useRef(null);
  const today = new DateObject({ calendar: persian });

  return (
    <div>
      <DatePicker
        portal
        plugins={[weekends()]}
        monthYearSeparator="/"
        className="teal"
        ref={datePickerRef}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        minDate={today}
        value={value}
        onChange={onChange}
        render={(value, openCalendar) => {
          const openCalendarFn = () => openCalendar();
          return (
            <div
              onClick={openCalendarFn}
              className="cursor-pointer text-grey-500 border border-grey-200 p-3 flex rounded-lg w-[160px] xl:w-[170px]"
            >
              <span className="flex font-medium flex-1">{text}</span>
              <span className="isax isax-calendar-1 text-2xl"></span>
            </div>
          );
        }}
      />
    </div>
  );
};

export default TurnRatingCalendar;

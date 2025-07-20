"use client";
import { useRef, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { Calendar } from "react-multi-date-picker";

interface CommonProps {
  text?: string;
  value?: DateObject | null;
  onChange?: (date: DateObject | null) => void;
}

type AtLeastOneCalendarProp =
  | { inputCalender: boolean; pageCalender?: boolean }
  | { inputCalender?: boolean; pageCalender: boolean };

type CalendarProps = CommonProps & AtLeastOneCalendarProp;

const CalendarDate: React.FC<CalendarProps> = ({
  text,
  value,
  onChange,
  inputCalender,
  pageCalender,
}) => {
  const datePickerRef = useRef(null);
  const today = new DateObject({ calendar: persian });

  // eslint-disable-next-line
  const [pageCalenderValues, setPageCalenderValues] = useState<any>([]);

  return (
    <div>
      {inputCalender && (
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
      )}
      {pageCalender && (
        <div className="inline-block p-2 bg-white shadow-md rounded-2xl border border-grey-200">
          <Calendar
            multiple
            calendar={persian}
            locale={persian_fa}
            monthYearSeparator="/"
            className="teal custom-calendar"
            minDate={today}
            value={pageCalenderValues}
            onChange={setPageCalenderValues}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarDate;

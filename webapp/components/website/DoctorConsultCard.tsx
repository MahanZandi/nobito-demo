import Link from "next/link";

interface DoctorConsultCardProps {
  title: string;
  date: string;
  time: string;
  price: number;
}

const DoctorConsultCard: React.FC<DoctorConsultCardProps> = ({
  title,
  date,
  time,
  price,
}) => {
  return (
    <div className="bg-white-100 rounded-2xl border border-grey-200 p-6">
      <div className="flex w-full">
        <div className="flex flex-1 text-black-400">
          <div className="flex gap-2">
            <span className="isax isax-frame-1 text-[32px]"></span>
            <p className="text-[22px] ">مشاوره حضوری</p>
          </div>
        </div>
        <div className="flex gap-2 bg-sky-150 text-sky-650 rounded-[200px] p-1.5">
          <span className="isax isax-info-circle text-2xl"></span>
          <p className="text-[16px]">راهنما</p>
        </div>
      </div>

      <div className="pt-10 text-grey-500 flex items-center gap-2">
        <span className="isax isax-calendar-1 text-2xl"></span>
        <p className="text-[20px]">
          {title} , {date}
        </p>
      </div>
      <div className="pt-6 text-grey-500 flex items-center gap-2">
        <span className="isax isax-clock text-2xl"></span>
        <p className="text-[20px]">{time}</p>
      </div>
      {/* price */}
      <div className="pt-10 flex items-center">
        <p className="text-[20px] font-medium text-primary-500 flex flex-1">
          {" "}
          {price} تومان
        </p>

        <Link
          href="#"
          className="cursor-pointer hidden xl:block text-white-500 bg-primary-500 rounded-md px-3 py-2"
        >
          <button className="flex cursor-pointer gap-2">
            <span className="text-[16px] font-medium">دریافت نوبت</span>
            <span className="isax isax-arrow-left text-2xl"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorConsultCard;

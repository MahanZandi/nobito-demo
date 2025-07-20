import ProgressBar from "./ProgressBar";
import ProgressRing from "./ProgressRing";

interface ProgressBarBoxProps {
  doctor: {
    happyComment: number;
    badComment: number;
    star: number;
    comment: string;
    waitingTime: number;
    correctDiagnosis: number;
    facilities: number;
    cleanliness: number;
    goodBehavior: number;
    treatedPatients: number;
    recommendedByUsers: number;
  };
}

const ProgressBarBox: React.FC<ProgressBarBoxProps> = ({ doctor }) => {
  const fullStars = Math.round(doctor.star);
  const emptyStars = 5 - fullStars;

  // To get the percentage
  function getSatisfactionPercent(happy: number, bad: number): number {
    const total = happy + bad;

    if (total === 0) return 0;

    const percent = (happy / total) * 100;
    return Math.round(percent);
  }

  const satisfactionPercent = getSatisfactionPercent(
    doctor.happyComment,
    doctor.badComment
  );

  return (
    <div className="bg-white-100 border border-grey-200 py-6 px-4 xl:p-6 rounded-3xl mt-[48px]">
      <p className="text-black-400 text-[16px] px-2 xl:px-0">
        از میان {doctor.treatedPatients} کاربر که تحت درمان دکتر بهرام میرزایی
        قرار گرفته اند ، {doctor.recommendedByUsers} کاربر این پزشک را پیشنهاد
        می کنند.
      </p>
      <div className="flex xl:flex-row flex-col mt-6">
        <div className="xl:block flex justify-center">
          <ProgressRing percentage={satisfactionPercent} />
        </div>
        <div className="h-[168px] w-px bg-grey-200 mr-6 hidden xl:block"></div>
        <div className="bg-grey-200 h-px w-full my-6 block xl:hidden"></div>
        {/* ProgressBars */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-4 xl:pr-4 flex-col">
            <p className="text-grey-500 w-[200px] ">زمان انتظار در مطب</p>
            <ProgressBar percentage={doctor.waitingTime} />
          </div>
          <div className="flex gap-4 xl:pr-4 flex-col">
            <p className="text-grey-500 w-[200px] ">تشخیص درست</p>
            <ProgressBar percentage={doctor.correctDiagnosis} />
          </div>
          <div className="flex gap-4 xl:pr-4 flex-col">
            <p className="text-grey-500 w-[200px]">امکانات رفاهی</p>
            <ProgressBar percentage={doctor.facilities} />
          </div>
          <div className="flex gap-4 xl:pr-4 flex-col">
            <p className="text-grey-500 w-[200px]">نظافت مطب</p>
            <ProgressBar percentage={doctor.cleanliness} />
          </div>
          <div className="flex gap-4 xl:pr-4 flex-col">
            <p className="text-grey-500 w-[200px]">رفتار مناسب</p>
            <ProgressBar percentage={doctor.goodBehavior} />
          </div>
        </div>
      </div>
      <div className="my-6 h-px bg-grey-200"></div>
      <div className="flex flex-col gap-6 xl:flex-row">
        <p className="text-[16px] xl:text-[20px] flex-1 text-black-400">
          {satisfactionPercent + "%"} کاربر این پزشک را پیشنهاد می کنند.
        </p>
        <div className="flex justify-center xl:justify-start gap-2 text-2xl">
          {[...Array(emptyStars)].map((_, i) => (
            <span key={i} className="isax isax-star4 text-grey-500"></span>
          ))}
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="isax isax-star-15 text-yellow-500"></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarBox;

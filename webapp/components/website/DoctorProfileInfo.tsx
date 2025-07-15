import Image from "next/image";
import Link from "next/link";
import ProgressRing from "./ProgressRing";
import ProgressBar from "./ProgressBar";

interface DoctorProfileInfoProps {
  doctor: {
    id: number;
    name: string;
    image: string;
    rate: string;
    comment: string;
    services: string;
    specialization: string;
    city: string;
    workingHours: string;
    location: string;
    insurance: string;
    star: number;
    description: string;
    happyComment: number;
    badComment: number;
    locationLink: string;
    skills: string[];
    firstPhoneNumber: string;
    secandPhoneNumber: string;
    waitingTime: number;
    correctDiagnosis: number;
    facilities: number;
    cleanliness: number;
    goodBehavior: number;
    treatedPatients: number;
    recommendedByUsers: number;
    consultation: {
      title: string;
      date: string;
      time: string;
    }[];
  };
}

const DoctorProfileInfo: React.FC<DoctorProfileInfoProps> = ({ doctor }) => {
  const fullStars = Math.round(doctor.star);
  const emptyStars = 5 - fullStars;

  const comment: number = doctor.happyComment + doctor.badComment;

  // To get the percentage
  function getSatisfactionPercent(happy: number, bad: number): number {
    const total = happy + bad;

    if (total === 0) return 0;

    const percent = (happy / total) * 100;
    return Math.round(percent); 
  }

  const satisfactionPercent = getSatisfactionPercent(doctor.happyComment, doctor.badComment);
  

  return (
    <div className="flex flex-col xl:flex-1">
      <div className="flex gap-4">
        {/* Image */}
        <div className="rounded-full border p-2">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={178}
            height={178}
            className="rounded-full xl:size-[176px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium text-black-400">{doctor.name}</h2>
          <p className="text-[16px] text-grey-500">{doctor.specialization}</p>
          <p className="text-[16px] text-grey-500">{doctor.city}</p>
          <div className="flex gap-[68px]">
            <p className="text-[22px] font-medium text-black-400">
              کد نظام پزشکی: {doctor.id}
            </p>
            <div className="flex gap-2 text-2xl">
              {[...Array(emptyStars)].map((_, i) => (
                <span key={i} className="isax isax-star4 text-grey-500"></span>
              ))}
              {[...Array(fullStars)].map((_, i) => (
                <span
                  key={i}
                  className="isax isax-star-15 text-yellow-500"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Doctor about */}
      <div className="xl:mt-20 ">
        <div className="flex ">
          <h3 className="xl:text-[28px] font-medium text-black-400 flex xl:flex-1">
            درباره پزشک
          </h3>
          <div className="text-grey-500 xl:text-[16px] flex items-center gap-2">
            <span className="isax isax-like-1 text-primary-500 text-2xl"></span>
            <p>
              {doctor.happyComment} نفر از {comment} از پزشک راضی بوده اند
            </p>
          </div>
        </div>
        <p className="xl:mt-6 text-grey-500 xl:text-[16px] xl:leading-[144%]">
          {doctor.description}
        </p>
      </div>
      <div className="mt-10 flex items-center gap-2">
        <Image
          className="xl:size-10"
          src="/images/png-icons/health.png"
          width={40}
          height={40}
          alt="healthy icon"
        />
        <div className="text-[20px]">
          <span className="text-grey-400 ">تخصص پزشکی : </span>
          <span className="text-primary-500">{doctor.specialization}</span>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        {doctor.skills.map((skill, index) => (
          <div
            key={index}
            className="py-[5px] px-3 text-grey-500 rounded-[200px] text-sm border border-grey-500"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="bg-grey-200 h-px mt-10"></div>

      <div className="mt-10">
        <p className="text-[28px] text-black-400 font-medium mb-6">
          موقعیت مکانی مطب
        </p>
        <div className="flex gap-4">
          <Link
            className="px-[7.2px] py-2 border border-grey-500 rounded-[200px] cursor-pointer"
            href={doctor.locationLink}
          >
            <Image
              className="w-[144px] h-[240px]"
              alt="map"
              src="/images/map.png"
              width={144}
              height={240}
            />
          </Link>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-black-400">آدرس :</p>
            <p className="text-grey-500">{doctor.location}.</p>
            <div className="flex text-[20px] items-center">
              <p className="text-black-400">تلفن :</p>
              <span className="text-grey-500">
                {doctor.firstPhoneNumber} | {doctor.secandPhoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-grey-200 h-px"></div>
        <div className="mt-10">
          <p className="text-[28px] font-medium text-black-400">
            تجربیات کاربران
          </p>
          <p className="mt-10 text-grey-500">
            در ادامه می‌توانید تجربه مراجعه‌ی کاربران دیگر به دکتر {doctor.name}{" "}
            را بخوانید.در صورتی که شما هم از بیماران دکتر {doctor.name} بوده‌اید
            می‌توانید نظر خود را ثبت کنید.
          </p>
        </div>
        <div className="mt-8 justify-end flex">
          <Link
            href="#"
            className="cursor-pointer w-[157px] h-[48px] hidden text-white-500 bg-primary-500 rounded-lg px-3 xl:flex justify-center items-center"
          >
            <button className="flex cursor-pointer gap-2">
              <span className="text-[16px] font-medium">دریافت نوبت</span>
              <span className="isax isax-arrow-left text-2xl"></span>
            </button>
          </Link>
        </div>

        <div className="bg-white-100 border border-grey-200 p-6 rounded-3xl mt-[48px]">
          <p className="text-black-400 text-[16px]">
            از میان {doctor.treatedPatients} کاربر که تحت درمان دکتر بهرام
            میرزایی قرار گرفته اند ، {doctor.recommendedByUsers} کاربر این پزشک
            را پیشنهاد می کنند.
          </p>
          <div className="flex mt-6">
            <ProgressRing percentage={satisfactionPercent} />
            <div className="h-[168px] w-px bg-grey-200 mr-6"></div>
            {/* ProgressBars */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex gap-4 pr-4">
                <p className="text-grey-500 w-[200px] ">زمان انتظار در مطب</p>
                <ProgressBar percentage={doctor.waitingTime} />
              </div>
              <div className="flex gap-4 pr-4">
                <p className="text-grey-500 w-[200px] ">تشخیص درست</p>
                <ProgressBar percentage={doctor.correctDiagnosis} />
              </div>
              <div className="flex gap-4 pr-4">
                <p className="text-grey-500 w-[200px]">امکانات رفاهی</p>
                <ProgressBar percentage={doctor.facilities} />
              </div>
              <div className="flex gap-4 pr-4">
                <p className="text-grey-500 w-[200px]">نظافت مطب</p>
                <ProgressBar percentage={doctor.cleanliness} />
              </div>
              <div className="flex gap-4 pr-4">
                <p className="text-grey-500 w-[200px]">رفتار مناسب</p>
                <ProgressBar percentage={doctor.goodBehavior} />
              </div>
            </div>
          </div>
          <div className="my-6 h-px bg-grey-200"></div>
          <div className="flex">
            <p className="text-[20px] flex-1 text-black-400">
               {satisfactionPercent + "%"} کاربر این پزشک را پیشنهاد می کنند.
            </p>
            <div className="flex gap-2 text-2xl">
              {[...Array(emptyStars)].map((_, i) => (
                <span key={i} className="isax isax-star4 text-grey-500"></span>
              ))}
              {[...Array(fullStars)].map((_, i) => (
                <span
                  key={i}
                  className="isax isax-star-15 text-yellow-500"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileInfo;

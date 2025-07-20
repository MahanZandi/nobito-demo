import Image from "next/image";
import Link from "next/link";
import ProgressBarBox from "./ProgressBarBox";
import DoctorVisitType from "./DoctorVisitType";
import DoctorComments from "./DoctorComments";

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
    comments: {
      id: number;
      name: string;
      star: number;
      date: string;
      comment: string;
      suggest: boolean;
      image: string;
      waitingTime: string;
      takeTurns: {
        title: string;
        icon: string;
      };
    }[];
  };
}

const DoctorProfileInfo: React.FC<DoctorProfileInfoProps> = ({ doctor }) => {
  const fullStars = Math.round(doctor.star);
  const emptyStars = 5 - fullStars;

  const comment: number = doctor.happyComment + doctor.badComment;

  // small components
  const DoctorInfo = () => {
    return (
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
    );
  };

  const DoctorSkills = () => {
    return (
      <>
        <div className="mt-10 xl:flex items-center gap-2">
          <Image
            className="xl:size-10"
            src="/images/png-icons/health.png"
            width={40}
            height={40}
            alt="healthy icon"
          />
          <div className="text-[20px]">
            <span className="text-grey-400 ">تخصص پزشکی : </span>
            <span className="text-primary-500 font-medium">
              {doctor.specialization}
            </span>
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
      </>
    );
  };

  const DoctorLocation = () => {
    return (
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
      </div>
    );
  };

  return (
    <div className="flex flex-col xl:flex-1">
      <div className="flex items-center xl:items-start xl:flex-row flex-col gap-4">
        {/* Image */}
        <div className="rounded-full size-[128px] xl:size-[192px] flex justify-center items-center border p-2">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={178}
            height={178}
            className="rounded-full size-[112px] xl:size-[176px] object-cover"
          />
        </div>

        <div className="flex items-center xl:items-start flex-col gap-6">
          <h2 className="xl:text-2xl text-[20px] font-medium text-black-400">
            {doctor.name}{" "}
            <span className="text-grey-500 text-sm xl:hidden">
              ({doctor.specialization})
            </span>
          </h2>

          <h2 className="text-[16px] text-grey-500 xl:block hidden">
            {doctor.specialization}
          </h2>
          <p className="text-[16px] font-medium text-black-400 xl:hidden">
            {/* doctor id mobile view */}
            کد نظام پزشکی: {doctor.id}
          </p>
          <p className="text-[20px] xl:text-[16px] text-grey-500">
            {doctor.city}
          </p>
          <div className="flex xl:gap-[68px]">
            <p className="text-[22px] font-medium text-black-400 hidden xl:block">
              {/* doctor id desktop view */}
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
      {/* Doctor about component desktop view*/}
      <div className="xl:block hidden">
        <DoctorInfo />
      </div>
      {/* Doctor skills component desktop view*/}
      <div className="hidden xl:block">
        <DoctorSkills />
      </div>
      <div className="bg-grey-200 h-px mt-10 xl:block hidden"></div>
      <div className="xl:block hidden">
        <DoctorLocation />
        <ProgressBarBox doctor={doctor} />
        <DoctorComments comments={doctor.comments} />
      </div>
      <div className="xl:hidden my-6">
        <DoctorVisitType />
      </div>
    </div>
  );
};

export default DoctorProfileInfo;

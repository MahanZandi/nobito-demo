import Image from "next/image";
import Link from "next/link";

const medicalFileData = {
  name: "سیاوش ایرانی",
  profileImage: "",
  phoneNumber: 9876543211,
  typeOfIllness: "عمل جراحی قلب باز",
  date: "1404/2/2",
  patientHistory:
    "بیمار، که اخیراً عمل جراحی قلب باز داشته است، در حال حاضر در دوره بهبودی قرار دارد. عمل جراحی به منظور رفع مشکلات قلبی و بهبود عملکرد قلب انجام شد. پزشکان و تیم درمانی با دقت به جزئیات بیماری فعلی و تاریخچه پزشکی بیمار پرداخته و اقدامات لازم را انجام داده‌اند. بیمار در حال مراقبت‌های پساعملایی است و تحت نظر پزشکان و پرسنل متخصص بهبودی خود را طی می‌کند. در این دوران حیاتی، اهمیت نظارت مستمر بر علایم و عملکرد قلب، مدیریت درد، و حفظ سلامتی عمومی بیمار بسیار مهم است. برای اطمینان از بهبودی بهتر و پایدار، بیمار نیاز به رعایت دقیق توصیه‌های پزشک، داروها و توجه به علایم و نشانه‌هایی مثل تغییرات در ضربان قلب، کمبود نفس یا درد ناگهانی دارد. تیم درمانی در تمامی مراحل در کنار بیمار است تا حمایت لازم را فراهم کرده و به او کمک کند تا به سرعت و به نحو امن به شفا برسد.",
  patientHistoryTitles: [
    "آنژوگرافی",
    "جراحی قلب",
    "تست ورزش",
    "مصرف دارو روزانه",
  ],
  useOfMedications: [
    {
      doctorName: "علی رضایی",
      medications: ["پرپرانوال", "آربیکور", "روپیکسون", "الپیدو"],
      date: "1404/2/2",
    },
    {
      doctorName: "علی رضایی",
      medications: ["پرپرانوال", "آربیکور", "روپیکسون", "الپیدو"],
      date: "1404/2/2",
    },
    {
      doctorName: "علی رضایی",
      medications: ["پرپرانوال", "آربیکور", "روپیکسون", "الپیدو"],
      date: "1404/2/2",
    },
  ],
  medicalExamination: [
    {
      title: "تست ورزش",
      date: "1404/2/1",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان لازم است، و برای شرایط فعلی  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،",
      link: "#",
    },
    {
      title: "تست ورزش",
      date: "1404/2/1",
      description:
        "تست ورزش برای ارزیابی عملکرد قلب در شرایط فعالیت بدنی انجام می‌شود و به پزشک کمک می‌کند تا میزان تحمل قلب بیمار را بررسی کند.",
      link: "#",
    },
    {
      title: "تست ورزش",
      date: "1404/2/1",
      description:
        "تست ورزش برای ارزیابی عملکرد قلب در شرایط فعالیت بدنی انجام می‌شود و به پزشک کمک می‌کند تا میزان تحمل قلب بیمار را بررسی کند.",
      link: "#",
    },
    {
      title: "تست ورزش",
      date: "1404/2/1",
      description:
        "تست ورزش برای ارزیابی عملکرد قلب در شرایط فعالیت بدنی انجام می‌شود و به پزشک کمک می‌کند تا میزان تحمل قلب بیمار را بررسی کند.",
      link: "#",
    },
  ],
};

const MedicalFile = () => {
  return (
    <div className="w-full">
      <div className="px-3 py-6 xl:p-6 rounded-2xl xl:rounded-4xl border border-grey-200 bg-white xl:max-w-[780px] 2xl:max-w-[1000px]">
        <div className="flex justify-between">
          <div className="flex xl:items-start items-center w-full flex-col gap-3 xl:gap-4">
            <Image
              src={medicalFileData.profileImage || "/images/doctor-7.jpeg"}
              width={64}
              height={64}
              alt="profile image"
              className="rounded-full size-[126px] xl:hidden bg-grey-50 object-contain mb-3"
            />
            <span className="text-xl font-medium">{medicalFileData.name}</span>
            <span className="text-grey-400 text-[16px]">
              {medicalFileData.phoneNumber}
            </span>
            <span className="text-grey-400 text-[16px]">
              {medicalFileData.typeOfIllness}
            </span>
          </div>
          <div className="text-grey-400 text-[16px] xl:flex xl:w-full xl:justify-end hidden">
            ویرایش شده در {medicalFileData.date}
          </div>
        </div>
        <div className="h-px bg-grey-200 w-full mt-10 mb-12 xl:block hidden"></div>

        <div className="flex flex-col gap-8 mt-6 xl:mt-0">
          <span className="text-black-400 font-medium xl:font-bold text-[22px] xl:text-2xl">
            شرح حال بیمار:
          </span>
          <p className="text-grey-500 text-xs xl:text-[16px]">
            {medicalFileData.patientHistory}
          </p>
        </div>
        <div className="h-px bg-grey-200 w-full mt-6"></div>
        <div className="flex flex-col gap-6 xl:gap-8">
          <span className="text-black-400 font-medium xl:font-bold text-[22px] xl:text-2xl mt-6 xl:mt-12">
            سابقه بیماری:
          </span>
          <div className="flex flex-wrap gap-4">
            {medicalFileData.patientHistoryTitles.map((title, index) => (
              <span
                key={index}
                className="text-primary-500 text-[16px] rounded-[48px] border border-primary-500 h-[38px] flex items-center px-4"
              >
                {title}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-black-400 font-medium xl:font-bold text-[22px] xl:text-2xl xl:mt-4">
              دارو های در حال مصرف:
            </span>
            <div className="flex flex-col gap-4">
              {medicalFileData.useOfMedications.map((data, index) => (
                <div
                  className="xl:h-14 w-full border border-grey-300 rounded-xl p-3 xl:px-6 flex flex-col xl:flex-row xl:items-center justify-between"
                  key={index}
                >
                  <div className="flex flex-col-reverse xl:flex-row gap-4 text-black-400 text-[14px] xl:text-[16px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/images/png-icons/health.png"
                        width={32}
                        height={32}
                        alt="health icon xl:size-[32px] size-[24px] object-contain"
                      />
                      <div> پزشک : {data.doctorName}</div>
                    </div>
                    <div className="flex">
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/png-icons/medicationsIcon.png"
                          width={32}
                          height={32}
                          alt="medications icon xl:size-[32px] size-[24px] object-contain"
                        />
                        <div> داروها : {data.medications.join("/ ")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-grey-400 w-full xl:w-auto flex justify-end xl:inline text-xs xl:text-sm">
                    {data.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 xl:mt-4 xl:mb-8">
              <span className="text-black-400 font-medium xl:font-bold text-[22px] xl:text-2xl ">
                آزمایشات:
              </span>
              <div className="xl:overflow-x-auto xl:overflow-y-hidden scrollbar-thin">
                <div className="flex flex-col xl:flex-row gap-6 xl:w-max">
                  {medicalFileData.medicalExamination.map((data, index) => (
                    <div
                      key={index}
                      className="border bg-white xl:w-[395px]  xl:h-[203px] border-grey-200 rounded-2xl p-4 shrink-0"
                    >
                      <div className="flex justify-between">
                        <span className="text-black-400 font-bold text-[16px]">
                          {data.title}
                        </span>
                        <span className="text-[12px] text-grey-400">
                          {data.date}
                        </span>
                      </div>
                      <p className="pt-6 leading-[144%] text-xs line-clamp-4 text-grey-400">
                        {data.description}
                      </p>
                      <div className="flex pt-6 justify-end xl:h-auto ">
                        <Link
                          href={data.link}
                          className="text-black-400 flex items-center gap-2"
                        >
                          <span className="text-xs">جواب آزمایش</span>
                          <span className="isax isax-arrow-left text-2xl "></span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalFile;

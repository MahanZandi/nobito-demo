import Image from "next/image";
import CallHistoryList from "@/components/website/CallHistoryList";
import Link from "next/link";

const onlineAppointmentsData = [
  {
    id: 1,
    name: "دکتر سارا رضایی",
    speciality: "متخصص قلب و عروق",
    day: "سه‌شنبه ۱۰:۰۰",
    date: "1402/09/01",
    description:
      "دکتر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است. تر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است.  تر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است. ",
    link: "#",
    image: "/images/doctor-4.jpeg",
    rate: "4.8/5",
  },
  {
    id: 2,
    name: "دکتر سارا احمدی",
    speciality: "متخصص مغز و اعصاب کودکان",
    day: "پنج‌شنبه ۱۴:۳۰",
    date: "1402/09/03",
    description:
      "دکتر احمدی در زمینه درمان بیماری‌های عصبی کودکان تخصص دارد. او با رویکردی دلسوزانه و علمی به کودکان و خانواده‌هایشان خدمات ارائه می‌دهد. همکاری با تیم‌های توانبخشی و استفاده از روش‌های نوین درمانی از ویژگی‌های حرفه‌ای ایشان است. بیماران از کیفیت درمان و توجه ایشان رضایت دارند.",
    link: "#",
    image: "/images/doctor-9.png",
    rate: "4.9/5",
  },
  {
    id: 3,
    name: "دکتر علی کریمی",
    speciality: "جراح ارتوپد",
    day: "شنبه ۱۶:۰۰",
    date: "1402/09/05",
    description:
      "دکتر کریمی متخصص جراحی استخوان و مفاصل است و در درمان شکستگی‌ها و بیماری‌های ارتوپدی تجربه بالایی دارد. او با بهره‌گیری از تکنولوژی‌های روز دنیا و همکاری با مراکز درمانی معتبر، خدمات تخصصی ارائه می‌دهد. اخلاق حرفه‌ای و دقت در تشخیص از ویژگی‌های بارز ایشان است.",
    link: "#",
    image: "/images/doctor-2.jpeg",
    rate: "4.7/5",
  },
  {
    id: 4,
    name: "دکتر مهدی عباسی",
    speciality: "متخصص داخلی",
    day: "یکشنبه ۱۱:۳۰",
    date: "1402/09/07",
    description:
      "دکتر عباسی با بیش از ۱۰ سال سابقه در درمان بیماری‌های داخلی فعالیت دارد. او در زمینه تشخیص و درمان بیماری‌های مزمن و حاد تخصص دارد و بیماران زیادی را با موفقیت درمان کرده است. توجه به نیازهای بیماران و پیگیری درمان از ویژگی‌های حرفه‌ای ایشان است.",
    link: "#",
    image: "/images/doctor-3.jpeg",
    rate: "4.6/5",
  },
  {
    id: 5,
    name: "دکتر نرگس موسوی",
    speciality: "متخصص زنان و زایمان",
    day: "دوشنبه ۱۳:۰۰",
    date: "1402/09/09",
    description:
      "دکتر موسوی در زمینه سلامت زنان و زایمان تخصص دارد و با رویکردی علمی و انسانی به بیماران خدمات ارائه می‌دهد. او در مراکز درمانی معتبر کشور فعالیت داشته و بیماران زیادی را با موفقیت درمان کرده است. اخلاق حرفه‌ای و دقت در درمان از ویژگی‌های بارز ایشان است.",
    link: "#",
    image: "/images/doctor-4.jpeg",
    rate: "4.7/5",
  },
  {
    id: 6,
    name: "دکتر حمید شریفی",
    speciality: "متخصص پوست و مو",
    day: "چهارشنبه ۱۵:۳۰",
    date: "1402/09/11",
    description:
      "دکتر شریفی با بیش از ۱۲ سال سابقه در درمان بیماری‌های پوست و مو فعالیت دارد. او با استفاده از روش‌های نوین درمانی و تجهیزات پیشرفته، خدمات تخصصی ارائه می‌دهد. بیماران از کیفیت درمان و توجه ایشان رضایت دارند و اخلاق حرفه‌ای ایشان زبانزد است.",
    link: "#",
    image: "/images/doctor-5.jpeg",
    rate: "4.8/5",
  },
];

const ongoingMeeting = {
  id: 1,
  name: "دکتر سارا رضایی",
  speciality: "متخصص قلب و عروق",
  visitTime: 30,
  day: "سه‌شنبه ۱۰:۰۰",
  date: "1402/09/01",
  description:
    "دکتر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است. تر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است.  تر رضایی با بیش از ۱۵ سال سابقه در درمان بیماری‌های قلبی فعالیت دارد. او در مراکز درمانی معتبر کشور مشغول به کار بوده و بیماران زیادی را با موفقیت درمان کرده است. رویکرد علمی و اخلاق حرفه‌ای ایشان باعث رضایت بیماران شده است. همچنین در زمینه آموزش و پژوهش نیز فعال است. ",
  link: "#",
  image: "/images/doctor-4.jpeg",
  rate: "4.8/5",
};

const OnlineAppointments = () => {
  return (
    <>
      <div className="xl:mt-10 mt-14">
        {ongoingMeeting && (
          <>
            <Image
              className="w-full h-[591px] lg:h-[450px] xl:h-[248px] absolute mt-[56px] xl:mt-[85px] -z-10 object-cover"
              src="/banner.png"
              alt="banner"
              width={1440}
              height={248}
            />
            <div className="container">
              <div className="bg-white rounded-4xl py-6 px-4 xl:p-6 border border-grey-200">
                <div className="flex xl:flex-row flex-col gap-5 justify-between">
                  <div className="flex xl:flex-row flex-col xl:text-start text-center items-center gap-4">
                    <Image
                      className="xl:size-[96px] size-[80px] object-cover rounded-full"
                      src={ongoingMeeting.image}
                      alt={ongoingMeeting.name}
                      width={96}
                      height={96}
                    />
                    <div className="flex flex-col gap-2 xl:gap-4">
                      <span className="text-[16px] xl:text-[22px] font-medium text-black-400">
                        {ongoingMeeting.name}
                      </span>
                      <span className="text-grey-500 xl:text-[16px]">
                        {ongoingMeeting.speciality}
                      </span>
                    </div>
                  </div>
                  <div className="flex-col gap-2 text-center xl:text-start flex text-black-500">
                    <div className="flex justify-center xl:justify-end gap-2">
                      <span className="relative flex items-center justify-center">
                        <span className="absolute w-4 h-4 bg-error-50 rounded-full animate-ping"></span>
                        <span className="w-2 h-2 bg-error-500 rounded-full"></span>
                      </span>
                      <div className="flex gap-0.5">
                        <span>{ongoingMeeting.visitTime}</span>
                        <span>دقیقه</span>
                      </div>
                    </div>
                    <div>
                      {ongoingMeeting.day} | {ongoingMeeting.date}
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-grey-200 my-4 xl:my-6"></div>
                <div className="flex flex-col gap-4">
                  <span className="text-black-500 text-xl">توضیحات :</span>
                  <span className="text-grey-400 xl:text-[16px] leading-[155%]">
                    {ongoingMeeting.description}
                  </span>
                </div>
                <div className="w-full h-px bg-grey-200 my-4 xl:my-6"></div>
                <div className="xl:flex-row flex flex-col items-center gap-4 justify-between">
                  <p className="text-primary-500 xl:text-[16px]">
                    کاربر عزیز لطفا 5 دقیقه قبل از جلسه در جلسه حاضر باشید
                  </p>
                  <Link
                    className="bg-primary-500 cursor-pointer text-white-500 font-medium text-[16px] rounded-lg flex w-full xl:w-auto h-10 xl:px-8 xl:h-12 items-center justify-center"
                    href="#"
                  >
                    <button className="cursor-pointer">ورود یه جلسه</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="my-[64px] xl:my-[144px] container">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold lg:text-[32px] lg:font-medium text-grey-500 flex items-center gap-1">
            <span className="text-primary-500">تاریخچه</span>
            <span>مشاوره تلفنی</span>
          </h2>
          <div className="h-px lg:bg-grey-200 flex-1"></div>
        </div>
        <CallHistoryList callHistoryData={onlineAppointmentsData} />
      </div>
    </>
  );
};

export default OnlineAppointments;

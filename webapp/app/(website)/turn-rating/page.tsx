import TurnRatingSearchBox from "@/components/website/TurnRatingSearchBox";
import TurnRatingDoctorCard from "@/components/website/TurnRatingDoctorCard";
import TurnRatingFilterCard from "@/components/website/TurnRatingFilterCard";
import Footer from "@/components/website/Footer";

const doctors = [
  {
    id: 1,
    name: "محمد میرزایی",
    image: "/images/doctor-9.png",
    rate: "4/5",
    comment: "360 نظر",
    services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    takeTurns: [
      {
        title: "گفتگو تلفنی",
        icon: "isax isax-call-calling",
      },
      {
        title: "جلسه آنلاین",
        icon: "isax isax-monitor-mobbile",
      },
      {
        title: "ویزیت حضوری",
        icon: "isax isax-buliding",
      },
    ],
    specialization: "متخصص قلب و عروق",
    happyPatients: "2374",
    successfulTurn: "1222",
    happyPatientsPercentage: "97%",
    skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    city: "تهران",
    features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
    workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
    location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
  },

  {
    id: 2,
    name: "علی میرزایی",
    image: "/images/doctor-2.jpeg",
    rate: "4/5",
    comment: "360 نظر",
    services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    takeTurns: [
      {
        title: "گفتگو تلفنی",
        icon: "isax isax-call-calling",
      },
      {
        title: "جلسه آنلاین",
        icon: "isax isax-monitor-mobbile",
      },
      {
        title: "ویزیت حضوری",
        icon: "isax isax-buliding",
      },
    ],
    specialization: "متخصص قلب و عروق",
    happyPatients: "2374",
    successfulTurn: "1222",
    happyPatientsPercentage: "97%",
    skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    city: "تهران",
    features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
    workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
    location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
  },
  {
    id: 3,
    name: "بهرام میرزایی",
    image: "/images/doctor-10.png",
    rate: "4/5",
    comment: "360 نظر",
    services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    takeTurns: [
      {
        title: "گفتگو تلفنی",
        icon: "isax isax-call-calling",
      },
      {
        title: "جلسه آنلاین",
        icon: "isax isax-monitor-mobbile",
      },
      {
        title: "ویزیت حضوری",
        icon: "isax isax-buliding",
      },
    ],
    specialization: "متخصص قلب و عروق",
    happyPatients: "2374",
    successfulTurn: "1222",
    happyPatientsPercentage: "97%",
    skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    city: "تهران",
    features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
    workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
    location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
  },
  {
    id: 4,
    name: "بهرام میرزایی",
    image: "/images/doctor-8.png",
    rate: "4/5",
    comment: "360 نظر",
    services: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    takeTurns: [
      {
        title: "گفتگو تلفنی",
        icon: "isax isax-call-calling",
      },
      {
        title: "جلسه آنلاین",
        icon: "isax isax-monitor-mobbile",
      },
      {
        title: "ویزیت حضوری",
        icon: "isax isax-buliding",
      },
    ],
    specialization: "متخصص قلب و عروق",
    happyPatients: "2374",
    successfulTurn: "1222",
    happyPatientsPercentage: "97%",
    skills: ["جراحی قلب", "آنجوگرافی", "تست ورزش"],
    city: "تهران",
    features: ["سالن انتظار", "آسانسور", "پارکینگ", "تخت بیمار"],
    workingHours: "شنبه تا چهارشنبه 9صبح تا 6 عصر",
    location: "تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم",
  },
];

const sortOptions = [
  { title: "محبوب ترین ها" },
  { title: "بیشترین امتیاز" },
  { title: "سریع ترین نوبت" },
  { title: "کم ترین معطلی در مطب" },
];

const filterExpertise = [
  {title: "جراحی قلب"},
  {title: "آنجوگرافی"},
  {title: "تست ورزش"},
  {title: "فیزیوتراپی"},
  {title: "روانشناسی"},
  {title: "متخصص مغز و اعصاب"},
  {title: "داخلی"},
  {title: "پوست و مو"},
  {title: "ارتوپدی"},
  {title: "گوارش"},
  {title: "اطفال"},
  {title: "چشم پزشکی"},
  {title: "گوش و حلق و بینی"},
  {title: "زنان و زایمان"}
]

const TurnRating = () => {
  return (
    <>
      <div className="xl:container">
        <div className="xl:py-[48px]">
          <TurnRatingSearchBox searchData={doctors} />
        </div>
        <div className="xl:flex gap-6">
          <TurnRatingFilterCard filterExpertise={filterExpertise} />
          <TurnRatingDoctorCard sortOptions={sortOptions} doctors={doctors} />
        </div>
      </div>
      <div className="pt-[36px] xl:pt-[72px]">
        <Footer />
      </div>
    </>
  );
};

export default TurnRating;

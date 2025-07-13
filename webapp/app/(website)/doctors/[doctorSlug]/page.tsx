import DoctorProfileInfo from "@/components/website/DoctorProfileInfo";
import { notFound } from "next/navigation";

const doctors = [
  {
    id: 1,
    name: "محمد میرزایی",
    image: "/images/doctor-10.png",
    slug: "mohammad-mirzaei",
    rate: "4.7/5",
    star: 3.3,
    locationLink: "https://www.google.com/maps?q=location",
    comment: "420 نظر",
    happyComment: 390,
    badComment: 30,
    services: "جراحی مغز",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "جراح مغز و اعصاب",
    happyPatients: "3120",
    successfulTurn: "1980",
    happyPatientsPercentage: "95%",
    skills: ["برداشتن تومور مغزی", "درمان صرع", "میکروجراحی"],
    city: "تبریز",
    features: ["پارکینگ", "آسانسور", "تخت بیمار", "کافه بیمارستان"],
    workingHours: "یکشنبه تا چهارشنبه 10 صبح تا 4 عصر",
    location: "چهارراه شریعتی - خیابان شمس تبریزی",
    insurance: "بیمه ایران",
    gender: "male",
    description: `دکتر محمد میرزایی جراح مغز و اعصاب با بیش از ۱۵ سال سابقه فعالیت تخصصی در زمینه جراحی‌های پیچیده مغز و ستون فقرات است. ایشان در درمان انواع تومورهای مغزی، صرع و انجام میکروجراحی‌های پیشرفته تخصص دارد. دکتر میرزایی با بهره‌گیری از جدیدترین تکنولوژی‌های پزشکی، موفق به انجام بیش از ۳۰۰۰ عمل موفق شده است. بیماران ایشان از دقت، مهارت و اخلاق حرفه‌ای وی رضایت بالایی دارند. همکاری با مراکز درمانی معتبر و ارائه مشاوره تخصصی از دیگر ویژگی‌های حرفه‌ای ایشان است. دکتر میرزایی همواره در تلاش برای ارتقای سطح سلامت بیماران و آموزش به کادر درمانی می‌باشد.`,
    firstPhoneNumber: "09120000001",
    secandPhoneNumber: "09120000002"
  },

  {
    id: 2,
    name: "علی رضایی",
    image: "/images/doctor-2.jpeg",
    slug: "ali-rezaei",
    rate: "4.2/5",
    star: 3.5,
    locationLink: "https://www.google.com/maps?q=location",
    comment: "280 نظر",
    happyComment: 250,
    badComment: 30,
    services: "درمان ام‌اس",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "نورولوژیست",
    happyPatients: "1740",
    successfulTurn: "890",
    happyPatientsPercentage: "92%",
    skills: ["درمان سکته مغزی", "ام‌اس", "اختلالات خواب"],
    city: "تهران",
    features: ["سالن انتظار", "پارکینگ", "دستیار پزشکی"],
    workingHours: "شنبه تا سه‌شنبه 9 صبح تا 5 عصر",
    location: "بلوار کشاورز - خیابان حجاب - پلاک ۲۰",
    insurance: "بیمه نوین",
    gender: "male",
    description: `دکتر علی رضایی متخصص نورولوژی با تجربه‌ای بیش از ۱۰ سال در درمان بیماری‌های مغز و اعصاب فعالیت دارد. ایشان در زمینه درمان ام‌اس، سکته مغزی و اختلالات خواب تخصص ویژه‌ای دارد و با رویکردی علمی و انسانی به بیماران خود خدمات ارائه می‌دهد. دکتر رضایی با شرکت در دوره‌های بین‌المللی و همکاری با مراکز درمانی معتبر، همواره دانش خود را به‌روز نگه می‌دارد. بیماران ایشان از دقت، صبر و توجه به جزئیات درمانی رضایت بالایی دارند. وی در آموزش و ارتقای سطح سلامت جامعه نیز فعال است و مقالات علمی متعددی منتشر کرده است.`,
    firstPhoneNumber: "09120000003",
    secandPhoneNumber: "09120000004"
  },

  {
    id: 3,
    name: "سارا احمدی",
    image: "/images/doctor-9.png",
    slug: "sara-ahmadi",
    rate: "4.9/5",
    star: 4.2,
    comment: "510 نظر",
    locationLink: "https://www.google.com/maps?q=location",
    happyComment: 500,
    badComment: 10,
    services: "بیماری‌های حرکتی",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "متخصص مغز و اعصاب کودکان",
    happyPatients: "2890",
    successfulTurn: "1750",
    happyPatientsPercentage: "98%",
    skills: ["فلج مغزی", "تشنج در کودکان", "درمان اختلال یادگیری"],
    city: "شیراز",
    features: ["آسانسور", "بازی‌درمانگر", "اتاق کودک"],
    workingHours: "دوشنبه و چهارشنبه 8 صبح تا 2 بعدازظهر",
    location: "خیابان قصردشت - کوچه ۱۵ - ساختمان سلامت",
    insurance: "بیمه البرز",
    gender: "female",
    description: `دکتر سارا احمدی متخصص مغز و اعصاب کودکان با بیش از ۱۲ سال سابقه درمان بیماری‌های حرکتی و عصبی در کودکان است. ایشان در زمینه درمان فلج مغزی، تشنج و اختلالات یادگیری تخصص دارد و با رویکردی دلسوزانه و علمی به کودکان و خانواده‌هایشان خدمات ارائه می‌دهد. دکتر احمدی با استفاده از روش‌های نوین درمانی و همکاری با تیم‌های توانبخشی، موفق به بهبود وضعیت بسیاری از بیماران شده است. وی در آموزش والدین و ارتقای سطح آگاهی جامعه نقش فعالی دارد و همواره در تلاش برای بهبود کیفیت زندگی کودکان می‌باشد.`,
    firstPhoneNumber: "09120000005",
    secandPhoneNumber: "09120000006"
  },

  {
    id: 4,
    name: "مینا کریمی",
    image: "/images/doctor-9.png",
    slug: "mina-karimi",
    rate: "4.6/5",
    star: 3.7,
    comment: "330 نظر",
    locationLink: "https://www.google.com/maps?q=location",
    happyComment: 310,
    badComment: 20,
    services: "درمان سکته مغزی",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "متخصص نورولوژی و سکته مغزی",
    happyPatients: "2460",
    successfulTurn: "1300",
    happyPatientsPercentage: "94%",
    skills: ["آزمایش نوار مغز", "سونوگرافی مغز", "فیزیوتراپی سکته"],
    city: "رشت",
    features: ["تخت بیمار", "پارکینگ", "سالن انتظار", "وای‌فای رایگان"],
    workingHours: "شنبه تا چهارشنبه 11 صبح تا 7 عصر",
    location: "میدان شهرداری - ابتدای خیابان سعدی - پلاک ۴۸",
    insurance: "بیمه سامان",
    gender: "female",
    description: `دکتر مینا کریمی متخصص نورولوژی و درمان سکته مغزی با بیش از ۱۳ سال سابقه فعالیت در مراکز درمانی معتبر است. ایشان در زمینه آزمایش نوار مغز، سونوگرافی مغز و فیزیوتراپی بیماران سکته مغزی تخصص دارد. دکتر کریمی با رویکردی علمی و انسانی، بیماران را در مسیر درمان و توانبخشی همراهی می‌کند. وی با ارائه مشاوره‌های تخصصی و همکاری با تیم‌های پزشکی، موفق به بهبود وضعیت بسیاری از بیماران شده است. اخلاق حرفه‌ای، دقت در تشخیص و توجه به نیازهای بیماران از ویژگی‌های بارز ایشان است.`,
    firstPhoneNumber: "09120000007",
    secandPhoneNumber: "09120000008"
  },
];

interface DoctorProfilePageProps {
  params: {
    doctorSlug: string;
  };
}

const DoctorProfilePage: React.FC<DoctorProfilePageProps> = async ({ params }) => {
  const { doctorSlug } = params;

  const doctor = doctors.find((d) => d.slug === doctorSlug);
  if (!doctor) return notFound();

  return (
    <div className="container flex xl:gap-8 xl:flex-row xl:mt-12 mt-6">
      <DoctorProfileInfo doctor={doctor} />
      <div className="bg-white xl:w-[520px] h-[1003px]"></div>
    </div>
  );
};

export default DoctorProfilePage;

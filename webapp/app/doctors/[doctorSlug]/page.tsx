import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "محمد میرزایی",
    image: "/images/doctor-10.png",
    slug: "mohammad-mirzaei",
    rate: "4.7/5",
    comment: "420 نظر",
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
  },

  {
    id: 2,
    name: "علی رضایی",
    image: "/images/doctor-2.jpeg",
    slug: "ali-rezaei",
    rate: "4.2/5",
    comment: "280 نظر",
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
  },

  {
    id: 3,
    name: "سارا احمدی",
    image: "/images/doctor-9.png",
    slug: "sara-ahmadi",
    rate: "4.9/5",
    comment: "510 نظر",
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
  },

  {
    id: 4,
    name: "مینا کریمی",
    image: "/images/doctor-9.png",
    slug: "mina-karimi",
    rate: "4.6/5",
    comment: "330 نظر",
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
  },
];

interface DoctorProfilePageProps {
  params: {
    doctorSlug: string;
  };
}

const DoctorProfilePage: React.FC<DoctorProfilePageProps> = ({ params }) => {
  const { doctorSlug } = params;

  const doctor = doctors.find((d) => d.slug === doctorSlug);

  return (
    <div>
      <h1>Doctor Profile</h1>
      {doctor && (
        <div>
          <h2>{doctor.name}</h2>
          <p>Rate: {doctor.rate}</p>
          <p>Comment: {doctor.comment}</p>
          <p>Services: {doctor.services}</p>
          <p>Specialization: {doctor.specialization}</p>
          <p>City: {doctor.city}</p>
          <p>Working Hours: {doctor.workingHours}</p>
          <p>Location: {doctor.location}</p>
          <p>Insurance: {doctor.insurance}</p>
        </div>
      )}
    </div>
  );
};

export default DoctorProfilePage;

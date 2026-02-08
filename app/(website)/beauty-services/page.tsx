import PageSearchBox from "@/components/website/PageSearchBox";
import BeautyServicesHero from "@/components/website/BeautyServicesHero";
import BeautyServiceList from "@/components/website/BeautyServiceList";
import ClinicsLists from "@/components/website/ClinicsLists";
import OnSiteTesting from "@/components/website/OnSiteTesting";
import HomePatientFeedBack from "@/components/website/HomePatientFeedBack";
import Image from "next/image";

const beautyClinicDiscounts = [
  {
    id: 1,
    title: "مزوتراپی",
    image: "/images/beauty-service-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "لیزر موهای زائد",
    image: "/images/beauty-service-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "جوان سازی پوست",
    image: "/images/beauty-service-3.png",
    link: "#",
  },
  {
    id: 4,
    title: "لیفت صورت",
    image: "/images/beauty-service-4.png",
    link: "#",
  },
  {
    id: 5,
    title: "برداشتن غبغب",
    image: "/images/beauty-service-5.png",
    link: "#",
  },
  {
    id: 6,
    title: "لاغری موضعی",
    image: "/images/beauty-service-6.png",
    link: "#",
  },
  {
    id: 7,
    title: "برداشتن میخچه",
    image: "/images/beauty-service-7.png",
    link: "#",
  },
  {
    id: 8,
    title: "لیزر موهای زائد",
    image: "/images/beauty-service-2.png",
    link: "#",
  },
  {
    id: 9,
    title: "جوان سازی پوست",
    image: "/images/beauty-service-3.png",
    link: "#",
  },
  {
    id: 10,
    title: "لیفت صورت",
    image: "/images/beauty-service-4.png",
    link: "#",
  },
  {
    id: 11,
    title: "برداشتن غبغب",
    image: "/images/beauty-service-5.png",
    link: "#",
  },
  {
    id: 12,
    title: "لاغری موضعی",
    image: "/images/beauty-service-6.png",
    link: "#",
  },
  {
    id: 13,
    title: "برداشتن میخچه",
    image: "/images/beauty-service-7.png",
    link: "#",
  },
  {
    id: 14,
    title: "لیفت صورت",
    image: "/images/beauty-service-4.png",
    link: "#",
  },
  {
    id: 15,
    title: "برداشتن غبغب",
    image: "/images/beauty-service-5.png",
    link: "#",
  },
  {
    id: 16,
    title: "لاغری موضعی",
    image: "/images/beauty-service-6.png",
    link: "#",
  },
  {
    id: 17,
    title: "برداشتن میخچه",
    image: "/images/beauty-service-7.png",
    link: "#",
  },
  {
    id: 18,
    title: "لیزر موهای زائد",
    image: "/images/beauty-service-2.png",
    link: "#",
  },
  {
    id: 19,
    title: "جوان سازی پوست",
    image: "/images/beauty-service-3.png",
    link: "#",
  },
  {
    id: 20,
    title: "لیفت صورت",
    image: "/images/beauty-service-4.png",
    link: "#",
  },
];

const beautyClinics = [
  {
    title: "جوانسازی گردن با مزوژل برند پروایج (1 جلسه) دکتر شیما میرشاهی",
    image: "/images/beauty-clinic-1.png",
    clinicName: "کلینیک میرشاهی",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
  {
    title: "پاکسازی و میکرودرم صورت (جلسه اول) کلینیک پوست آریا",
    image: "/images/beauty-clinic-2.png",
    clinicName: "کلینیک پوست آریا",
    previousPrice: 2800000,
    price: 2240000,
    discount: 20,
    location: "نشانی: تهران - خیابان کریم‌خان - پلاک 45",
  },
  {
    title: "تزریق بوتاکس برای خطوط پیشانی (0.5 واحد) دکتر نادری",
    image: "/images/beauty-clinic-3.png",
    clinicName: "مرکز زیبایی نادری",
    previousPrice: 1500000,
    price: 1350000,
    discount: 10,
    location: "نشانی: تهران - خیابان ولیعصر - طبقه دوم",
  },
  {
    title: "فیشیال تخصصی و آبرسانی صورت (پکیج کامل) کلینیک سلامت پوست",
    image: "/images/beauty-clinic-4.png",
    clinicName: "کلینیک سلامت پوست",
    previousPrice: 3200000,
    price: 2560000,
    discount: 20,
    location: "نشانی: تهران - سعادت‌آباد - مجتمع سلامت",
  },
  {
    title: "لیزر موهای زائد زیر بغل (جلسه سوم) مرکز لیزر آرمان",
    image: "/images/beauty-clinic-5.png",
    clinicName: "مرکز لیزر آرمان",
    previousPrice: 980000,
    price: 784000,
    discount: 20,
    location: "نشانی: تهران - منطقه 3 - بلوار آفتاب",
  },
  {
    title: "جوانسازی گردن با مزوژل برند پروایج (1 جلسه) دکتر شیما میرشاهی",
    image: "/images/beauty-clinic-1.png",
    clinicName: "کلینیک میرشاهی",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
  {
    title: "پاکسازی و میکرودرم صورت (جلسه اول) کلینیک پوست آریا",
    image: "/images/beauty-clinic-2.png",
    clinicName: "کلینیک پوست آریا",
    previousPrice: 2800000,
    price: 2240000,
    discount: 20,
    location: "نشانی: تهران - خیابان کریم‌خان - پلاک 45",
  },
  {
    title: "تزریق بوتاکس برای خطوط پیشانی (0.5 واحد) دکتر نادری",
    image: "/images/beauty-clinic-3.png",
    clinicName: "مرکز زیبایی نادری",
    previousPrice: 1500000,
    price: 1350000,
    discount: 10,
    location: "نشانی: تهران - خیابان ولیعصر - طبقه دوم",
  },
  {
    title: "فیشیال تخصصی و آبرسانی صورت (پکیج کامل) کلینیک سلامت پوست",
    image: "/images/beauty-clinic-4.png",
    clinicName: "کلینیک سلامت پوست",
    previousPrice: 3200000,
    price: 2560000,
    discount: 20,
    location: "نشانی: تهران - سعادت‌آباد - مجتمع سلامت",
  },
  {
    title: "لیزر موهای زائد زیر بغل (جلسه سوم) مرکز لیزر آرمان",
    image: "/images/beauty-clinic-5.png",
    clinicName: "مرکز لیزر آرمان",
    previousPrice: 980000,
    price: 784000,
    discount: 20,
    location: "نشانی: تهران - منطقه 3 - بلوار آفتاب",
  },
];

const banners = [
  {
    title: "آزمایش در محل",
    description:
      "انجام انواع آزمایش‌های پزشکی در منزل یا محل کار شما\nبدون نیاز به مراجعه حضوری به آزمایشگاه\nپاسخ‌دهی سریع و دقیق توسط متخصصان مجرب",
    image: "/images/banner-3.png",
  },
  {
    title: "پرستار در منزل",
    description:
      "ارائه خدمات پرستاری تخصصی در منزل\nمراقبت از بیماران، سالمندان و کودکان توسط پرستاران حرفه‌ای\nپشتیبانی شبانه‌روزی و مشاوره رایگان",
    image: "/images/banner-4.png",
  },
];

const dentalServices = [
  {
    id: 1,
    title: "لمینت دندان",
    image: "/images/dental-services-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "ایمپلنت دندان",
    image: "/images/dental-services-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "ارتودنسی",
    image: "/images/dental-services-3.png",
    link: "#",
  },
  {
    id: 4,
    title: "پرکردن دندان",
    image: "/images/dental-services-4.png",
    link: "#",
  },
  {
    id: 5,
    title: "کشیدن دندان",
    image: "/images/dental-services-5.png",
    link: "#",
  },
  {
    id: 6,
    title: "عصب کشی دندان",
    image: "/images/dental-services-6.png",
    link: "#",
  },
  {
    id: 7,
    title: "پروتز های دندانی",
    image: "/images/dental-services-7.png",
    link: "#",
  },
  {
    id: 8,
    title: "لمینت دندان",
    image: "/images/dental-services-1.png",
    link: "#",
  },
  {
    id: 9,
    title: "ایمپلنت دندان",
    image: "/images/dental-services-2.png",
    link: "#",
  },
  {
    id: 10,
    title: "ارتودنسی",
    image: "/images/dental-services-3.png",
    link: "#",
  },
  {
    id: 11,
    title: "پرکردن دندان",
    image: "/images/dental-services-4.png",
    link: "#",
  },
  {
    id: 12,
    title: "کشیدن دندان",
    image: "/images/dental-services-5.png",
    link: "#",
  },
  {
    id: 13,
    title: "عصب کشی دندان",
    image: "/images/dental-services-6.png",
    link: "#",
  },
  {
    id: 14,
    title: "پروتز های دندانی",
    image: "/images/dental-services-7.png",
    link: "#",
  },
];

const dentalClinics = [
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-1.png",
    clinicName: "کیلینیک مهروماه",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-2.png",
    clinicName: "کلینیک پوست آریا",
    previousPrice: 2800000,
    price: 2240000,
    discount: 20,
    location: "نشانی: تهران - خیابان کریم‌خان - پلاک 45",
  },
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-3.png",
    clinicName: "مرکز زیبایی نادری",
    previousPrice: 1500000,
    price: 1350000,
    discount: 10,
    location: "نشانی: تهران - خیابان ولیعصر - طبقه دوم",
  },
  {
    title: "فیشیال تخصصی و آبرسانی صورت (پکیج کامل) کلینیک سلامت پوست",
    image: "/images/dental-clinic-4.png",
    clinicName: "کلینیک سلامت پوست",
    previousPrice: 3200000,
    price: 2560000,
    discount: 20,
    location: "نشانی: تهران - سعادت‌آباد - مجتمع سلامت",
  },
  {
    title: "ونیر کامپوزیت سارمکو سوئیس (هر واحد) دکتر سارا پژوهش نیا",
    image: "/images/dental-clinic-5.png",
    clinicName: "مرکز لیزر آرمان",
    previousPrice: 980000,
    price: 784000,
    discount: 20,
    location: "نشانی: تهران - منطقه 3 - بلوار آفتاب",
  },
  {
    title: "پالپکتومی دندان شیری (هر دندان) دکتر زهرا ملک منصوری",
    image: "/images/dental-clinic-1.png",
    clinicName: "کلینیک میرشاهی",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-1.png",
    clinicName: "کیلینیک مهروماه",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-2.png",
    clinicName: "کلینیک پوست آریا",
    previousPrice: 2800000,
    price: 2240000,
    discount: 20,
    location: "نشانی: تهران - خیابان کریم‌خان - پلاک 45",
  },
  {
    title: "مزوتراپی مو با برند فیوژن (هر جلسه) دکتر فرزانه رضاقلی زاده عمران",
    image: "/images/dental-clinic-3.png",
    clinicName: "مرکز زیبایی نادری",
    previousPrice: 1500000,
    price: 1350000,
    discount: 10,
    location: "نشانی: تهران - خیابان ولیعصر - طبقه دوم",
  },
  {
    title: "فیشیال تخصصی و آبرسانی صورت (پکیج کامل) کلینیک سلامت پوست",
    image: "/images/dental-clinic-4.png",
    clinicName: "کلینیک سلامت پوست",
    previousPrice: 3200000,
    price: 2560000,
    discount: 20,
    location: "نشانی: تهران - سعادت‌آباد - مجتمع سلامت",
  },
  {
    title: "ونیر کامپوزیت سارمکو سوئیس (هر واحد) دکتر سارا پژوهش نیا",
    image: "/images/dental-clinic-5.png",
    clinicName: "مرکز لیزر آرمان",
    previousPrice: 980000,
    price: 784000,
    discount: 20,
    location: "نشانی: تهران - منطقه 3 - بلوار آفتاب",
  },
  {
    title: "پالپکتومی دندان شیری (هر دندان) دکتر زهرا ملک منصوری",
    image: "/images/dental-clinic-1.png",
    clinicName: "کلینیک میرشاهی",
    previousPrice: 4230000,
    price: 3825000,
    discount: 10,
    location: "نشانی: تهران - میدان آرژانتین - خیابان 123",
  },
];

const DentalServicesTitle = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="xl:text-[32px] flex gap-1">
        <span className="text-primary-500 font-semibold xl:font-bold">
          خدماتی
        </span>
        <span className="text-[#848484] font-semibold xl:font-medium">
          که ارائه میدهیم
        </span>
      </div>
      <div className="flex-1 md:bg-grey-200 h-px"></div>
    </div>
  );
};

const BeautyServiceTitle = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="xl:text-[32px] flex gap-1">
        <span className="text-[#848484] font-semibold xl:font-medium">
          تخفیفات
        </span>
        <span className="text-primary-500 font-semibold xl:font-bold">
          کلینیک های زیبایی
        </span>
      </div>
      <div className="flex-1 md:bg-grey-200 h-px"></div>
    </div>
  );
};

const FeedBacksTitle = () => {
  return (
    <div className="container flex items-center gap-3 ">
      <div className="h-px bg-grey-200 flex-1 hidden xl:block"></div>
      <h2 className="text-xl xl:text-[32px] leading-[155%] xl:font-medium font-[700] text-grey-500 flex items-center gap-1">
        <span className="text-primary-500">بازخورد</span>
        <span>بیماران نوبیتو</span>
      </h2>
      <div className="h-px bg-grey-200 flex-1"></div>
    </div>
  );
};

const BeautyServices = () => {
  return (
    <>
      <BeautyServicesHero />
      <PageSearchBox
        trigerWidth="mx-auto w-[798px]"
        lableStyle="lg:w-[798px] h-[48px] lg:h-20 bg-white-50 relative -mt-6 lg:-mt-10 p-5
            flex items-center gap-2 mx-auto"
        mobileInput={true}
        container="px-4 xl:px-0"
        placeholder="جستجو پزشک،درمانگر،کلینیک..."
        type="for-page"
      />
      <div className="mt-[64px] xl:mt-[144px]">
        <BeautyServiceList
          title={<BeautyServiceTitle />}
          services={beautyClinicDiscounts}
        />
      </div>
      <div className="mt-[64px] xl:mt-[144px]">
        <ClinicsLists
          normalTitle="کلینیک های"
          highlightTitle="زیبایی"
          clinics={beautyClinics}
        />
      </div>
      <div className="mt-[64px] container grid lg:grid-cols-2 lg:gap-6 gap-8 xl:mt-[144px]">
        {banners.map((banner, index) => (
          <div
            className="bg-white p-6 flex sm:flex-row flex-col-reverse gap-8 lg:gap-6 rounded-3xl"
            key={index}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-black-500 font-bold lg:font-medium text-[28px]">
                {banner.title}
              </h2>
              <p className="text-[16px] text-grey-500 lg:leading-[170%] leading-[155%]">
                {banner.description}
              </p>
            </div>
            <Image
              className="rounded-2xl object-cover w-full h-[192px]"
              src={banner.image}
              alt={banner.title}
              width={176}
              height={192}
            />
          </div>
        ))}
      </div>
      <div className="mt-[64px] xl:mt-[144px]">
        <BeautyServiceList
          title={<DentalServicesTitle />}
          services={dentalServices}
        />
      </div>
      <div className="mt-[64px] xl:mt-[144px]">
        <ClinicsLists
          normalTitle="کلینیک های"
          highlightTitle="دندان پزشکی"
          clinics={dentalClinics}
        />
      </div>
      <div className="mt-[64px] xl:mt-[144px]">
        <OnSiteTesting />
      </div>
      <div className="mt-[64px] xl:mt-[144px]">
        <HomePatientFeedBack title={<FeedBacksTitle />} />
      </div>
    </>
  );
};

export default BeautyServices;

import PageSearchBox from "@/components/website/PageSearchBox";
import BeautyServicesHero from "@/components/website/BeautyServicesHero";
import BeautyServiceList from "@/components/website/BeautyServiceList";
import ClinicsLists from "@/components/website/ClinicsLists";

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
        <ClinicsLists clinics={beautyClinics} />
      </div>
    </>
  );
};

export default BeautyServices;

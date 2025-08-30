import PageSearchBox from "@/components/website/PageSearchBox";
import BeautyServicesHero from "@/components/website/BeautyServicesHero";
import BeautyServiceList from "@/components/website/BeautyServiceList";

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
];

const beautyTitle = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="xl:text-[32px] flex gap-1">
        <span className="text-[#848484] font-semibold xl:font-medium">تخفیفات</span>
        <span className="text-primary-500 font-semibold xl:font-bold">کلینیک های زیبایی</span>
      </div>
      <div className="flex-1 bg-grey-200 h-px"></div>
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
        <BeautyServiceList title={beautyTitle} services={beautyClinicDiscounts} />
      </div>
    </>
  );
};

export default BeautyServices;

import HomeHeroSection from "@/components/website/HomeHeroSection";
import PageSearchBox from "@/components/website/PageSearchBox";
import HomeStatistics from "@/components/website/HomeStatistics";
import HomePopularSection from "@/components/website/HomePopularSection";
import HomeConsultantsSection from "@/components/website/HomeConsultantsSection";
import HomePatientFeedBack from "@/components/website/HomePatientFeedBack";
import HomeTopMedicsSection from "@/components/website/HomeTopMedicsSection";
import HomeInsuranceBanner from "@/components/website/HomeInsuranBanner";
import HomeInsuranSection from "@/components/website/HomeInsuranSection";
import HomeDoctorsBanners from "@/components/website/HomeDoctorsBanners";
import Link from "next/link";

const Home = () => {
  const PatientFeedBackTitle = () => {
    return (
      <div className="container flex items-center gap-3 ">
        <h2 className="text-xl xl:text-[32px] leading-[155%] xl:font-medium font-[700] text-grey-500 flex items-center gap-1">
          <span className="text-primary-500">بازخورد بیماران</span>
          <span>این ماه</span>
        </h2>
        <div className="h-px bg-grey-200 flex-1 hidden xl:block"></div>
        <div className="flex flex-1 xl:hidden"></div>

        <Link
          href="/"
          className="flex items-center gap-2 font-t2-regular text-grey-500"
        >
          مشاهده همه
          <span className="isax isax-arrow-left-3 text-grey-500 text-2xl leading-6"></span>
        </Link>
      </div>
    );
  };

  return (
    <>
      <HomeHeroSection />

      <div className="pb-[36px] xl:pb-[72px]">
        <PageSearchBox
          trigerWidth="mx-auto w-[798px]"
          lableStyle="lg:w-[798px] h-[48px] lg:h-20 bg-white-50 relative -mt-10 p-5
            flex items-center gap-2 mx-auto"
          mobileInput={true}
          container="px-4 xl:px-0"
          placeholder="جستجو پزشک،درمانگر،کلینیک..."
          type="for-page"
        />
      </div>

      <div className="py-[36px] xl:my-[72px]">
        <HomeStatistics />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomePopularSection />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeConsultantsSection />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeDoctorsBanners />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeTopMedicsSection />
      </div>

      <div className="xl:pt-[168px] xl:pb-[72px] py-[36px]">
        <HomeInsuranceBanner />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeInsuranSection />
      </div>

      <div className="py-[36px] 2xl:py-[72px]">
        <HomePatientFeedBack title={<PatientFeedBackTitle />} />
      </div>
    </>
  );
};

export default Home;

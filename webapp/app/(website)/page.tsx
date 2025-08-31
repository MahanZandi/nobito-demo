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

const Home = () => {
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
        <HomePatientFeedBack />
      </div>
    </>
  );
};

export default Home;

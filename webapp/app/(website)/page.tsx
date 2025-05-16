import HomeHeroSection from "@/components/website/HomeHeroSection";
import HomeSearchBox from "@/components/website/HomeSearchBox";
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
    <section>
      <HomeHeroSection />

      <div className='pb-[36px] xl:pb-[72px]'>
        <HomeSearchBox />
      </div>

      <div className='py-[36px] xl:my-[72px]'>
        <HomeStatistics />
      </div>

      <div className='py-[36px] xl:py-[72px]'>
        <HomePopularSection />
      </div>

      <div className='py-[36px] xl:py-[72px]'>
        <HomeConsultantsSection />
      </div>

      <div className='py-[36px] xl:py-[72px]'>
        <HomeDoctorsBanners />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeTopMedicsSection />
      </div>

      <div className="xl:pt-[168px] xl:pb-[72px] py-[36px]">
        <HomeInsuranceBanner/>
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomeInsuranSection />
      </div>

      <div className="py-[36px] xl:py-[72px]">
        <HomePatientFeedBack />
      </div>
    </section>
  );
};

export default Home;

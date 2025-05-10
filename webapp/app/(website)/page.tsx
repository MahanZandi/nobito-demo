import HomeHeroSection from "@/components/website/HomeHeroSection";
import HomeSearchBox from "@/components/website/HomeSearchBox";
import HomeStatistics from "@/components/website/HomeStatistics";
import HomePopularSection from "@/components/website/HomePopularSection";
import HomeConsultantsSection from "@/components/website/HomeConsultantsSection";
import HomeDoctorsBanner from "@/components/website/HomeDoctorsBanner";
import HomeTopMedicsSection from "@/components/website/HomeTopMedicsSection";
import HomeInsuranceBanner from "@/components/website/HomeInsuranBanner";

const Home = () => {
  return (
    <section>
      <HomeHeroSection />

      <div className="pb-[72px]">
        <HomeSearchBox />
      </div>

      <div className="lg:my-[72px]">
        <HomeStatistics />
      </div>

      <div className="py-[72px]">
        <HomePopularSection />
      </div>

      <div className="py-[72px]">
        <HomeConsultantsSection />
      </div>

      <div className="py-[72px]">
        <HomeDoctorsBanner />
      </div>

      <div className="py-[72px]">
        <HomeTopMedicsSection />
      </div>

      <div className="lg:pt-[168px] pb-[72px]">
        <HomeInsuranceBanner/>
      </div>
    </section>
  );
};

export default Home;

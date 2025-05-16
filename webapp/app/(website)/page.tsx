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
import Footer from "@/components/website/Footer";

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

      <div className='py-[72px]'>
        <HomeDoctorsBanners />
      </div>

      <div className="py-[72px]">
        <HomeTopMedicsSection />
      </div>

      <div className="lg:pt-[168px] pb-[72px]">
        <HomeInsuranceBanner/>
      </div>

      <div className="py-[72px]">
        <HomeInsuranSection />
      </div>

      <div className="py-[72px]">
        <HomePatientFeedBack />
      </div>

      <div className="pt-[72px]">
        <Footer/>
      </div>
    </section>
  );
};

export default Home;

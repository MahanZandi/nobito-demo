import HomeHeroSection from "@/components/website/HomeHeroSection";
import HomeSearchBox from "@/components/website/HomeSearchBox";
import HomeStatistics from "@/components/website/HomeStatistics";
import HomePopularSection from "@/components/website/HomePopularSection";
import HomeConsultantsSection from "@/components/website/HomeConsultantsSection";
import HomeDoctorsBanners from "@/components/website/HomeDoctorsBanners";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <HomeHeroSection />

      <div className='pb-[72px]'>
        <HomeSearchBox />
      </div>

      <div className='my-[72px]'>
        <HomeStatistics />
      </div>

      <div className='py-[72px]'>
        <HomePopularSection />
      </div>

      <div className='py-[72px]'>
        <HomeConsultantsSection />
      </div>

      <div className='py-[72px]'>
        <HomeDoctorsBanners />
      </div>
    </section>
  );
};

export default Home;

import HomeHeroSection from "@/components/website/HomeHeroSection";
import HomeSearchBox from "@/components/website/HomeSearchBox";
import HomeStatistics from "@/components/website/HomeStatistics";
import HomePopularSection from "@/components/website/HomePopularSection";
import HomeConsultantsSection from "@/components/website/HomeConsultantsSection";
import HomeDoctorsBanner from "@/components/website/HomeDoctorsBanner";

const Home = () => {
  return (
    <section className="">
      <HomeHeroSection />

      <div className='pb-[72px]'>
        <HomeSearchBox />
      </div>

      <div className='lg:my-[72px]'>
        <HomeStatistics />
      </div>

      <div className='py-[72px]'>
        <HomePopularSection />
      </div>

      <div className='py-[72px]'>
        <HomeConsultantsSection />
      </div>

      <div className='py-[72px]'>
        <HomeDoctorsBanner />
      </div>
    </section>
  );
};

export default Home;

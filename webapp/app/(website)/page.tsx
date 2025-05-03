import HomeHeroSection from "@/components/website/HomeHeroSection";
import HomeSearchBox from "@/components/website/HomeSearchBox";
import HomeStatistics from "@/components/website/HomeStatistics";
import HomePopularSection from "@/components/website/HomePopularSection";
import HomeConsultantsSection from "@/components/website/HomeConsultantsSection";
import HomeBanners from "@/components/website/HomeBanners";
import HomePopularDoctors from "@/components/website/HomePopularDoctors";

const Home = () => {
    return (
        <section>
            
            <HomeHeroSection/>

            <div className='pb-[72px]'>
                <HomeSearchBox/>
            </div>

            <div className='my-[72px]'>
                <HomeStatistics/>
            </div>

            <div className='py-[72px]'>
                <HomePopularSection />
            </div>

            <div className='py-[72px]'>
                <HomeConsultantsSection />
            </div>

            <div className='py-[72px]'>
                <HomeBanners />
            </div>

            <div className='py-[72px]'>
                <HomePopularDoctors />
            </div>
        </section>
    );
}

export default Home
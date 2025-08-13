import WeblogHeroSection from "@/components/website/WeblogHeroSection";
import WeblogCategory from "@/components/website/WeblogCategory";
import WeblogsShowcase from "@/components/website/WeblogsShowcase";

const Weblog = () => {
  return (
    <>
      <div className="pb-[36px] xl:pb-[72px]">
        <WeblogHeroSection />
      </div>
      <div className="py-[36px] xl:py-[72px]">
        <WeblogCategory />
      </div>
      <div className="py-[36px] xl:py-[72px]">
        <WeblogsShowcase />
      </div>
    </>
  );
};

export default Weblog;

import PageSearchBox from "@/components/website/PageSearchBox";
import BeautyServicesHero from "@/components/website/BeautyServicesHero";

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
    </>
  );
};

export default BeautyServices;

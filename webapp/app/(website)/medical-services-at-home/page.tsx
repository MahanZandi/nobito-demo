import MedServicesHero from "@/components/website/MedServicesHero";
import PageSearchBox from "@/components/website/PageSearchBox";

const MedicalServicesAtHome = () => {
  return (
    <>
      <MedServicesHero />
      <div className="pb-[36px] xl:pb-[72px]">
        <PageSearchBox
          trigerWidth="mx-auto w-[798px]"
          lableStyle="lg:w-[798px] h-[48px] lg:h-20 bg-white-50 relative -mt-6 lg:-mt-10 p-5
            flex items-center gap-2 mx-auto"
          mobileInput={true}
          container="px-4 xl:px-0"
          placeholder="جستجو پزشک،درمانگر،کلینیک..."
          type="for-page"
        />
      </div>
    </>
  );
};

export default MedicalServicesAtHome;

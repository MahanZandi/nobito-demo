import PageSearchBox from "@/components/website/PageSearchBox";
import TurnRatingDoctorCard from "@/components/website/TurnRatingDoctorCard";

const TurnRating = () => {
  return (
    <div>
      <div className="xl:py-[48px]">
        <PageSearchBox
          lableStyle="lg:w-[798px] h-20 bg-white-50 relative p-5
            flex items-center gap-2"
          mobileInput={false}
          container="container"
        />
      </div>
      <div className="xl:container xl:justify-center 2xl:justify-start xl:flex gap-6">
        {/* this div just to cover the space for next component(filter component) */}
        <div className="w-[405px] rounded-2xl bg-white-100 h-[1000px] hidden xl:block"></div>
        <TurnRatingDoctorCard />
      </div>
    </div>
  );
};

export default TurnRating;

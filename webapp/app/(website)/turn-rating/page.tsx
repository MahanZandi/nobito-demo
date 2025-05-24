import TurnRatingSearchBox from "@/components/website/TurnRatingSearchBox";
import TurnRatingDoctorCard from "@/components/website/TurnRatingDoctorCard";

const TurnRating = () => {
  return (
    <div className="xl:container">
      <div className="xl:py-[48px]">
        <TurnRatingSearchBox />
      </div>
      <div className="xl:flex gap-[24px]">
        {/* this div just to cover the space for next component(filter component) */}
        <div className="w-[405px] rounded-2xl bg-white-100 h-[1000px] hidden xl:block"></div>
        <TurnRatingDoctorCard />
      </div>
    </div>
  );
};

export default TurnRating;

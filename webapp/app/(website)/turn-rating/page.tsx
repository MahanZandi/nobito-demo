import TurnRatingSearchBox from "@/components/website/TurnRatingSearchBox";
import TurnRatingDoctorCard from "@/components/website/TurnRatingDoctorCard";
import TurnRatingFilterCard from "@/components/website/TurnRatingFilterCard";

const TurnRating = () => {
  return (
    <div className="xl:container">
      <div className="xl:py-[48px]">
        <TurnRatingSearchBox />
      </div>
      <div className="xl:flex gap-6">
        <TurnRatingFilterCard />
        <TurnRatingDoctorCard />
      </div>
    </div>
  );
};

export default TurnRating;

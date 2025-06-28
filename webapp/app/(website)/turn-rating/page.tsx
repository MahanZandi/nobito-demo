import TurnRatingSearchBox from "@/components/website/TurnRatingSearchBox";
import TurnRatingDoctorCard from "@/components/website/TurnRatingDoctorCard";
import TurnRatingFilterCard from "@/components/website/TurnRatingFilterCard";
import Footer from "@/components/website/Footer";

// TODO تمامی اطلاعات دکتر را در اینجا بگذارم و  در  کامپوننت های زیر استفاده کنم

const TurnRating = () => {
  return (
    <>
      <div className="xl:container">
        <div className="xl:py-[48px]">
          <TurnRatingSearchBox />
        </div>
        <div className="xl:flex gap-6">
          <TurnRatingFilterCard />
          <TurnRatingDoctorCard />
        </div>
      </div>
      <div className="pt-[36px] xl:pt-[72px]">
        <Footer />
      </div>
    </>
  );
};

export default TurnRating;

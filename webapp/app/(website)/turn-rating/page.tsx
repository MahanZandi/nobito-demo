import PageSearchBox from "@/components/website/PageSearchBox";

const TurnRating = () => {
  return (
    <div>
      <div className="py-[48px]">
        <PageSearchBox
          lableStyle="lg:w-[798px] h-20 bg-white-50 relative p-5
            flex items-center gap-2"
          mobileInput={false}
          container="container"
        />
      </div>
    </div>
  );
};

export default TurnRating;

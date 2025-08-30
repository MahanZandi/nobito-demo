"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface ServicesType {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface BeautyServiceListProps {
  services: ServicesType[];
  title: React.ReactNode;
}

const BeautyServiceList: React.FC<BeautyServiceListProps> = ({
  services,
  title,
}) => {
  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
  });

  return (
    <>
      <div className="container">{title}</div>
      <div ref={emblaRef} className="overflow-hidden mt-10 lg:mt-[56px]">
        <div className="flex gap-4 lg:gap-6">
          {services?.map((service) => (
            <div key={service.id}>
              <div className="size-[120px] lg:size-[180px] rounded-full bg-white-100 flex justify-center items-center">
                <Image
                  className="size-[104px] lg:size-[156px]"
                  src={service.image}
                  alt={service.title}
                  width={156}
                  height={156}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BeautyServiceList;

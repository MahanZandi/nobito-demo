"use client";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
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
            <div className="flex flex-col gap-6" key={service.id}>
              <Link
                href={service.link}
                className="size-[120px] lg:size-[180px] rounded-full bg-white-100 flex justify-center items-center"
              >
                <Image
                  className="size-[104px] lg:size-[156px]"
                  src={service.image}
                  alt={service.title}
                  width={156}
                  height={156}
                />
              </Link>
              <div className="text-center">
                <Link
                  className="font-medium text-black-400 text-[16px] lg:text-[22px]"
                  href={service.link}
                >
                  {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BeautyServiceList;

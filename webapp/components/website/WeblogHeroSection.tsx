import Image from "next/image";
import PageSearchBox from "./PageSearchBox";

const heroSectionData = [
  {
    title: "Medical services banner",
    image: "/images/weblog-hero-section-image1.png",
  },
  {
    title: "Medical services banner",
    image: "/images/weblog-hero-section-image2.png",
  },
  {
    title: "Medical services banner",
    image: "/images/weblog-hero-section-image3.png",
  },
];

const WeblogHeroSection = () => {
  return (
    <section>
      {/* show one picture in mobile view */}
      <div className="relative grid h-[464px] md:hidden">
        <div className="relative w-full h-[464px]">
          <Image
            src="/images/weblog-hero-section-image2.png"
            alt="Medical services banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <blockquote className="absolute bottom-12 mx-auto w-full p-4 xl:hidden">
          <p className="text-[22px] font-medium text-white text-center sm:text-2xl lg:text-3xl">
            <span>سالم بخور، سالم زندگی کن 🌿</span>
            <br />
            <span>
              با انتخاب‌های غذایی آگاهانه، انرژی و شادابی رو به زندگی‌ت برگردون.
            </span>
          </p>
        </blockquote>
      </div>

      {/* show three picture in desktop view */}
      <div className="relative hidden md:grid md:grid-cols-3 xl:h-[528px]">
        {heroSectionData.map((data, index) => (
          <div key={index} className="relative w-full h-[528px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover absolute"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        <blockquote className="absolute bottom-12 mx-auto w-full p-4 xl:hidden">
          <p className="text-[22px] font-medium text-white text-center sm:text-2xl lg:text-3xl">
            <span>سالم بخور، سالم زندگی کن 🌿</span>
            <br />
            <span>
              با انتخاب‌های غذایی آگاهانه، انرژی و شادابی رو به زندگی‌ت برگردون.
            </span>
          </p>
        </blockquote>
      </div>

      <div className="hidden xl:block">
        <PageSearchBox
          trigerWidth="mx-auto w-[798px]"
          lableStyle="lg:w-[798px] h-20 bg-white-50 relative -mt-10 p-5
            flex items-center gap-2 mx-auto"
          mobileInput={true}
          container="px-4 xl:px-0"
        />
      </div>
    </section>
  );
};

export default WeblogHeroSection;

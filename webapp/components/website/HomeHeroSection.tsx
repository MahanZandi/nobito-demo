import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative h-[382px]">
            {/* Background Image */}
            <Image
                src="/banner.png"
                className="absolute inset-0 object-cover w-full h-full"
                width={1440}
                height={382}
                alt="Medical services banner"
                priority
            />

            {/* Hero Content */}
            <div className="relative flex flex-col items-center justify-center h-full xl:w-[694px] mx-auto text-center">
                {/* Main Heading with Quote */}
                <blockquote className="relative font-d2-bold text-white text-lg leading-relaxed">
                    <span className="icon-quote-up text-secondary-500 text-2xl absolute top-0 -right-8"></span>
                    تلاش ما دسترسی
                    <span className="text-primary-500 bg-accent-500 px-2 rounded-xl inline-block">
                        سریع‌تر و آسان
                    </span>
                    <br/>
                    تر شما به خدمات پزشکی است :)
                    <span className="icon-quote-down text-secondary-500 text-2xl absolute bottom-0 -left-8"></span>
                </blockquote>

                {/* Supporting Paragraph */}
                <p className="mt-8 text-grey-50 font-b1-regular">
                    کافیست خدمات درمانی موردنظر خود را جستجو کنید
                    <br />
                    (دریافت نوبت، مشاوره پزشکی، خدمات پزشکی در منزل)
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
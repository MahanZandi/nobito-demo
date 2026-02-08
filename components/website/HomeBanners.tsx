import Image from 'next/image';
import Link from 'next/link';

const HomeBanners = () => {
    const banners = [
        {
            id: 1,
            title: "خدمات پزشکی رو برای شما در دسترستر کردیم",
            subtitle: "فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی(حرکتی)دسترسی پیدا میکنید.",
            image: "/images/banner-1.png",
            buttonText: "مشاهده خدمات",
            buttonLink: "/",
        },
        {
            id: 2,
            title: "مشغله زندگی نمیزاره بیایی دکتر؟ مشاوره غیر حضوری بگیر",
            subtitle: "اگر زمان کافی برای مراجعه به پزشک رو ندارید میتونید از طریق مشاوره غیرحضوری با پزشک صحبت کنید",
            image: "/images/banner-2.png",
            buttonText: "نوبت بگیر",
            buttonLink: "/",
        },
    ];

    return (
        <div>
            <div className='container'>
                <div className="flex items-center overflow-x-auto gap-4 lg:gap-6 w-full">
                    {banners.map((banner) => (
                        <div key={banner.id} className={`relative overflow-hidden w-[294px] lg:w-[588px] rounded-3xl lg:h-[266px] py-4 lg:py-8 px-6 lg:px-10 flex-shrink-0 ${banner.id === 1 ? 'bg-[#A8035C]' : 'bg-[#11749E]'}`}>
                            <div className='w-[172px] lg:w-[335px]'>
                                <h2 className='text-white font-t3-medium lg:font-t1-medium'>{banner.title}</h2>
                                <p className='text-white mt-4 font-b4-regular lg:font-t3-regular'>{banner.subtitle}</p>
                                
                                <div className='flex justify-end'>
                                <Link href={banner.buttonLink} className='text-white text-[16px] font-normal'>
                                    <button className='bg-white text-black px-4 py-2 rounded-lg mt-8 flex items-center gap-2'>
                                        {banner.buttonText}

                                        <i className='isax isax-arrow-left-3 text-2xl'></i>
                                    </button>
                                </Link>
                                    </div>
                            </div>
                            <div>
                                <Image src={banner.image} alt={banner.title} width={335} height={250} className="w-[153px] h-[180px] lg:w-[335px] lg:h-full object-cover lg:object-contain absolute bottom-0 -left-2 lg:-left-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeBanners;
'use client';
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import { useState, useEffect } from 'react';

const HomePopularSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: 'rtl',
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            // Update selected index when slide changes
            emblaApi.on('select', () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            });
            
            // Set initial selected index
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, [emblaApi]);

    const doctors = [
        {
            id: 1,
            name: 'عباس میراحمدی',
            image: '/images/doctor-1.png',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 2,
            name: 'دکتر محمدی',
            image: '/images/doctor-2.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 3,
            name: 'مهران مهام',
            image: '/images/doctor-3.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 4,
            name: 'لیلا میرزایی',
            image: '/images/doctor-4.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 5,
            name: 'دکتر محمدی',
            image: '/images/doctor-5.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 6,
            name: 'محمد ابراهیمی',
            image: '/images/doctor-6.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 7,
            name: 'دکتر محمدی',
            image: '/images/doctor-7.jpeg',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 8,
            name: 'دکتر محمدی',
            image: '/images/doctor-8.png',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 9,
            name: 'امیرحسین فربد',
            image: '/images/doctor-9.png',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 10,
            name: 'دکتر محمدی',
            image: '/images/doctor-10.png',
            rate: '4/5',
            specialization: 'متخصص قلب و عروق',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: [
                'جراحی قلب',
                'آنجوگرافی',
                'تست ورزش'
            ],
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
    ]

    return <>
        <div className='container flex items-center gap-3'>
            <h2 className='text-xl lg:text-[32px] leading-[155%] lg:font-medium font-[700] text-grey-500 flex items-center gap-1'>
                <span>محبوبترین</span>
                <span className='text-primary-500'>پزشکان</span>
                <span>این ماه</span>
            </h2>
            <div className='h-px bg-grey-200 flex-1 hidden lg:block'></div> 
            <div className="flex flex-1 lg:hidden"></div>

            <Link href='/' className='flex items-center gap-2 font-t2-regular text-grey-500'>
                مشاهده همه
                <span className='isax isax-arrow-left-3 text-grey-500 text-2xl leading-6'></span>
            </Link>
        </div>
        <div className='mt-14'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center gap-2">
                    {
                        doctors?.map((doctor, index) => (
                            <div key={index}>
                                <div
                                    className="w-[282px] h-[405px] bg-white-100 border
                                    border-grey-200 rounded-2xl p-4"
                                >
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        width={250}
                                        height={152}
                                        className='w-[250px] h-[152px] object-cover rounded-xl'
                                    />

                                    <div className='flex items-center justify-between mt-4'>
                                        <div className='font-b2-bold'>
                                            {doctor.name}
                                        </div>

                                        <div
                                            className='text-black-400 font-t3-regular flex items-center gap-1 font-vazir-farsi'>
                                            {doctor.rate}
                                            <span
                                                className='isax isax-star-15 text-lg leading-[18px] text-secondary-500'></span>
                                        </div>
                                    </div>

                                    <p className='text-grey-400 font-t3-regular mt-3'>
                                        {doctor.specialization}
                                    </p>

                                    <div className='mt-6 text-primary-500 font-t3-medium font-vazir-farsi
                                    flex items-center gap-1'>
                                        <span>
                                            ({doctor.happyPatientsPercentage}%)
                                        </span>
                                        <span>
                                            {doctor.happyPatients}
                                        </span>
                                        <span>
                                            بیمار راضی
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 mt-6'>
                                        {
                                            doctor.skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className='text-grey-500 font-l2-regular flex items-center gap-1 font-vazir-farsi
                                                    py-0.5 px-3 bg-grey-50 rounded-full'>
                                                    {skill}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='h-px my-4 bg-grey-200'></div>

                                    <div className='flex whitespace-nowrap gap-2 font-l1-regular text-grey-500'>
                                        <span className='isax isax-location text-2xl leading-6'></span>
                                        نشانی :
                                        <span className='truncate'>
                                            {doctor.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-4 mt-14">
            <button 
            className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
            onClick={() => emblaApi?.scrollPrev()}
            >
                <i className="isax isax-arrow-right-2 text-black-400 text-2xl leading-6"></i>
            </button>

            <div className="flex items-center gap-2">
                {
                    emblaApi?.scrollSnapList()?.map((scrollSnap, index) => (
                        <button 
                        key={index} 
                        className={`w-3 h-3 bg-gray-50 cursor-pointer border border-black-400 rounded-full transition-all duration-300 ${index === selectedIndex ? 'border-0 bg-primary-500 w-12 h-2' : ''}`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        />
                    ))
                }
            </div>

            <button 
            className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
            onClick={() => emblaApi?.scrollNext()}
            >
                <i className="isax isax-arrow-left-3 text-black-400 text-2xl leading-6"></i>
            </button>
        </div>
    </>
}

export default HomePopularSection;
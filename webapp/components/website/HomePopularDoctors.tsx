"use client";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import { useState, useEffect } from 'react';
import { getRandomSkills } from "../../utils/randomSkills";

const HomePopularDoctors = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: 'rtl',
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            });
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, [emblaApi]);

    const items = [
        {
            id: 1,
            name: 'عباس میراحمدی',
            image: '/images/doctor-1.png',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 1),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 2,
            name: 'دکتر محمدی',
            image: '/images/doctor-2.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 2),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 3,
            name: 'مهران مهام',
            image: '/images/doctor-3.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 3),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 4,
            name: 'لیلا میرزایی',
            image: '/images/doctor-4.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 4),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 5,
            name: 'دکتر محمدی',
            image: '/images/doctor-5.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 5),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 6,
            name: 'محمد ابراهیمی',
            image: '/images/doctor-6.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 6),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 7,
            name: 'دکتر محمدی',
            image: '/images/doctor-7.jpeg',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 7),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 8,
            name: 'دکتر محمدی',
            image: '/images/doctor-8.png',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 8),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 9,
            name: 'امیرحسین فربد',
            image: '/images/doctor-9.png',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 9),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
        {
            id: 10,
            name: 'دکتر محمدی',
            image: '/images/doctor-10.png',
            rate: '4/5',
            specialization: 'کلینیک زیبایی',
            happyPatients: '2374',
            happyPatientsPercentage: '97',
            skills: getRandomSkills(2, 4, 10),
            location: 'تهران - میدان آرژانتین-خیابان چهارم کوچه پنجم'
        },
    ]

    return <>
        <div className='container flex items-center gap-3'>
            <h2 className='font-h1-medium text-grey-500 flex items-center gap-1'>
                <span>محبوبترین</span>
                <span className='text-primary-500'>کلینیک های پزشکی</span>
            </h2>
            <div className='h-px bg-grey-200 flex-1'></div>

            <Link href='/' className='flex items-center gap-2 font-t2-regular text-grey-500'>
                مشاهده همه
                <span className='isax isax-arrow-left-3 text-grey-500 text-2xl leading-6'></span>
            </Link>
        </div>
        <div className='mt-14'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center gap-2">
                    {
                        items?.map((item, index) => (
                            <div key={index}>
                                <div
                                    className="w-[282px] h-[349px] bg-white-100 border
                                    border-grey-200 rounded-2xl p-4"
                                >
                                    {/* Card content here, same as HomeConsultantsSection */}
                                    <div className="flex flex-col items-center">
                                        <Image src={item.image} alt={item.name} width={250} height={152} className="rounded-xl object-cover h-[152px] w-full mb-4" />
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="font-bold text-[#121212]">{item.name}</h3>
                                            <div
                                                className='text-black-400 font-t3-regular flex items-center gap-1 font-vazir-farsi'>
                                                {item.rate}
                                                <span
                                                    className='isax isax-star-15 text-lg leading-[18px] text-secondary-500'></span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-[#919191] mt-3 w-full">{item.specialization}</div>
                                        <div className="mt-6 w-full text-[#1F7168]">
                                            ({item.happyPatientsPercentage}%) {item.happyPatients} بیمار راضی
                                        </div>
                                        <div className="flex gap-2 mt-4 w-full overflow-x-auto">
                                            {item.skills.slice(0, 2).map((skill, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-[#F5F5F5] text-[#919191] text-xs rounded-full whitespace-nowrap"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="h-px my-4 bg-grey-200"></div>
                                        
                                        <div className="flex items-center gap-2 w-full text-[#919191] text-xs">
                                            <span className="isax isax-location text-lg text-primary-500"></span>
                                            {item.location}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-14">
            <button 
            className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
            onClick={() => emblaApi?.scrollPrev()}
            >
                <i className="isax isax-arrow-right-2 text-black-400 text-2xl leading-6"></i>
            </button>

            {
                emblaApi?.scrollSnapList()?.map((scrollSnap, index) => (
                    <button 
                    key={index} 
                    className={`w-3 h-3 bg-gray-50 cursor-pointer border border-black-400 rounded-full transition-all duration-300 ${index === selectedIndex ? 'border-0 bg-primary-500 w-12 h-2' : ''}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))
            }

            <button 
            className="w-10 h-10 bg-gray-50 cursor-pointer border border-black-400 rounded-full flex items-center justify-center"
            onClick={() => emblaApi?.scrollNext()}
            >
                <i className="isax isax-arrow-left-3 text-black-400 text-2xl leading-6"></i>
            </button>

        </div>
    </>;
}

export default HomePopularDoctors;
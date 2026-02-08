import React from "react";

const HomeStatistics = () => {
    const stats = [
        { number: "+30,000", label: "پزشک آماده به خدمت" },
        { number: "+10,000", label: "درمانگر سیار" },
        { number: "+40,000", label: "نوبت دهی روزانه" },
        { number: "+15,000", label: "مراکز درمانی" },
    ];

    return (
        <section aria-labelledby="statistics-heading" dir="rtl">
            <h2 id="statistics-heading" className="sr-only">آمار خدمات</h2>

            <div className="h-8 bg-primary-500 w-[85%] rounded-tl-md rounded-bl-[50px]"></div>

            <ul className="py-4 xl:w-[936px] mx-auto lg:flex lg:items-center grid grid-cols-2 gap-x-[103px] gap-y-[40px] lg:gap-0 justify-between bg-statistics lg:bg-transparent">
                {stats.map((stat, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center text-right gap-3 lg:gap-4 text-black-400 font-vazir-farsi"
                    >
                        <strong className="text-xl leading-normal font-semibold lg:text-[32px] lg:leading-[155%] lg:font-medium" dir="ltr">{stat.number}</strong>
                        <span className="lg:text-xl leading-normal font-normal">{stat.label}</span>
                    </li>
                ))}
            </ul>

            <div className="h-8 bg-primary-500 ml-0 mr-auto w-[85%] rounded-br-md rounded-tr-[50px]"></div>
        </section>
    );
};

export default HomeStatistics;
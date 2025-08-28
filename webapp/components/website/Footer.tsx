"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "نوبیتو",
      links: [
        {
          title: "مقالات ما",
          url: "/weblog",
        },
        {
          title: "سوالات متداول",
          url: "#",
        },
        {
          title: "تماس با ما",
          url: "/contact-us",
        },
        {
          title: "درباره ما",
          url: "/about-us",
        },
      ],
    },
    {
      title: "خدمات",
      links: [
        {
          title: "نوبت‌دهی آنلاین",
          url: "#",
        },
        {
          title: "فروشگاه کالای پزشکی",
          url: "/shop",
        },
        {
          title: "استعلام دارو",
          url: "/shop/drug-inquiry",
        },
        {
          title: "خدمات پزشکی در منزل",
          url: "/medical-services-at-home",
        },
      ],
    },
    {
      title: "نیکوکاری",
      links: [
        {
          title: "درمانگر داوطلب",
          url: "#",
        },
        {
          title: "بیشتر بدانید",
          url: "#",
        },
        {
          title: "کمک مالی",
          url: "#",
        },
      ],
    },
    {
      title: "پشتیبانی",
      links: [
        {
          title: "درباره ما",
          url: "/about-us",
        },
        {
          title: "واحد انفورماتیک",
          url: "#",
        },
        {
          title: "حریم شخصی",
          url: "#",
        },
        {
          title: "تماس با ما",
          url: "/contact-us",
        },
      ],
    },
  ];

  type FormValues = {
    email: string;
  };

  // validation whit react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("ایمیل معتبره:", data.email);
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const socialIconLink = [
    {
      title:"تلگرام",
      image:"/images/png-icons/telegram.png",
      link:"#"
    },
    {
      title:"اینستاگرام",
      image:"/images/png-icons/instagram.png",
      link:"#"
    },
    {
      title:"لینکدین",
      image:"/images/png-icons/Linkdin.png",
      link:"#"
    },
    {
      title: "یوتوب",
      image: "/images/png-icons/youtube.png",
      link: "#"
    }
  ]

  return (
    <footer className="bg-white-100">
      <div className="container py-[48px]">
        <div className="flex flex-col items-center xl:flex-row gap-6">
          <Image
            src="/images/footer-logo.png"
            alt="Logo"
            width={112}
            height={178}
            className="w-[112px] h-[178px]"
          />
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] leading-[155%] font-semibold text-black-400 text-center xl:text-start">
              تلاش ما دسترسی آسان تر به خدمات پزشکی است
            </h3>
            <p className="text-4 leading-[155%] text-grey-500 text-center xl:text-start">
              با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به
              عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین،
              خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه
              می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری،
              همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه
              دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و
              درمان را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در
              روزهای ناخوش احوالی همراه و همیار شما باشد.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between gap-10 lg:gap-[70px] mt-12">
          <div className="grid w-full xl:grid-cols-4 xl:gap-16">
            {footerLinks.map((link, index) => (
              <div key={link.title} className="pt-4">
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === index ? null : index
                      )
                    }
                    className="flex items-center justify-between w-full"
                  >
                    <h3 className="text-base font-medium xl:text-[22px] leading-[155%] xl:font-semibold text-black-400">
                      {link.title}
                    </h3>
                    <span
                      className={`flex xl:hidden isax isax-arrow-down-1 text-2xl transition-all ${
                        openDropdownIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    ></span>
                  </button>
                </div>
                {/* footer links item in mobile view (dropdown) */}
                <ul
                  className={`flex xl:hidden flex-col transition-all duration-400 gap-4 ${
                    openDropdownIndex === index
                      ? "max-h-[500px] opacity-100 pt-4"
                      : "max-h-0 hidden"
                  }`}
                >
                  {link.links.map((item) => (
                    <li
                      key={item.title}
                      className="text-sm leading-[155%] text-grey-500"
                    >
                      <Link href={item.url} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* horizontal line between footer links in mobile view */}
                <div className="xl:hidden h-px mt-4 bg-grey-200"></div>
                <ul className="hidden xl:flex flex-col gap-4 text-base leading-[155%] text-grey-500 pt-8">
                  {link.links.map((item) => (
                    <li key={item.title}>
                      <Link href={item.url} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Footer Form */}
          <div className="flex flex-col xl:pt-[70px]">
            <div>
              <div className="flex flex-col gap-2 pb-4">
                <h4 className="text-4">خبرنامه</h4>
                <p className="text-xs text-grey-500">
                  برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col xl:flex-row gap-4"
              >
                <input
                  type="email"
                  className={`rounded-xl border h-[48px] xl:w-[336px] text-xs px-3 ${
                    errors.email
                      ? "border-red-500 placeholder-red-500"
                      : "border-grey-400"
                  }`}
                  placeholder={`${
                    errors.email
                      ? errors.email.message
                      : "ایمیل خود را اینجا وارد کنید"
                  }`}
                  {...register("email", {
                    required: "فرمت ایمیل شما نامعتبر است",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "فرمت ایمیل شما نامعتبر است",
                    },
                  })}
                />
                {/* text in mobile view */}
                <p className="py-1 xl:py-2 xl:hidden text-xs text-grey-500">
                  تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.
                </p>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex w-[100px] cursor-pointer bg-primary-500 text-white-500 gap-2 py-3 px-4 rounded-lg"
                  >
                    <span>ارسال</span>
                    <span className="isax isax-arrow-left-3 text-2xl"></span>
                  </button>
                </div>
              </form>
            </div>
            <p className="pt-2 hidden xl:block text-xs text-grey-500">
              تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.
            </p>
          </div>
        </div>

        <div className="xl:flex-row-reverse xl:justify-between flex-col-reverse flex pt-[52px] pb-[40px] xl:py-[48px] gap-[46px] xl:gap-0">
          {/* Enamad  and ... footer image */}
          <div>
            <div className="flex justify-center xl:justify-start gap-6">
              <Image
                className="xl:size-20 size-16"
                alt="نماد های اعتماد"
                src={"/images/footer-1.png"}
                width={64}
                height={64}
              />
              <Image
                className="xl:size-20 size-16"
                alt="نماد های اعتماد"
                src={"/images/footer-2.png"}
                width={64}
                height={64}
              />
              <Image
                className="xl:size-20 size-16"
                alt="نماد های اعتماد"
                src={"/images/footer-3.png"}
                width={64}
                height={64}
              />
              <Image
                className="xl:size-20 size-16"
                alt="نماد های اعتماد"
                src={"/images/footer-4.png"}
                width={64}
                height={64}
              />
            </div>
            <p className="text-[14px] xl:text-4 text-grey-500 leading-[155%] xl:w-[422px] pt-6 xl:text-start text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
          </div>
          {/* contact information */}
          <div className="flex-col flex items-center">
            <div className="grid xl:gap-8 gap-6 text-black-400">
              <div className="gap-2 flex items-center">
                <span className="isax isax-call-calling5 text-2xl text-primary-500"></span>
                <p>تماس با پشتیبانی : ۱۲۳۴۵۶۷۸-۰۲۱</p>
              </div>
              <div className="gap-2 flex items-center">
                <span className="isax isax-sms5 text-2xl text-primary-500"></span>
                <p>نشانی پست الکترونیک : smartix@yahoo.com</p>
              </div>
              <div className="gap-2 flex items-center">
                <span className="isax isax-building5 text-2xl text-primary-500"></span>
                <p>نشانی پست الکترونیک : smartix@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-grey-400 hidden xl:block"></div>
        {/* social links */}
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center">
          <div className="text-grey-500 ">
            <div className="pt-6">
              <div className="h-px bg-grey-400 xl:hidden block"></div>
              <p className="pt-6 xl:p-0">
                تمامی حقوق این وبسایت متعلق به شرکت نوبیتو است
              </p>
            </div>
          </div>

          <div className="flex w-[272px] xl:w-auto justify-between xl:justify-center gap-4 pt-6">
            {socialIconLink?.map((item,index)=>(
              <Link href={item.link} className="size-8" key={index}>
                <Image
                  width={32}
                  height={32}
                  alt={item.title}
                  src={item.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

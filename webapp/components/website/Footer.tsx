import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "نوبیتو",
      links: [
        {
          title: "سوالات متداول",
          url: "#",
        },
        {
          title: "تماس با ما",
          url: "#",
        },
        {
          title: "میثاق نام",
          url: "#",
        },
        {
          title: "درباره ما",
          url: "#",
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
          title: "مشاوره حضوری",
          url: "#",
        },
        {
          title: "مشاوره غیرحضوری",
          url: "#",
        },
        {
          title: "خدمات پزشکی در منزل",
          url: "#",
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
          title: "شبکه های اجتمایی",
          url: "#",
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
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white-100">
      <div className="container py-[48px]">
        <div className="flex gap-6">
          <Image
            src="/images/footer-logo.png"
            alt="Logo"
            width={112}
            height={178}
            className="w-[112px] h-[178px]"
          />
          <div className="flex flex-col gap-6 pb-[48px]">
            <h3 className="text-[20px] leading-[155%] font-semibold text-black-400">
              تلاش ما دسترسی آسان تر به خدمات پزشکی است
            </h3>
            <p className="text-[16px] leading-[155%] text-grey-500">
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
          <div className="flex justify-between">
            <div className="grid grid-cols-4 gap-[64px]">
                {footerLinks.map((link) => (
                  <div key={link.title} className="col-span-1">
                    <h3 className="text-[22px] leading-[155%] font-semibold text-black-400">
                      {link.title}
                    </h3>
                    <ul className="pt-[32px] flex flex-col gap-4">
                      {link.links.map((item) => (
                        <li key={item.title} className="text-[14px] leading-[155%] text-grey-500">
                          <Link href={item.url} className="hover:underline">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div></div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

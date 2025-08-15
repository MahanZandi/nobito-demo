import Image from "next/image";

type WeblogCategory =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";
interface WeblogsData {
  id: number;
  title: string;
  description: string;
  spendTime: number;
  view: number;
  image: string;
  slug: string;
  category: WeblogCategory;
  author: string;
}

interface TopWeblogsProps {
  topWeblogs: WeblogsData[];
}

const TopWeblogs = ({ topWeblogs }: TopWeblogsProps) => {
  return (
    <div className="w-[384px] bg-white-100 p-6 rounded-3xl">
      <div className="flex gap-2">
        <span className="w-1.5 h-[37px] rounded-3xl bg-primary-500"></span>
        <span className="text-2xl text-black-400 font-medium">
          پر بازدید ترین ها
        </span>
      </div>
      <div className="w-full h-px bg-grey-200 mt-3 mb-6"></div>
      <div className="bg-primary-500 p-4 rounded-2xl flex flex-col gap-4">
        <h3 className="text-[16px] font-bold text-accent-500 text-center">
          سکته مغزی و فلج شدن سمت چپ بدن، علل و راه های درمان
        </h3>
        <p className="text-xs text-white-500">
          فلج شدن سمت چپ بدن یک عارضه معمول است که افراد زیادی پس از سکته مغزی
          آن را تجربه می‌کنند. این آسیب ممک است بر عملکرد روزانه فرد تاثیر گذارد
          و در دراز مدت
        </p>
      </div>
      <div>
        {topWeblogs.map((weblog) => (
          <div className="mt-6" key={weblog.id}>
            <div className="pb-4 flex gap-[14px]">
              <Image
                className="object-cover size-[82px] rounded-lg"
                src={weblog.image}
                alt={weblog.title}
                width={82}
                height={82}
              />
              <div className="flex flex-col w-full justify-between">
                <h2 className="text-[16px] font-medium text-black-400 line-clamp-2">
                  {weblog.title}
                </h2>
                <div className="flex gap-4 text-grey-500 justify-end w-full">
                  <div className="flex gap-2 items-center"> 
                    <span className="isax isax-clock text-[18px]"></span>
                    <span>{weblog.spendTime}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="isax isax-eye text-[18px]"></span>
                    <span>{weblog.view}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-grey-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWeblogs;

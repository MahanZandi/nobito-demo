"use client";
import Image from "next/image";
import Link from "next/link";

type WeblogCategory =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";

interface WeblogPreviewProps {
  title: string;
  description: string;
  spendTime: number;
  view: number;
  image: string;
  slug: string;
  category: WeblogCategory;
  author: string;
}

const WeblogPreview: React.FC<WeblogPreviewProps> = ({
  title,
  description,
  spendTime,
  view,
  image,
  slug,
}) => {
  const DesktopWeblogPreview = () => {
    return (
      <div className="hidden xl:flex gap-4 bg-white-100 p-6 rounded-2xl">
        <Image
          className="rounded-xl object-cover w-[180px] h-[185px]"
          src={image}
          alt={title}
          width={180}
          height={185}
        />
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-black-400">{title}</h3>
          <p className="text-grey-500 leading-[155%] line-clamp-3">
            {description}
          </p>
          <div className="flex">
            <div className="flex gap-4 text-grey-500 items-center">
              <div className="flex gap-2 items-center">
                <span className="isax isax-clock text-[18px]"></span>
                <span>{spendTime}دقیقه</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="isax isax-eye text-[18px]"></span>
                <span>{view}</span>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Link
                className="flex items-center px-4 rounded-[7px] border border-primary-500 h-10 gap-2 text-primary-500 cursor-pointer"
                href={`weblog/${slug}`}
              >
                <span className="text-[16px]">ادامه مطلب</span>
                <span className="isax isax-arrow-left text-2xl"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MobileWeblogPreview = () => {
    return (
      <div className="xl:hidden">
        <Link href={`weblog/${slug}`} className="bg-white-100 rounded-2xl p-4 w-[288px] flex flex-col gap-4">
          <Image
            className="w-[256px] h-[160px] rounded-xl object-cover"
            alt={title}
            src={image}
            width={256}
            height={160}
          />
          <h2 className="text-[16px] font-medium text-black-400">{title}</h2>
          <p className="text-xs text-grey-500 leading-[144%] line-clamp-6">
            {description}
          </p>
          <div className="flex gap-4 text-grey-500 items-center justify-end">
            <div className="flex gap-2 items-center">
              <span className="isax isax-clock text-[18px]"></span>
              <span>{spendTime}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="isax isax-eye text-[18px]"></span>
              <span>{view}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="xl:hidden">
        <MobileWeblogPreview />
      </div>
      <div className="hidden xl:block">
        <DesktopWeblogPreview />
      </div>
    </>
  );
};

export default WeblogPreview;

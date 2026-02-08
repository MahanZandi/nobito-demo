"use client";
import Image from "next/image";
import useStore from "@/lib/store";

type WeblogCategoryType =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";

interface CategoryData {
  title: string;
  state: WeblogCategoryType;
  image: string;
}

const categoryData: CategoryData[] = [
  {
    title: "پوست و مو",
    state: "skin-and-hair",
    image: "/images/ill_skin_hear_blog 1.png",
  },
  {
    title: "سلامت روانی",
    state: "mental-health",
    image: "/images/ill_psychology_blog.png",
  },
  {
    title: "سلامت جنسی",
    state: "sexual-health",
    image: "/images/ill_sexual_blog.png",
  },
  {
    title: "مادر و کودک",
    state: "mother-and-child",
    image: "/images/mother-and-child.png",
  },
  {
    title: "تغذیه و رژیم",
    state: "nutrition-and-diet",
    image: "/images/ill_nutritious_blog.png",
  },
];

const WeblogCategory = () => {
  const { weblogCategory, setWeblogCategory } = useStore();

  const handleSelectCategory = (category: WeblogCategoryType) => {
    if (weblogCategory !== category) {
      setWeblogCategory(category);
    } else {
      setWeblogCategory("latest");
    }
  };

  return (
    <div className="flex justify-center flex-wrap xl:gap-10 gap-5 container">
      {categoryData.map((data, index) => (
        <div className="flex flex-col gap-4 xl:gap-6 items-center" key={index}>
          <div
            onClick={() => handleSelectCategory(data.state)}
            className={`${
              weblogCategory === data.state
                ? "border-2 xl:border-4 border-primary-500 transition-all duration-[125ms]"
                : "border-2 xl:border-4 border-white-100"
            } bg-white-100 rounded-full p-1.5 xl:p-5 cursor-pointer`}
          >
            <Image
              className="xl:size-[160px] size-[80px]"
              src={data.image}
              alt={data.title}
              width={160}
              height={160}
            />
          </div>
          <span
            onClick={() => handleSelectCategory(data.state)}
            className={`${
              weblogCategory === data.state
                ? "text-primary-500 transition-all duration-[125ms]"
                : "text-black-400"
            } text-[16px] xl:text-2xl font-medium cursor-pointer`}
          >
            {data.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeblogCategory;

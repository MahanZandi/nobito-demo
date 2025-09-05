import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* میتونی لوگو هم بذاری */}
      <div className="flex flex-col gap-4 items-center">
        <Image
          className="object-contain size-[160px] animate-bounce"
          src="/favicon.ico"
          alt="logo"
          width={160}
          height={160}
        />
        <p className="text-black-400 font-medium text-2xl">در حال بارگذاری...</p>
      </div>
    </div>
  );
}

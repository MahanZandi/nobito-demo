import Image from "next/image";

const OnSiteTesting = () => {
  return (
    <div className="xl:container container-none">
      <div className="flex flex-col items-center">
        <div className="xl:w-11/12 sm:w-full mx-4 sm:container xl:container-none sm:mx-0 h-[522px] sm:h-[280px] rounded-3xl relative bg-primary-500">
          <Image
            className="object-cover opacity-30 sm:h-[280px] h-[522px] w-full rounded-3xl"
            src="/banner2.png"
            alt="banner"
            width={1104}
            height={280}
          />
          <div className="text-white-500 absolute inset-0 py-8 px-3 xl:py-[46px] xl:px-10">
            <div className="flex flex-col xl:gap-8 gap-10">
              <h2 className="text-[28px] xl:text-[36px] font-bold flex justify-center">
                آزمایش در محل
              </h2>
              <p className="leading-[155%] xlfont-normal font-medium text-[16px] text-center">
                می توانید بدون نیاز به حمل و نقل، صف‌های آزمایشگاهی، یا
                مزاحمت‌های غیرضروری آزمایش های مورد نیازتان را در محلی که انتخاب
                میکنید در دسترس داشته باشید.نوبیتو در محیطی سیار و استرلیزه در
                محل حضور شما حاضر میشود و آزمایشات مورد نیاز شما را انجام
                میدهد.ما حتی جواب آزمایش را از طریق پیک های مخصوص به شما
                میرسانیم.این نوع آزمایشات می تواند برای افراد کهن سال،ناتوانان
                جسمی حرکتی و افرادی که مشغله کاری زیادی دارند مناسب باشد.شما
                میتوانید زمان و مکان مورد نظرتان را انتخاب کنید و ما در زمان و
                مکان انتخابیتان آنجا هستیم
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-100 border -mt-[261px] sm:-mt-[140px] -z-10 xl:rounded-3xl border-grey-100">
        <div className="grid gap-10 xl:grid-cols-3 sm:mt-[188px] mt-[301px] container xl:container-none xl:px-12 xl:pb-8 pb-10">
          <div className="flex flex-col gap-4 items-center">
            <div className="size-[72px] flex items-center justify-center border border-primary-500 rounded-xl">
              <Image
                src="/images/png-icons/note.png"
                alt="icon"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <h3 className="text-[16px] font-bold text-black-400">
                پوشش دهنده بیمه شما
              </h3>
              <p className="text-grey-400 text-xs leading-[144%]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                بااستفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="size-[72px] flex items-center justify-center border border-primary-500 rounded-xl">
              <Image
                src="/images/png-icons/clock.png"
                alt="icon"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <h3 className="text-[16px] font-bold text-black-400">
                پوشش دهنده بیمه شما
              </h3>
              <p className="text-grey-400 text-xs leading-[144%]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                بااستفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="size-[72px] flex items-center justify-center border border-primary-500 rounded-xl">
              <Image
                src="/images/png-icons/card-pos.png"
                alt="icon"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <h3 className="text-[16px] font-bold text-black-400">
                پوشش دهنده بیمه شما
              </h3>
              <p className="text-grey-400 text-xs leading-[144%]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                بااستفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSiteTesting;

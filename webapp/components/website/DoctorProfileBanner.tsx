const DoctorProfileBanner = () => {
  return (
    <div className="bg-[url('/banner.png')] rounded-2xl p-6 object-cover">
      <p className="text-body text-2xl">ملاحظات قبل از مراجعه</p>
      <ul className="text-white-500 pt-5 flex flex-col gap-5">
        <li className="flex items-center gap-2">
          <div className="bg-white-100 size-2 rounded-full "></div>
          <p>حتما در زمان نوبت دهی حاضر باشید چرا که امکان ارفاق وجود ندارد.</p>
        </li>
        <li className="flex items-center gap-2">
          <div className="bg-white-100 size-2 rounded-full "></div>
          <p>اگر قبلا پرونده پزشکی مرتبط دارید حتما همراه خود داشته باشید.</p>
        </li>
        <li className="flex items-center gap-2">
          <div className="bg-white-100 size-2 rounded-full "></div>
          <p>بعداز مراجعه به پزشک اطلاعات شما در پرونده مجازی شما ثبت شده</p>
        </li>
      </ul>
    </div>
  );
};

export default DoctorProfileBanner;

const DashboardPassword = () => {
  return (
    <div className="w-full">
      <div className="xl:bg-white-100 xl:rounded-[16px] xl:p-6">
        <span className="text-[22px] font-medium text-black-400">رمز عبور</span>
        <div className="h-px bg-grey-200 w-full my-6"></div>
        <span className="text-[16px] text-black-400">
          رمز عبور شما حداقل باید 8 حرف باشد.
        </span>
        <div className="mt-6 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="text-grey-400">رمز عبور جدید</span>
            <span className="text-error-500">*</span>
          </div>
          <input className="w-[360px] h-12 bg-grey-50 rounded-lg" type="text" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPassword;

const HomeSearchBox = () => {
  return (
    <div className="px-4 lg:px-0">
      <label
        form="search"
        className="lg:w-[798px] h-20 bg-white-50 rounded-2xl relative -mt-10 p-5
                flex items-center gap-2 mx-auto"
      >
        <span className="isax isax-search-normal text-[32px] leading-8 text-grey-400 flex-1"></span>
        <input
          id="search"
          className="absolute inset-0 outline-none flex-1 p-5 pr-[60px] text-black-400"
          placeholder="جستجو پزشک،درمانگر،کلینیک..."
        />

        <button
          className="p-1.5 lg:w-[141px] lg:h-10 border text-primary-600 border-primary-600
            flex items-center justify-center gap-2 relative cursor-pointer rounded-lg"
        >
          <span className="isax isax-location text-2xl leading-6 text-primary-600"></span>
          <span className="hidden lg:block">انتخاب شهر</span>
        </button>
      </label>
    </div>
  );
};

export default HomeSearchBox;

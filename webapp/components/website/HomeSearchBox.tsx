const HomeSearchBox = () => {
    return <>
        <label
            form='search'
            className='w-[320px] lg:w-[798px] h-20 bg-white-50 rounded-2xl relative -mt-10 p-5
                flex items-center gap-2 mx-auto'
        >
            <span className='isax isax-search-normal text-[32px] leading-8 text-grey-400 flex-1'></span>
            <input
                id='search'
                className='absolute inset-0 outline-none flex-1 p-5 pr-[60px] text-black-400'
                placeholder='جستجو پزشک،درمانگر،کلینیک...'
            />

            <button className='w-[141px] h-10 border text-primary-600 border-primary-600
            flex items-center justify-center gap-2 relative cursor-pointer rounded-lg'>
                <span className='isax isax-location text-2xl leading-6 text-primary-600'></span>
                انتخاب شهر
            </button>
        </label>
    </>
}

export default HomeSearchBox;
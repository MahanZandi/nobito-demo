"use client";
import PageSearchBox from "@/components/website/PageSearchBox";

const Shop = () => {
  return (
    <div className="container xl:mt-10 mt-6">
      <PageSearchBox
        trigerWidth="mx-auto"
        lableStyle="xl:h-[88px] bg-white-100 relative py-[14.5px] px-[15.5px] xl:p-6 flex items-center gap-2 mx-auto border border-grey-200"
        mobileInput={true}
        container="px-4 xl:px-0"
        placeholder="جستجو دارو،کالای پزشکی و ..."
        type="for-shop"
      />
    </div>
  );
};

export default Shop;

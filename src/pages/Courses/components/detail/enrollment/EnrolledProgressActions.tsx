import CHECK_ICON from "../../../../../assets/icons/profile/Icon Set=Check.svg?react";

const EnrolledProgressActions = () => {
  return (
    <div className="flex w-[473px] flex-col gap-[40px]">
      <div className="flex w-[473px] flex-col gap-[12px]">
        <p className="h-[30.42px] w-[473px] font-['Inter'] text-[20px] font-[600] leading-[24px] tracking-[0] text-[#666666]">
          65% Complete
        </p>
        <div className="h-[23.45px] w-[473px] overflow-hidden rounded-[30px] bg-[#DDDBFA]">
          <div className="h-[23.45px] w-[303.21px] rounded-[30px] bg-[#4F46E5]" />
        </div>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-white"
      >
        <span className="inline-flex h-[24px] w-[167px] items-center justify-center text-center text-[20px] font-[500] leading-[100%] tracking-[0]">
          Complete Course
        </span>
        <CHECK_ICON
          aria-hidden="true"
          focusable="false"
          className="h-[24px] w-[24px] [&_path]:!fill-white [&_path]:!stroke-white"
        />
      </button>
    </div>
  );
};

export default EnrolledProgressActions;

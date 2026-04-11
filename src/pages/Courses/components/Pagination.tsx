import ARROW from "../../../assets/icons/courses/Icon Set=ArrowRight.svg";

const Pagination = () => {
  return (
    <div className="w-full h-[40px] flex justify-center">
      <div className="mt-[32px] w-[328px] h-full flex flex-row">
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <img
            src={ARROW}
            alt="left arrow icon"
            className="w-[15px] h-[23px] rotate-180"
          />
        </div>
        <div className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-[#281ED2] border border-[#D1D1D1]">
          <p className=" text-white">1</p>
        </div>
        <div className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <p className="text-[#4F46E5]">2</p>
        </div>
        <div className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <p className="text-[#4F46E5]">3</p>
        </div>
        <div className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <p className="text-[#4F46E5]">...</p>
        </div>
        <div className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <p className="text-[#4F46E5]">10</p>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
          <img
            src={ARROW}
            alt="left arrow icon"
            className="w-[15px] h-[23px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;

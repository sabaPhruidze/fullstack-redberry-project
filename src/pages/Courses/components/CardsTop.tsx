import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg";
const CardsTop = () => {
  return (
    <div className="w-full h-[49px] flex flex-row justify-between items-center">
      <div className="w-[933px] h-[24px]">
        <p className="w-[159px] h-full text-[#666666] font-[500] leading-[24px]">
          Showing 9 o ut of 90
        </p>
      </div>
      <div className="w-[234px] h-[49px] flex flex-row items-center bg-white rounded-[10px] px-[20px]">
        <p className="text-[#666666] leading-[24px] font-[500]">
          Sort By: <span className="text-[#4F46E5]"> Newest First</span>
        </p>
        <img
          src={ARROW_DOWN}
          alt="arrow down icon"
          className="w-[20px] h-[20px] ml-[8px] translate-y-[1px] "
        />
      </div>
    </div>
  );
};

export default CardsTop;

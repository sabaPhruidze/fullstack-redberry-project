// Shows catalog result count from real backend response metadata.
// Keeps the existing top row styling and sort placeholder block unchanged.
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg";

type CardsTopProps = {
  total: number;
  visibleCount: number;
  isLoading: boolean;
};

const CardsTop = ({ total, visibleCount, isLoading }: CardsTopProps) => {
  const resultsText = isLoading
    ? "Loading courses..."
    : total > 0
      ? `Showing ${visibleCount} of ${total} courses`
      : "No courses found";

  return (
    <div className="w-full h-[49px] flex flex-row justify-between items-center">
      <div className="w-[933px] h-[24px]">
        <p className="h-full text-[#666666] font-[500] leading-[24px]">{resultsText}</p>
      </div>
      <div className="w-[234px] h-[49px] flex flex-row items-center bg-white rounded-[10px] px-[20px]">
        <p className="text-[#666666] leading-[24px] font-[500]">
          Sort By: <span className="text-[#4F46E5]"> Newest First</span>
        </p>
        <img
          src={ARROW_DOWN}
          alt="arrow down icon"
          className="w-[20px] h-[20px] ml-[8px] translate-y-[1px]"
        />
      </div>
    </div>
  );
};

export default CardsTop;

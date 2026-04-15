import { useState } from "react";
import CLOSE_ICON from "../../../../../../assets/icons/authentification/ic_round-close.svg";
import StarRatingInput from "../shared/StarRatingInput";

type CompletedRatingSectionProps = {
  onClose: () => void;
  isRated?: boolean;
  onRate?: (rating: number) => Promise<boolean> | boolean;
  isSubmitting?: boolean;
};

const CompletedRatingSection = ({
  onClose,
  isRated = false,
  onRate,
  isSubmitting = false,
}: CompletedRatingSectionProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleSelect = async (rating: number) => {
    if (selectedRating != null || isSubmitting || isRated) {
      return;
    }

    const submitResult = onRate?.(rating);
    const isPromise =
      submitResult != null &&
      typeof (submitResult as Promise<unknown>).then === "function";
    const didSubmit = isPromise ? await submitResult : submitResult;

    if (didSubmit === false) {
      return;
    }

    setSelectedRating(rating);
  };

  return (
    <div className="relative flex w-[473px] flex-col items-center gap-[18px] rounded-[8px] bg-white px-[50px] pb-[40px] pt-[40px]">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-[10px] top-[10px] flex h-[22px] w-[22px] items-center justify-center cursor-pointer"
        aria-label="Close rating"
      >
        <img src={CLOSE_ICON} alt="" className="h-[22px] w-[22px]" />
      </button>
      <p className="h-[24px] w-[373px] text-center text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
        Rate your experience
      </p>
      {isRated ? (
        <p className="h-[50px] w-[373px] text-center text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
          You&apos;ve already rated this course
        </p>
      ) : (
        <StarRatingInput
          value={selectedRating}
          size={50}
          disabled={isSubmitting}
          onSelect={handleSelect}
          containerClassName="flex h-[50px] w-[373px] items-center justify-center gap-[18px]"
        />
      )}
    </div>
  );
};

export default CompletedRatingSection;

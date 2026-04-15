import CELEBRATION_ICON from "../../../../../../assets/icons/modal/congratulations.svg";
import CourseFeedbackModalShell from "./CourseFeedbackModalShell";
import StarRatingInput from "../shared/StarRatingInput";

type CourseCompletedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  ratingValue: number | null;
  onRatingChange: (rating: number) => void;
  onSubmitRating?: (rating: number) => Promise<boolean> | boolean;
  isSubmittingRating?: boolean;
  isRated?: boolean;
};

const CourseCompletedModal = ({
  isOpen,
  onClose,
  courseTitle,
  ratingValue,
  onRatingChange,
  onSubmitRating,
  isSubmittingRating = false,
  isRated = false,
}: CourseCompletedModalProps) => {
  // Completed modal keeps Figma layout while reusing the existing course rating flow.
  const handleSelect = async (rating: number) => {
    if (isSubmittingRating || isRated || ratingValue != null) {
      return;
    }

    const submitResult = onSubmitRating?.(rating);
    const isPromise =
      submitResult != null &&
      typeof (submitResult as Promise<unknown>).then === "function";
    const didSubmit = isPromise ? await submitResult : submitResult;

    if (didSubmit === false) {
      return;
    }

    onRatingChange(rating);
  };

  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={575}
    >
      <div className="h-[455px] w-[356px] flex flex-col justify-between">
        <div className="w-[356px] flex flex-col items-center text-center gap-[40px]">
          <div className="w-[356px] flex flex-col items-center gap-[24px]">
            <img
              src={CELEBRATION_ICON}
              alt="celebration icon"
              className="h-[94px] w-[94px]"
            />
            <div className="w-[356px] flex flex-col gap-[24px]">
              <h2 className="h-[39px] w-[356px] text-center text-[32px] font-[600] leading-[100%] text-[#3D3D3D]">
                Congratulations!
              </h2>
              <p className="w-[356px] text-center text-[20px] font-[500] leading-[100%] text-[#3D3D3D]">
                You&apos;ve completed{" "}
                <span className="text-[20px] font-[600] leading-[24px] text-[#3D3D3D]">
                  &ldquo;{courseTitle}&rdquo;
                </span>{" "}
                Course!
              </p>
            </div>
          </div>
          <div className="w-[302px] flex flex-col items-center gap-[18px]">
            <p className="h-[24px] w-[302px] text-center text-[16px] font-[500] leading-[24px] text-[#736BEA]">
              Rate your experience
            </p>
            {isRated ? (
              <p className="w-[302px] text-center text-[16px] font-[500] leading-[24px] text-[#3D3D3D]">
                You&apos;ve already rated this course
              </p>
            ) : (
              <StarRatingInput
                value={ratingValue}
                size={46}
                disabled={isSubmittingRating}
                onSelect={handleSelect}
                containerClassName="flex w-[302px] items-center justify-center gap-[18px]"
              />
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-[58px] w-[356px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-[16px] font-[500] leading-[24px] text-white cursor-pointer"
        >
          Done
        </button>
      </div>
    </CourseFeedbackModalShell>
  );
};

export default CourseCompletedModal;

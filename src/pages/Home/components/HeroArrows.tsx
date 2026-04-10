type HeroArrowsProps = {
  leftIcon: string;
  rightIcon: string;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

const HeroArrows = ({
  leftIcon,
  rightIcon,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}: HeroArrowsProps) => {
  return (
    <div className="flex h-[54px] w-[132px] items-center gap-[24px]">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous slide"
        className="h-[54px] w-[54px] disabled:cursor-not-allowed"
      >
        <img src={leftIcon} alt="Previous slide arrow" className="h-[54px] w-[54px]" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
        className="h-[54px] w-[54px] disabled:cursor-not-allowed"
      >
        <img src={rightIcon} alt="Next slide arrow" className="h-[54px] w-[54px]" />
      </button>
    </div>
  );
};

export default HeroArrows;

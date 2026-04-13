type HeroIndicatorsProps = {
  slideCount: number;
  activeIndex: number;
  activeColor: string;
  inactiveColor: string;
  onSelect: (index: number) => void;
};

const HeroIndicators = ({
  slideCount,
  activeIndex,
  activeColor,
  inactiveColor,
  onSelect,
}: HeroIndicatorsProps) => {
  return (
    <div className="flex items-center justify-center gap-[12px]">
      {Array.from({ length: slideCount }, (_, index) => {
        const isActive = index === activeIndex;
        const indicatorColor = isActive ? activeColor : inactiveColor;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive}
            className="h-[8px] w-[57px] rounded-full"
            style={{ backgroundColor: indicatorColor }}
          />
        );
      })}
    </div>
  );
};

export default HeroIndicators;

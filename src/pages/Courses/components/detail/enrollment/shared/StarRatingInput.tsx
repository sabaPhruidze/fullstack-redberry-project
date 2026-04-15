import { useState } from "react";
import STAR_ICON from "../../../../../../assets/icons/home/Star.svg";
import HALF_STAR_ICON from "../../../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR_ICON from "../../../../../../assets/icons/home/Star (2).svg";

type StarRatingInputProps = {
  value: number | null;
  size: number;
  disabled?: boolean;
  containerClassName?: string;
  onSelect: (rating: number) => void;
};

const StarRatingInput = ({
  value,
  size,
  disabled = false,
  containerClassName = "",
  onSelect,
}: StarRatingInputProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const activeRating = hoveredRating ?? value ?? 0;

  return (
    <div className={containerClassName}>
      {Array.from({ length: 5 }, (_, index) => {
        const starPosition = index + 1;
        const starIcon =
          activeRating >= starPosition
            ? STAR_ICON
            : activeRating >= starPosition - 0.5
              ? HALF_STAR_ICON
              : EMPTY_STAR_ICON;

        return (
          <button
            key={starPosition}
            type="button"
            onClick={() => onSelect(starPosition)}
            onMouseEnter={() => setHoveredRating(starPosition)}
            onMouseLeave={() => setHoveredRating(null)}
            disabled={disabled}
            className="flex items-center justify-center disabled:cursor-not-allowed cursor-pointer"
            style={{ width: size, height: size }}
            aria-label={`Rate ${starPosition} star${starPosition > 1 ? "s" : ""}`}
          >
            <img
              src={starIcon}
              alt="rating star"
              style={{ width: size, height: size }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;

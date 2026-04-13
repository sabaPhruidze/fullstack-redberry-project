import MOON from "../../../assets/icons/courses/Icon Set=Moon.svg?react";
import CLOUD_SUN from "../../../assets/icons/courses/Icon Set=CloudSun.svg?react";
import SUN from "../../../assets/icons/courses/Icon Set=Sun.svg?react";

interface TimeSlotIconProps {
  period: "morning" | "afternoon" | "evening";
  isSelected: boolean;
  isUnavailable: boolean;
}

const TimeSlotIcon = ({ period, isSelected, isUnavailable }: TimeSlotIconProps) => {
  const iconClassName = `w-[26px] h-[26px] [&_path]:fill-current [&_path]:stroke-current ${
    isUnavailable
      ? "text-[#D1D1D1]"
      : isSelected
        ? "text-[#4F46E5]"
        : "text-[#525252]"
  }`;

  if (period === "morning") {
    return <CLOUD_SUN aria-hidden className={iconClassName} />;
  }
  if (period === "afternoon") {
    return <SUN aria-hidden className={iconClassName} />;
  }

  return <MOON aria-hidden className={iconClassName} />;
};

export default TimeSlotIcon;

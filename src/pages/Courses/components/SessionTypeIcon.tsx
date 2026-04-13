import DESKTOP from "../../../assets/icons/courses/Icon Set=Desktop.svg?react";
import USERS from "../../../assets/icons/courses/Icon Set=Users.svg?react";
import HYBRID from "../../../assets/icons/courses/Icon Set=Intersect.svg?react";

interface SessionTypeIconProps {
  kind: "online" | "hybrid" | "in-person";
  isSelected: boolean;
  isUnavailable: boolean;
}

const SessionTypeIcon = ({ kind, isSelected, isUnavailable }: SessionTypeIconProps) => {
  const iconClassName = `w-[26px] h-[26px] [&_path]:fill-current ${
    isUnavailable
      ? "text-[#D1D1D1] [&_path[stroke]]:stroke-[#D1D1D1]"
      : isSelected
        ? "text-[#4F46E5] [&_path[stroke]]:stroke-[#4F46E5]"
        : "text-[#525252] [&_path[stroke]]:stroke-[#666666]"
  }`;

  if (kind === "online") {
    return <DESKTOP aria-hidden className={iconClassName} />;
  }
  if (kind === "hybrid") {
    return <HYBRID aria-hidden className={iconClassName} />;
  }

  return <USERS aria-hidden className={iconClassName} />;
};

export default SessionTypeIcon;

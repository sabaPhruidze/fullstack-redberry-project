import WARNING from "../../../assets/icons/courses/warning.svg";

interface SessionTypeAvailabilityProps {
  isUnavailable: boolean;
  hasLimitedSeats: boolean;
  statusText: string;
}

const SessionTypeAvailability = ({
  isUnavailable,
  hasLimitedSeats,
  statusText,
}: SessionTypeAvailabilityProps) => {
  if (hasLimitedSeats) {
    return (
      <div className="flex flex-row h-[15px] items-center justify-center gap-[4px]">
        <img src={WARNING} alt="warning icon" className="w-[16px] h-[16px]" />
        <p className="text-[#F4A316]">{statusText}</p>
      </div>
    );
  }

  return <p className={isUnavailable ? "text-[#D1D1D1]" : "text-[#3D3D3D]"}>{statusText}</p>;
};

export default SessionTypeAvailability;

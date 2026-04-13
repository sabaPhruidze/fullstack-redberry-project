import CALENDAR_ICON from "../../../../../assets/icons/courses/boxicons_calendar.svg";
import CLOCK_ICON from "../../../../../assets/icons/courses/tabler_clock-hour-3.svg";
import DESKTOP_ICON from "../../../../../assets/icons/courses/Icon Set=Desktop.svg";
import LOCATION_ICON from "../../../../../assets/icons/courses/location.svg";

type EnrolledInfoRowProps = {
  icon: string;
  label: string;
  alt: string;
};

const EnrolledInfoRow = ({ icon, label, alt }: EnrolledInfoRowProps) => {
  return (
    <div className="flex w-fit items-center gap-[12px]">
      <img src={icon} alt={alt} className="h-[24px] w-[24px]" />
      <p className="whitespace-nowrap font-['Inter'] text-[20px] font-[500] leading-[100%] tracking-[0] text-[#525252]">
        {label}
      </p>
    </div>
  );
};

const EnrolledInfoRows = () => {
  return (
    <div className="flex w-[473px] flex-col gap-[22px]">
      <EnrolledInfoRow icon={CALENDAR_ICON} alt="calendar icon" label="Monday-Wednesday" />
      <EnrolledInfoRow icon={CLOCK_ICON} alt="clock icon" label="Evening 6:00 PM - 8:00 PM" />
      <EnrolledInfoRow icon={DESKTOP_ICON} alt="online session icon" label="Online" />
      <EnrolledInfoRow icon={LOCATION_ICON} alt="location icon" label="Tbilisi, Chavchavadze St.30" />
    </div>
  );
};

export default EnrolledInfoRows;

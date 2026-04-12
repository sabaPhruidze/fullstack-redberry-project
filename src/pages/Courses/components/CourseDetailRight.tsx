import WeeklySchedule from "./WeeklySchedule";
import TotalPrice from "./TotalPrice";
import TimeSlot from "./TimeSlot";
import SessionType from "./SessionType";

const CourseDetailRight = () => {
  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule />
      <TimeSlot />
      <SessionType />
      <TotalPrice />
    </div>
  );
};

export default CourseDetailRight;

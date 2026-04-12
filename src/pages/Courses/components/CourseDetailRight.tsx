import WeeklySchedule from "./WeeklySchedule";
import CLOUD_SUN from "../../../assets/icons/courses/Icon Set=CloudSun.svg";
import DESKTOP from "../../../assets/icons/courses/Icon Set=Desktop.svg";
import MOON from "../../../assets/icons/courses/Icon Set=Moon.svg";

import SUN from "../../../assets/icons/courses/Icon Set=Sun.svg";
import THREE from "../../../assets/icons/courses/Icon Set=Three.svg";
import TWO from "../../../assets/icons/courses/Icon Set=Two.svg";
import TimeSlot from "./TimeSlot";

const CourseDetailRight = () => {
  return (
    <div className="w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule />
      <TimeSlot />
      <div id="session-type"></div>
      <div id="total-price"></div>
    </div>
  );
};

export default CourseDetailRight;

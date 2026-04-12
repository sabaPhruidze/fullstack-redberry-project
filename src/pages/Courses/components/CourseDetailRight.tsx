import WeeklySchedule from "./WeeklySchedule";
const CourseDetailRight = () => {
  return (
    <div>
      <div id="weekly-schedule">
        <WeeklySchedule />
      </div>
      <div id="time-slot"></div>
      <div id="session-type"></div>
      <div id="total-price"></div>
    </div>
  );
};

export default CourseDetailRight;

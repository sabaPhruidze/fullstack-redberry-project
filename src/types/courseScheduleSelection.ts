import type {
  SessionTypeOption,
  TimeSlotOption,
  WeeklyScheduleOption,
} from "./courseDetail";

export type UseCourseScheduleSelectionParams = {
  courseId: number;
  courseBasePrice: number;
  weeklySchedules: WeeklyScheduleOption[];
};

export type CourseScheduleSelectionState = {
  selectedWeeklyScheduleId: number | null;
  selectedTimeSlotId: number | null;
  selectedSessionTypeId: number | null;
};

export type CourseScheduleSelectionAction =
  | { type: "SELECT_WEEKLY"; weeklyScheduleId: number }
  | { type: "SELECT_TIME_SLOT"; timeSlotId: number }
  | { type: "SELECT_SESSION_TYPE"; sessionTypeId: number }
  | { type: "RESET_SELECTION" };

export type UseCourseScheduleSelectionResult = CourseScheduleSelectionState & {
  selectedWeeklySchedule?: WeeklyScheduleOption;
  selectedTimeSlot?: TimeSlotOption;
  selectedSessionType?: SessionTypeOption;
  timeSlots: TimeSlotOption[];
  sessionTypes: SessionTypeOption[];
  isTimeSlotsLoading: boolean;
  isSessionTypesLoading: boolean;
  sessionTypeModifier: number;
  totalPrice: number;
  handleWeeklyScheduleChange: (weeklyScheduleId: number) => void;
  handleTimeSlotChange: (timeSlotId: number) => void;
  handleSessionTypeChange: (sessionTypeId: number) => void;
  resetSelection: () => void;
};

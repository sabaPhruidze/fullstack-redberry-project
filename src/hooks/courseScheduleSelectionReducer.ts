import type {
  CourseScheduleSelectionAction,
  CourseScheduleSelectionState,
} from "../types/courseScheduleSelection";

export const initialCourseScheduleSelectionState: CourseScheduleSelectionState = {
  selectedWeeklyScheduleId: null,
  selectedTimeSlotId: null,
  selectedSessionTypeId: null,
};

export const courseScheduleSelectionReducer = (
  state: CourseScheduleSelectionState,
  action: CourseScheduleSelectionAction,
): CourseScheduleSelectionState => {
  if (action.type === "SELECT_WEEKLY") {
    if (action.weeklyScheduleId === state.selectedWeeklyScheduleId) return state;
    return {
      selectedWeeklyScheduleId: action.weeklyScheduleId,
      selectedTimeSlotId: null,
      selectedSessionTypeId: null,
    };
  }
  if (action.type === "SELECT_TIME_SLOT") {
    if (action.timeSlotId === state.selectedTimeSlotId) return state;
    return {
      ...state,
      selectedTimeSlotId: action.timeSlotId,
      selectedSessionTypeId: null,
    };
  }
  if (action.type === "SELECT_SESSION_TYPE") {
    return action.sessionTypeId === state.selectedSessionTypeId
      ? state
      : { ...state, selectedSessionTypeId: action.sessionTypeId };
  }
  if (!state.selectedWeeklyScheduleId && !state.selectedTimeSlotId && !state.selectedSessionTypeId) {
    return state;
  }
  return initialCourseScheduleSelectionState;
};

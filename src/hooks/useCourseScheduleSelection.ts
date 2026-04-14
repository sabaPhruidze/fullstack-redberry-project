import { useMemo, useReducer } from "react";
import useCourseSessionTypes from "../api/hooks/course-detail/useCourseSessionTypes";
import useCourseTimeSlots from "../api/hooks/course-detail/useCourseTimeSlots";
import {
  courseScheduleSelectionReducer,
  initialCourseScheduleSelectionState,
} from "./courseScheduleSelectionReducer";
import type {
  UseCourseScheduleSelectionParams,
  UseCourseScheduleSelectionResult,
} from "../types/courseScheduleSelection";

const toSafeNumber = (value: unknown) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};

const useCourseScheduleSelection = ({
  courseId,
  courseBasePrice,
  weeklySchedules,
}: UseCourseScheduleSelectionParams): UseCourseScheduleSelectionResult => {
  const [selection, dispatchSelection] = useReducer(
    courseScheduleSelectionReducer,
    initialCourseScheduleSelectionState,
  );
  const { selectedWeeklyScheduleId, selectedTimeSlotId, selectedSessionTypeId } =
    selection;
  const { data: timeSlotsResponse, isLoading: isTimeSlotsLoading } =
    useCourseTimeSlots(courseId, selectedWeeklyScheduleId ?? undefined);
  const timeSlots = useMemo(() => timeSlotsResponse?.data ?? [], [timeSlotsResponse]);
  const { data: sessionTypesResponse, isLoading: isSessionTypesLoading } =
    useCourseSessionTypes(courseId, selectedWeeklyScheduleId ?? undefined, selectedTimeSlotId ?? undefined);
  const sessionTypes = useMemo(() => sessionTypesResponse?.data ?? [], [sessionTypesResponse]);
  const selectedWeeklySchedule = useMemo(
    () => weeklySchedules.find((item) => item.id === selectedWeeklyScheduleId),
    [weeklySchedules, selectedWeeklyScheduleId],
  );
  const selectedTimeSlot = useMemo(
    () => timeSlots.find((item) => item.id === selectedTimeSlotId),
    [timeSlots, selectedTimeSlotId],
  );
  const selectedSessionType = useMemo(
    () => sessionTypes.find((item) => item.id === selectedSessionTypeId),
    [sessionTypes, selectedSessionTypeId],
  );
  const sessionTypeModifier = toSafeNumber(selectedSessionType?.priceModifier ?? 0);
  const totalPrice = toSafeNumber(courseBasePrice) + sessionTypeModifier;

  return {
    ...selection,
    selectedWeeklySchedule,
    selectedTimeSlot,
    selectedSessionType,
    timeSlots,
    sessionTypes,
    isTimeSlotsLoading,
    isSessionTypesLoading,
    sessionTypeModifier,
    totalPrice,
    handleWeeklyScheduleChange: (weeklyScheduleId) =>
      dispatchSelection({ type: "SELECT_WEEKLY", weeklyScheduleId }),
    handleTimeSlotChange: (timeSlotId) =>
      dispatchSelection({ type: "SELECT_TIME_SLOT", timeSlotId }),
    handleSessionTypeChange: (sessionTypeId) =>
      dispatchSelection({ type: "SELECT_SESSION_TYPE", sessionTypeId }),
    resetSelection: () => dispatchSelection({ type: "RESET_SELECTION" }),
  };
};

export default useCourseScheduleSelection;

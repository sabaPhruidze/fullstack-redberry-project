import { api } from "../http";
import type {
  CourseDetailResponse,
  SessionTypeOption,
  TimeSlotOption,
  WeeklyScheduleOption,
} from "../../types/courseDetail";

type WeeklySchedulesResponse = { data: WeeklyScheduleOption[] };
type TimeSlotsResponse = { data: TimeSlotOption[] };
type SessionTypesResponse = { data: SessionTypeOption[] };

export const getCourseDetail = async (id: number) => {
  const response = await api.get<CourseDetailResponse>(`/courses/${id}`);
  return response.data;
};

export const getCourseWeeklySchedules = async (id: number) => {
  const response = await api.get<WeeklySchedulesResponse>(
    `/courses/${id}/weekly-schedules`,
  );
  return response.data;
};

export const getCourseTimeSlots = async (
  id: number,
  weeklyScheduleId: number,
) => {
  const response = await api.get<TimeSlotsResponse>(`/courses/${id}/time-slots`, {
    params: { weekly_schedule_id: weeklyScheduleId },
  });
  return response.data;
};

export const getCourseSessionTypes = async (
  id: number,
  weeklyScheduleId: number,
  timeSlotId: number,
) => {
  const response = await api.get<SessionTypesResponse>(
    `/courses/${id}/session-types`,
    {
      params: {
        weekly_schedule_id: weeklyScheduleId,
        time_slot_id: timeSlotId,
      },
    },
  );
  return response.data;
};

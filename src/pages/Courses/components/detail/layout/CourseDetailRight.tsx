import { useMemo } from "react";
import useCreateEnrollment from "../../../../../api/hooks/useCreateEnrollment";
import useCompleteEnrollment from "../../../../../api/hooks/useCompleteEnrollment";
import useEnrollments from "../../../../../api/hooks/useEnrollments";
import useCourseDetailAccordion from "../../../../../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../../../../../hooks/useCourseScheduleSelection";
import useCourseWeeklySchedules from "../../../../../api/hooks/useCourseWeeklySchedules";
import { useAuthModal } from "../../../../../features/auth/hooks/useAuthModal";
import { getAuthUser, getIsProfileCompleteFromUser } from "../../../../../features/profile/helpers/authUser";
import type { CourseEnrollment } from "../../../../../types/courseDetail";
import EnrollmentAccessNotice from "../enrollment/EnrollmentAccessNotice";
import { getDisplaySessionTypes } from "../../schedule/utils/sessionTypeOptionUtils";
import SessionType from "../../schedule/sections/SessionType";
import TimeSlot from "../../schedule/sections/TimeSlot";
import { getDisplayTimeSlots } from "../../schedule/utils/timeSlotOptionUtils";
import TotalPrice from "../enrollment/TotalPrice";
import WeeklySchedule from "../../schedule/sections/WeeklySchedule";
import { getDisplayWeeklySchedules } from "../../schedule/utils/weeklyScheduleOptionUtils";

interface CourseDetailRightProps {
  courseId: number;
  courseBasePrice: number;
  courseEnrollment?: CourseEnrollment;
}

const CourseDetailRight = ({ courseId, courseBasePrice, courseEnrollment }: CourseDetailRightProps) => {
  const authUser = getAuthUser();
  const isAuthenticated = typeof window !== "undefined" && Boolean(localStorage.getItem("access_token"));
  const isProfileComplete = getIsProfileCompleteFromUser(authUser);
  const hasCompleteAccess = isAuthenticated && isProfileComplete;
  const createEnrollmentMutation = useCreateEnrollment();
  const completeEnrollmentMutation = useCompleteEnrollment();
  const { data: enrollmentsData } = useEnrollments(isAuthenticated);
  const { data: weeklySchedulesResponse } = useCourseWeeklySchedules(courseId);
  const weeklySchedules = useMemo(() => weeklySchedulesResponse?.data ?? [], [weeklySchedulesResponse]);
  const displayWeeklySchedules = useMemo(
    () => getDisplayWeeklySchedules(weeklySchedules),
    [weeklySchedules],
  );

  const selection = useCourseScheduleSelection({ courseId, courseBasePrice, weeklySchedules });
  const displayTimeSlots = useMemo(() => getDisplayTimeSlots(selection.timeSlots), [selection.timeSlots]);
  const displaySessionTypes = useMemo(
    () => getDisplaySessionTypes(selection.sessionTypes),
    [selection.sessionTypes],
  );
  const accordion = useCourseDetailAccordion();
  const { openLoginModal, openProfileModal } = useAuthModal();

  const matchedEnrollment = useMemo(
    () => courseEnrollment ?? enrollmentsData?.find((item) => item.course.id === courseId),
    [courseEnrollment, enrollmentsData, courseId],
  );
  const enrollmentId = matchedEnrollment?.id;
  const isCourseCompleted =
    Number(matchedEnrollment?.progress ?? 0) >= 100 ||
    Boolean(matchedEnrollment?.completedAt);
  const selectedCourseScheduleId = selection.selectedSessionType?.courseScheduleId;
  const isEnrollActionActive =
    !enrollmentId &&
    hasCompleteAccess &&
    selection.selectedWeeklyScheduleId != null &&
    selection.selectedTimeSlotId != null &&
    selection.selectedSessionTypeId != null &&
    selectedCourseScheduleId != null;
  const isCompleteActionActive = Boolean(enrollmentId) && hasCompleteAccess && !isCourseCompleted;
  const isActionActive = enrollmentId ? isCompleteActionActive : isEnrollActionActive;
  const isActionPending = createEnrollmentMutation.isPending || completeEnrollmentMutation.isPending;
  const actionText = enrollmentId ? (isCourseCompleted ? "Completed" : "Complete Course") : "Enroll Now";
  const noticeVariant = !isAuthenticated ? "auth" : !isProfileComplete ? "profile" : null;

  const handleEnroll = () => {
    if (enrollmentId != null) {
      if (!isCompleteActionActive) {
        return;
      }
      completeEnrollmentMutation.mutate(enrollmentId);
      return;
    }

    if (!isEnrollActionActive || selectedCourseScheduleId == null) {
      return;
    }

    createEnrollmentMutation.mutate({
      courseId,
      courseScheduleId: selectedCourseScheduleId,
      force: false,
    });
  };

  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule options={displayWeeklySchedules} selectedId={selection.selectedWeeklyScheduleId} onSelect={selection.handleWeeklyScheduleChange} isOpen={accordion.isWeeklyScheduleOpen} onToggle={accordion.toggleWeeklySchedule} />
      <TimeSlot options={displayTimeSlots} selectedId={selection.selectedTimeSlotId} onSelect={selection.handleTimeSlotChange} isOpen={accordion.isTimeSlotOpen} onToggle={accordion.toggleTimeSlot} />
      <SessionType options={displaySessionTypes} selectedId={selection.selectedSessionTypeId} onSelect={selection.handleSessionTypeChange} isOpen={accordion.isSessionTypeOpen} onToggle={accordion.toggleSessionType} />
      <TotalPrice
        basePrice={courseBasePrice}
        sessionTypeModifier={selection.sessionTypeModifier}
        totalPrice={selection.totalPrice}
        isEnrollButtonActive={isActionActive}
        isEnrollPending={isActionPending}
        onEnroll={handleEnroll}
        actionText={actionText}
      />
      {noticeVariant ? (
        <EnrollmentAccessNotice variant={noticeVariant} onAction={noticeVariant === "auth" ? openLoginModal : openProfileModal} />
      ) : null}
    </div>
  );
};

export default CourseDetailRight;



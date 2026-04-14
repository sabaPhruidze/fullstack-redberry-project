// Enrolled courses modal keeps shell/timing unchanged and switches by real enrollments state.
import EnrolledCoursesEmptyState from "./EnrolledCoursesEmptyState";
import EnrolledCoursesFilledPlaceholder from "./EnrolledCoursesFilledPlaceholder";
import EnrolledCoursesPanelHeader from "./EnrolledCoursesPanelHeader";
import EnrolledCoursesSidebarShell from "./EnrolledCoursesSidebarShell";
import useEnrollments from "../../../api/hooks/useEnrollments";

type EnrolledCoursesModalProps = {
  onClose?: () => void;
};

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const EnrolledCoursesModal = ({ onClose }: EnrolledCoursesModalProps) => {
  const isAuthenticated = getIsAuthenticated();
  const { data: enrollmentsData } = useEnrollments(isAuthenticated);
  const totalEnrollments = enrollmentsData?.length ?? 0;
  const hasEnrollments = totalEnrollments > 0;

  const handleBrowseCourses = () => {
    onClose?.();

    if (typeof window !== "undefined") {
      window.location.assign("/courses/catalog");
    }
  };

  return (
    <EnrolledCoursesSidebarShell onClose={onClose}>
      <div className="h-full w-full px-[74px] pb-[60px] pt-[60px]">
        <div className="flex w-[646px] flex-col gap-[45px]">
          <EnrolledCoursesPanelHeader totalEnrollments={totalEnrollments} />
          <div className="flex h-[876px] w-[646px] flex-col gap-[32px]">
            {hasEnrollments ? (
              <EnrolledCoursesFilledPlaceholder />
            ) : (
              <EnrolledCoursesEmptyState onBrowseCourses={handleBrowseCourses} />
            )}
          </div>
        </div>
      </div>
    </EnrolledCoursesSidebarShell>
  );
};

export default EnrolledCoursesModal;

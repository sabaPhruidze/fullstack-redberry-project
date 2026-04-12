import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import useFeaturedCourses from "../../api/hooks/useFeaturedCourses";
import useInProgressCourses from "../../api/hooks/useInProgressCourses";
import BreadcrumbIndividual from "./components/BreadcrumbIndividual";
import MOCK_IMAGE from "../../assets/images/home/mock_course_in_progress.png";

import HALF_STAR from "../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../assets/icons/home/Star (2).svg";
import STAR from "../../assets/icons/home/Star.svg";
const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const CourseDetailPage = () => {
  const params = useParams<{ id: string }>();
  const courseId = Number(params.id);
  const isAuthenticated = getIsAuthenticated();
  const { data, isLoading, isError, error } = useFeaturedCourses();
  const { data: inProgressCourses } = useInProgressCourses(isAuthenticated);
  const selectedCourse = data?.find((course) => course.id === courseId);
  const inProgressCourse = inProgressCourses?.find(
    (item) => item.course.id === courseId,
  )?.course;
  const course = selectedCourse ?? inProgressCourse;

  const getRatingIcon = (avgRating: number) => {
    if (!avgRating) {
      return EMPTY_STAR;
    }
    if (avgRating <= 4) {
      return HALF_STAR;
    }
    return STAR;
  };
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] py-[64px]">
        {isLoading ? (
          <p className="text-[18px] text-[#666666]">
            Loading course details...
          </p>
        ) : null}
        {isError ? (
          <p className="text-[18px] text-[#F4161A]">
            {error instanceof Error
              ? error.message
              : "Failed to load course details."}
          </p>
        ) : null}
        {!isLoading && !isError && (!Number.isInteger(courseId) || !course) ? (
          <div className="max-w-[780px] rounded-[12px] border border-[#E7E7E7] bg-white p-[24px]">
            <h1 className="text-[30px] font-semibold text-[#141414]">
              Course not found
            </h1>
            <p className="mt-[10px] text-[16px] text-[#666666]">
              This course detail is currently unavailable.
            </p>
            <Link
              to="/courses/catalog"
              className="mt-[16px] inline-block text-[16px] text-[#4F46E5] underline"
            >
              Back to catalog
            </Link>
          </div>
        ) : null}
        {!isLoading && !isError && course ? (
          <div>
            <div id="left" className="w-[903px]">
              <div className="w-full">
                <BreadcrumbIndividual />
                <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%]">
                  Advanced React & TypeScript Development
                </h1>
              </div>
              <div className="w-full mt-[24px]">
                <img
                  src={MOCK_IMAGE}
                  alt="Mock image"
                  className="w-full fill"
                />
                <div className="mt-[18px] mb-[12px] flex flex-row justify-between w-full">
                  <p className="leading-[100%] font-[500] text-[14px] text-[#ADADAD]">
                    {course.instructor?.name ?? ""} |{" "}
                    {course.durationWeeks ?? ""} Weeks
                  </p>
                  <div className="flex flex-row items-center gap-[4px]">
                    <img
                      src={getRatingIcon(course.avgRating)}
                      alt="star icon"
                      className="w-[18px] h-[18px]"
                    />
                    <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                      {course.avgRating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="right"></div>
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
};

export default CourseDetailPage;

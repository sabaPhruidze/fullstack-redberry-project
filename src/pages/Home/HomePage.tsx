import MainLayout from "../../layouts/MainLayout";
import ContinueLearning from "./components/ContinueLearning";
import HeroSection from "./components/HeroSection";
import StartLearning from "./components/StartLearning";
import useInProgressCourses from "../../api/hooks/useInProgressCourses";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const HomePage = () => {
  const isAuthenticated = getIsAuthenticated();
  const { data: inProgressCourses, isSuccess } =
    useInProgressCourses(isAuthenticated);

  const inProgressCoursesCount = inProgressCourses?.length ?? 0;
  const shouldShowContinueLearning =
    !isAuthenticated || (isSuccess && inProgressCoursesCount > 0);
  const shouldHideContinueLearning = !shouldShowContinueLearning;

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        <div className={shouldHideContinueLearning ? "mb-[192px]" : ""}>
          <StartLearning />
        </div>
        {shouldShowContinueLearning && <ContinueLearning />}
      </div>
    </MainLayout>
  );
};

export default HomePage;

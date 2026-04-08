import type { MockInProgressCoursesResponse } from "../../../types/courses";
import MOCK_COURSE_IN_PROGRESS from "../../../assets/images/home/mock_course_in_progress.png";
import ContinueLearningCard from "./ContinueLearningCard";
const ContinueLearning = () => {
  const DATA: MockInProgressCoursesResponse = {
    data: [
      {
        id: 0,
        progress: 65,
        course: {
          id: 0,
          title: "Advanced React & TypeScript Development ",
          image: MOCK_COURSE_IN_PROGRESS,
          avgRating: 4.9,
          instructor: {
            name: "Lecturer Marilyn Mango",
          },
        },
      },
      {
        id: 1,
        progress: 65,
        course: {
          id: 0,
          title: "Advanced React & TypeScript Development ",
          image: MOCK_COURSE_IN_PROGRESS,
          avgRating: 4.9,
          instructor: {
            name: "Lecturer Marilyn Mango",
          },
        },
      },
      {
        id: 2,
        progress: 65,
        course: {
          id: 0,
          title: "Advanced React & TypeScript Development ",
          image: MOCK_COURSE_IN_PROGRESS,
          avgRating: 4.9,
          instructor: {
            name: "Lecturer Marilyn Mango",
          },
        },
      },
    ],
  };
  return (
    <section>
      <div className="w-[1566px] h-[369px] mb-[120px]">
        <h2 className="font-[600] text-[40px] h-[48px] leading-[100%] text-redberry-text-black">
          Continue Learning
        </h2>
        <p className="text-redberry-text-gray-medium h-[22px] mt-[6px] font-[500] text-[18px] leading-[100%] mb-[32px]">
          Pick up where you left
        </p>
        <div className="mt-[32px] flex flex-row flex-wrap gap-[24px] w-full h-[219px]">
          {DATA.data.map((course) => (
            <ContinueLearningCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinueLearning;

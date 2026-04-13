import type { CourseDetail } from "../../../types/courseDetail";
import BreadcrumbIndividual from "../components/BreadcrumbIndividual";
import CourseDetailMetaRow from "./CourseDetailMetaRow";
import CourseInstructorChip from "./CourseInstructorChip";
import CourseDescription from "./CourseDescription";

interface CourseDetailLeftProps {
  course: CourseDetail;
}

const CourseDetailLeft = ({ course }: CourseDetailLeftProps) => {
  return (
    <div id="left" className="w-[903px]">
      <div className="w-full">
        <BreadcrumbIndividual />
        <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%] h-[48px]">
          {course.title}
        </h1>
      </div>
      <div className="w-full mt-[24px]">
        <img src={course.image} alt={course.title} className="w-full fill" />
        <CourseDetailMetaRow
          durationWeeks={course.durationWeeks}
          categoryName={course.category.name}
          categoryIcon={course.category.icon}
          topicName={course.topic.name}
        />
        <div>
          <CourseInstructorChip
            instructorName={course.instructor.name}
            instructorAvatar={course.instructor.avatar}
          />
          <CourseDescription description={course.description} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailLeft;

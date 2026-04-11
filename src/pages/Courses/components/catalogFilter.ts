import type { CourseCardItem } from "../../../types/courses";

export type CatalogFilterState = {
  selectedCategoryIds: number[];
  selectedTopicIds: number[];
  selectedInstructorIds: number[];
};

const matchesSelectedIds = (selectedIds: number[], value?: number) => {
  if (!selectedIds.length) return true;
  if (value === undefined) return false;
  return selectedIds.includes(value);
};

export const filterCatalogCourses = (
  courses: CourseCardItem[],
  filters: CatalogFilterState,
) =>
  courses.filter((course) => {
    const categoryMatch = matchesSelectedIds(
      filters.selectedCategoryIds,
      course.category?.id,
    );
    const topicMatch = matchesSelectedIds(filters.selectedTopicIds, course.topic?.id);
    const instructorMatch = matchesSelectedIds(
      filters.selectedInstructorIds,
      course.instructor?.id,
    );

    return categoryMatch && topicMatch && instructorMatch;
  });

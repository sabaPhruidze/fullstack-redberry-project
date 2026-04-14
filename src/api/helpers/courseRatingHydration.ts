import { getCourseDetail } from "../endpoints/courseDetail";

type RatedCourse = {
  id: number;
  avgRating: unknown;
};

type ItemWithRatedCourse = {
  course: RatedCourse;
};

const toNumericRating = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const computeAverageReviewRating = (reviews: Array<{ rating: number | string }>) => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  const average = total / reviews.length;
  return Number.isFinite(average) ? Number(average.toFixed(1)) : 0;
};

const fetchCourseRatingById = async (courseId: number) => {
  try {
    const response = await getCourseDetail(courseId);
    return computeAverageReviewRating(response.data.reviews ?? []);
  } catch {
    return 0;
  }
};

export const hydrateCourseRatings = async <T extends ItemWithRatedCourse>(items: T[]) => {
  if (!items.length) return items;
  const missingCourseIds = Array.from(
    new Set(
      items
        .filter((item) => toNumericRating(item.course.avgRating) == null)
        .map((item) => item.course.id)
        .filter((id) => Number.isInteger(id) && id > 0),
    ),
  );
  const ratingsByCourseId = new Map<number, number>();

  if (missingCourseIds.length) {
    const pairs = await Promise.all(
      missingCourseIds.map(async (courseId) => [courseId, await fetchCourseRatingById(courseId)] as const),
    );
    pairs.forEach(([courseId, rating]) => ratingsByCourseId.set(courseId, rating));
  }

  return items.map((item) => {
    const existingRating = toNumericRating(item.course.avgRating);
    const avgRating = existingRating ?? ratingsByCourseId.get(item.course.id) ?? 0;
    return { ...item, course: { ...item.course, avgRating } };
  }) as T[];
};

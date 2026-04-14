import { api } from "../http";
import { getCourseDetail } from "./courseDetail";
import type {
  CategoriesResponse,
  CoursesResponse,
  FeaturedCoursesResponse,
  InstructorsResponse,
  InProgressCourseItem,
  InProgressCoursesResponse,
  TopicsResponse,
} from "../../types/courses";

const getNumericRating = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const computeAverageReviewRating = (
  reviews: Array<{ rating: number | string }>,
) => {
  if (!reviews.length) {
    return 0;
  }

  const total = reviews.reduce(
    (sum, review) => sum + Number(review.rating || 0),
    0,
  );
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

const hydrateInProgressCourseRatings = async (items: InProgressCourseItem[]) => {
  if (!items.length) {
    return items;
  }

  const missingCourseIds = Array.from(
    new Set(
      items
        .filter((item) => getNumericRating(item.course.avgRating) == null)
        .map((item) => item.course.id)
        .filter((id) => Number.isInteger(id) && id > 0),
    ),
  );

  const ratingsByCourseId = new Map<number, number>();

  if (missingCourseIds.length) {
    const pairs = await Promise.all(
      missingCourseIds.map(async (courseId) => {
        const rating = await fetchCourseRatingById(courseId);
        return [courseId, rating] as const;
      }),
    );

    pairs.forEach(([courseId, rating]) => {
      ratingsByCourseId.set(courseId, rating);
    });
  }

  return items.map((item) => {
    const existingRating = getNumericRating(item.course.avgRating);
    const avgRating =
      existingRating ?? ratingsByCourseId.get(item.course.id) ?? 0;

    return {
      ...item,
      course: {
        ...item.course,
        avgRating,
      },
    };
  });
};
//backend data fetch on courses
export const getCourses = async (page = 1) => {
  const response = await api.get<CoursesResponse>("/courses", {
    params: { page },
  });
  return response.data;
};

export const getFeaturedCourses = async () => {
  const response = await api.get<FeaturedCoursesResponse>("/courses/featured");
  return response.data.data;
};

export const getInProgressCourses = async () => {
  const response =
    await api.get<InProgressCoursesResponse>("/courses/in-progress");
  return hydrateInProgressCourseRatings(response.data.data);
};

export const getCategories = async () => {
  const response = await api.get<CategoriesResponse>("/categories");
  return response.data.data;
};

export const getTopics = async (categoryIds?: number[]) => {
  const response = await api.get<TopicsResponse>("/topics", {
    params: categoryIds?.length ? { categoryIds } : undefined,
  });
  return response.data.data;
};

export const getInstructors = async () => {
  const response = await api.get<InstructorsResponse>("/instructors");
  return response.data.data;
};

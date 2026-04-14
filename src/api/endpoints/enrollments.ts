import { api } from "../http";
import { getCourseDetail } from "./courseDetail";
import type {
  CompleteEnrollmentResponse,
  CreateEnrollmentRequest,
  CreateEnrollmentResponse,
  EnrollmentItem,
  EnrollmentsResponse,
} from "../../types/enrollments";

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

const hydrateEnrollmentRatings = async (items: EnrollmentItem[]) => {
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

export const getEnrollments = async () => {
  const response = await api.get<EnrollmentsResponse>("/enrollments");
  return hydrateEnrollmentRatings(response.data.data);
};

export const createEnrollment = async (payload: CreateEnrollmentRequest) => {
  const response = await api.post<CreateEnrollmentResponse>(
    "/enrollments",
    payload,
  );
  const [hydratedEnrollment] = await hydrateEnrollmentRatings([
    response.data.data,
  ]);

  return {
    ...response.data,
    data: hydratedEnrollment ?? response.data.data,
  };
};

export const completeEnrollment = async (enrollmentId: number) => {
  const response = await api.patch<CompleteEnrollmentResponse>(
    `/enrollments/${enrollmentId}/complete`,
  );
  return response.data;
};

export const deleteEnrollment = async (enrollmentId: number) => {
  await api.delete(`/enrollments/${enrollmentId}`);
};

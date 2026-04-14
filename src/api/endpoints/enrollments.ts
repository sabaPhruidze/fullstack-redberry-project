import { api } from "../http";
import { hydrateCourseRatings } from "../helpers/courseRatingHydration";
import type {
  CompleteEnrollmentResponse,
  CreateEnrollmentRequest,
  CreateEnrollmentResponse,
  EnrollmentItem,
  EnrollmentsResponse,
} from "../../types/enrollments";

export const getEnrollments = async () => {
  const response = await api.get<EnrollmentsResponse>("/enrollments");
  return hydrateCourseRatings<EnrollmentItem>(response.data.data);
};

export const createEnrollment = async (payload: CreateEnrollmentRequest) => {
  const response = await api.post<CreateEnrollmentResponse>(
    "/enrollments",
    payload,
  );
  const [hydratedEnrollment] = await hydrateCourseRatings<EnrollmentItem>([
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
